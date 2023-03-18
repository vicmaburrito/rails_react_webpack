export const URL = 'http://127.0.0.1:3000/greetings';

export const fetchApi = async () => {
  const fetching = await fetch(URL);
  const generalData = await fetching.json();
  const greetings = Object.values(generalData);
  return greetings;
};
