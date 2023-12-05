import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import Footer from './_components/Footer';
import SectionInView from '@/components/SectionInView';
import workPeople from '@/assets/images/careers/work-people.webp';
import joinCulture from '@/assets/images/careers/join-culture.webp';
import Internships from '@/assets/images/careers/internships.webp';
import startCareers from '@/assets/images/careers/start-careens.svg';

export default function Component() {
  return (
    <div className='w-full h-full '>
      <header className='mx-auto bg-[#5865f2] justify-center flex'>
        <div className='h-[calc(100vh-4.5rem)] max-w-6xl mt-12 text-white flex flex-col items-center'>
          <div className='flex items-center justify-between w-full gap-20'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <div className='flex items-center gap-10 text-lg font-medium'>
              <Link to='/download' className='hover:underline'>
                Download
              </Link>
              <Link to='/nitro' className='hover:underline'>
                Nitro
              </Link>
              <Link to='/discover' className='hover:underline'>
                Discover
              </Link>
              <Link to='/safety' className='hover:underline'>
                Safety
              </Link>
              <Link to='/servers' className='hover:underline'>
                Support
              </Link>
              <Link to='/blog' className='hover:underline'>
                Blog
              </Link>
              <Link to='/careers' className='hover:underline'>
                Careers
              </Link>
            </div>
            <Link to='/login'>
              <Button className='text-black bg-white rounded-full hover:bg-white hover:shadow-xl'>
                Sign up
              </Button>
            </Link>
          </div>
          <SectionInView className='flex flex-col items-center justify-between max-w-6xl gap-10 mt-32'>
            <h1 className='text-6xl font-bold uppercase'>WORK AT DISCORD</h1>
            <p className='text-center text-xl'>
              Discord is home to (com) passionate people who believe in our
              mission of creating <br /> space for everyone to find belonging.
            </p>
          </SectionInView>
        </div>
      </header>
      <div className='w-full text-black my-20'>
        <div className='max-w-4xl mx-auto justify-center flex flex-col items-center my-20 space-y-10'>
          <h2 className='text-5xl font-bold'>Come build belonging with us</h2>
          <p className='text-lg text-center'>
            Discord is working toward an inclusive world where no one feels like
            an outsider, where genuine human connection is a click, text chat,
            or <br /> voice call away. A place where everyone can find
            belonging. Challenging? Heck yes. Rewarding? Double heck yes. It’s a
            mission that gives us <br /> the chance to positively impact
            millions of people all over the world.
          </p>
          <p className='text-lg text-center'>
            So if this strikes a chord, and you’re equally comfortable
            communicating in memes and gifs as you are in code or decks, come
            build <br /> belonging with us!
          </p>
        </div>
        <div className='flex flex-col mx-auto mt-20 space-y-20 max-w-6xl'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-3xl font-bold'>Work with people who care.</h1>
              <p className='w-[30rem] font-light'>
                Our people, much like our users, can’t be put in a box. The
                quirky and unique cast of characters that work together at
                Discord may be intrepid travelers from all walks of life, but
                there’s a reason we’ve all ended up here. We care about each
                other, the work we do, and the future we’re building — like, a
                lot. We pull our own weight and treat each other with extreme
                empathy.{' '}
                <span className='font-bold'>No cogs or jerks allowed.</span>
              </p>
            </div>
            <img
              src={workPeople}
              alt='safety'
              className='w-[30rem] h-[25rem] rounded-md'
            />
          </div>
          <div className='flex items-center justify-between gap-20'>
            <img
              src={joinCulture}
              alt='safety'
              className='w-[30rem] h-[25rem] rounded-md'
            />
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-3xl font-bold'>
                Join a culture that builds <br /> belonging.
              </h1>
              <p className='w-[30rem] font-light'>
                Imagine a workplace where everyone belongs. At Discord, we
                aren't just imagining this place, we’re creating it. We’re
                building an inclusive, diverse, and welcoming space that
                reflects the world we live, play, and work in — because we know
                that with diversity comes better ideas, a better product, a
                better work environment, and ultimately a better company.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between bg-[#f6f6f6] p-14 rounded-md'>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-3xl font-bold'>Internships</h1>
              <p className='w-[30rem] font-light'>
                Join us for an unforgettable summer at Discord! You’ll be
                working on real features that impact millions of people, receive
                close mentorship, and learn from leaders in the industry. We are
                looking for undergraduate and graduate students of all levels.
                Check out our listings, and{' '}
                <span className='text-primary'>
                  read more about our program.
                </span>
              </p>
              <Button className='w-56 h-14 rounded-full'>Explore more</Button>
            </div>
            <img
              src={Internships}
              alt='safety'
              className='w-[30rem] h-[25rem] rounded-md'
            />
          </div>
          <div className='flex flex-col justify-center text-center space-y-2'>
            <img
              src={startCareers}
              alt='star'
              className='w-[60rem] flex justify-center mx-auto'
            />
            <h2 className='text-3xl font-bold'>Want to find out more?</h2>
            <p>
              Check out our inclusion, diversity and purpose efforts, or learn
              more about the Life @ Discord experience!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
