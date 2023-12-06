const PROJECT_ALL = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/discovery-splashes/662267976984297473/4798759e115d2500fef16347d578729a.jpg?size=2048',
    name: 'Midjourney',
    desc: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.',
    online: '1,597,444 Online',
    members: '1,234,444 Members',
    status: 'Verified',
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/discovery-splashes/586704051148816385/8d9f4e10f9394ee7d8ba90bec94ef2a0.jpg?size=512',
    name: 'Blox Fruits',
    desc: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.',
    online: '1,597,444 Online',
    members: '1,597,123 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/987243305773445160/876356dce11380e1a517c36fbebbea07.jpg?size=512',
    name: 'Nova',
    desc: 'Nova is a discord server that hosts older versions/builds of Video Games, such as Fortnite.',
    online: '1,597,444 Online',
    members: '1,127,444 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/679875946597056683/dc1cb8414931ff914e44cc066a434666.jpg?size=512',
    name: 'Valorant',
    desc: 'The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 5,
    img: 'https://cdn.discordapp.com/discovery-splashes/679875946597056683/dc1cb8414931ff914e44cc066a434666.jpg?size=512',
    name: 'Valorant',
    desc: 'The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 6,
    img: 'https://cdn.discordapp.com/discovery-splashes/926691694680870982/75037c54266d71fc27eddb94b5eaf951.jpg?size=2048',
    name: 'Fuisinit',
    desc: 'A scalable and sustainable Sci-Fi universe that fulfills all possible desires.',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 7,
    img: 'https://cdn.discordapp.com/discovery-splashes/150074202727251969/c86ad9f4bd60ca24cd3cabd6664ffde3.jpg?size=2048',
    name: 'Robolox',
    desc: 'The largest community-run Roblox server. Join for news, chat, LFG, events & more! For both Users and Creators. 🌈 🌻',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 8,
    img: 'https://cdn.discordapp.com/discovery-splashes/522681957373575168/f4e44fbf004c0d4974662106dcf6a8dd.jpg?size=2048',
    name: 'Genshin Impact',
    desc: 'Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
  {
    id: 9,
    img: 'https://cdn.discordapp.com/discovery-splashes/710745950380884009/516d0293ef3c0ba1c2cfe361f04ec484.jpg?size=2048',
    name: 'All Stars',
    desc: 'Form teams and defend your towers! Get ready for an adventure through the wonderful world of All Star Tower Defense!',
    online: '1,597,444 Online',
    members: '1,597,444 Members',
    status: 'Verified',
  },
];

export default function ProjectAll() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <span>ProjectAll</span>
      {PROJECT_ALL.map((project) => (
        <div
          className='flex gap-4 rounded-md hover:bg-gray-100'
          key={project.id}
        >
          <img src={project.img} alt='image' className='w-80 h-48 rounded-md' />
          <div className='flex flex-col space-y-4'>
            <span className='text-xl font-bold'>{project.name}</span>
            <p>{project.desc}</p>
            <div className='flex text-sm text-[#8b8d8f] items-center gap-2'>
              <span>{project.online}</span>
              <span className='w-1 h-1 flex rounded-full bg-[#8b8d8f]'></span>
              <span>{project.members}</span>
            </div>
            <div className='flex items-center gap-2 p-2 bg-gray-200 rounded w-28'>
              <span className='w-4 h-4 flex rounded-full bg-green-400'></span>
              <span className='uppercase font-bold'>{project.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
