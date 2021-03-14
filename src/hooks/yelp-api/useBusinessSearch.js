// Hooks
import {useState, useEffect} from 'react';
 // import get method that makes a GET request 
import * as api from './api';
 
export function useBusinessSearch(term, location) {
// declare multiple state variables
  const [businesses, setBusinesses] = useState([] );
  const [amountResults, setAmountResults] = useState();
  // need this to do repeated searches
  const [searchParams, setSearchParams] = useState({term, location});

  useEffect(() => {
      setBusinesses([]);

      const fetchData = async () => {
          try {
            const rawData = await api.get('/businesses/search', searchParams);
            const res = await rawData.json();
            // put entire businesses array into our local state
            setBusinesses(res.businesses);
            setAmountResults(res.total);
              
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [searchParams]);
  return [businesses, amountResults, searchParams, setSearchParams];
}