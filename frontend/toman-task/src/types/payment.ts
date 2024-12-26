export type PaymentStatus = 'success' | 'failed' | 'pending';
export type PaymentType = 'salary' | 'invoice' | 'subscription';

export interface Payment {
    id: string;
    type: PaymentType;
    status: PaymentStatus;
    value: number;
    paid_at: string;
    description: string;
}

export interface PaymentFilters {
    search?: string;
    type?: PaymentType;
    status?: PaymentStatus;
    page: number;
    limit: number;
}