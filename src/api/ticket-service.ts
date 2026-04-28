import { axiosInstance } from '@/api/axios-instance';

export async function getTickets() {
    try {
        const response = await axiosInstance.get('/tickets/tech');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getTicketsByClient() {
    try {
        const response = await axiosInstance.get('/tickets/client');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function setTicketStatus(ticketId: number, status: string) {
    try {
        const response = await axiosInstance.patch(`/tickets/tech/status?status=${status}&ticketId=${ticketId}`);
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

export async function addComment(ticketId: number, comment: string) {
    try {
        const response = await axiosInstance.post('/tickets/comments', {
            ticketId: ticketId,
            comment: comment,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getComments(ticketId: number) {
    try {
        const response = await axiosInstance.get(`/tickets/${ticketId}/comments`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}