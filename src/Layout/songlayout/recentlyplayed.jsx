import RPcards from "./RPcards";
import { Badge } from "@/components/ui/badge"
export default function Recentlyplayed() {
  return (
    <div className="mt-4 flex flex-col w-full h-full gap-3">
      <div className="grid p-2 grid-cols-6 gap-3">
      <Badge className="bg-green-500 py-1 text-sm px-12 flex justify-center items-center">Normal</Badge>
      <Badge className="bg-red-500 py-1 text-sm px-12 flex justify-center items-center">Angry</Badge>
      <Badge className="bg-gray-500 py-1 text-sm px-12 flex justify-center items-center">Depressed</Badge>
      <Badge className="bg-yellow-500 py-1 text-sm px-12 flex justify-center items-center">Happy</Badge>
      <Badge className="bg-blue-500 py-1 text-sm px-12 flex justify-center items-center">Calm</Badge>
      <Badge className="bg-stone-500 py-1 text-sm px-12 flex justify-center items-center">Stressed</Badge>
      </div>
      <h2 className="text-start font-semibold text-gray-700 pl-2">
        Recently Played
      </h2>
      <div className="grid grid-cols-3">
        <RPcards />
        <RPcards />
      </div>
    </div>
  );
}
