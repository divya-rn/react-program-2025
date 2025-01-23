import { useState } from "react";
import { addBook } from "./book-data";
import { useNavigate } from "react-router-dom";

export function BookAdd() {
  let navigate = useNavigate();
  let [newBook, setNewBook] = useState({
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookPrice: 0,
    bookImageUrl: "",
  });

  let [validationErrors, setValidationErrors] = useState({});

  function handleAddFormSubmit(event) {
    event.preventDefault();
    console.log(newBook);
    console.log(validationErrors);
    addBook(newBook);
    // navigate to BookList component - we have to learn routing in react
    navigate("/book-home/book-list", { state: { ...newBook } });
  }

  function handleChangeInput(event) {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });

    if (event.target.name != "bookImageUrl") {
      if (event.target.value == "") {
        setValidationErrors({
          ...validationErrors,
          [event.target.name]: `${event.target.name} is required!`,
        });
      } else {
        let newErrors = { ...validationErrors };
        delete newErrors[event.target.name];
        setValidationErrors(newErrors);
      }
    }
  }

  return (
    <>
      <div className="row my-2">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="container my-5">
            <form onSubmit={(event) => handleAddFormSubmit(event)}>
              <div className="card">
                <div className="card-header bg-success text-light">
                  <h4>ADD NEW BOOK</h4>
                </div>
                <div className="card-body">
                  <div className="form-control-group mb-2">
                    <label htmlFor="bTitle" className="form-label">
                      Book Title:
                    </label>
                    <input
                      type="text"
                      id="bTitle"
                      className="form-control"
                      placeholder="Enter Book Title"
                      name="bookTitle"
                      value={newBook.bookTitle}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.bookTitle}
                    </div>
                  </div>
                  <div className="form-control-group mb-2">
                    <label htmlFor="bAuthor" className="form-label">
                      Book Author:
                    </label>
                    <input
                      type="text"
                      id="bAuthor"
                      className="form-control"
                      placeholder="Enter Book Author"
                      name="bookAuthor"
                      value={newBook.bookAuthor}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.bookAuthor}
                    </div>
                  </div>
                  <div className="form-control-group mb-2">
                    <label htmlFor="bPrice" className="form-label">
                      Book Price:
                    </label>
                    <input
                      type="text"
                      id="bPrice"
                      className="form-control"
                      placeholder="Enter Book Price"
                      name="bookPrice"
                      value={newBook.bookPrice}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.bookPrice}
                    </div>
                  </div>
                  <div className="form-control-group mb-2">
                    <label htmlFor="bImage" className="form-label">
                      Book Image Url:
                    </label>
                    <input
                      type="text"
                      id="bImage"
                      className="form-control"
                      placeholder="Enter Book Image Url"
                      name="bookImageUrl"
                      value={newBook.bookImageUrl}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                  </div>
                </div>
                <div className="card-footer bg-success text-light">
                  {Object.keys(validationErrors).length == 0 ? (
                    <button
                      type="submit"
                      className="btn btn-light text-success"
                    >
                      ADD
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-light text-success"
                      disabled
                    >
                      ADD
                    </button>
                  )}
                  <button
                    type="reset"
                    className="btn btn-light text-success mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}