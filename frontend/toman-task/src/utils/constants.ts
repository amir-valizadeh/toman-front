import { PaymentStatus, PaymentType } from '../types/payment'

export const PAYMENT_TYPES: PaymentType[] = [
    'salary',
    'bonus',
    'commission',
    'transportation',
    'overtime'
]

export const PAYMENT_STATUSES: PaymentStatus[] = ['success', 'failed', 'pending']

export const ITEMS_PER_PAGE = 10

export const STATUS_STYLES = {
    success: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
} as const