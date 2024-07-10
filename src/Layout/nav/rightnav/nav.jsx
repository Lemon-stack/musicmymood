export default function Rightnav() {
  return (
    <div className="w-[25%] flex flex-col h-full fixed right-3 rounded-xl bg-lightBlk text-gray-50 p-3.5">
      <div className="flex items-start mb-3">
        <p className="text-purple font-semibold">Queue</p>
        {/* shuffle */}
        <svg
          className="w-6 h-6 ml-3 text-purple"
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

        {/* forward */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-purple ml-3"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>
      <section className="flex">
        <img
          className="size-14 object-cover rounded-sm"
          src="/musicThumbnail.jpg"
          alt="music-thumbnail"
        />
        <div className="flex flex-col items-start justify-end ms-2">
          <h3 className="font-semibold">Payback</h3>
          <p className="text-sm font-light text-gray-600">Kiddo mane</p>
        </div>
      </section>
    </div>
  );
}
