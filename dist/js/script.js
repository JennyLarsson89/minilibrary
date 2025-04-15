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
const mainPage = document.querySelector('.main-page');
const overlay = document.querySelector('.overlay');
const backButton = document.querySelector('.back-button');
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
function showBookInfo() {
    mainPage.classList.add('hidden');
    overlay.classList.remove('hidden');
    console.log('Book info shown');
}
function showMainPage() {
    mainPage.classList.remove('hidden');
    overlay.classList.add('hidden');
    console.log('Main page shown');
}
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
bookOne.addEventListener('click', showBookInfo);
bookTwo.addEventListener('click', showBookInfo);
bookThree.addEventListener('click', showBookInfo);
bookFour.addEventListener('click', showBookInfo);
bookFive.addEventListener('click', showBookInfo);
bookSix.addEventListener('click', showBookInfo);
bookSeven.addEventListener('click', showBookInfo);
bookEight.addEventListener('click', showBookInfo);
backButton.addEventListener('click', showMainPage);
