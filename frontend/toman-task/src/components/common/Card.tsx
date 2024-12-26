import { cn } from '../../utils/helpers'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-lg border bg-white shadow-sm p-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}