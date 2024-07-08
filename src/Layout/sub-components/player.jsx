import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import PlayedM from "./PlayedM";
export default function Player() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full">
      {/* player main ctn */}

      <div className="flex flex-col justify-center items-center w-full h-full backdrop-blur-lg">
        <div className="flex justify-center items-center mb-4">
          {/* backward btn */}
          <svg
            className="w-16 h-16 text-purple"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0V6Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="relative flex justify-center items-center mx-14">
            <span className="bg-gray-900/50 size-72 rounded-full" />
            <p className="bg-purple/50 p-5 bg-opacity-5 flex justify-center items-center absolute rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.4}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </p>
          </div>

          {/* forward btn */}
          <svg
            className="w-16 h-16 text-purple"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* shuffle and repeat buttons */}
        <div className="flex justify-center items-center w-[60%]">
          {/* shuffle */}
          <p className="p-2 rounded-full bg-purple/10">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
              />
            </svg>
          </p>
          <div className="w-[60%] px-4">
            <Progress value={progress} className="w-full h-2" />
          </div>
          <p className="p-2 rounded-full bg-purple/10">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
              />
            </svg>
          </p>
        </div>
      <PlayedM/>
      </div>

    </div>
  );
}
