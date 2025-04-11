const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true, minlength: 2 },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }, //il faut ne prendre pas negatif value
  genre: {
    type: String,
    required: true,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Science Fiction",
      "Business",
      "Memoir",
      "History",
      "Fantasy",
      "Biography",
    ],
  },
  inStock: { type: Boolean, required: true },
  rating: {
    type: [Number],
    validate: {
      validator: (arr) => arr.every((nbr) => nbr < 6 && nbr > 0),
      message: "rating must be between 1 and 5",
    },
  },
  publishedAt: {
    type: Date,
    required: true,
    validate: {
      validator: (date) => new Date() > date,
      message: "Published Date must be in the past!",
    },
  },
  Publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
});
bookSchema.virtual("avgRating").get(function () {
  return (
    this.rating.reduce((sum, rating) => sum + rating, 0) / this.rating.length
  );
});
//method in Schema
bookSchema.methods.description = function () {
  return `${this.Publisher.name} wrote ${this.title}`;
};
bookSchema.statics.getInStock = function () {
  // static lance a class for access directement dans objet
  // return this.find({ inStock: true }).toArray();
  const books = this.where("inStock").equals(true);
  return books;
};

//Midelware
//pre avant query
//post : aprés query
/*bookSchema.pre(
  "findByIdAndDelete",
  { document: false, query: false },
  (next) => {}
);*/
bookSchema.post("find", async function () {
  console.log(`this is all Book`);
});
bookSchema.pre("findByIdAndDelete", async function () {
  console.log(`this is all Book deleted`);
});
const Book = model("books", bookSchema);

module.exports = Book;
