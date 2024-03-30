
var isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
}

const myLogger = function (req, res, next) {
    console.log("new request ->")
    console.log(`[${req.method}] ${req.url}`)


    if (!isEmpty(req.body)) {
        console.log("body:")
        console.table(req.body)
    }

    if (!isEmpty(req.query)) {
        console.log("query:")
        console.table(req.query)
    }

    if (!isEmpty(req.params)) {
        console.log("params:")
        console.table(req.params)
    }

    console.log()
    next()
}

module.exports = {
    myLogger
}