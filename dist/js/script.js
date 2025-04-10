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
import { handleSearch } from "./search.js";
function loadBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield fetchBooks();
            const covers = document.querySelectorAll('.cover');
            books.forEach((book, index) => {
                if (covers[index]) {
                    const titleElement = covers[index].querySelector('h2');
                    const summaryElement = covers[index].querySelector('p');
                    if (titleElement)
                        titleElement.textContent = book.title;
                    if (summaryElement)
                        summaryElement.textContent = book.author;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
loadBooks();
handleSearch();
