import { useContext } from "react";
import { BooksContext } from "../context/books";

function Update() {

    const { books, updateBook } = useContext(BooksContext);

    const editBook = (book) => {

        const title = prompt("Book Title", book.title);

        const author = prompt("Author", book.author);

        if (!title || !author) return;

        updateBook(book.id, {
            title,
            author,
        });
    };

    return (
        <ul>
            {books.map((book) => (
                <li
                    key={book.id}
                    onClick={() => editBook(book)}
                    style={{ cursor: "pointer" }}
                >
                    {book.title} - {book.author}
                </li>
            ))}
        </ul>
    );
}

export default Update;