
const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between border border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <h1 className="font-bold md:text-xl text-gray-700 dark:text-gray-300"><span className="text-red-400">H</span>Care</h1>
      </div>
      <div className="px-4">
        <ul className="flex gap-10 text-gray-700 dark:text-gray-300">
            <li className="hover:cursor-pointer hover:text-red-400">
                Home
            </li>
            <li className="hover:cursor-pointer hover:text-red-400">
                How to use
            </li>
            <li className="hover:cursor-pointer hover:text-red-400">
                Testimonials
            </li>
            <li className="hover:cursor-pointer hover:text-red-400">
                Predict
            </li>
        </ul>
      </div>
      {/* <button
        className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button> */}
    </nav>
  );
};

export default Navbar;