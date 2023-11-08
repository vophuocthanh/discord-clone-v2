import { type Orgs } from '@/lib/type';

interface Props {
  org: Orgs;
}

export default function Sidebar({ org }: Props) {
  return (
    <div className='p-4 bg-red-500'>
      <h1>{org.name}</h1>
    </div>
  );
}
