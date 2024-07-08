export default function PlayedM(){
    return( 
    <div className="absolute top-[15%] left-2 p-3 flex justify-between items-center backdrop-blur-md bg-gray-50/5 w-[20%] rounded-md">
        <div className="flex justify-center items-center">
            <span className="min-h-12 min-w-12 rounded-full bg-gray-50/10 absolute animate-pulse"></span>
            <img className="size-11 relative" src="/sound.svg" alt="" />
        </div>
        <div className="leading-5 flex justify-center items-center">
            <span className="flex flex-col">
            <h2 className="font-semibold">Solitary</h2>
            <p className="font-thin text-gray-500">Travis</p>
            </span>
            <span className="text-sm text-purple font-semibold ml-3">2:30</span>
        </div>
    </div>)
}