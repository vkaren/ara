import config from "@config";
import { getItem } from "@utils/cookies";

const api = async ({
  method,
  type,
  body,
  route,
  headers = {},
  ssr = {},
  token = getItem("token", ssr),
}) => {
  try {
    const requestOptions = {
      method,
      credentials: "include",
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };

    if (type === "application/json") {
      requestOptions.headers = {
        ...requestOptions.headers,
        "Content-Type": "application/json",
      };

      requestOptions.body = JSON.stringify(body);
    } else if (type === "multipart/form-data") {
      requestOptions.body = body;
    }

    const response = await fetch(`${config.api}/${route}`, requestOptions);

    const data = await response.json();

    console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default api;
