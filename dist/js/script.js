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
const mainPage = document.querySelector('.main-page');
const overlay = document.querySelector('.overlay');
const backButton = document.querySelector('.back-button');
const covers = document.querySelectorAll('.cover');
/////////
const bookOne = document.querySelector('.cover-1');
const bookTwo = document.querySelector('.cover-2');
const bookThree = document.querySelector('.cover-3');
const bookFour = document.querySelector('.cover-4');
const bookFive = document.querySelector('.cover-5');
const bookSix = document.querySelector('.cover-6');
const bookSeven = document.querySelector('.cover-7');
const bookEight = document.querySelector('.cover-8');
/////////
const bookBackground = document.querySelector('.book-container');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const textTitle = document.querySelector('.text-title');
const textAuthor = document.querySelector('.text-author');
const textPlot = document.querySelector('.text-plot');
const factAudience = document.querySelector('.book-audience');
const factPublished = document.querySelector('.book-published');
const factPages = document.querySelector('.book-pages');
const factPublisher = document.querySelector('.book-publisher');
////////
function showMainPage() {
    mainPage.classList.remove('hidden');
    overlay.classList.add('hidden');
}
function bookClicked(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            mainPage.classList.add('hidden');
            overlay.classList.remove('hidden');
            const books = yield fetchBooks();
            const clickedBook = books.find((books) => books.id === id);
            bookBackground.style.background = `${clickedBook.color}`;
            bookTitle.innerText = `${clickedBook.title}`;
            bookAuthor.innerText = `${clickedBook.author}`;
            textTitle.innerText = `${clickedBook.title}`;
            textAuthor.innerText = `${clickedBook.author}`;
            textPlot.innerText = `${clickedBook.plot}`;
            factAudience.innerText = `${clickedBook.audience}`;
            factPublished.innerText = `${clickedBook.year}`;
            factPages.innerText = `${clickedBook.pages}`;
            factPublisher.innerText = `${clickedBook.publisher}`;
        }
        catch (error) {
            console.error("Något gick fel med att hämta informationen om boken:", error);
        }
    });
}
function loadBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield fetchBooks();
            books.forEach((book, index) => {
                if (covers[index]) {
                    const titleElement = covers[index].querySelector('h2');
                    const summaryElement = covers[index].querySelector('p');
                    const coverColor = covers[index];
                    if (titleElement)
                        titleElement.textContent = book.title;
                    if (summaryElement)
                        summaryElement.textContent = book.author;
                    if (coverColor)
                        coverColor.style.background = book.color;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
loadBooks();
bookOne.addEventListener('click', () => { bookClicked(1); });
bookTwo.addEventListener('click', () => { bookClicked(2); });
bookThree.addEventListener('click', () => { bookClicked(3); });
bookFour.addEventListener('click', () => { bookClicked(4); });
bookFive.addEventListener('click', () => { bookClicked(5); });
bookSix.addEventListener('click', () => { bookClicked(6); });
bookSeven.addEventListener('click', () => { bookClicked(7); });
bookEight.addEventListener('click', () => { bookClicked(8); });
backButton.addEventListener('click', showMainPage);
