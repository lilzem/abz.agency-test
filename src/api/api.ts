import axios from 'axios';
import { BACKEND_URL } from '@src/constants';

export async function getUsers(page: number, count: number) {
    const response = await axios.get(`${BACKEND_URL}/users?page=${page}&count=${count}`);

    return response.data;
}

export async function getPositions() {
    const response = await axios.get(`${BACKEND_URL}/positions`);

    return response.data;
}

export async function getToken() {
    const response = await axios.get(`${BACKEND_URL}/token`);

    return response.data;
}
