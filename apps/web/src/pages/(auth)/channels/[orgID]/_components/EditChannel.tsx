import TooltipIcon from '@/components/TooltipIcon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Settings } from 'lucide-react';

export default function EditChannel() {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipIcon icon={<Settings className="cursor-pointer" />} content="Edit Channel" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary-foreground/10">Hello</DialogContent>
    </Dialog>
  );
}
