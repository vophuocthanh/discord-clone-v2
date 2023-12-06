const PROJECT_ALL = [
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
    img: 'https://cdn.discordapp.com/discovery-splashes/802558747695120414/3f7603a796b276e2ebec7ddd2a609e48.jpg?size=512',
    name: 'Era',
    desc: 'ERA is a gaming community, in which you are welcome to discuss any game!',
    online: '1,597,444 Online',
    members: '669,239 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/267624335836053506/0ea813f39386016f046ae511a0409c31.jpg?size=2048',
    name: 'Python',
    desc: `We're a large community focused around the Python programming language. We believe that anyone can learn to code.`,
    online: '1,597,444 Online',
    members: '386,711 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/789402563035660308/bc2781d394e79f40759186b057972cb8.jpg?size=2048',
    name: 'BNB Chain',
    desc: `BNB Chain's goal is to accelerate adoption of crypto and blockchain technology by onboarding the next billon Web3 users.`,
    online: '1,597,444 Online',
    members: '355,284 Members',
    status: 'Verified',
  },
];

export default function Education() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <h1>Education</h1>
      {PROJECT_ALL.map((project) => (
        <div
          className='flex gap-4  rounded-md hover:bg-gray-100'
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
