import React, { useState } from "react";
import Card from "../Card/Card";

const Form = () => {
  const [book, setBook] = useState({
    isbn: "",
    bookName: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e, prop) => {
    setBook({ ...book, [prop]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    const isbnIsValid = book.isbn.length >= 3;
    const bookNameisValid = book.bookName.length >= 6;

    if (!isbnIsValid || !bookNameisValid) {
      setError(true);

      if (!isbnIsValid && !bookNameisValid) {
        setErrorMessage("El ISBN y el nombre del libro son incorrectos");
        return;
      } else if (!isbnIsValid) {
        console.log(book.isbn.length);
        setErrorMessage("El ISBN debe contener más de 3 caracteres");
      } else {
        setErrorMessage(
          "El nombre del libro debe contener más de 6 caracteres"
        );
      }
      return;
    }

    setIsLogged(true);
    console.log("data: ", book);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa el ISBN del libro"
          name="isbn"
          onChange={(e) => handleChange(e, "isbn")}
        />

        <input
          type="text"
          placeholder="Ingresa el titulo del libro"
          name="bookName"
          onChange={(e) => handleChange(e, "bookName")}
        />

        <button type="submit">Registrar</button>
      </form>

      {error ? <span style={{ color: "red" }}>{errorMessage}</span> : null}

      {isLogged && <Card bookName={book.bookName} isbn={book.isbn} />}
    </div>
  );
};

export default Form;
