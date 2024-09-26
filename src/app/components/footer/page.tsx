import Link from "next/link";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-blue-950 h-40 flex text-yellow-300 justify-between items-center mt-80">
        <h1 className="ml-6 text-3xl">This is a Footer Page</h1>
        <ul className="mr-6">
          <li className="mr-80 mt-2 hover:text-white">
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="mr-80 mt-2 hover:text-white">
            <Link href="/components/about">
              <button>About</button>
            </Link>
          </li>
          <li className="mr-80 mt-2 hover:text-white">
            <Link href="/components/contact">
              <button>Contact</button>
            </Link>
          </li>
          <li className="mr-80 mt-2 hover:text-white">
            <Link href="/components/navbar">
              <button>Navbar</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-slate-400">
        <h1 className="text-blue-950 text-center">
          <u>© All Copy Right Reserved! Made By Mithu</u>
        </h1>
      </div>
    </>
  );
};

export default Footer;
