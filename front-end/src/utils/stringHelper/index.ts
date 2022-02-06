export const formatDate = (date: string): string => {
  const [ justDate ] = date.split('T');

  return justDate.split('-').reverse().join('/');
}