import TooltipIcon from '@/components/TooltipIcon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { UserPlus } from 'lucide-react';

export default function InviteFriendsModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipIcon icon={<UserPlus className="cursor-pointer" />} content="Create Invite" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary-foreground/10">Hello</DialogContent>
    </Dialog>
  );
}
