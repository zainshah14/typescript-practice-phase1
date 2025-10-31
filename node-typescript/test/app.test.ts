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

  it('PATCH /todos/:id → updates todo text', async () => {
  // First create a todo to update
  const createRes = await request(app)
    .post('/todos')
    .send({ text: 'old text' });
  const id = createRes.body.todo.id;

  // Now update it
  const patchRes = await request(app)
    .patch(`/todos/${id}`)
    .send({ text: 'updated text' });

  expect(patchRes.status).toBe(200);
  expect(patchRes.body.todo.text).toBe('updated text');
});

it('DELETE /todos/:id → removes todo', async () => {
  // Create a todo to delete
  const createRes = await request(app)
    .post('/todos')
    .send({ text: 'to delete' });
  const id = createRes.body.todo.id;

  // Delete it
  const delRes = await request(app).delete(`/todos/${id}`);
  expect(delRes.status).toBe(200);

  // Confirm it’s gone
  const listRes = await request(app).get('/todos');
  const ids = listRes.body.todos.map((t: any) => t.id);
  expect(ids).not.toContain(id);
});

it('POST /todos (invalid) → 400', async () => {
  // missing "text" entirely
  const res1 = await request(app).post('/todos').send({});
  expect(res1.status).toBe(400);
  expect(res1.body).toHaveProperty('error');

  // blank text
  const res2 = await request(app).post('/todos').send({ text: '   ' });
  expect(res2.status).toBe(400);
  expect(res2.body).toHaveProperty('error');
});
});