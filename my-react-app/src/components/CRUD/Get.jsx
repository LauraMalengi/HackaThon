import { useContext } from "react";
import { BooksContext } from "../context/books";

function Get() {

    const { books } = useContext(BooksContext);

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    {book.title} - {book.author}
                </li>
            ))}
        </ul>
    );
}

export default Get;