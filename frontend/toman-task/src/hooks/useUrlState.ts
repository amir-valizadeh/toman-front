import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export function useUrlState<T extends Record<string, string>>(
    defaultValue: T
) {
    const [searchParams, setSearchParams] = useSearchParams();

    const state = Object.keys(defaultValue).reduce((acc, key) => {
        // @ts-ignore
        acc[key] = searchParams.get(key) || defaultValue[key];
        return acc;
    }, {} as T);

    const setState = useCallback(
        (newState: Partial<T>) => {
            const nextSearchParams = new URLSearchParams(searchParams);

            Object.entries(newState).forEach(([key, value]) => {
                if (value) {
                    nextSearchParams.set(key, value);
                } else {
                    nextSearchParams.delete(key);
                }
            });

            setSearchParams(nextSearchParams);
        },
        [searchParams, setSearchParams]
    );

    return [state, setState] as const;
}