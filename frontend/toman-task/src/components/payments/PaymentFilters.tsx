import { PaymentStatus, PaymentType } from '../../types/payment'
import { Select } from '../common/Select'
import { PAYMENT_TYPES, PAYMENT_STATUSES } from '../../utils/constants'

interface PaymentFiltersProps {
    filters: {
        type?: PaymentType
        status?: PaymentStatus
        search?: string
    }
    onChange: (filters: Partial< PaymentFiltersProps['filters']>) => void
}

export function PaymentFilters({ filters, onChange }: PaymentFiltersProps) {
    return (
        <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[200px]">
                <input
                    type="text"
                    placeholder="Search by description..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.search || ''}
                    onChange={(e) => onChange({ search: e.target.value })}
                />
            </div>

            <Select
                value={filters.type || ''}
                onChange={(e) => onChange({ type: e.target.value as PaymentType })}
                options={[
                    { label: 'All Types', value: '' },
                    ...PAYMENT_TYPES.map(type => ({
                        label: type.charAt(0).toUpperCase() + type.slice(1),
                        value: type
                    }))
                ]}
                className="min-w-[150px]"
            />

            <Select
                value={filters.status || ''}
                onChange={(e) => onChange({ status: e.target.value as PaymentStatus })}
                options={[
                    { label: 'All Statuses', value: '' },
                    ...PAYMENT_STATUSES.map(status => ({
                        label: status.charAt(0).toUpperCase() + status.slice(1),
                        value: status
                    }))
                ]}
                className="min-w-[150px]"
            />
        </div>
    )
}