import { Button } from '@/components/ui/button';
import {
  ArrowUpFromLine,
  BadgePercent,
  PersonStanding,
  ScreenShare,
  Server,
  Smile,
  SmilePlus,
} from 'lucide-react';
import emojiSetting from '@/assets/images/nitro-setting/EmojiSetting.svg';
import videoHD from '@/assets/images/nitro-setting/VideoHD.svg';
import uploadSetting from '@/assets/images/nitro-setting/UploadSetting.svg';
import iconSetting from '@/assets/images/nitro-setting/IconSetting.svg';
import soundSetting from '@/assets/images/nitro-setting/SoundSetting.svg';
import videoBackground from '@/assets/images/nitro-setting/VideoBackground.svg';

const EXCLUSIVE_RIGHTS = [
  {
    id: 1,
    img: emojiSetting,
    alt: 'emoji',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
  {
    id: 2,
    img: videoHD,
    alt: 'video',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
  {
    id: 3,
    img: uploadSetting,
    alt: 'upload',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
  {
    id: 4,
    img: iconSetting,
    alt: 'icon',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
  {
    id: 5,
    img: soundSetting,
    alt: 'sound',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
  {
    id: 6,
    img: videoBackground,
    alt: 'background',
    title: 'Nhiều Emoji hơn',
    description:
      'Cường điệu, giễu cợt và tạo meme bằng emoji tùy chỉnh ở mọi nơi.',
  },
];

export default function NitroSetting() {
  return (
    <div className='w-[52rem] space-y-6'>
      <div className='w-[50rem] h-[20rem] rounded-2xl gradient-custom flex flex-col items-center space-y-4 justify-center'>
        <h1 className='text-5xl font-bold text-center'>
          Giải phóng nhiều niềm vui hơn cùng với Nitro
        </h1>
        <p className='text-xl'>
          Gói có giá chỉ từ 42.00 đ/tháng. Hủy bất cứ lúc nào.
        </p>
        <div className='flex items-center gap-6'>
          <Button className='h-10 w-36 rounded bg-white text-primary hover:bg-white'>
            Đăng ký
          </Button>
          <Button className='h-10 w-36 rounded bg-transparent border border-white hover:bg-transparent'>
            Tặng ngay
          </Button>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='w-[24.5rem] flex justify-between flex-col p-6 h-[31rem] bg-white bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 rounded-2xl'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl uppercase font-bold'>
              Nitro <br /> <span className='text-lg italic'>nitro</span>
            </h1>
            <p className='text-xl font-bold'>
              42.000 đ <span className='text-lg font-normal'>/ tháng</span>
            </p>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-6 items-center'>
                <ArrowUpFromLine />
                <span className='text-xl'>50MB uploads</span>
              </div>
              <div className='flex gap-6 items-center'>
                <Smile />
                <span className='text-xl'>Custom emoji anywhere</span>
              </div>
              <div className='flex gap-6 items-center'>
                <SmilePlus />
                <span className='text-xl'>Unlimited Super Reactions</span>
              </div>
              <div className='flex gap-6 items-center'>
                <BadgePercent />
                <span className='text-xl'>
                  Special Nitro badge on your profile
                </span>
              </div>
            </div>
          </div>
          <Button className='w-full h-16 rounded-full bg-white text-black hover:bg-white hover:shadow-xl text-xl hover:text-primary'>
            Subscribe
          </Button>
        </div>
        <div className='w-[24.5rem] p-6 space-y-10 h-[31rem] bg-white rounded-2xl bg-gradient-to-tr flex flex-col justify-between from-purple-600 via-pink-600 to-rose-500'>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-4xl uppercase font-bold'>Nitro</h1>
            <p className='text-xl font-bold'>
              113.000 đ <span className='text-lg font-normal'>/ tháng</span>
            </p>
            <div className='flex gap-6 items-center'>
              <ArrowUpFromLine />
              <span className='text-xl'>500MB uploads</span>
            </div>
            <div className='flex gap-6 items-center'>
              <Smile />
              <span className='text-xl'>Custom emoji anywhere</span>
            </div>
            <div className='flex gap-6 items-center'>
              <SmilePlus />
              <span className='text-xl'>Unlimited Super Reactions</span>
            </div>
            <div className='flex gap-6 items-center'>
              <ScreenShare />
              <span className='text-xl'>HD video streaming</span>
            </div>
            <div className='flex gap-6 items-center'>
              <Server />
              <span className='text-xl'>2 Server Boosts</span>
            </div>
            <div className='flex gap-6 items-center'>
              <PersonStanding />
              <span className='text-xl'>Custom profiles and more!</span>
            </div>
          </div>
          <Button className='w-full h-16 rounded-full bg-white text-black hover:bg-white hover:shadow-xl text-xl hover:text-primary'>
            Subscribe
          </Button>
        </div>
      </div>
      <h1 className='text-4xl font-bold flex items-center justify-center'>
        Các đặc quyền Nitro yêu thích
      </h1>
      <div className='flex flex-col'>
        <div className='flex  gap-6 flex-wrap'>
          {EXCLUSIVE_RIGHTS.map((item) => (
            <div
              className='flex w-[24rem] h-[24rem] rounded-xl bg-gray-500'
              key={item.id}
            >
              <div className='flex flex-col mx-auto items-center text-center justify-center space-y-2'>
                <img src={item.img} alt={item.title} className='w-72' />
                <h1 className='text-3xl font-bold'>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
