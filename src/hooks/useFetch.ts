import { useState } from "react";

type FetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  getData: () => Promise<void>;
};

const useFetch = <T>(url: string): FetchResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (err: unknown) {
      setError(err?.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getData };
};

export default useFetch;
