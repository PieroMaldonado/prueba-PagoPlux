import { getTransactionByIdService } from "../services/pagoPluxService.js";

export const getTransactionById = async (req, res) => {
    const { idTransaction } = req.query;    

    if (!idTransaction) {
        return res.status(400).json({ message: "idTransaction is required" });
    }

    try {
        const transaction = await getTransactionByIdService(idTransaction);
        return res.status(200).json(transaction);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
