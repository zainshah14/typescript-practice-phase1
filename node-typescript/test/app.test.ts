import request from 'supertest';
import app from '../app';

describe('API smoke tests', () => {
  it('GET /health → 200 { ok: true }', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });

  it('POST /todos → 200 creates todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'learn SuperTest' })
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo).toHaveProperty('text', 'learn SuperTest');
  });

  it('GET /todos → returns list', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('todos');
    expect(Array.isArray(res.body.todos)).toBe(true);
  });
});
