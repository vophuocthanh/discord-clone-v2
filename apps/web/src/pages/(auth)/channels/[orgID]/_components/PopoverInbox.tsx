import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Inbox } from "lucide-react";


export default function PopoverInbox() {
  return (
    <Popover>
      <PopoverTrigger className="[&_svg]:data-[state=open]:text-white">
        <Inbox className="cursor-pointer text-gray-400 hover:text-white" />
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-slate-950">Hello</PopoverContent>
    </Popover>
  );
}
