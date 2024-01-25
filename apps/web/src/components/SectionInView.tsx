
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  className?: string;
  animateClass?: string
}

export default function SectionInView({ children, className, animateClass = 'animate-fade-down' }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(className, {
        [animateClass]: inView,
      })}
    >
      {children}
    </div>
  );
}
