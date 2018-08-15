const _combineRoutes = (...routesToCombine) => routesToCombine.reduce((routes, route) => routes.concat(route), [])

export { _combineRoutes }
