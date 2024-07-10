import Played from "./played";
import Recentlyplayed from "./recentlyplayed";

export default function Container(){
    return (
        <div className="w-full lg:w-[75%] h-full rounded-lg">
            <Played/>
            <Recentlyplayed/>
        </div>
    )
}