import { getMembers } from '@/apis/members';
import PopoverMember from './popover/PopoverMember';
import { groupBy } from 'lodash-es';
import { useQuery } from 'react-query';
import { useParams } from '@/router';
import { SkeletonMember } from './skeleton/SkeletonMemmber';

export default function MemberList() {
  const { channelID, orgID } = useParams('/channels/:orgID/:channelID');
  const { data } = useQuery(['members'], () => getMembers(channelID, orgID));
  return (
    <div className='flex flex-col gap-8'>
      {!data ? (
        <div className='flex flex-col space-y-10'>
          <SkeletonMember />
          <SkeletonMember />
          <SkeletonMember />
        </div>
      ) : (
        <div className=''>
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
      )}
    </div>
  );
}
