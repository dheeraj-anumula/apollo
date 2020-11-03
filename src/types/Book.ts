interface Book {
        name: string;
        id: number;
        price: number;
        img: string;
        description: string;
        pages: number;
        type: string;
        status?: string;
        author: string;
        inCart: boolean;
        category: string;
}

export default Book
