/***
* Update data originally fetched from github.com/ICJIA/icjia-public-website/
* by changing and adding fields to each file
* and write the result in JSON.
*/

// load libraries
const fs = require('fs');

// call main
main();

// define functions
function main() {
    const appInfo = require('../src/assets/appInfo.json');
    const articleInfo = require('../src/assets/articleInfo.json');
    const datasetInfo = require('../src/assets/datasetInfo.json');
    
    const dirpath = './src/assets/';

    writeInfoUpdated(appInfo, dirpath, data = "app");
    writeInfoUpdated(articleInfo, dirpath, data = "article");
    writeInfoUpdated(datasetInfo, dirpath, data = "dataset");
}

function writeInfoUpdated(info, dirpath, data) {
    let updatedInfo;
    const name = data + 'InfoUpdated';
    
    if (data === "app") updatedInfo = updateAppInfo(info);
    else if (data === "article") updatedInfo = updateArticleInfo(info);
    else if (data === "dataset") updatedInfo = updateDatasetInfo(info);

    writeJSON(updatedInfo, name, dirpath);
}

function writeJSON (obj, name, dirpath) {
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

function updateAppInfo(info) {
    const dates = [
        "2018-12-01",
        "2018-03-06",
        "2018-06-11",
        "2018-09-16",
        "2018-12-21",
    ];
    const authors = [
        [ { name: "Dennis Ritchie", url: "" } ],
        [ { name: "Tim Berners-Lee", url: "" } ],
        [ { name: "Linus Torvalds", url: "" } ],
        [ { name: "Brendan Eich", url: "" } ],
        [ { name: "Ryan Dahl", url: "" } ],
    ];
    const categories = [
        [ "corrections" ],
        [ "victims" ],
        [ "courts" ],
        [ "crimes" ],
        [ "law enforcement" ],
    ];
    const keywords = [
        [ "program" ],
        [ "victimization" ],
        [ "juvenile" ],
        [ "dashboard", "violent crime" ],
        [ "drugs", "police" ],
    ];
    const relatedArticles = [
        { title: "Article Title", url: "" },
    ];
    const relatedDatasets = [
        { title: "Dataset Title", url: "" },
    ];
    
    return info.map((el, i) => {
        el.date = dates[i];
        el.image = {
            url: el.imgUrl,
            alt: ""
        };
        el.authors = authors[i];
        el.categories = categories[i];
        el.keywords = keywords[i];
        el.summary = el.subtitle;
        el.description = el.desc;
        el.relatedArticles = relatedArticles;
        el.relatedDatasets = relatedDatasets;

        delete el.subtitle;
        delete el.desc;
        delete el.imgUrl;
        delete el.showDesc;

        return el;
    })
}

function updateArticleInfo(info) {
    const home_url = 'http://icjia.state.il.us';
    const relatedApps = [
        { title: "App Title Here", url: "" },
    ];
    const relatedDatasets = [
        { title: "Dataset Title Here", url: "" },
    ];


    return info.map((el, i) => {

        el.image = {
            url: home_url + el.splash,
            alt: ""
        };
        el.type = el.pubtype;
        el.categories = el.area;
        el.summary = el.teaser;
        el.url = home_url + '/articles/' + el.filename;
        el.relatedApps = relatedApps;
        el.relatedDatasets = relatedDatasets;

        delete el.splash;
        delete el.pubtype;
        delete el.area;
        delete el.teaser;
        delete el.showTeaser;
        delete el.filename;
        
        return el;
    })
}

function updateDatasetInfo(info) {
    const units = "state, county, inidividual, etc.";
    const variables = [
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
        { nameFull: "", nameAbbr: "", type: "", definition: "", values: "" },
    ];
    const descriptions = "Dataset description here";
    const data = "";
    const relatedApps = [
        { title: "App Title Here", url: "" },
    ];
    const relatedArticles = [
        { title: "Article Title Here", url: "" },
    ];
    
    return info.map((el, i) => {
        let categories = [];
        categories.push(el.initialCategory);
        
        el.sources = [
            {
                name: el.agencyName,
                url: el.agencyLink
            }
        ];
        el.categories = categories;
        el.keywords = el.keywords;
        el.unit = units;
        el.timePeriod = el.timePeriodDesc;
        el.ageGroup = el.juvenileAdult;
        el.variables = variables;
        el.description = descriptions;
        el.data = data;
        el.relatedApps = relatedApps;
        el.relatedArticles = relatedArticles;

        delete el.agencyName;
        delete el.agencyLink;
        delete el.initialCategory;
        delete el.timePeriodDesc;
        delete el.juvenileAdult;

        return el;
    })
}