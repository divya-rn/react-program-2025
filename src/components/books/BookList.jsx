import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllBooks, deleteBook } from "./book-data";

export function BookList() {
  let navigate = useNavigate();
  let { state } = useLocation();
  console.log("state received from BookAdd : ", state);
  let [allBooks, setAllBooks] = useState(getAllBooks());

  let mappedAllBooks = allBooks.map((book) => {
    return (
      <tr key={book.bookId}>
        <td>{book.bookId}</td>
        <td>
          <img src={book.bookImageUrl} width="50" height="50" />
        </td>
        <td>{book.bookTitle}</td>
        <td>{book.bookAuthor}</td>
        <td>Rs. {book.bookPrice}</td>
        <td>
          <button className="btn btn-dark">View</button>
        </td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => editBook(book.bookId)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => removeBook(book.bookId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  let isBooksEmpty = allBooks.length == 0;

  function removeBook(bookId) {
    console.log("Book with id: " + bookId);
    //allBooks = allBooks.filter((book) => book.bookId != bookId);
    //setAllBooks(allBooks.filter((book) => book.bookId != bookId));
    deleteBook(bookId);
    setAllBooks(getAllBooks());
  }

  function editBook(bookId) {
    // navigate to edit-book
    navigate(`/book-home/book-edit/${bookId}`);
  }
  return (
    <>
      <div className="container m-3">
        <h2>LIST OF BOOKS</h2>
        {isBooksEmpty ? (
          <div className="alert alert-danger">No Books to display!</div>
        ) : (
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{mappedAllBooks}</tbody>
          </table>
        )}
      </div>
    </>
  );
}