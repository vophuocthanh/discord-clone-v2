import { Checkbox } from '@/components/ui/checkbox';

export function CheckboxAuthorized() {
  return (
    <div className='flex flex-col space-y-2 mt-2'>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='terms'
          className='h-4 w-4 rounded border-green-400 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground'
        />
        <label
          htmlFor='terms'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Access your username, avatar and banner
        </label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='activity'
          className='h-4 w-4 rounded border-green-400 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground'
        />
        <label
          htmlFor='activity'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Set your current activity
        </label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='members'
          className='h-4 w-4 rounded border-green-400 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground'
        />
        <label
          htmlFor='members'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Read your member info (nickname, avatar, roles etc.) for servers you
          belong to
        </label>
      </div>
    </div>
  );
}
