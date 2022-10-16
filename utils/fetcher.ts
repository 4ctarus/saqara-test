import { QueryFunctionContext } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetcher<T>(
  context: QueryFunctionContext<string[], T>
): Promise<T> {
  console.log('fetcher');
  const {
    queryKey: [url],
  } = context;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
