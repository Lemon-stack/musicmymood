import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Played() {
  const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="max-w-full shadow-lg overflow-hidden sticky top-[3.6rem]">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80"
          className="object-cover"
        />
        <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
          <h3 className="font-bold">Super Artist</h3>
          <span className="opacity-70">Albumtitle</span>
        </div>
      </div>
      <div>
       <Progress value={progress}/>
      </div>
      <div className="flex justify-between text-xs font-semibold bg-blk/80 backdrop-blur-2xl text-gray-50 px-4 py-2">
        <div>1:50</div>
        <div className="flex space-x-3 p-2">
          <button className="focus:outline-none">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1={5} y1={19} x2={5} y2={5} />
            </svg>
          </button>
          {/* play button */}
          <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-purple focus:outline-none">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1={19} y1={5} x2={19} y2={19} />
            </svg>
          </button>
        </div>
        <div>3:00</div>
      </div>
      
    </div>
  );
}
