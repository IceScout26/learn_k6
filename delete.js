import http from "k6/http";
import { check } from "k6";

export default function () {
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.del(
    "https://jsonplaceholder.typicode.com/todos/21",
    null, // tidak ada payload untuk metode DELETE
    params
  );

  check(res, {
    "response code was 200": (res) => res.status == 200,
  });
}
