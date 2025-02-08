import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="header sticky top-0 z-10 border-b-2 bg-white">
      <div className="container w-[90%] m-auto flex items-center justify-between py-4">
        <div className="header-left flex items-center gap-20">
          <h3 className="font-[600] text-[20px]">CRIO</h3>
          <form
            action=""
            className=" hidden md:flex p-2 items-center gap-2 border-2 w-[300px] rounded-md"
          >
            <button className="text-[19px]">
              <IoSearchOutline />
            </button>
            <input
              type="text"
              placeholder="Search Products Here"
              className="w-full  outline-none"
            />
          </form>
        </div>
        <div className="header-right flex items-center gap-10 text-[18px] font-[600]">
          <Link href={"/"}>Orders</Link>

          <div className="flex items-center gap-5">
            <Link href={"/"}>Sign up</Link>
            <div className="border-2 border-black  h-8"></div>
            <Link href={"/"}>Login In</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
