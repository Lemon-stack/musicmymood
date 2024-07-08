import Nav from "./sub-components/Nav";
import Player from "./sub-components/player";
import RightNav from "./sub-components/RightNav";

export default function Home() {
  return (
  <>
  <Nav/>
  <div className="bg-blk text-white w-full h-screen flex justify-center">
    
    <Player/>
    <RightNav/>
  </div>

  </>
  )
}
