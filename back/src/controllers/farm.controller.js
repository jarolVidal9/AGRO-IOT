const prisma = require('../prisma/client');

const createFarm = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { name, location, size, owner, sectors } = req.body;

        const farm = await prisma.farm.create({
            data: {
                name,
                location,
                size,
                owner,
                userId,
                sectors: {
                    create: sectors.map(sector => ({
                        name: sector.name,
                        size: sector.size
                    }))
                }
            }
        });
        res.status(201).json({ message: 'Farm created successfully', farm });
    } catch (error) {
        next(error);
    }
};
const getFarms = async (req, res, next) => {
    try {
        const farms = await prisma.farm.findMany({
            include: {
                sectors: true
            }
        });
        res.status(200).json(farms);
    } catch (error) {
        next(error);
    }
}
const getFarmById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const farm = await prisma.farm.findUnique({ where: { id: id } ,
            include: {
                sectors: true
            }
        });
        if (!farm) {
            return res.status(404).json({ message: 'Farm not found' });
        }
        res.status(200).json(farm);
    } catch (error) {
        next(error);
    }
}
const updateFarm = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, location, size } = req.body;
        const farm = await prisma.farm.update({
            where: { id: id },
            data: { name, location, size }
        });
        res.status(200).json({ message: 'Farm updated successfully', farm });
    } catch (error) {
        next(error);
    }
}


const deleteFarm = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.farm.delete({ where: { id } });
        res.status(200).json({ message: 'Farm deleted successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createFarm,
    getFarms,
    getFarmById,
    updateFarm,
    deleteFarm
}