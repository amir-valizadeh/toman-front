import { useQuery } from '@tanstack/react-query';
import { PaymentFilters } from '../components/payments/PaymentFilters';
import { PaymentList } from '../components/payments/PaymentList';
import { useUrlState } from '../hooks/useUrlState';
import { getPayments } from '../services/api';
import { PaymentFilters as Filters } from '../types/payment';
import {Pagination} from "../components/common/Pagination.tsx";

const defaultFilters: Filters = {
    page: 1,
    limit: 10,
    search: '',
    type: undefined,
    status: undefined,
};

export function PaymentListPage() {
// @ts-ignore
    const [filters, setFilters] = useUrlState<Filters>(defaultFilters);
    console.log(filters);
const { data, isLoading } = useQuery({
    queryKey: ['payments', filters],
    queryFn: () => getPayments(filters),
});
    const handlePageChange = (page: number) => {
        setFilters({ ...filters, page });
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Payments</h1>

            <PaymentFilters
                filters={filters}
                onChange={setFilters}
            />

            <PaymentList
                payments={data?.data || {entities:[]}}
                isLoading={isLoading}
            />

            <Pagination
                currentPage={filters.page}
                pageSize={filters.limit}
                totalCount={data?.total || 0}
                onPageChange={handlePageChange}
            />
        </div>
    );
}