const request = require('supertest');
const app = require('../app');

describe('API Routes', () => {
  // Test homepage
  it('GET / should return 200 and HTML', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('hai, aku backend');
  });

  // Test login route (should fail without body/middleware)
  it('POST /login should return a response', async () => {
    const res = await request(app).post('/login');
    expect(res.statusCode).toBeGreaterThanOrEqual(400); // likely 400/401
  });

  // Test protected route (should fail without auth)
  it('GET /users should require authentication', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBeGreaterThanOrEqual(400); // likely 401/403
  });

  // Add more tests for other routes as needed
});