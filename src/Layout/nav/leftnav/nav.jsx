export default function Nav(){
    return(
     <div className="lg:w-[20%] flex flex-col bg-blk min-h-screen fixed px-5 py-6 text-white">
        <div>
        <p className="text-purple font-bold text-start"><span className="text-white">.</span>musicmymood</p>
        </div>

        <section className="mt-8">
        <ul>
            <li className="flex text-md hover:text-white hover:bg-purple/10 p-2 items-start justify-start border-e transition-all ease-in hover:border-white border-purple">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            Home</li>
        </ul>
        </section>
     </div>
    )
}