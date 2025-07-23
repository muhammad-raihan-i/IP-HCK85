async function errorHandler(err, req, res, next) {
    switch (err.name){
        case 'SequelizeValidationError':
            res.status(400).json({ message: err.errors.map(e => e.message) });
            break;
        case 'SequelizeUniqueConstraintError':
            res.status(400).json({ message: err.errors.map(e => e.message) });
            break;
        case 'NotFoundError':
            res.status(404).json({ message: err.message });
            break;
        case 'UnauthorizedError':
            res.status(401).json({ message: err.message });
            break;
        case 'ForbiddenError':
            res.status(403).json({ message: err.message });
            break;
        default:
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            break;
    }
}
module.exports = errorHandler;