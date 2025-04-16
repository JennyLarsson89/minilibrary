
import {fetchBooks} from "./api.js";

const mainPage : HTMLElement = document.querySelector('.main-page');
const overlay : HTMLElement = document.querySelector('.overlay');
const backButton : HTMLElement = document.querySelector('.back-button');
const covers = document.querySelectorAll<HTMLElement>('.cover'); 
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
const bookBackground : HTMLElement = document.querySelector('.book-container');
const bookTitle : HTMLElement = document.querySelector('.book-title');
const bookAuthor : HTMLElement = document.querySelector('.book-author');
const textTitle : HTMLElement = document.querySelector('.text-title');
const textAuthor : HTMLElement = document.querySelector('.text-author');
const textPlot : HTMLElement = document.querySelector('.text-plot');

const factAudience : HTMLElement = document.querySelector('.book-audience');
const factPublished : HTMLElement = document.querySelector('.book-published');
const factPages : HTMLElement = document.querySelector('.book-pages');
const factPublisher : HTMLElement = document.querySelector('.book-publisher');
////////

function showMainPage() {
    mainPage.classList.remove('hidden');
    overlay.classList.add('hidden');
}

async function bookClicked(id : number){    
    try {
        mainPage.classList.add('hidden');
        overlay.classList.remove('hidden');
        const books = await fetchBooks();
        const clickedBook = books.find ((books) => books.id === id);

        bookBackground.style.background = `${clickedBook.color}`;
        bookTitle.innerText = `${clickedBook.title}`
        bookAuthor.innerText = `${clickedBook.author}`
        textTitle.innerText = `${clickedBook.title}`
        textAuthor.innerText = `${clickedBook.author}`
        textPlot.innerText = `${clickedBook.plot}`

        factAudience.innerText = `${clickedBook.audience}`;
        factPublished.innerText = `${clickedBook.year}`;
        factPages.innerText = `${clickedBook.pages}`;
        factPublisher.innerText = `${clickedBook.publisher}`;
    

    } catch (error) {
        console.error("Något gick fel med att hämta informationen om boken:", error);
    }
}

async function loadBooks() {
    try {
        const books = await fetchBooks();


        books.forEach((book, index) => {
            if (covers[index]) {
                const titleElement = covers[index].querySelector<HTMLElement>('h2');
                const summaryElement = covers[index].querySelector<HTMLElement>('p');
                const coverColor = covers[index]

                if (titleElement) titleElement.textContent = book.title;
                if (summaryElement) summaryElement.textContent = book.author;
                if (coverColor) coverColor.style.background = book.color;
            }
        });
    } catch (error) {
        console.error(error);
    }
}

loadBooks();


bookOne.addEventListener('click', () => {bookClicked(1)})
bookTwo.addEventListener('click', () => {bookClicked(2)})
bookThree.addEventListener('click', () => {bookClicked(3)})
bookFour.addEventListener('click', () => {bookClicked(4)})
bookFive.addEventListener('click', () => {bookClicked(5)})
bookSix.addEventListener('click', () => {bookClicked(6)})
bookSeven.addEventListener('click', () => {bookClicked(7)})
bookEight.addEventListener('click', () => {bookClicked(8)})

backButton.addEventListener('click', showMainPage);