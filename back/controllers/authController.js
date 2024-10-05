import { loginService, registerService } from '../services/authService.js';

export const login = async (req, res) => {
    const { status, data } = await loginService(req.body.username, req.body.password);
    res.status(status).send(data);
}

export const register = async (req, res) => {
    const { status, data } = await registerService(req.body.username, req.body.password);
    res.status(status).send(data);
};