import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';



 class Users {
    private firstName: string;
    private lastName: string;
    private email: string;
    private phoneNumber: string;
    constructor(authorFirstName: string, lastName: string, email: string, phoneNumber: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
 }

 class Books {
    private bookName: string;
    private bookAuthors: Authors;
    private quantity: string;
    private category: Category;
    private datePublished: Date;
    constructor(bookName: string, bookAuthors: Authors, quantity: string, category: Category, datePublished: Date){
        this.bookAuthors = bookAuthors;
        this.bookName = bookName;
        this.quantity = quantity;
        this.category = category;
        this.datePublished = datePublished;
    }

 }

 class Librarian {
     private firstName: string;
     private lastName: string;
     private email: string;
     private gender: Gender;
     private phoneNum: string;
 
     constructor(firstName: string, lastName: string, email: string, gender: Gender, phoneNum: string){
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.gender = gender;
         this.phoneNum = phoneNum;
     }
 
 
     get fullName(): string{
         if(this.gender === "MALE"){
             return `Mr. ${this.firstName} - ${this.lastName}`;
         }else{
             return `Mrs. ${this.firstName} - ${this.lastName}`;
         }
       
     }
 }
 
 
 
 
 
 
 class Library {
     private name: string;
     private books: Array<Books>; //TODO
     private librarians: Librarian []; //TODO
 
     constructor(name: string){
         this.name = name;
         this.books = [];
         this.librarians = [];
     }
 
 
     // TODO
     assignLibrarian(librarian: Librarian){
         this.librarians.push(librarian);
         return this.librarians;
 
 
     }
 
     addBooks(){
 
     }
 
     addBook(name: string){
         this.books.push(name)
     }
 
     get libraryName(): string{
         return this.name;
     }
 
     get libraryBooks(): string[]{
         return this.books;
         
     }
 
     get librariansName(){
         return this.librarians;
     }
 
 
 }
 
 
 const mainLib = new Library("Main");
 
 const olaide = new Librarian('olaide', 'ojuolape', 'ojuolapeolaide92@gmail.com', "FEMALE", "+23429299269");
 const hanif = new Librarian('hanif', 'kanif ', 'hanif@gmail.com', "MALE", "+23429299269");
 const gwen = new Librarian('gwen', 'ochayan', 'gwen@gmail.com', "FEMALE", "+23429299269");
 const olympia = new Librarian('olympia', 'the great', 'olympia@gmail.com', "FEMALE", "+23429299269");
 
 
 
 
 const librarians = mainLib.assignLibrarian(olaide);
 // console.log(mainLib);
 mainLib.assignLibrarian(gwen);
 mainLib.assignLibrarian(hanif);
 mainLib.assignLibrarian(olaide);
 console.log(mainLib);
 
 mainLib.addBook("Singles don't do that");
 console.log(`mainLib + " " + "Completed"`)








// Create the Express app
const app = express();

// Set up JSON body parser middleware
app.use(bodyParser.json());

// Mock data for products
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  { id: 3, name: 'Product 3', price: 20.99 },
];

// Endpoint to get all products
app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

// Endpoint to get a specific product by ID
app.get('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

