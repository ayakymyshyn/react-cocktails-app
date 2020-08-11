// Core
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
// Hook
import { useAutocomplete } from '../SearchAutocomplete/hooks/useAutocomplete';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

describe('useAutocomplete', () => {
    // mock data
    const mockStringArray = ['John', 'Mattew', 'Lisa', 'Bart', 'Homer'];
    const mockObjectsArray = [
        {name: 'John', job: 'Designer'}, 
        {name: 'Mark', job: 'Designer'}, 
        {name: 'Tony', job: 'Writer'}
    ]

    it('should save query in state', () => {
        const { result } = renderHook(() => useAutocomplete(mockStringArray));
        act(() => {
            result.current.setQuery('Lisa');
        })
        expect(result.current.query).toBe('Lisa');
    });

    it('should return array with matching results', () => {
        const { result } = renderHook(() => useAutocomplete(mockStringArray));
        act(() => {
            result.current.setQuery('homer');
            result.current.search();
        })
        expect(result.current.results).toHaveLength(1);
        expect(result.current.results).toEqual(['Homer']);
    });

    it('should return array with objects which are matching search query', () => {
        const { result } = renderHook(() => useAutocomplete(mockObjectsArray, { job: '' }));
        act(() => {
            result.current.setQuery('design');
            result.current.search();
        });
        expect(result.current.results).toHaveLength(2);
        expect(result.current.results).toEqual([
            {name: 'John', job: 'Designer'}, 
            {name: 'Mark', job: 'Designer'}
        ]);
    })
});