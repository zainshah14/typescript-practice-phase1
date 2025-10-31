# Express + TypeScript CRUD API (Phase 1 – PIP)

## Run
```bash
npm i
npm run dev           # start dev server
npm run compile && npm start   # build to dist/ and run
npm test              # run Jest + SuperTest
npm run lint          # check lint

## Endpoints
- `GET /health` → `{ ok: true }`
- `POST /todos` → `{ todo }`
- `GET /todos` → `{ todos: [] }`
- `PATCH /todos/:id` → `{ todo }`
- `DELETE /todos/:id` → `{ message }`

## Tests
Jest + ts-jest + SuperTest:
- health check
- create todo
- list todos
- update todo
- delete todo

## Testing & Coverage
- Run tests: `npm test`
- Coverage report: `npm run coverage` → see summary in terminal and detailed HTML in `coverage/lcov-report/index.html`
