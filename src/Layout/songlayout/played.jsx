export default function Played() {
  return (
    <div className="flex justify-between bg-white w-full rounded-lg shadow-lg p-3 min-h-44 sticky top-10">
      <section className="flex flex-col justify-start pl-6 py-4">
        <p className="bg-muted rounded-md text-sm font-semibold py-1.5 text-gray-500 mb-2">Now playing</p>
        <h2 className="text-start font-semibold text-3xl text-purple">
          Holla mood
        </h2>
        <p className="text-start font-light">Hallis ft mid-wayne</p>
      </section>

      {/* player controls */}
      <section className="relative flex justify-center items-center min-w-64 rounded-md min-h-40">
        {/* previous */}
        <div className="z-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="size-6 text-purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>

          {/* play */}
          <div className="p-4 rounded-full flex justify-center items-center mx-4 bg-purple border-[2rem] border-gray-50">
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
            className="size-6 text-purple"
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
