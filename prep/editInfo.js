/***
* Edit data originally fetched from github.com/ICJIA/icjia-public-website/
* by changing and adding fields to each file
* and write the result in JSON.
*/

// load libraries
const fs = require('fs');
const jsdom = require("jsdom");
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

// call main
main();


// define functions
function main() {
    const appInfo = require('../src/assets/appInfo.json');
    const articleInfo = require('../src/assets/articleInfo.json');
    const authorInfo = require('../src/assets/authorInfo.json');
    const datasetInfo = require('../src/assets/datasetInfo.json');

    const authorInfoFiltered = filterAuthorInfo(articleInfo, authorInfo);

    const dirpath = './src/assets/';

    writeInfoEdited(appInfo, dirpath, data = 'app');
    writeInfoEdited(articleInfo, dirpath, data = 'article');
    writeInfoEdited(authorInfoFiltered, dirpath, data = 'author');
    writeInfoEdited(datasetInfo, dirpath, data = 'dataset');
}

/**
 * Filter authors to keep names appear in articles only
 * @param {*} articleInfo 
 * @param {*} authorInfo 
 */
function filterAuthorInfo(articleInfo, authorInfo) {
    const authors = [];
    articleInfo
        .forEach(el => {
            authors.push(...el.authors);
        })

    const authorsArr = [...new Set(authors)];

    return authorInfo
        .filter(el => {
            return authorsArr.includes(el.title);
        })
}

/**
 * Update info of a specfieid content type and write the result to disk
 * @param {*} info Info to write
 * @param {*} dirpath Directory path for the file to write
 * @param {*} type Content type
 */
async function writeInfoEdited(info, dirpath, type) {
    let editedInfo;
    const name = type + 'InfoEdited';

    if (type === 'app') editedInfo = editAppInfo(info);
    else if (type === 'article') editedInfo = await editArticleInfo(info);
    else if (type === 'author') editedInfo = editAuthorInfo(info);
    else if (type === 'dataset') editedInfo = editDatasetInfo(info);

    writeJSON(editedInfo, name, dirpath);
}

/**
 * Write an object to JSON file
 * @param {*} obj Object to write
 * @param {*} name Name for the file to write
 * @param {*} dirpath Directory path for the file to write
 */
function writeJSON(obj, name, dirpath) {
    try {
        const path = dirpath + name + '.json'

        fs.writeFile(path, JSON.stringify(obj), (error) => {
            if (error) throw error;
            console.log('Complete json: ' + name);
        });
    } catch (e) {
        console.log(e);
    }
}

function editAppInfo(info) {
    const dates = [
        "2018-12-01",
        "2018-03-06",
        "2018-06-11",
        "2018-09-16",
        "2018-12-21",
    ];
    const authors = [
        [{ name: "Dennis Ritchie", url: "" }],
        [{ name: "Tim Berners-Lee", url: "" }],
        [{ name: "Linus Torvalds", url: "" }],
        [{ name: "Brendan Eich", url: "" }],
        [{ name: "Ryan Dahl", url: "" }],
    ];
    const categories = [
        ["corrections"],
        ["victims"],
        ["courts"],
        ["crimes"],
        ["law enforcement"],
    ];
    const tags = [
        ["program"],
        ["victimization"],
        ["juvenile"],
        ["dashboard", "violent crime"],
        ["drugs", "police"],
    ];

    return info
        .map((el, i) => {
            el.publish = false;
            el.date = dates[i];
            el.imageUrl = el.imgUrl;
            el.authors = authors[i];
            el.categories = categories[i];
            el.tags = tags[i];
            el.summary = el.subtitle;
            el.description = el.desc;

            delete el.subtitle;
            delete el.desc;
            delete el.imgUrl;
            delete el.showDesc;

            return el;
        })
}

async function editArticleInfo(info) {
    const temp = info
        .map(el => {
            el.publish = false;
            el.slug = titleToSlug(el.title);
            el.splashUrl = el.splash;
            el.type = el.pubtype;
            el.categories = el.area;
            el.tags = el.keywords
            el.summary = el.teaser;
            el.authorNames = el.authors;

            // add pdf url if exists
            if (el.hasOwnProperty('pdf_uploads')) {
                el.pdf_uploads.forEach(upload => {
                    if (upload.hasOwnProperty('reportType') && upload.reportType === 'Presentation') {
                        el.pdfPresentationUrl = upload.pdf;
                    } else {
                        el.pdfReportUrl = upload.pdf;
                    }
                })
                delete el.pdf_uploads;
            }

            
            delete el.splash;
            delete el.pubtype;
            delete el.area;
            delete el.keywords
            delete el.teaser;
            delete el.showTeaser;
            delete el.authors;

            return el;
        });
        
    return await addMarkdown(temp);
}

function editAuthorInfo(info) {
    return info
        .map(el => {
            el.slug = titleToSlug(el.title);
            
            return el;
        })
}

function editDatasetInfo(info) {
    const units = "state, county, inidividual, etc.";
    const variables = [
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
    ];
    const descriptions = "Dataset description here";

    return info
        .map(el => {
            const categories = [];
            categories.push(el.initialCategory);

            el.publish = false;
            el.slug = titleToSlug(el.title)
            el.sources = [
                {
                    name: el.agencyName,
                    url: el.agencyLink
                }
            ];
            el.categories = categories;
            el.tags = []
            el.unit = units;
            el.timePeriod = el.timePeriodDesc;
            el.ageGroup = el.juvenileAdult;
            el.variables = variables;
            el.description = descriptions;

            delete el.agencyName;
            delete el.agencyLink;
            delete el.initialCategory;
            delete el.timePeriodDesc;
            delete el.juvenileAdult;

            return el;
        })
}

function titleToSlug(str) {
    return str
        .replace(/[^\w\s]/gi, '')
        .replace(/\s/gi, '-')
        .toLowerCase();
}

async function addMarkdown(arr) {
    const { JSDOM } = jsdom;
    const turndownService = new TurndownService({
        headingStyle: 'atx',
        emDelimiter: '*'
    });

    turndownService.remove(['meta', 'style', 'script']);
    turndownService.use(turndownPluginGfm.tables)

    const promises = arr.map(el => {
        return JSDOM
            .fromURL(`http://www.icjia.state.il.us/articles/${el.filename}`)
    })

    const results = await Promise.all(promises)
    
    results.forEach((dom, i) => {
        try {
            const html = dom.window.document.querySelector('.article-content').outerHTML;
            const md = turndownService.turndown(html);
            arr[i].markdown = editMarkdown(md);
        }
        catch (err) {
            console.log('Failed: ', arr[i].title);
            console.log(err.message);
        }
    });

    return arr
}

function editMarkdown(md) {
    md = fixFootnote(md);
    md = removeKeywords(md);
    md = addFigures(md);

    return md.trim();
}

function fixFootnote(md) {
    const regex1 = /\[\\\[(\d+)\\\]\]\(#fn(\d+)\)/g;
    const regex2 = /(\d+)\.\s\s([A-Z])/g;
    const regex3 = /\[↩︎\]\(#fnref\d+\)/g;
    
    const replacer1 = (match, p1) => {
        return `[^${p1}]`;
    }
    const replacer2 = (match, p1, p2) => {
        return `[^${p1}]: ${p2}`
    }

    return md
        .replace(regex1, replacer1)
        .replace(regex2, replacer2)
        .replace(regex3, '');
}

function removeKeywords(md) {
    return md.replace(/##### Keywords:.*/g, '');
}

function addFigures(md) {
    const regex = /#### FIGURE|figure|Figure (\d+)\s+#### .+/g;
    const replacer = (match, p1) => {
        return `${match}\n![Figure ${p1}](figure_${p1})`;
    }
    
    return md.replace(regex, replacer);
}