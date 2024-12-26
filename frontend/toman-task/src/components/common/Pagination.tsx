import { usePagination } from '../../hooks/usePagination';
import { Button } from './Button';

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ totalCount, currentPage, pageSize, onPageChange }: PaginationProps) {
    console.log(totalCount, currentPage, pageSize, onPageChange);
    const paginationRange = usePagination({
        totalCount,
        pageSize,
        currentPage,
        siblingCount: 1
    });

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange?.[paginationRange.length - 1];

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <Button
                variant="outline"
                onClick={onPrevious}
                disabled={currentPage === 1}
                className="px-4 py-2"
            >
                Previous
            </Button>

            {paginationRange?.map((pageNumber, index) => {
                if (pageNumber === '...') {
                    return (
                        <span key={index} className="px-4 py-2">
              ...
            </span>
                    );
                }

                return (
                    <Button
                        key={index}
                        variant={+pageNumber === +currentPage ? 'default' : 'outline'}
                        onClick={() => onPageChange(Number(pageNumber))}
                        className="px-4 py-2"
                    >
                        {pageNumber}
                    </Button>
                );
            })}

            <Button
                variant="outline"
                onClick={onNext}
                disabled={currentPage === lastPage}
                className="px-4 py-2"
            >
                Next
            </Button>
        </div>
    );
}