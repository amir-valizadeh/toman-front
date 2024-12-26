import { Payment } from '../../types/payment'
import { PaymentCard } from './PaymentCard'

interface PaymentListProps {
    payments: { entities:Payment[] }
    isLoading: boolean
}

export function PaymentList({ payments, isLoading }: PaymentListProps) {

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
            </div>
        )
    }

    if (payments.entities.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No payments found</p>
            </div>
        )
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {payments.entities.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
            ))}
        </div>
    )
}