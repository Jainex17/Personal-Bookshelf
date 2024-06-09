interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <>
      <section className="mx-10 mt-10 md:mx-20 flex justify-center">
        <div className="flex justify-center relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="search"
            placeholder="Search Books by Name"
            className="p-5 rounded-full w-60 md:w-[30rem] lg:w-[50rem] pl-14"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
    </>
  );
};
