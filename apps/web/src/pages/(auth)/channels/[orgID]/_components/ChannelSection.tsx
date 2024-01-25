import { Channel, ChannelType } from "@/apis/channels";
import { cn } from "@/lib/utils";
import { useParams } from "@/router";
import { Hash, MessageCircle, Volume2 } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import EditChannel from "./EditChannel";
import InviteFriendsModal from "./InviteFriendsModal";

interface Props {
  channel: Channel;
}

export default function ChannelSection({ channel }: Props) {
  const navigate = useNavigate();
  const { channelID, orgID } = useParams('/channels/:orgID/:channelID');

  const navigateToChannel = (id: string) => {
    navigate(`/channels/${orgID}/${id}`);
  };

  const icon = useMemo(() => {
    if(channel.type === ChannelType.VOICE) return <Volume2 />
    if(channel.type === ChannelType.TEXT) return <Hash />
    return <MessageCircle />
  }, [channel])


  return (
    <div
      className={cn(
        'px-4 py-3 group cursor-pointer flex justify-between hover:text-primary-foreground/80 hover:bg-primary-foreground/20',
        {
          'bg-primary-foreground/20 text-primary-foreground/80': channel.id === channelID,
        }
      )}
      key={channel.id}
      onClick={() => navigateToChannel(channel.id)}
    >
      <div className="flex gap-2">
        {icon}
        {channel.name}
      </div>
      <div className="group-hover:flex gap-2 hidden">
        <InviteFriendsModal />
        <EditChannel />
      </div>
    </div>
  );
}
