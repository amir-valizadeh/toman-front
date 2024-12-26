import { useMemo } from 'react'
import {range} from "../utils/helpers.ts";

interface UsePaginationProps {
    totalCount: number
    pageSize: number
    siblingCount?: number
    currentPage: number
}

export function usePagination({
                                  totalCount,
                                  pageSize,
                                  siblingCount = 1,
                                  currentPage,
                              }: UsePaginationProps) {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)
        const totalPageNumbers = siblingCount + 5

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        )

        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount
            const leftRange = range(1, leftItemCount)
            return [...leftRange, '...', totalPageCount]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            )
            return [1, '...', ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex)
            return [1, '...', ...middleRange, '...', totalPageCount]
        }

        return []
    }, [totalCount, pageSize, siblingCount, currentPage])

    return paginationRange
}