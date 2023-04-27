import axios from 'axios';

export default async function getMotivationalQuote(): Promise<string> {
  const url = 'https://api.quotable.io/random';
  const response = await axios.get(url);
  const contentPromise = response.data.content;
  const content = await contentPromise;
  return content;
}


