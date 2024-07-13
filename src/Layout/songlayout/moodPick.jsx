export default function Moodpick() {
  return (
    <div className="min-h-44 hidden lg:block bg-lightBlk rounded-lg mt-2 p-4">
      <div className="grid grid-cols-4 gap-1">
        <button className="px-2 py-2.5 rounded-sm text-sm bg-green-700 flex justify-center items-center">
          Happy
        </button>
        <button className="px-2 py-2.5 rounded-sm text-sm bg-blue-700 flex justify-center items-center">
          Calm
        </button>
        <button className="px-2 py-2.5 rounded-sm text-sm bg-red-700 flex justify-center items-center">
          Angry
        </button>
        <button className="px-2 py-2.5 rounded-sm text-sm bg-green-700 flex justify-center items-center">
          Happy
        </button>
        <button className="px-2 py-2.5 rounded-sm text-sm bg-blue-700 flex justify-center items-center">
          Calm
        </button>
        <button className="px-2 py-2.5 rounded-sm text-sm bg-red-700 flex justify-center items-center">
          Angry
        </button>
      </div>
    </div>
  );
}
