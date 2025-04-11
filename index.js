const connectDb = require("./db");
const Book = require("./book");
const { trusted } = require("mongoose");

connectDb();
const addBook = async (b) => {
  const book = new Book(b);
  const newBook = await book.save();
  console.log(newBook);
};

/*addBook({
  title: "the Alchemist",
  author: "Paulo Coelho",
  price: 14.99,
  genre: "Fiction",
  inStock: true,
});
*/
const createBook = async (b) => {
  const book = await Book.create(b);
  console.log(book);
};

/*createBook({
  title: "Atomic Habits",
  author: "James Clear",
  price: 18.99,
  genre: "Non-Fiction",
  inStock: true,
});
*/
const createBooks = async (books) => {
  const book = await Book.create(books);
  console.log(book);
};
/*
createBooks([
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 13.99,
    genre: "Fiction",
    inStock: true,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    price: 17.25,
    genre: "Memoir",
    inStock: true,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 21.0,
    genre: "History",
    inStock: false,
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 19.75,
    genre: "Business",
    inStock: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    price: 14.3,
    genre: "Science Fiction",
    inStock: false,
  },
]);
*/
/*createBooks([
  {
    title: "The Productivity Code",
    author: "Anna Blake",
    price: 16.99,
    genre: "Business",
    inStock: true,
    rating: [4, 5, 5, 3],
    publishedAt: new Date("2021-06-15"),
    Publisher: {
      name: "Focus Press",
      location: "New York",
    },
  },
  {
    title: "Winds of the Future",
    author: "Liam Carter",
    price: 12.5,
    genre: "Science Fiction",
    inStock: true,
    rating: [5, 4, 4, 5],
    publishedAt: new Date("2019-10-21"),
    Publisher: {
      name: "Galactic Reads",
      location: "Los Angeles",
    },
  },
  {
    title: "Echoes of History",
    author: "Maya Thompson",
    price: 18.2,
    genre: "History",
    inStock: false,
    rating: [3, 4, 2],
    publishedAt: new Date("2017-03-10"),
    Publisher: {
      name: "Timeless Publications",
      location: "London",
    },
  },
  {
    title: "The Mindful Warrior",
    author: "Samuel Reid",
    price: 14.0,
    genre: "Memoir",
    inStock: true,
    rating: [4, 4, 5],
    publishedAt: new Date("2020-12-05"),
    Publisher: {
      name: "Clarity House",
      location: "Toronto",
    },
  },
]);
*/
const findBook = async () => {
  const books = await Book.find();
  console.log(books);
};

//findBook();
const findBookById = async (id) => {
  const book = await Book.findById(id);
  console.log(book);
};
//findBookById("67f643060c66e02e1a27ea98");

const findBookByTitle = async (title) => {
  const book = await Book.findOne({ title });
  console.log(book);
};

//findBookByTitle("the Alchemist");

const findBooksByTitle = async (title) => {
  const book = await Book.find({ title });
  console.log(book);
};

//findBooksByTitle("the Alchemist");

const UpdateBookById = async (id, b) => {
  const update = await Book.findByIdAndUpdate(id, b);
  console.log(update);
};

/*UpdateBookById("67f643060c66e02e1a27ea98", {
  title: "Harry Poter",
  price: 20,
});*/

const UpdateBookByTitle = async (title, b) => {
  const update = await Book.findOneAndUpdate(title, b);
  console.log(update);
};
//UpdateBookByTitle({ title: "Harry Poter" }, { inStock: trusted });

const UpdateBooksByTitle = async (title, b) => {
  const update = await Book.updateMany(title, b);
  console.log(update);
};
//UpdateBooksByTitle({ title: "the Alchemist" }, { inStock: false });

const deleteBookById = async (id) => {
  const deleted = await Book.findByIdAndDelete(id);
  console.log(deleted);
};
//deleteBookById("67f64c7a6d27360e478db5ae");

const deleteBooksById = async (title) => {
  const deleted = await Book.deleteMany(title);
  console.log(deleted);
};

//deleteBooksById({ title: "Atomic Habits" });

///////////////////////////////// sql query ///////////////////////
const queryOne = () => {
  const books = Book.where("price").gt(10).lt(20).where("inStock").equals(true);
  books
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
//queryOne();

const queryTwo = async () => {
  const books = Book.where("");
};

//see average
const findBookAVG = async () => {
  const book = await Book.find();
  console.log(book[7].avgRating);
};
//findBookAVG();

/*const getBooksInStock = async () => {
  const book = await Book.getInstock();
  console.log(book);
};*/
const getBooksInStock = async () => {
  const books = await Book.getInStock();
  console.log(books);
};

//getBooksInStock();

const findBooksByIdDescription = async (id) => {
  const book = await Book.findById(id);
  console.log(book.description());
};
//findBooksByIdDescription("67f66294a8d7d5edff0cf861");
