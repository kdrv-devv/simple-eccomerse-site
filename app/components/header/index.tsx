import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

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

          {session ? (
            <div className="flex items-center gap-1">
              <div className="flex flex-col gap-0 items-center">
                <img
                  src={session.user?.image || ""}
                  alt="Avatar"
                  className="rounded-[100%]"
                  width={50}
                  height={50}
                />
                <p className="font-[400] text-[16px]">{session.user?.name}!</p>
              </div>

              <button onClick={() => signOut()}>Log out</button>
            </div>
          ) : (
            <>
              <button onClick={() => signIn("github")}>
                Login-Github
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
