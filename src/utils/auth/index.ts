export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem('accessToken');
};

export const getAccessToken = () => {
  return localStorage.getItem('token');
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const deleteRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const setFingerprint = (fingerprint: string) => {
  return localStorage.setItem('fingerprint', fingerprint);
};

export const getFingerprint = () => {
  return localStorage.getItem('fingerprint');
};

export const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalStorageValue = (key: string, value: any) => {
  return localStorage.setItem(key, value);
};
