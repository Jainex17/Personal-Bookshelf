import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav className="flex justify-between mx-5 md:mx-10 my-5">
        <div>
          <Link to="/"><h1 className="text-3xl font-bold">Personal Bookshelf</h1></Link>
        </div>
        <div>
          <Link to="/mybookshelf">
          <button className="bg-[#a7cd9c] hover:bg-[#84bd75] transition ease-in duration-100  text-[#070c06] font-semibold py-2 px-4 rounded-md">
            My Bookshelf
          </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
