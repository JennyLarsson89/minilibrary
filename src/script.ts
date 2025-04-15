
import {fetchBooks} from "./api.js";
import {searchBooks, handleSearch} from "./search.js";

const mainPage : HTMLElement = document.querySelector('.main-page');
const overlay : HTMLElement = document.querySelector('.overlay');
const backButton : HTMLElement = document.querySelector('.back-button');
/////////
const bookOne = document.querySelector('.cover-1')
const bookTwo = document.querySelector('.cover-2')
const bookThree = document.querySelector('.cover-3')
const bookFour = document.querySelector('.cover-4')
const bookFive = document.querySelector('.cover-5')
const bookSix = document.querySelector('.cover-6')
const bookSeven = document.querySelector('.cover-7')
const bookEight = document.querySelector('.cover-8')
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

bookOne.addEventListener('click', showBookInfo)
bookTwo.addEventListener('click', showBookInfo)
bookThree.addEventListener('click', showBookInfo)
bookFour.addEventListener('click', showBookInfo)
bookFive.addEventListener('click', showBookInfo)
bookSix.addEventListener('click', showBookInfo)
bookSeven.addEventListener('click', showBookInfo)
bookEight.addEventListener('click', showBookInfo)

backButton.addEventListener('click', showMainPage);