async function errorHandler(err, req, res, next) {
    console.log("======================================")
    console.log(err,"ini error")
    switch (err.name){
        case 'SequelizeValidationError':
            res.status(400).json({ message: err.errors[0].message });
            break;
        case 'SequelizeUniqueConstraintError':
            err.errors=[{
                message:"Username/Email unusable!"
            }]
            res.status(400).json({ message: err.errors[0].message });
            break;
        case 'nodata':
            res.status(404).json({ message: err.message });
            break;
        case 'unauthorized':
            res.status(401).json({ message: err.message });
            break;
        case 'forbidden':
            res.status(403).json({ message: err.message });
            break;
        default:
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            break;
    }
}
module.exports = errorHandler;