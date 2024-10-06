import { loginService, registerService, validateTokenService } from '../services/authService.js';

export const login = async (req, res) => {
    const { status, data } = await loginService(req.body.username, req.body.password);
    res.status(status).send(data);
}

export const register = async (req, res) => {
    const { status, data } = await registerService(req.body.username, req.body.password);
    res.status(status).send(data);
};

export const validateToken = async (req, res) => {
    const token = req.query.token;

    try {
        const { status, isValid } = await validateTokenService(token);
        res.status(status).send({ isValid });
    } catch (error) {
        res.status(500).json({ message: 'Error en la validación del token' });
    }
};
