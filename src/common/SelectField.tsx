import { forwardRef, SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[]; // Options for the select dropdown
    error?: string; // For validation error message display
    required?: boolean; // Conditionally show the asterisk for required fields
}

// Forwarding ref to the SelectField component
export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
    ({ label, name, options, error, required = false, className, ...rest }, ref) => {
        return (
            <div>
                <label htmlFor={name}
                // className="block mb-1 text-sm font-medium"
                >
                    {label} {required && <span className="text-main">*</span>}
                </label>
                <select
                    id={name}
                    name={name}
                    ref={ref}
                    className={className} // Add any specific styling here
                    {...rest} // Spread the rest props to ensure all standard select props are passed down
                >
                    {/* <option value="" selected disabled>
                        Select an option
                    </option> */}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        );
    }
);

SelectField.displayName = "SelectField";
