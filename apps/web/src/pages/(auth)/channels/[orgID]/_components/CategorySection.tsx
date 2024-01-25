import { Category } from '@/apis/categories';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import AddChannelModal from './AddChannelModal';
import ChannelSection from './ChannelSection';
import DeleteCategoryModal from './DeleteCategoryModal';

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className='py-2 cursor-pointer'>
        <div className='flex gap-2 justify-between w-full hover:text-foreground'>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div
                className='flex gap-2 w-full'
                onClick={() => setCollapse((collapse) => !collapse)}
              >
                {collapse ? (
                  <ChevronDown className='w-4' />
                ) : (
                  <ChevronRight className='w-4' />
                )}
                <h1 className='uppercase'> {category.name} </h1>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className='w-64 p-2'>
              <DeleteCategoryModal categoryId={category.id} />
            </ContextMenuContent>
          </ContextMenu>
          <AddChannelModal category={category} />
        </div>
        {collapse && (
          <div className='space-y-2'>
            {category.channels?.map((channel) => (
              <ChannelSection channel={channel} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
