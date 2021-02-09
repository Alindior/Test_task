import { useState, useMemo, useEffect } from 'react';

const useAsync = (method, deps = null) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const wrappedMethod = useMemo(() => method, [deps]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      setError(null);
      try {
        const data = await wrappedMethod();

        setData(data);
      } catch (err) {
        console.log(err);
        setError(err.response.data);
      } finally {
        setLoading(false);
      }
    })();
  }, [wrappedMethod]);

  return { data, loading, error };
};

export default useAsync;
