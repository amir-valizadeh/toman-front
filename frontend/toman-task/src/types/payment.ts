export type PaymentStatus = 'success' | 'failed' | 'pending';
export type PaymentType = 'salary' | 'bonus' | 'commission' | 'transportation' | 'overtime';

export interface Payment {
    id: string;
    type: PaymentType;
    value: number;
    paid_at: string;
    status: PaymentStatus;
    description: string | null;
}

export interface PaymentFilters {
    search?: string;
    type?: PaymentType;
    status?: PaymentStatus;
    page: number;
    limit: number;
}