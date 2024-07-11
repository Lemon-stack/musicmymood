import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function Topnav() {
  return (
    <div className="flex justify-between w-full px-4 py-2 items-center sticky top-0 z-20 bg-lightBlk">
      <Sheet>
        <SheetTrigger>
      {/* hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-50 lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="text-gray-50">
          <SheetHeader>
            <SheetTitle className="text-gray-50">
              Are you absolutely sure?
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex justify-evenly items-center">
        {/* mood picker */}
        <Popover>
          <PopoverTrigger className="py-1.5 text-sm font-semibold px-6 rounded-lg bg-gray-50 text-purple mr-2 animate-shake">
            Your mood?
          </PopoverTrigger>
          <PopoverContent className="border-0">
            <div className="grid p-2 grid-cols-3 lg:grid-cols-3 gap-3">
              <Badge className="bg-green-500 py-1 text-sm px-12 flex justify-center items-center">
                Normal
              </Badge>
              <Badge className="bg-red-500 py-1 text-sm px-12 flex justify-center items-center">
                Angry
              </Badge>
              <Badge className="bg-gray-500 py-1 text-sm px-12 flex justify-center items-center">
                Depressed
              </Badge>
              <Badge className="bg-yellow-500 py-1 text-sm px-12 flex justify-center items-center">
                Happy
              </Badge>
              <Badge className="bg-blue-500 py-1 text-sm px-12 flex justify-center items-center">
                Calm
              </Badge>
              <Badge className="bg-stone-500 py-1 text-sm px-12 flex justify-center items-center">
                Stressed
              </Badge>
            </div>
          </PopoverContent>
        </Popover>

        <svg
          className="w-6 h-6 mr-1 text-gray-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
        </svg>

        <Avatar>
          <AvatarImage className="border-2 border-purple" src="https://github.com/shadcn.png" />
          <AvatarFallback className="border-2 border-purple">CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
