import { ChevronDown, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Org } from "@/lib/type";
import AddCategoryModal from "./AddCategoryModal";

interface Props {
  org?: Org;
}

export default function OrgMenuDropDown({ org }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border-b h-14 border-primary-foreground/10 p-3 flex items-center justify-between hover:bg-primary-foreground/20">
          <div className="flex gap-2 text-2xl items-center">
            <Home />
            <h1 className="font-bold"> {org?.name} </h1>
          </div>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-2">
        <AddCategoryModal />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
