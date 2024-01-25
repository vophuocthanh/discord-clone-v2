type AvatarProps = React.ImgHTMLAttributes<HTMLOrSVGElement>;

export default function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="w-14 h-14 object-cover rounded-full" />;
}
