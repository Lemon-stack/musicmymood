import RPcards from "./RPcards";

export default function Recentlyplayed() {
  return (
    <div className="mt-4 flex flex-col w-full h-full gap-3">
      <h2 className="text-start font-semibold text-gray-700 pl-2">
        Recently Played
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <RPcards />
        <RPcards />
      </div>
    </div>
  );
}
