import { NavLink } from "react-router-dom";

export default function Nav() {
  return (

      <section className="lg:w-[5.7%] min-h-screen bg-lightBlk h-full z-20 items-center flex-col fixed left-0 pt-24 text-gray-50">
        <ul className=" flex flex-col items-center">
          <NavLink
            to="/dashboard"
            style={({ isActive }) => {
              return {
                color: isActive ? "#7b2cbf" : "#fff",
              };
            }}
          >
            <li className="flex text-md hover:text-purple hover:border-r hover:border-r-gray-50 mb-12 justify-center transition-all ease-in hover:border-white">
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
            </li>
          </NavLink>

          {/* saved */}
          <li className="flex text-md hover:text-purple hover:border-r hover:border-r-gray-50 mb-10 justify-center transition-all ease-in hover:border-white">
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
          </li>
       
        </ul>
      </section>
  );
}
