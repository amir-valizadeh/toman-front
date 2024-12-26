import axios from 'axios';
import { Payment, PaymentFilters } from '../types/payment';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getPayments = async (filters: PaymentFilters) => {
    const params = new URLSearchParams();

    if (filters.search) params.append('search', filters.search);
    if (filters.type) params.append('type', filters.type);
    if (filters.status) params.append('status', filters.status);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    const { data } = await api.get<{ entities:Payment[],total:number }>(`/payments?${params}`);
    return {
        data: data,
        total: data.total
    };
};

export const getPaymentById = async (id: string) => {
    const { data } = await api.get<Payment>(`/payments/${id}`);
    return data;
};