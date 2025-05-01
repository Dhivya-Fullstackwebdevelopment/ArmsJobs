import { forwardRef, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string; // Added error prop for displaying validation messages
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean; // Added required prop to conditionally show the asterisk
}
// Forwarding ref to the InputField component
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ label, name, type = "text", value, placeholder, onChange, error, required = false, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={name} className="text-mindfulWhite font-semibold block">
                {label}
                {required && <span className="text-main">*</span>}
            </label>
            
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
                // className="outline-none w-full px-4 py-2 border-none rounded-[5px]"
                {...rest} // Spread the rest props to ensure all standard input props are passed down
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}
);


InputField.displayName = "InputField"; // Set displayName for better debugging


