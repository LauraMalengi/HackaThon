import { useContext, useState } from "react";
import { BooksContext } from "../context/books";

function Create() {

    const { createBook } = useContext(BooksContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        createBook(title, author);

        setTitle("");
        setAuthor("");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <button type="submit">
                Add Book
            </button>

        </form>
    );
}

export default Create;