import Nav from "../nav/leftnav/nav";
import Rightnav from "../nav/rightnav/nav";
import Topnav from "../nav/topnav/nav";
import Container from "../songlayout/container";
export default function Home() {
  return (
    <>
      <div className="flex bg-blk min-h-screen w-full">
        <div className="hidden lg:block bg-lightBlk lg:w-[25%]">
          {/* left nav */}
          <Nav />
        </div>

        <div className="flex flex-col w-full bg-muted">
          <Topnav />
          <section className="w-full h-full bg-blk">
            <div className="flex w-full gap-5">
              <Container />
              <div className="hidden lg:flex lg:w-[35%]">
                <Rightnav />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
