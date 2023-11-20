type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>;
export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className='object-cover w-10 h-10 rounded-full aspect-square'
      />
    </div>
  );
}
