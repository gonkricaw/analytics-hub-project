import { http, HttpResponse } from 'msw';

// Define handlers for mock API requests
export const handlers = [
  // Example of mocking the /api/users/me endpoint
  http.get('/api/users/me', () => {
    return HttpResponse.json({
      id: '1',
      name: 'Demo User',
      email: 'demo@indonet.com',
      role: 'Admin',
      roleId: '1',
      profilePhotoUrl: null,
    });
  }),

  // Example of mocking the authentication API
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();
    
    if (email === 'admin@indonet.com' && password === 'admin123') {
      return HttpResponse.json({
        user: {
          id: '1',
          name: 'Admin User',
          email: 'admin@indonet.com',
          role: 'Admin',
        },
        token: 'mock-jwt-token',
      });
    }
    
    return new HttpResponse(null, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }),

  // Add more mock API handlers as needed
];
