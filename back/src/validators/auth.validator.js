const {body} = require('express-validator');
const prisma = require('../prisma/client');

const registerValidator = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

    body('email')
        .notEmpty().withMessage('El correo es requerido').bail()
        .isEmail().withMessage('El correo no es válido').bail()
        .custom(async (value) => {
            const user = await prisma.user.findUnique({ where: { email: value } });
            if (user) {
                return Promise.reject('El correo ya está en uso');
            }
        }),

    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
        .isLength({ max: 20 }).withMessage('La contraseña no puede tener más de 20 caracteres')
];

const loginValidator = [
    body('email')
        .notEmpty().withMessage('El correo es requerido')
        .isEmail().withMessage('El correo no es válido'),

    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
        .isLength({ max: 20 }).withMessage('La contraseña no puede tener más de 20 caracteres'),
];

module.exports = { 
    registerValidator,
    loginValidator
}