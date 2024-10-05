import axios from "axios";

const BASE_URL = process.env.PAGOPLUX_BASE_URL; 
const AUTH_HEADER = 'Basic ' + Buffer.from(`${process.env.PAGOPLUX_API_CLIENT}:${process.env.PAGOPLUX_API_SECRET}`).toString('base64');

export const getTransactionByIdService = async (idTransaction) => {
    const url = `${BASE_URL}integrations/getTransactionByIdStateResource?idTransaction=${idTransaction}`;
    const response = await axios.get(url, {
        headers: {
            "Authorization": AUTH_HEADER,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};
