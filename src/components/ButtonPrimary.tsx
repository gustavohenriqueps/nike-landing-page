interface ButtonPrimaryProps {
  backgroundColor: string;
  textColor: string;
  flex?: string;
  label: string;
  children?: any;
  border?: string;
}

const ButtonPrimary = ({
  backgroundColor,
  textColor,
  flex,
  label,
  children,
  border,
}: ButtonPrimaryProps) => {
  return (
    <button
      className={`py-4 px-8 rounded-full font-poppins font-medium ${backgroundColor} ${textColor} ${border}  ${
        flex ? "flex items-center gap-4" : ""
      }`}
    >
      {label}
      {children}
    </button>
  );
};

export default ButtonPrimary;
