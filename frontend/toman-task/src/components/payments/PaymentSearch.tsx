import { useEffect, useState } from 'react'
import { Input } from '../common/Input'
import { useDebounce } from '../../hooks/useDebounce'

interface PaymentSearchProps {
    value: string
    onChange: (value: string) => void
}

export function PaymentSearch({ value, onChange }: PaymentSearchProps) {
    const [searchTerm, setSearchTerm] = useState(value)
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        onChange(debouncedSearchTerm)
    }, [debouncedSearchTerm, onChange])

    return (
        <Input
            type="text"
            placeholder="Search payments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    )
}