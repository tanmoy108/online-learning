import React from "react";
import Common from "./Common";
import Bookimage from "./image/bookimage.png";

const Book = () => {
  return (
    <React.Fragment>
       <Common
        title="Welcome to Book Store"
        paragraph="Tanmoy sharma hello how are you i am fine thankk you now i am
                making a web for computer security project"
        buttonvalue="Get Books"
        imagevalue={Bookimage}
      />
    </React.Fragment>
  );
};

export default Book;
