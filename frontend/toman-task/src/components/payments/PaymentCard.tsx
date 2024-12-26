import { Link } from 'react-router-dom'
import { Payment } from '../../types/payment'
import { Card } from '../common/Card'
import { cn } from '../../utils/helpers'
import { STATUS_STYLES } from '../../utils/constants'

interface PaymentCardProps {
    payment: Payment
}

export function PaymentCard({ payment }: PaymentCardProps) {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(payment.value)

    const formattedDate = new Date(payment.paid_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <Card className="hover:shadow-md transition-shadow">
            <Link to={`/payments/${payment.id}`} className="block">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-lg capitalize">
                            {payment.description || `${payment.type} payment`}
                        </h3>
                        <p className="text-gray-600 capitalize">{payment.type}</p>
                    </div>
                    <span className={cn(
                        'px-3 py-1 rounded-full text-sm font-medium',
                        STATUS_STYLES[payment.status]
                    )}>
            {payment.status}
          </span>
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-bold">
                        {formattedValue}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {formattedDate}
                    </p>
                </div>
            </Link>
        </Card>
    )
}