import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { getPaymentById } from '../services/api'

export function PaymentDetailsPage() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { data: payment, isLoading } = useQuery({
        queryKey: ['payment', id],
        queryFn: () => getPaymentById(id!),
    })

    if (isLoading) {
        return <div className="flex justify-center py-8">Loading...</div>
    }

    if (!payment) {
        return null
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-blue-500 hover:underline"
            >
                ← Back to payments
            </button>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                    <h1 className="text-3xl font-bold">{payment.description}</h1>
                    <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                            payment.status === 'success'
                                ? 'bg-green-100 text-green-800'
                                : payment.status === 'failed'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
            {payment.status}
          </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-gray-500 mb-2">Amount</h3>
                        <p className="text-3xl font-bold">
                            ${payment.value.toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-500 mb-2">Payment Type</h3>
                        <p className="text-xl">{payment.type}</p>
                    </div>

                    <div>
                        <h3 className="text-gray-500 mb-2">Payment Date</h3>
                        <p className="text-xl">
                            {new Date(payment.paid_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}