import { refreshAccessToken } from './refreshToken';

export const fetchWithAuth = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (response.status === 401) {
    try {
      await refreshAccessToken();

      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch {
      localStorage.removeItem('token');
      window.location.href = '/signin';
    }
  }

  return response;
};
