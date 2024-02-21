import { getFriends } from '@/apis/friends';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuery } from '@tanstack/react-query';

export default function Me() {
  const friendsQuery = useQuery({
    queryKey: ['friends'],
    queryFn: () => getFriends(),
  });

  return (
    <div className='w-full bg-primary-foreground/20'>
      <Tabs defaultValue='all' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='pending'>Pending</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          {friendsQuery.data?.map((friend) => (
            <div key={friend.id}>
              <p>{friend.user.username}</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value='pending'></TabsContent>
      </Tabs>
    </div>
  );
}
