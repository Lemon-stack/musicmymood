import Nav from "../nav/leftnav/nav";
import Topnav from "../nav/topnav/nav";
import Container from "../songlayout/container";
export default function Home() {
  return (
    <>
      <div className="flex bg-blk min-h-screen max-h-full w-full">
        <div className="hidden lg:flex h-full bg-lightBlk lg:w-[6%]">
          {/* left nav */}
          <Nav />
        </div>

        <div className="flex flex-col w-full bg-blk">
          <Topnav />
          <section className="w-full h-full">
            <Container />
          </section>
        </div>
      </div>
    </>
  );
}
