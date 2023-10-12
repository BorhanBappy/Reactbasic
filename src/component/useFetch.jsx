import { useState, useEffect } from "react";

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("URL is not fetched properly");
  }
  return response.json();
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const data = await fetchData(url);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
