import { Button } from '@/components/ui/button';

const SERVER_BOOT = [
  {
    id: 1,
    img: 'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    name: 'Goku',
    alt: 'avatar',
    boot: 'No Boosts',
    status: 'Unboosted',
  },
  {
    id: 2,
    img: 'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    name: 'Nobita',
    alt: 'avatar',
    boot: 'No Boosts',
    status: 'Unboosted',
  },
  {
    id: 2,
    img: 'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    name: 'Sogooku',
    alt: 'avatar',
    boot: 'No Boosts',
    status: 'Unboosted',
  },
];

export default function ServerUpgrade() {
  return (
    <div className='w-[52rem] space-y-4'>
      <div className='w-[52rem] h-[20rem] flex flex-col items-center space-y-4 justify-center'>
        <h1 className='text-5xl font-bold text-center'>
          Uh oh, you haven’t Boosted yet!
        </h1>
        <h2 className='text-3xl font-semibold'>Boost your favourite servers</h2>
        <p>Server Boosts start at ₫113,409/Month.</p>
      </div>
      <div className='flex flex-col space-y-3'>
        {SERVER_BOOT.map((server) => (
          <div
            className='flex justify-between bg-gray-500 border border-primary px-4 py-8 items-center rounded'
            key={server.id}
          >
            <div className='flex gap-4 items-center'>
              <img
                src={server.img}
                alt={server.alt}
                className='w-16 h-16 rounded-full object-cover'
              />
              <div className='flex flex-col'>
                <span className='text-2xl font-bold'>{server.name}</span>
                <div className='flex items-center gap-2'>
                  <span>{server.boot}</span>
                  <span>|</span>
                  <span>{server.status}</span>
                </div>
              </div>
            </div>
            <Button className='bg-primary-foreground/30 rounded hover:bg-primary-foreground/30'>
              Boost this server
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
