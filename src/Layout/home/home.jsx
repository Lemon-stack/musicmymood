import Nav from "../nav/leftnav/nav";
import Rightnav from "../nav/rightnav/nav";
import Topnav from "../nav/topnav/nav";
import Container from "../songlayout/container";
export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="lg:w-[25%]">
          <Nav />
        </div>

        <div className="flex flex-col w-full bg-muted">
          <Topnav />
          <section className="w-full h-full bg-blk px-6">
            <div className="flex w-full gap-5 mt-2">
              <Container />
              <div className="hidden lg:w-[35%] bg-blk/95">
              <Rightnav />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
