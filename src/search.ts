/* Denna modul hanterar mitt inputfält och sök knappen */
import { Book } from "./interface.js";
import { fetchBooks } from "./api.js";

// Funktion för att filtrera böcker baserat på sökfrågan
export async function searchBooks(query: string): Promise<Book[]> {
    const books = await fetchBooks();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Filtered books:', filteredBooks); // Logga de filtrerade böckerna
    return filteredBooks;
}

// Funktion för att hantera sökknappen och inputfältet
export function handleSearch(): void {
    const searchInput = document.querySelector<HTMLInputElement>('.my-input');
    const searchButton = document.querySelector<HTMLButtonElement>('.search-button');
    const infoSection = document.querySelector<HTMLElement>('.info');
    const infoTitle = document.querySelector<HTMLElement>('.upclose h3');
    const infoText = document.querySelector<HTMLElement>('.bookinfo');

    if (searchInput && searchButton && infoSection && infoTitle && infoText) {
        // Funktion för att utföra sökningen
        const performSearch = async () => {
            const query = searchInput.value.trim();
            console.log('Search query:', query); // Logga den aktuella sökfrågan
            if (query) {
                const filteredBooks = await searchBooks(query);
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
                } else {
                    console.log('Ingen matchning hittades'); // Logga om ingen bok hittades
                    infoTitle.textContent = 'Ingen matchning';
                    infoText.textContent = 'Det finns ingen bok som matchar din sökning.';
                }
                infoSection.style.display = 'block'; 
            }
        };

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
