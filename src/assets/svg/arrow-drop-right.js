const ArrowDropRight = (props) => {
  const isActive = props.isActive;
  return (
    <svg
      height="26"
      viewBox="0 0 48 48"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      className={isActive ? "text-sky-800 fill-current" : ""}
    >
      <path d="m19 16 10 10-10 10z" />
    </svg>
  );
};

export default ArrowDropRight;
