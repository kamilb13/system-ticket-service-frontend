type Ticket = {
    id: number;
    title: string;
    ticketCreator: string;
    description: string;
    category: string;
    status: string;
    createdAt: Date;
    comments: string[];
}

// {
//     "id": 1,
//     "title": "title",
//     "ticketCreator": "testowy",
//     "description": "desc",
//     "category": "cat",
//     "status": "NEW",
//     "createdAt": "2026-03-23T12:02:13.051588",
//     "comments": []
// }