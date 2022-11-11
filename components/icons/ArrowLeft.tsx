interface ArrowLeftProps {
  className: string;
}

const ArrowLeftIcon = ({ className }: ArrowLeftProps) => {
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
        x1="9.7177"
        y1="17.2823"
        x2="0.717699"
        y2="8.2823"
        stroke="#FFDD00"
        stroke-width="2"
      />
      <line
        x1="0.717698"
        y1="9.7177"
        x2="9.7177"
        y2="0.717699"
        stroke="#FFDD00"
        stroke-width="2"
      />
      <line
        x1="39.4414"
        y1="8.99219"
        x2="2.67185"
        y2="8.99218"
        stroke="#FFDD00"
        stroke-width="2"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
