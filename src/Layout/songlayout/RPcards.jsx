export default function RPcards() {
  return (
    <div className="flex flex-col justify-center rounded-md shadow-sm max-w-56 p-2">
      <img
        className="size-56 object-cover rounded-md"
        src="/musicThumbnail.jpg"
        alt="music-thumbnail"
      />
      <div className="flex flex-col items-start mt-2">
      <h4 className="text-start font-semibold text-xl">Believer</h4>
      <p>Imagine Dragons</p>
      </div>
    </div>
  );
}
