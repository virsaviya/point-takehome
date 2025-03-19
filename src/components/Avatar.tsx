import Image from 'next/image';

type AvatarProps = {
  id: number;
  alt: string;
  url?: string;
};

const Avatar = ({ id, alt, url }: AvatarProps) => {
  return (
    <Image
      className="rounded-full mr-4 mb-2"
      src={url || `https://avatar.iran.liara.run/public/${id}`}
      alt={alt}
      width={48}
      height={48}
    />
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
