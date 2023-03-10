import React from "react";

const Card = ({isbn, bookName}) => {
  return (
    <div>
      <h4>Registro exitoso del siguiente libro: </h4>
      <h4>Nombre del libro: {bookName}</h4>
      <h4>con el ISBN: {isbn}</h4>
    </div>
  );
};

export default Card;
