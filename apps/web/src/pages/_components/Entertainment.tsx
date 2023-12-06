const ENTERTAINMENT = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/discovery-splashes/662267976984297473/4798759e115d2500fef16347d578729a.jpg?size=2048',
    name: 'Midjourney',
    desc: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.',
    online: '1,597,444 Online',
    members: '1,597,444 Online',
    status: 'Verified',
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/discovery-splashes/562762757905186828/e69c9585f8b23477c0626ac4a96f2794.jpg?size=2048',
    name: 'RELL Games',
    desc: 'RELL Games, RELL Seas, Shinobi Life 2',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/846496831533088768/84b27a1f2c8e8552e400f7048bb44853.jpg?size=2048',
    name: 'BeluGANG',
    desc: 'The Official Beluga Discord Server!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/1141515589924429869/c4fcd521b67cbaa30badb8505de62765.jpg?size=512',
    name: 'Blade Ball',
    desc: 'Official Server for Blade Ball, come join our community! We have a chat, we host events & giveaways, and publish codes!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
];

export default function Entertainment() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <h1>Entertainment</h1>
      {ENTERTAINMENT.map((project) => (
        <div
          className='flex gap-4 rounded-md hover:bg-gray-100'
          key={project.id}
        >
          <img src={project.img} alt='image' className='h-48 rounded-md w-80' />
          <div className='flex flex-col space-y-4'>
            <span className='text-xl font-bold'>{project.name}</span>
            <p>{project.desc}</p>
            <div className='flex text-sm text-[#8b8d8f] items-center gap-2'>
              <span>{project.online}</span>
              <span className='w-1 h-1 flex rounded-full bg-[#8b8d8f]'></span>
              <span>{project.members}</span>
            </div>
            <div className='flex items-center gap-2 p-2 bg-gray-200 rounded w-28'>
              <span className='flex w-4 h-4 bg-green-400 rounded-full'></span>
              <span className='font-bold uppercase'>{project.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
