export type StarSize = 's' | 'm' | 'l';

type StarProps = {
  marked: boolean;
  starId: number;
  size?: StarSize;
};

const Star = ({ marked, starId, size = 'm' }: StarProps) => {
  const sizeClass =
    size === 's' ? 'text-xs' : size === 'l' ? 'text-3xl' : 'text';
  return (
    <span
      data-star-id={starId}
      className={`${sizeClass} cursor-pointer`}
      role="button"
    >
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

Star.displayName = 'Star';
export default Star;
