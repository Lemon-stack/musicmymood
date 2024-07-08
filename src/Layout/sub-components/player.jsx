export default function Player() {
  return (
    <div className="w-[75%]">
      {/* player main ctn */}

      <div className="flex justify-center items-center">
        {/* backward btn */}
        <svg
          className="w-12 h-12 text-purple"
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
          <img
            className="bg-gray-900/50 size-48 rounded-full"
            src="/boy.png"
            alt=""
          />
          <p className="bg-purple/50 p-14 bg-opacity-5 absolute rounded-full">

         <svg className="w-14 h-14 text-purple" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
</svg>
          </p>

        </div>

        {/* forward btn */}
        <svg
          className="w-12 h-12 text-purple"
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
    </div>
  );
}
