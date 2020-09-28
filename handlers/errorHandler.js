function errorHandler(error, req, res, next) {
    return res.status(500).json({
        err: {
            msg: error.message || "Something went wrong in the server."
        }
    });
}

module.exports = errorHandler