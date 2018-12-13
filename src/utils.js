// Return select properties of an object only
export function pick(obj, keys) {
    return keys
        .map(k => k in obj ? {[k]: obj[k]} : {})
        .reduce((res, o) => Object.assign(res, o), {});
}

// Unwrap an object's properties into an array of objects
export function unwrapObj(obj) {
    const keys = Object.keys(obj);
    const vals = Object.values(obj);
    let arr = [];
    for (let i = 0; i < keys.length; i++) {
        arr.push({
            title: keys[i],
            options: vals[i]
        });
    }
    return arr;
}

// Create a single object from an array of objects
export function reduceObjArr(props, arr) {
    let obj = {};
    for (let prop of props) {
        obj[prop] = [
            ... new Set(_toUpperCaseAll(_flatten(arr.map(el => el[prop]))))
        ].sort();
    }
    return obj;
}

// Generate a route object for 'router.js'
export function makeRoute(name, dirpath = './views', children = null) {  
    const path = _getPath(name, false);
    const compPath = _getCompPath(name, dirpath);
    
    let route = {
        path,
        component: () => import(`${compPath}`)
    }

    if (children != null) {
        route.children = children;
    }
    
    return route;
}

// export function makeRouteChild(name, dirpath = './views') {
//     const path = _getPath(name, true);
//     const compPath = _getCompPath(name, dirpath);
    
//     return {
//         path,
//         component: () => import(`${compPath}`)
//     };
// }

const _flatten = function(arr, result = []) {
    return result.concat.apply([], arr);
};

const _toUpperCaseAll = function(arr) {
    return arr.map(el => el.toUpperCase());
}

const _getPath = (name, child) => {
    if (name == 'home') {
        return '/';
    } else {
        return child ? name : `/${name}`;
    }
}

const _getCompPath = (name, dirpath) => {
    return `${dirpath}/${name.charAt(0).toUpperCase() + name.slice(1)}.vue`
}