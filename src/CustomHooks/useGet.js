import { useEffect, useState } from "react";

const useGet = (endPoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    endPoint
      .then((res) => {
        setData(res.data.data);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);
  return [data, loading];
};

export default useGet;
