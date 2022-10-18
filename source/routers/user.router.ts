import express from 'express';
import bcrypt from 'bcrypt';
import UserController from '../controller/user.controller';
import { authenticateToken } from '../middleware/token.middleware';

const router = express.Router();

router.post('/login', async (req, res) => {
    const controller = new UserController();
    const response = await controller.login(req.body);
    return res.send(response);
});

router.post('/register', async (req, res) => {
    const controller = new UserController();
    try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const response = await controller.createUser(req.body);
        return res.status(200).json(response);
    } catch (error : any) {
        return res.status(400).json({ success: error.message });
    }
});

router.get('/:id', authenticateToken, async (req, res) => {
    const controller = new UserController();
    try {
        const response = await controller.getUser(req.params.id);
        if (!response) res.status(404).send({ message: 'No user found' });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ success: false });
    }
});

export default router;