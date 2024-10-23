type NavigationButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const NavigationButton: React.FC<NavigationButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="cursor-default rounded-2xl active:bg-gray-500 active:text-white bg-white p-[18px]
        text-gray-800 duration-300 disabled:cursor-auto disabled:bg-gray-200
        disabled:text-gray-300 lg:cursor-pointer enabled:lg:hover:bg-gray-800
        enabled:lg:hover:text-white"
    >
      {children}
    </button>
  );
};

export default NavigationButton;
