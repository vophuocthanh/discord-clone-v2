const PROJECT_ALL = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/discovery-splashes/418586876899885056/28e4e7f38f885c0d2a3f20a4f3030560.jpg?size=2048',
    name: 'Willyrex! 🎁🎅🏻',
    desc: 'Servidor oficial de Willyrex. Conoce gente y haz nuevos amigos aquí. ¡Lánzate a una nueva aventura con la comunidad!',
    online: '1,597,444 Online',
    members: '320,642 Members',
    status: 'Verified',
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/discovery-splashes/159962941502783488/adb68eb3581d3dab416b065cf15b9524.jpg?size=2048',
    name: 'MEE6™ Support',
    desc: 'The best bot to build and grow your Discord server',
    online: '1,597,444 Online',
    members: '281,027 Members',
    status: 'Verified',
  },
  {
    id: 3,
    img: 'https://cdn.discordapp.com/discovery-splashes/782386903231758346/2fd39bda42ab3ffeafc1dc561488c223.jpg?size=2048',
    name: 'Space Roleplay',
    desc: 'Na ativa desde 2021, sendo uma das maiores redes de servidores GTA RP de todo o Brasil! Tenha infinitas possibilidades!!',
    online: '1,597,444 Online',
    members: '267,863 Members',
    status: 'Verified',
  },
  {
    id: 4,
    img: 'https://cdn.discordapp.com/discovery-splashes/444470893599784960/9547955d042d37ac131b11fa43094c7a.jpg?size=2048',
    name: 'Chill Corner',
    desc: 'Meet friendly people from all over the world. Active, non-toxic and fun!',
    online: '1,597,444 Online',
    members: '247,663 Members',
    status: 'Verified',
  },
];

export default function Music() {
  return (
    <div className='w-full h-full p-4 space-y-4'>
      <h1>Music</h1>
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
