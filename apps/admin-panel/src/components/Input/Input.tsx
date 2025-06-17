import { forwardRef, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  Icon?: IconType;
  className?: string;
}

// Used forward ref inorder to make sure that the react-hook-form works.
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, Icon, className = "", ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="ml-1.5 mb-2 block font-medium">{label}</label>
        )}

        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={`w-full rounded-lg bg-base-100 py-4 pl-6 pr-10 text-base-content outline-none placeholder:text-base-content/50 ${className}`}
          />
          {Icon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
              <Icon />
            </span>
          )}
        </div>
      </div>
    );
  }
);
