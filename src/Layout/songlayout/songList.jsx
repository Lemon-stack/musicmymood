
export default function SongList() {
  return (
    <div className="bg-lightBlk p-4 lg:rounded-lg min-h-60">
      <h2 className="lg:font-semibold text-start text-lg mb-7 border-l border-l-purple pl-3">Top Charts</h2>
      <section className="flex w-full justify-start items-center">
      <img className="size-12 rounded-sm object-cover" src="/musicThumbnail.jpg" alt="" />
     <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-start justify-end ms-3 leading-3">
        <h3 className="font-semibold">Despacito</h3>
          <p className="text-sm">someone</p>
      </div>
      <span className="text-sm px-3 border-l border-l-purple">2:00</span>
     </div>
      </section>
    </div>
  )
}
