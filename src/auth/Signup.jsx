import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function Signup() {
  const navigate = useNavigate();

  const { signup, googleSignin, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message.match(/auth\/([^)]+)/);
      setError(errorMessage[1]);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  }
  async function SigninWithGoogle(e) {
    e.preventDefault();
    try {
      const result = await googleSignin();
      console.log(result);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message.match(/auth\/([^)]+)/);
      setError(errorMessage[1]);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  }

  return (
    <div>
      {error && (
        <div className="absolute top-0 right-0 bg-clRed text-white bg-red-600 px-8 lg:px-10 py-1 flex justify-center items-center">
          {error}
        </div>
      )}
      <div className="flex flex-row-reverse min-h-screen justify-center items-center bg-gray-100">
        <div className="text-white bg-gradient-to-r from-gray-950 to-black w-1/2 h-screen hidden lg:flex lg:flex-col items-start">
          <div className="p-8 z-10">
            <p className="text-purple font-bold text-start">
              <span className="text-white">.</span>musicmymood
            </p>
            <p className="lg:text-4xl font-bold">Music for your mood</p>
          </div>
          {/* image container */}
          <div className="relative mt-auto">
            <div className="bg-purple/30 absolute backdrop-blur-lg rounded-full p-4 rotate-[30deg] right-20">
              <img className="size-12" src="/headphone.svg" alt="" />
            </div>
            <div className="bg-purple/30 absolute backdrop-blur-lg rounded-full p-4 rotate-[8deg] bottom-20 left-44 z-10">
              <img className="size-12" src="/smile.svg" alt="" />
            </div>
            <div className="bg-purple/30 absolute rounded-full backdrop-blur-lg p-4 rotate-[-30deg] top-4 left-20">
              <img className="size-12" src="/musicNote.svg" alt="" />
            </div>

            <p className="absolute right-0 bg-purple/5 rounded-3xl w-[80%] h-full"></p>
            <img className="z-20" src="/boy.png" alt="" />
          </div>
        </div>

        <div className="lg:px-20 w-full lg:w-1/2 flex justify-center items-center lg:mt-0">

          <form
            onSubmit={handleSubmit}
            className="w-full lg:mt-0 my-[12%] p-10 leading-10 flex flex-col z-30"
          >
            <p className="text-purple lg:hidden text-lg font-bold text-end absolute top-6 right-7">
              <span className="">.</span>musicmymood
            </p>
            <h3 className="text-start text-2xl font-semibold mb-4 text-purple">
              Signup
            </h3>
            <label htmlFor="email" className="text-start">
              Email
            </label>
            <Input type="email" ref={emailRef} placeholder="Email" />
            <label htmlFor="password" className="text-start">
              Password
            </label>
            <Input type="password" ref={passwordRef} placeholder="password" />
            <button
              type="submit"
              className="py-1 mt-5 bg-purple hover:bg-purple/90 transition-all ease-in rounded-lg text-white flex justify-center items-center"
            >
              Signup
            </button>
            <button
              onClick={SigninWithGoogle}
              className="border border-purple flex justify-center items-center text-purple mt-2 py-0.5 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-purple -mt-0.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Continue with google
            </button>
            <p className="text-light text-gray-600 mt-2 text-sm">
              Already have an account?{" "}
              <a href="/login" className="hover:text-purple text-purple/90">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
