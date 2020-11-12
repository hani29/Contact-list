export const getQueryParams = (params: string, url: string) => {
  const reg = new RegExp('[?&#]' + params + '=([^&#]*)', 'i');
  const queryString = reg.exec(url);
  return queryString ? queryString[1] : null;
};