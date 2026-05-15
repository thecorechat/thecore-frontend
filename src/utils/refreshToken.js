export const refreshAccessToken = async () => {
  const response = await fetch('https://thecore-backend-nest.onrender.com/auth/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Refresh failed');
  }

  const result = await response.json();
  localStorage.setItem('token', result.accessToken);
  return result.accessToken;
};
