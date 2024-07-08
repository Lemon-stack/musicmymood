import { useRef, useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function Signup() {
  const navigate = useNavigate();

  const { signup, googleSignin } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

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
      <div className="flex flex-row-reverse justify-center items-center">
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
          <div className="bg-purple/30 absolute rounded-full backdrop-blur-lg p-4 rotate-[-30deg] bottom-0 left-0 lg:hidden">
            <img className="size-8" src="/musicNote.svg" alt="" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:mt-0 my-[12%] p-10 leading-10 flex flex-col z-30"
          >
            <p className="text-purple lg:hidden text-lg font-bold text-end absolute top-6 right-7">
              <span className="">.</span>musicmymood
            </p>
            <h3 className="text-start text-2xl font-bold mb-4 text-purple">
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
              className="font-semibold py-1 mt-5 bg-purple hover:bg-purple/90 transition-all ease-in rounded-lg text-white flex justify-center items-center"
            >
              Signup
            </button>
            <button
              onClick={SigninWithGoogle}
              className="border border-purple font-semibold flex justify-center items-center text-purple mt-2 py-0.5 rounded-lg"
            >
              <img className="size-7 mr-1" src="/google.svg" alt="" />
              Continue with google
            </button>
            <p className="text-light text-gray-600 mt-2 text-sm">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
