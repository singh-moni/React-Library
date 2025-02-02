import React from "react";

const BookItem = ({ book, checkIt }) => {
  return (
    <div className="book--item">
      <img
        src={Object.values(book?.volumeInfo.imageLinks)[0]}
        alt="cover img"
        className="BookImg"
      />
      <div className="book--item-btns">
        <a
          href={book.volumeInfo.previewLink}
          target="_blank"
          rel="noreferrer"
          className="preview--btn"
        >
          Preview
        </a>

        {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
          <button className="read--btn" onClick={() => checkIt(book?.id)}>
            Read Online
          </button>
        ) : (
          <h3 className="null--point">Not Available</h3>
        )}
      </div>
    </div>
  );
};

export default BookItem;
