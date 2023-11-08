import { useParams } from '@/router';

export default function Channels() {
  const { channelID } = useParams('/orgs/:orgID/channels/:channelID');
  return <div>{channelID}</div>;
}
