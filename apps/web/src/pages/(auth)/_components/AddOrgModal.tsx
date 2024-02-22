import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';
import createMyOwn from '@/assets/svgs/create-my-own.svg';
import { Tabs, TabsContent } from '@/components/ui/tabs';

enum Step {
  CREATE_YOUR_SERVER = 'CREATE_YOUR_SERVER',
  TELL_US_MORE = 'TELL_US_MORE',
  CUSTOMIZE_YOUR_SERVER = 'CUSTOMIZE_YOUR_SERVER',
}

const tabClass =
  'p-4 mt-0 bg-primary-foreground/10 data-[state=inactive]:p-0  data-[state=inactive]:translate-x-[50%] data-[state=active]:translate-x-0 transition-transform ease-linear';

export default function AddOrgModal() {
  const [step, setStep] = useState(Step.CREATE_YOUR_SERVER);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setStep(Step.CREATE_YOUR_SERVER);
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={onOpen}>
        <div className='flex items-center justify-center text-green-500 rounded-full cursor-pointer w-14 h-14 bg-primary-foreground/10 hover:text-white hover:bg-green-500 hover:rounded-md'>
          <Plus />
        </div>
      </DialogTrigger>
      <DialogContent
        className='sm:max-w-[425px] bg-primary-foreground/10 p-0'
        haveClose={false}
      >
        <Tabs
          className='w-full overflow-hidden rounded-md bg-primary-foreground/10'
          value={step}
        >
          <TabsContent
            value={Step.CREATE_YOUR_SERVER}
            className={tabClass}
            hidden={false}
          >
            <h1 className='text-xl font-bold text-center'>
              Create Your Server
            </h1>
            <p className='mt-2 text-gray-400'>
              Your sever is where you and your friends hang out
            </p>
            <div>
              <div
                onClick={() => setStep(Step.TELL_US_MORE)}
                className='flex items-center justify-between gap-2 p-4 mt-4 border border-white rounded-sm cursor-pointer hover:bg-primary-foreground/20'
              >
                <div className='flex items-center gap-2'>
                  <img src={createMyOwn} />
                  <span>Create My Own </span>
                </div>
                <ChevronRight />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value={Step.TELL_US_MORE}
            className={tabClass}
            hidden={false}
          >
            <h1 className='text-xl font-bold text-center'>
              Tell Us More About Your Server
            </h1>
            <p className='mt-2 text-gray-400'>
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </p>
            <div
              onClick={() => setStep(Step.CUSTOMIZE_YOUR_SERVER)}
              hidden={false}
            >
              <div className='flex items-center justify-between gap-2 p-4 mt-4 border border-white rounded-sm cursor-pointer hover:bg-primary-foreground/20'>
                <div className='flex items-center gap-2'>
                  <img src={createMyOwn} />
                  <span>For me and my friends </span>
                </div>
                <ChevronRight />
              </div>
            </div>
            <button
              className='mt-4'
              onClick={() => setStep(Step.CREATE_YOUR_SERVER)}
            >
              Back
            </button>
          </TabsContent>
          <TabsContent value={Step.CUSTOMIZE_YOUR_SERVER} className={tabClass}>
            <h1 className='text-xl font-bold text-center'>
              Customize Your Server
            </h1>
            <p className='mt-2 text-gray-400'>
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </p>
            <button
              className='mt-4'
              onClick={() => setStep(Step.CREATE_YOUR_SERVER)}
            >
              Back
            </button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
