import { Frame, HelpCircle } from "lucide-react";

export default function Component() {
  return (
    <div>
      <header className="p-3 h-14 border-b bg-primary-foreground/20 text-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Frame />
          Members
        </div>
        <div className="flex items-center gap-4">
          <HelpCircle className="cursor-pointer" />
        </div>
      </header>
      <div className="p-6 ">
        Hello
      </div>
    </div>
  );
}
