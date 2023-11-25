import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonChannel() {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <Skeleton className='h-4 w-[280px]' />
      <Skeleton className='h-10 w-[280px]' />
    </div>
  );
}
