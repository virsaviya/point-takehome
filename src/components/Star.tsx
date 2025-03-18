export type StarSize = 's' | 'm' | 'l';

type StarProps = {
  starId: number;
  marked: boolean;
  hovered: boolean;
  isInput: boolean;
  size?: StarSize;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Star = ({
  starId,
  marked,
  hovered = false,
  isInput,
  size = 'm',
  ...handlers
}: StarProps) => {
  const classes = [
    'star',
    isInput && 'cursor-pointer',
    hovered && 'hovered',
    marked && 'marked',
    size === 's' ? 'text-xs' : size === 'l' ? 'text-3xl' : 'text',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      data-star-id={starId}
      className={classes}
      role={isInput ? 'button' : undefined}
      {...handlers}
    >
      {'\u2605'}
    </span>
  );
};

Star.displayName = 'Star';
export default Star;
