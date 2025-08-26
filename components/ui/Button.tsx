import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Dodałem 'onClick' do typów
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold text-white transition-all duration-200",
        "bg-gradient-to-r from-brandStart to-brandEnd shadow-lg shadow-black/30",
        "hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandEnd",
        className
      )}
    >
      {children}
    </button>
  );
}