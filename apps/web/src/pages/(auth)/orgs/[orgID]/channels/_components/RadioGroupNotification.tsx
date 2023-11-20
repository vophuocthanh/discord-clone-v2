import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function RadioGroupNotification() {
  return (
    <RadioGroup
      defaultValue='comfortable'
      className='mt-4 space-y-2 text-primary-foreground'
    >
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='default'
          id='r1'
          className='bg-primary-foreground/10 border-primary-foreground/60'
        />
        <Label htmlFor='r1'>Mặc định dùng danh mục</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='comfortable'
          id='r2'
          className='bg-primary-foreground/10 border-primary-foreground/60'
        />
        <Label htmlFor='r2'>Tất cả các tin nhắn</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='compact'
          id='r3'
          className='bg-red border-primary-foreground/60'
        />
        <Label htmlFor='r3'>Không có</Label>
      </div>
    </RadioGroup>
  );
}
