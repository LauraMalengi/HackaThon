const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


let books = [
	{ id: 0, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
	{ id: 1, title: '1984', author: 'George Orwell' },
	{ id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
	{ id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
	{ id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
	{ id: 5, title: 'Moby Dick', author: 'Herman Melville' },
	{ id: 6, title: 'Jane Eyre', author: 'Charlotte Brontë' },
	{ id: 7, title: 'Brave New World', author: 'Aldous Huxley' },
	{ id: 8, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
	{ id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
	{ id: 10, title: 'The Chronicles of Narnia', author: 'C.S. Lewis' },
	{ id: 11, title: 'The Alchemist', author: 'Paulo Coelho' },
	{ id: 12, title: 'Animal Farm', author: 'George Orwell' },
	{ id: 13, title: 'The Odyssey', author: 'Homer' },
];

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the Books API" });
});

app.get('/books', (req, res) => {
	res.json(books);
});


app.get('/books/:id', (req, res) => {
	const id = Number(req.params.id);
	const book = books.find(b => b.id === id);
	if (!book) return res.status(404).json({ error: 'Book not found' });
	res.json(book);
});


app.post('/books', (req, res) => {
	const { title, author } = req.body;
	if (!title || !author) {
		return res.status(400).json({ error: 'Missing title or author' });
	}
	const book = { id: books.length + 1, title, author };
	books.push(book);
	res.status(201).json(book);
});


app.put('/books/:id', (req, res) => {
	const id = Number(req.params.id);
    console.log(id);
	const { title, author } = req.body;
	const idx = books.findIndex(b => b.id === id);
	if (idx === -1) return res.status(404).json({ error: 'Book not found' });
	if (title) books[idx].title = title;
	if (author) books[idx].author = author;
	res.json(books[idx]);
});


app.delete('/books/:id', (req, res) => {
	const id = Number(req.params.id);
    console.log(id)
	const idx = books.findIndex(b => b.id === id);
	if (idx === -1) return res.status(404).json({ error: 'Book not found, could not delete' });
	books.splice(idx, 1);
	res.status(204).send("successfully deleted book");
});

app.listen(port, () => {
	console.log(`Books API listening on http://localhost:${port}`);
});

 