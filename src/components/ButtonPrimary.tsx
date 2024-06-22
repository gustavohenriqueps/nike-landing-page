interface ButtonPrimaryProps {
  backgroundColor: string;
  hoverBackgroundColor: string;
  textColor: string;
  flex?: boolean;
  fullWidth?: boolean;
  label: string;
  children?: any;
  border?: string;
}

const ButtonPrimary = ({
  backgroundColor,
  hoverBackgroundColor,
  textColor,
  flex,
  fullWidth,
  label,
  children,
  border,
}: ButtonPrimaryProps) => {
  return (
    <button
      className={`py-4 px-8 rounded-full font-poppins font-medium ${backgroundColor} ${hoverBackgroundColor} ${textColor} ${border} ${
        fullWidth ? "w-full" : ""
      } ${flex ? "flex items-center gap-4" : ""}`}
    >
      {label}
      {children}
    </button>
  );
};

export default ButtonPrimary;
