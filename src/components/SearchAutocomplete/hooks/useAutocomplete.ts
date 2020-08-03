// Core
import { useState } from 'react';
// Helpers
import { hasOwnProperty } from '../../../helpers/hasOwnProperty';

export const useAutocomplete = <T, Y extends PropertyKey>(data: Array<T>, property?: Y) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

  const findResults = (element: T) => {
    if (property && hasOwnProperty(element, property)) {
      return String(element[property])
        .toLowerCase()
        .includes(query.toLowerCase());
    }
    return String(element).toLowerCase().includes(query.toLowerCase());
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
    const searchResults = data.filter(findResults);
    setResults(searchResults);
  };

  return { handleSearch, results, query };
};
