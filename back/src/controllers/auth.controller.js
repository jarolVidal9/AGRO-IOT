const prisma = require('../prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET , JWT_EXPIRATION} = require('../config/dotenv');

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({data :{ name, email, password: hashedPassword }});
        res.status(201).json({ message: 'Usuario registrado correctametne', user });
    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Usuario o contraseña invalidos' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Usuario o contraseña invalidos' });
        }        
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
}