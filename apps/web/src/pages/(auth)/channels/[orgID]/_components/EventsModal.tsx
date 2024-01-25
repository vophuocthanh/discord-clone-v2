import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

export default function EventsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20">
          <Calendar />
          <p> Events </p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">Hello</DialogContent>
    </Dialog>
  );
}
