const PROJECT_ALL = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/discovery-splashes/1046979304547954728/d0ac123bc0db716e100a5a3a24c62fa8.jpg?size=2048',
    name: 'LimeWire - create AI Images, Audio & Video (formerly BlueWillow)',
    desc: 'Our active text-to-image AI community powers your journey to generate the best art, images, and design.',
    online: '1,597,444 Online',
    members: '2,311,508 Members',
    status: 'Verified',
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/discovery-splashes/989166677390426132/80bd9e1e74397990e512578c57a2c67a.jpg?size=2048',
    name: 'Leonardo.Ai',
    desc: 'Leonardo.Ai is a generative AI platform for content creation. Create game assets, artwork, design elements, and more!',
    online: '1,597,444 Online',
    members: '1,831,111 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/707230275175841915/2513ae894e752e941c195506fe056273.jpg?size=2048',
    name: 'Lofi Girl',
    desc: 'The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎',
    online: '1,597,444 Online',
    members: '885,371 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/890663529487687691/db2d11548013003cc08333dbc9b88e31.jpg?size=2048',
    name: 'TikTok Effect House',
    desc: 'Effect House is a powerful AR tool that makes it easy to create and publish high-quality augmented effects for TikTok',
    online: '1,597,444 Online',
    members: '752,567 Members',
    status: 'Verified',
  },
];

export default function ScienceTech() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <h1>ScienceTech</h1>
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
