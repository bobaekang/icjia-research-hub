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