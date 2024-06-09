import { Book } from "../App";
import { BookCard } from "./BookCard";

interface BooksProps {
  books: Book[];
  setBookshelf: (bookshelf: Book[]) => void;
  search: string;
  mybookshelf: boolean;
}

export const Books = ({
  books,
  setBookshelf,
  search,
  mybookshelf,
}: BooksProps) => {
  return (
    <section className="mx-10 my-10 md:my-16 md:mx-20 flex flex-col justify-center">
      {books.length === 0 && (
        <h1 className="text-4xl font-bold mt-20 text-center">No Books Found</h1>
      )}

      {mybookshelf
        ? books.length > 0 && (
            <h2 className="text-3xl md:text-4xl font-semibold my-3">
              Search Results for "{search}"
            </h2>
          )
        : books.length > 0 && (
            <h2 className="text-3xl md:text-4xl font-semibold my-3">
              My Bookshelf
            </h2>
          )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {books &&
          books.map((book, index) => (
            <div
              key={index}
              className="bg-[#162127] rounded-md p-5 flex flex-col justify-between"
            >
              <BookCard
                book={book}
                setBookshelf={setBookshelf}
                mybookshelf={mybookshelf}
              />
            </div>
          ))}
      </div>
    </section>
  );
};
