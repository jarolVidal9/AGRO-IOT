const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || 'Error interno del servidor',
        details: err.stack || null
    });
};

module.exports = errorHandler;