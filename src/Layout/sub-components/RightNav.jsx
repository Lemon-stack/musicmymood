export default function RightNav() {
  return <div className="w-[25%] bg-[#0c0a0b] p-6">
    <section className="flex">
      <img src="https://github.com/shadcn.png" className="size-12" alt="" />
      <div className="flex flex-col justify-center items-start ms-2 leading-4">
        <h4 className=" font-semibold">Too late</h4>
        <span className=" text-sm font-thin text-gray-50/50">The weekend</span>
        <span className="text-sm font-semibold text-purple">3:00</span>
      </div>
    </section>
  </div>;
}
