
const Btn = ({ children, className, ...props }) => (
  <button
    className={`flex items-center justify-center font-medium transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);
export default Btn;
