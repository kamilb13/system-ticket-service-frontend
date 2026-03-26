import {axiosInstance} from "@/api/axios-instance";

export async function getTickets() {
    try {
        const response = await axiosInstance.get('/tickets/tech');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createTicket(title: string, description: string, category: string) {
    try {
        const response = await axiosInstance.post('/tickets/client', {
            title: title,
            description: description,
            category: category,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}