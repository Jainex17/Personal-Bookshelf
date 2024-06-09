import { useEffect } from "react";
import { Book } from "../App";

interface BookCardProps {
  book: Book;
  setBookshelf: (bookshelf: Book[]) => void;
  mybookshelf: boolean;
}

export const BookCard = ({ book, setBookshelf, mybookshelf }: BookCardProps) => {

    function handleAddBookShelf(book: Book) {
        const bookshelf = localStorage.getItem("bookshelf");
        if (bookshelf) {
            if (bookshelf.includes(JSON.stringify(book))) {
              alert("Book already in Bookshelf");
              return;
            }
          const bookshelfArr = JSON.parse(bookshelf);
          bookshelfArr.push(book);
          localStorage.setItem("bookshelf", JSON.stringify(bookshelfArr));
        } else {
          localStorage.setItem("bookshelf", JSON.stringify([book]));
        }
    }

    useEffect(() => {
        const bookshelf = localStorage.getItem("bookshelf");
        if (bookshelf) {
          setBookshelf(JSON.parse(bookshelf));
        }
      }, []);

  return (
      <>
        <div>
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-500">{book.author_name}</p>
          <p className="text-gray-500">{book.first_publish_year}</p>
        </div>
        {
            mybookshelf && (
                <button 
            className="bg-[#a7cd9c] hover:bg-[#84bd75] transition ease-in text-[#070c06] font-semibold py-2 px-4 rounded-md mt-4"
            onClick={() => handleAddBookShelf(book)}
        >
          Add to Bookshelf
        </button>
        )
        }
    </>
  );
};
