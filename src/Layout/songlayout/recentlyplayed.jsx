import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Recentlyplayed() {
  return (
    <div className="mt-4 flex flex-col w-full h-full gap-3 justify-center">
      <h2 className="text-start font-semibold text-gray-50 pl-2">
        Recently Played
      </h2>
      <Carousel className="max-w-[40rem] mr-2 lg:mr-4 ml-2">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:w-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <div className="absolute inset-0 bg-center h-full dark:bg-black" />
                    <div className="group relative aspect-square m-0 flex rounded-xl shadow-xl border-0 sm:mx-auto sm:max-w-lg">
                      <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img
                          src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-105"
                          alt=""
                        />
                      </div>
                      <div className="absolute bottom-0 z-20 m-0 pb-3 ps-3 transition duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-100">
                        <h1 className="text-start text-lg -mb-1 lg:-mb-2 font-bold text-white shadow-xl">
                          Azores
                        </h1>
                        <h1 className="text-[13px] text-start leading-4 font-light text-gray-200 shadow-xl">
                          A Little Paradise in Portugal
                        </h1>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:ml-5 text-blk" />
        <CarouselNext className="hidden lg:mr-5 text-blk" />
      </Carousel>
    </div>
  );
}
