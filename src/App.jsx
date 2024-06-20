import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import BookItem from "./components/BookItem";
import ReadingBlock from "./components/ReadingBlock";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Astronomy");
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
      })
      .catch((error) => alert(error.message));
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setQuery(search);
      setSearch("");
    } else {
      alert("Enter Book Name!!");
    }
  };

  const checkIt = (id) => {
    setId(id);
    setTerm(true);
  };

  return (
    <div className="App">
      <h1 className="title">Monika's library</h1>

      <SearchForm search={search} setSearch={setSearch} getSearch={getSearch} />

      <div className="books">
        {books.map((book, key) => (
          <BookItem key={key} book={book} checkIt={checkIt} />
        ))}
      </div>

      {term && <ReadingBlock id={id} setTerm={setTerm} />}
    </div>
  );
}

export default App;