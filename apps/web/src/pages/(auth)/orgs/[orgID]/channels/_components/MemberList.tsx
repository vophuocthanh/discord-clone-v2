import { getMembers } from '@/apis/members';
import PopoverMember from './PopoverMember';
import { groupBy } from 'lodash-es';
import { useQuery } from 'react-query';
import { useParams } from '@/router';

export default function MemberList() {
  const { orgID, channelID } = useParams('/orgs/:orgID/channels/:channelID');
  const { data } = useQuery(['members'], () => getMembers(orgID, channelID));
  return (
    <div className='flex flex-col gap-8'>
      {Object.entries(groupBy(data?.data, 'category.name')).map(
        ([category, members]) => (
          <div key={category} className='flex flex-col gap-4'>
            <p className='font-bold'>
              {category} - {members.length}
            </p>
            <div className='flex flex-col gap-4'>
              {members.map((member) => (
                <PopoverMember member={member} key={member.id} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
