/* Denna modul hanterar bara mitt API */
import {Book} from "./interface.js";

const apiUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

export async function fetchBooks(): Promise<Book[]> {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const books = await response.json() as Book[];
        return books;
        
    } catch (error) {
        console.error('Failed to fetch books:', error);
        throw error;
    }
}