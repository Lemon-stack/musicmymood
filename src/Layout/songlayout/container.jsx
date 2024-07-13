import Moodpick from "./moodPick";
import Played from "./played";
import Recentlyplayed from "./recentlyplayed";
import SongList from "./songList";

export default function Container(){
    return (
        <>
        <div className="flex flex-col text-gray-50">

        <div className="flex text-gray-50 flex-col w-full h-full rounded-lg">
            <Played/>
            <Recentlyplayed/>
            {/* song recommendations and played container */}
        </div>
          <div className='lg:absolute flex flex-col gap-2 right-4 bottom-3 lg:right-8 lg:min-w-[26rem]'>
            <Moodpick/>
            <SongList/>
          </div>
        </div>
        </>
    )
}