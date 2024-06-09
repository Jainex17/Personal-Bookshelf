import { useEffect, useState } from "react";
import { Books } from "./components/Books";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export interface Book {
  title: string;
  author_name: string;
  first_publish_year: number;
}

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [bookshelf, setBookshelf] = useState<Book[]>([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?title=${search}&limit=10&page=1`
        );
        const data = await res.json();
        setBooks(
          data.docs.map((book: any) => ({
            title: book.title,
            author_name: book.author_name,
            first_publish_year: book.first_publish_year,
          }))
        );
        
      } catch (err) {
        console.log(err);
      }
    }

    if (search === "") {
      setBooks([]);
      return;
    }
    
    getBooks();
    
    // const delayDebounceFn = setTimeout(() => {
      // getBooks(); // can be optimized by using debounce leave it for now
      // }, 300);
    // return () => clearTimeout(delayDebounceFn)
  }, [search]);

  useEffect(() => {
    const bookshelf = localStorage.getItem("bookshelf");
    if (bookshelf) {
      setBookshelf(JSON.parse(bookshelf));
    }
  }, []);

  return (
    <main>
      <BrowserRouter basename="/">
      <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search search={search} setSearch={setSearch} />
                <Books books={books} setBookshelf={setBookshelf} search={search} mybookshelf={true} /> 
                {/* mybookshelf is true then add to bookshelf button show */}
              </>
            }
            />
          <Route
            path="/mybookshelf"
            element={<Books books={bookshelf} setBookshelf={setBookshelf} search={search} mybookshelf={false} />}
            />
            {/* mybookshelf is false then add to bookshelf button don't show */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
