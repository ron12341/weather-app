import { OPTIONS_URL } from "../../src/services/url";

export async function handler(event: any) {
  const input = event.queryStringParameters.input;
  const limit = event.queryStringParameters.limit || 5;

  const API_KEY = process.env.REACT_APP_API_KEY;

  const res = await fetch(`${OPTIONS_URL}${input}&limit=${limit}&appid=${API_KEY}`);
  const data = await res.json();

  return { statusCode: 200, body: JSON.stringify(data) };
}
