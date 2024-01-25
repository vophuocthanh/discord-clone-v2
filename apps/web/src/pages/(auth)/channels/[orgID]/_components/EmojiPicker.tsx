import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Meh } from "lucide-react";
import { default as EmojiPickerRoot, Theme, type EmojiClickData } from 'emoji-picker-react';


interface Props {
  onEmojiClick: (emoji: EmojiClickData) => void;
}

export default function EmojiPicker({ onEmojiClick }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Meh className="w-8 h-8 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <EmojiPickerRoot theme={Theme.DARK} onEmojiClick={onEmojiClick} />
      </PopoverContent>
    </Popover>
  );
}
