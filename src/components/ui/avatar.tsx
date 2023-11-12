type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>;
export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className='object-cover w-12 h-12 rounded-full aspect-square'
      />
    </div>
  );
}
