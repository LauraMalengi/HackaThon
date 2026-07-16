import { useContext } from "react";
import { BooksContext } from "../context/books";

function Delete() {

    const { books, deleteBook } = useContext(BooksContext);

    return (
        <ul>
            {books.map((book) => (
                <li
                    key={book.id}
                    onClick={() => deleteBook(book.id)}
                    style={{ cursor: "pointer" }}
                >
                    {book.title} - {book.author}
                </li>
            ))}
        </ul>
    );
}

export default Delete;