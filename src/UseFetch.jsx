import React from "react";
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      try {
        const response = await fetch(url, {signal: abortController.signal})
        if (!response.ok) {
          throw Error(`could not fetch data: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError'){
          console.log('fetch aborted');
        } else {
        setError(error.message);
        setIsLoading(false);
        setData(null);
        }
      }
    };
    
    fetchData();
      
    return () => {
     abortController.abort();
   };
  }, [url]);
  return {data, isLoading, error};
}

export default useFetch;
