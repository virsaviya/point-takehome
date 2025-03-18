import Image from 'next/image';

type AvatarProps = {
  url?: string;
  alt: string;
};

const Avatar = ({ url = 'https://place-hold.it/48', alt }: AvatarProps) => {
  return (
    <Image
      className="rounded-full mr-4 mb-2"
      src={url}
      alt={alt}
      width={48}
      height={48}
    />
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
