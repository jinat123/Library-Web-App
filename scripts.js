// Sample Data Structure: List of Dictionaries (Books Collection)
let books = [];

// Select the necessary DOM elements
const bookListElement = document.getElementById('bookList');
const bookForm = document.getElementById('bookForm');
const deleteButton = document.getElementById('deleteBookBtn');

// Function to display all books in the list
function displayBooks() {
    bookListElement.innerHTML = '';  // Clear the current list

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${book.bookId} - Title: ${book.title} - Author: ${book.author} - Year: ${book.year}`;
        bookListElement.appendChild(listItem);
    });
}

// Function to add or update a book
bookForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const bookId = document.getElementById('bookId').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    if (bookId) {
        // If bookId is provided, update the book with that ID
        const bookIndex = books.findIndex(book => book.bookId == bookId);
        if (bookIndex > -1) {
            books[bookIndex] = { bookId: parseInt(bookId), title, author, year };  // Update book details
            alert('Book updated successfully!');
        } else {
            alert('Book ID not found for update!');
        }
    } else {
        // Add a new book
        const newBook = {
            bookId: books.length + 1,  // Generate a new unique book ID
            title,
            author,
            year
        };
        books.push(newBook);  // Add the new book to the collection
        alert('Book added successfully!');
    }

    displayBooks();  // Update the book list
    bookForm.reset();  // Reset the form fields
});

// Function to delete a book based on book ID
deleteButton.addEventListener('click', function() {
    const bookId = document.getElementById('bookId').value;

    if (bookId) {
        const bookIndex = books.findIndex(book => book.bookId == bookId);
        if (bookIndex > -1) {
            books.splice(bookIndex, 1);  // Remove the book from the list
            alert(`Book with ID: ${bookId} deleted successfully!`);
            displayBooks();  // Update the book list
        } else {
            alert('Book ID not found for deletion!');
        }
    } else {
        alert('Please enter a Book ID to delete!');
    }
});

// Initialize display of books when page loads
displayBooks();
