import qs from "qs";
const url =
  "http://localhost:1337/api/reviews?" +
  qs.stringify(
    {
      fields: ["slug", "title"],
      populate: { image: { fields: ["name", "url"] } },
      pagination: { pageSize: 5 },
    },
    { encodeValuesOnly: true }
  );
const response = await fetch(url);
const body = await response.json();
console.log({ data: JSON.stringify(body.data) });
