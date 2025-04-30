const {validationResult} = require('express-validator');

// Este middleware se encarga de validar los campos de los formularios y devuelve un error si alguno no es válido
const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
}

module.exports = validateFields;