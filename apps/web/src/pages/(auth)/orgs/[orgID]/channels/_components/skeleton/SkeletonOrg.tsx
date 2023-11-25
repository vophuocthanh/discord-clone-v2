import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonOrg() {
  return (
    <div className='flex items-center space-x-4'>
      <Skeleton className='h-14 w-14 rounded-full' />
    </div>
  );
}
