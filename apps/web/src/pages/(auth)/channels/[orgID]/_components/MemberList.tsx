import { useParams } from "@/router";
import { groupBy } from "lodash-es";
import { useQuery } from "@tanstack/react-query";
import PopoverMember from "./PopoverMember";
import { getChannelMembers } from "@/apis/channels";

export default function MemberList() {
  const { channelID, orgID } = useParams("/channels/:orgID/:channelID");

  const { data } = useQuery({
    queryKey: ["channels", channelID, "members"],
    queryFn: () => getChannelMembers(orgID, channelID),
  });
  return (
    <div className="flex flex-col gap-8">
      {Object.entries(groupBy(data?.data, "category.name")).map(
        ([category, members]) => (
          <div key={category} className="flex flex-col gap-4">
            <p className="font-bold">
              {category} - {members.length}
            </p>
            <div className="flex flex-col gap-4">
              {members.map((member) => (
                <PopoverMember member={member} key={member.id} />
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
