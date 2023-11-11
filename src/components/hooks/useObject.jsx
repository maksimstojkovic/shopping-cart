import { useState, useEffect } from "react";

const useObject = (baseUrl, id) => {
  const [object, setObject] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setObject(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [baseUrl, id]);

  return { object, error, loading };
};

export default useObject;
