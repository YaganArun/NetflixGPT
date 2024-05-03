export default function VideoTitle({ title, overview }) {
  return (
    <div className="grid grid-cols-12">
      <div className="sm:row-span-1"></div>
      <div className=" col-span-10 md:col-span-4">
        <p className="text-sm sm:text-lg md:text-xl lg:text-3xl font-bold text-white">
          {title}
        </p>
        <p className="my-4 text-white text-sm sm:text-sm sm:my-6">{overview}</p>
        <div>
          <button className="border  px-8 py-4 mr-6 bg-white text-black hover:opacity-70 rounded-xl">
            ▶️ Play
          </button>
          <button className=" bg-slate-800 text-white hover:opacity-80 px-8 py-4 rounded-xl">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="flex absolute bg-gradient-to-r from-black">
<div className="w-1/6"></div>
<div className=" flex flex-col h-screen w-screen justify-start flex-wrap ">
  <div className="h-2/6"></div>
  <p className="text-3xl font-bold text-white">{title}</p>
  <p className="w-4/12 my-6 text-white">{overview}</p>
  <div>
    <button className="border  px-8 py-4 mr-6 bg-white text-black hover:opacity-70 rounded-xl">
      ▶️ Play
    </button>
    <button className=" bg-slate-800 text-white hover:opacity-80 px-8 py-4 rounded-xl">
      More Info
    </button>
  </div>
</div>
</div> */
}
