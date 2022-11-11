interface ArrowRightProps {
  className: string;
}

const ArrowRightIcon = ({ className }: ArrowRightProps) => {
  return (
    <svg
      className={className}
      width="40"
      height="18"
      viewBox="0 0 40 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="29.7237"
        y1="0.717942"
        x2="38.7237"
        y2="9.71794"
        stroke="#FFDD00"
        stroke-width="2"
      />
      <line
        x1="38.7237"
        y1="8.28255"
        x2="29.7237"
        y2="17.2825"
        stroke="#FFDD00"
        stroke-width="2"
      />
      <line
        y1="9.00806"
        x2="36.7696"
        y2="9.00806"
        stroke="#FFDD00"
        stroke-width="2"
      />
    </svg>
  );
};

export default ArrowRightIcon;
