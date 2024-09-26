import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="bg-blue-950 h-14 flex text-yellow-300 justify-between items-center">
        <h1 className="ml-6 text-3xl ">This is a Home Page</h1>
        <ul className="mr-6 flex">
          <li className="mr-6 hover:text-white">
            <Link href="/components/about">
              <button>About</button>
            </Link>
          </li>
          <li className="mr-6 hover:text-white">
            <Link href="/components/contact">
              <button>Contact</button>
            </Link>
          </li>
          <li className="mr-6 hover:text-white">
            <Link href="/components/navbar">
              <button>Navbar</button>
            </Link>
          </li>
          <li className="mr-6 hover:text-white">
            <Link href="/components/footer">
              <button>Footer</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-slate-400 h-screen">
        <div className="bg-slate-400 h-screen"></div>
        <h1 className="text-blue-950 text-center bg-slate-400">
          <u>© All Copy Right Reserved! Made By Mithu</u>
        </h1>
      </div>
    </>
  );
};

export default Main;
