
import {fetchBooks} from "./api.js";
import {searchBooks, handleSearch} from "./search.js";

async function loadBooks() {
    try {
        const books = await fetchBooks();
        const covers = document.querySelectorAll<HTMLElement>('.cover'); 

        books.forEach((book, index) => {
            if (covers[index]) {
                const titleElement = covers[index].querySelector<HTMLElement>('h2');
                const summaryElement = covers[index].querySelector<HTMLElement>('p');

                if (titleElement) titleElement.textContent = book.title;
                if (summaryElement) summaryElement.textContent = book.author;
            }
        });
    } catch (error) {
        console.error(error);
    }
}

loadBooks();
handleSearch();