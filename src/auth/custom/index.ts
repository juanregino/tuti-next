export async function signIn(strategy: string, data: any) {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      throw error;
    });
  });
}