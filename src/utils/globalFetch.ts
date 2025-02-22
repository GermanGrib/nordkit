const AFTER_ONE_DAY = 86400;
const globalFetch = (input: RequestInfo | URL): Promise<Response> => {
  return fetch(input, {
    next: { revalidate: AFTER_ONE_DAY },
  });
};

export default globalFetch;
