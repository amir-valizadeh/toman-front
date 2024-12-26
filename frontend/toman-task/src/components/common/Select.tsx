import { forwardRef, SelectHTMLAttributes } from 'react'
import { cn } from '../../utils/helpers'

interface Option {
    label: string
    value: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]
    error?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, error, options, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    className={cn(
                        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
                        error && 'border-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
            </div>
        )
    }
)
Select.displayName = 'Select'

export { Select }