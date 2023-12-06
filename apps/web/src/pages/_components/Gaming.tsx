const GAMING = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/discovery-splashes/926691694680870982/75037c54266d71fc27eddb94b5eaf951.jpg?size=2048',
    name: 'Fuisinit',
    desc: 'A scalable and sustainable Sci-Fi universe that fulfills all possible desires.',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/discovery-splashes/150074202727251969/c86ad9f4bd60ca24cd3cabd6664ffde3.jpg?size=2048',
    name: 'Robolox',
    desc: 'The largest community-run Roblox server. Join for news, chat, LFG, events & more! For both Users and Creators. 🌈 🌻',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/522681957373575168/f4e44fbf004c0d4974662106dcf6a8dd.jpg?size=2048',
    name: 'Genshin Impact',
    desc: 'Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/710745950380884009/516d0293ef3c0ba1c2cfe361f04ec484.jpg?size=2048',
    name: 'All Stars',
    desc: 'Form teams and defend your towers! Get ready for an adventure through the wonderful world of All Star Tower Defense!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
];

export default function Gaming() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <h1>Gaming</h1>
      {GAMING.map((project) => (
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
