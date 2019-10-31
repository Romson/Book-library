const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

let db;
let connectionString =
	"mongodb+srv://romson:Welcome2020@cluster0-tesing123-ni6rz.mongodb.net/library?retryWrites=true&w=majority";
mongodb.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
	db = client.db();
	app.listen(3000, () => {
		console.log("Project: Fullstack Library running");
	});
});

app.get("/", (req, res) => {
	db.collection("books")
		.find()
		.toArray((err, books) => {
			res.render("index", {books: books});
		});
});

app.post("/add-book", (req, res) => {
	// Add data to mongodb collection
	db.collection("books").insertOne(
		{
			title: req.body.booktitle,
			author: req.body.authorname,
			pages: req.body.pagecount,
			image: req.body.imagesrc
		},
		() => {
			res.redirect("/");
		}
	);
});

// Edit
app.post("/edit-title", (req, res) => {
	db.collection("books").findOneAndUpdate(
		{_id: new mongodb.ObjectID(req.body.id)},
		{$set: {title: req.body.title}},
		() => {
			res.send("Seccusfully edited!");
		}
	);
});

// Delete
app.post("/delete-item", (req, res) => {
	db.collection("books").deleteOne(
		{_id: new mongodb.ObjectID(req.body.id)},
		() => {
			res.send("Successfully deleted!");
		}
	);
});
