var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBooks } from "./api.js";
// Funktion för att filtrera böcker baserat på sökfrågan
export function searchBooks(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchBooks();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
        console.log('Filtered books:', filteredBooks); // Logga de filtrerade böckerna
        return filteredBooks;
    });
}
// Funktion för att hantera sökknappen och inputfältet
export function handleSearch() {
    const searchInput = document.querySelector('.my-input');
    const searchButton = document.querySelector('.search-button');
    const infoSection = document.querySelector('.info');
    const infoTitle = document.querySelector('.upclose h3');
    const infoText = document.querySelector('.bookinfo');
    if (searchInput && searchButton && infoSection && infoTitle && infoText) {
        // Funktion för att utföra sökningen
        const performSearch = () => __awaiter(this, void 0, void 0, function* () {
            const query = searchInput.value.trim();
            console.log('Search query:', query); // Logga den aktuella sökfrågan
            if (query) {
                const filteredBooks = yield searchBooks(query);
                console.log('Filtered books after search:', filteredBooks); // Logga de filtrerade böckerna
                const book = filteredBooks.find(b => b.title.toLowerCase() === query.toLowerCase());
                if (book) {
                    console.log('Found book:', book); // Logga den bok som hittades
                    infoTitle.textContent = book.title;
                    infoText.textContent = `
                        Författare: ${book.author}
                        Förlag: ${book.publisher}
                        År: ${book.year}
                        Antal sidor: ${book.pages}
                        
                        ${book.plot}
                        
                        Målgrupp: ${book.audience}
                    `;
                }
                else {
                    console.log('Ingen matchning hittades'); // Logga om ingen bok hittades
                    infoTitle.textContent = 'Ingen matchning';
                    infoText.textContent = 'Det finns ingen bok som matchar din sökning.';
                }
                infoSection.style.display = 'block';
            }
        });
        // Lägg till eventlistener för sökknappen
        searchButton.addEventListener('click', performSearch);
        // Lägg till eventlistener för när användaren trycker på Enter-tangenten
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                console.log('Search query from Enter key:', searchInput.value); // Logga sökfrågan när Enter trycks
                performSearch();
            }
        });
    }
}
