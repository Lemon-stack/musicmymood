import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/useAuth";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import Contact from "@/Layout/sub-components/contact";
// import { Badge } from "@/components/ui/badge";

export default function Topnav() {
  const { currentUser } = useAuth();
  return (
    <div className="flex justify-between w-full px-4 py-2.5 items-center sticky top-0 z-20 bg-lightBlk/90 backdrop-blur-md">
      <Sheet>
        <SheetTrigger>
          {/* hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-50 lg:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="text-gray-50">
          <SheetHeader>
            <h2><span className="text-purple">. </span>musicmymood</h2>
          </SheetHeader>
          {/* links */}
          <ul className=" flex flex-col items-start mt-8">
            <NavLink
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#7b2cbf" : "#fff",
                };
              }}
            >
              <li className="flex text-md cursor-pointer hover:text-purple mb-5 justify-center transition-all ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </li>
            </NavLink>

            {/* saved */}
            <li className="flex text-md cursor-pointer hover:text-purple mb-10 justify-center transition-all ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              Favourites
            </li>
          </ul>

          <section className="flex flex-col justify-between">
            <div className="mt-3">
              <h2 className="mb-1">Your Mood?</h2>
              <div className="grid grid-cols-3 gap-1.5 bg-lightBlk p-3 rounded-lg">
                <button className="px-2 py-2.5 rounded-sm text-sm bg-green-700 hover:opacity-75 flex justify-center items-center">
                  Happy
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-blue-700 hover:opacity-75 flex justify-center items-center">
                  Calm
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-gray-700 hover:opacity-75 flex justify-center items-center">
                  Sleepy
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-red-700 hover:opacity-85 flex justify-center items-center">
                  Angry
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-green-700 hover:opacity-75 flex justify-center items-center">
                  Happy
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-blue-700 hover:opacity-75 flex justify-center items-center">
                  Calm
                </button>
                <button className="px-2 py-2.5 rounded-sm text-sm bg-red-700 hover:opacity-75 flex justify-center items-center">
                  Angry
                </button>
              </div>
            </div>

            {/* contact us */}
            <Contact />
          </section>
        </SheetContent>
      </Sheet>
      <div className="flex justify-evenly items-center">
        {/* mood picker */}
        {/* <Popover>
          <PopoverTrigger className="py-1.5 text-sm font-semibold px-6 rounded-lg bg-gray-50 text-purple mr-2 animate-shake">
            Your mood?
          </PopoverTrigger>
          <PopoverContent className="border-0">
            <div className="grid p-2 grid-cols-3 lg:grid-cols-3 gap-3">
              <Badge className="bg-green-500 py-1 text-sm px-12 flex justify-center items-center">
                Normal
              </Badge>
              <Badge className="bg-red-500 py-1 text-sm px-12 flex justify-center items-center">
                Angry
              </Badge>
              <Badge className="bg-gray-500 py-1 text-sm px-12 flex justify-center items-center">
                Depressed
              </Badge>
              <Badge className="bg-yellow-500 py-1 text-sm px-12 flex justify-center items-center">
                Happy
              </Badge>
              <Badge className="bg-blue-500 py-1 text-sm px-12 flex justify-center items-center">
                Calm
              </Badge>
              <Badge className="bg-stone-500 py-1 text-sm px-12 flex justify-center items-center">
                Stressed
              </Badge>
            </div>
          </PopoverContent>
        </Popover> */}

        <svg
          className="w-6 h-6 mr-2 text-gray-50 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
        </svg>

        <div className="bg-purple/60 rounded-md min-w-20 flex items-center justify-start p-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[12px] text-gray-50 font-light ml-2">
            {currentUser.displayName}
          </p>
        </div>
      </div>
    </div>
  );
}
