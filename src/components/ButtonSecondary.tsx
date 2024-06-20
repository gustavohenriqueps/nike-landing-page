interface ButtonSecondaryProps {
  label: string;
  backgroundColor: string;
  hover: string;
  textColor?: string;
  handleClick: () => void;
}

const ButtonSecondary = ({
  label,
  backgroundColor,
  hover,
  textColor,
  handleClick,
}: ButtonSecondaryProps) => {
  return (
    <button
      className={`py-2 rounded shadow ${backgroundColor} ${hover} ${textColor}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
