export default function Played() {
  return (
    <div className="flex lg:justify-between bg-purple/40 w-full rounded-xl shadow-lg z-10 backdrop-blur-3xl p-3 lg:min-h-44 sticky top-16">
      <section className="flex min-w-[55%] lg:min-w-[30%] flex-col justify-start px-4 py-4">
        <p className="bg-muted rounded-md text-sm font-semibold py-1.5 text-purple mb-2">
          Now playing
        </p>
        <h2 className="text-start font-semibold text-2xl lg:text-3xl text-gray-50">
          Holla mood
        </h2>
        <p className="text-start font-light text-sm lg:text-md text-gray-200/60">
          Hallis ft mid-wayne
        </p>
      </section>

      {/* player controls */}
      <section className="relative min-w-[45%] flex justify-center items-center lg:min-w-64 rounded-md lg:min-h-40">
        {/* previous */}
        <div className="z-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="size-6 text-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>

          {/* play */}
          <div className="p-2 lg:p-4 rounded-full flex justify-center items-center mx-2 lg:mx-4 bg-purple border-2 lg:border-[2rem] border-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="size-6 text-white text-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>
          {/* next */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="size-6 text-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
