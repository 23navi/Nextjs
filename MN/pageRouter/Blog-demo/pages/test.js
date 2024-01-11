// https://o10kcrtatf.execute-api.ap-south-1.amazonaws.com/dev/getUrls/357073294020116?startDate=2023-12-01&days=1

import { useEffect, useState } from "react";

export default function ReviewsPage() {
  const [val, setVal] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://o10kcrtatf.execute-api.ap-south-1.amazonaws.com/dev/getUrls/357073294020116?startDate=2023-12-01&days=1"
      );
      const data = await res.json();
      console.log(data[0].date);
      setVal(data[0].date);
    }
    fetchData();
  }, []);
  return <h1>{val}</h1>;
}
