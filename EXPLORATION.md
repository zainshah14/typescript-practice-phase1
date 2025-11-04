## 1. Unit Testing – Deep Dive

---

### 1.1. What Is Unit Testing?

Unit testing is the process of verifying the smallest parts (or “units”) of a system — typically functions, methods, or classes — in isolation, without external dependencies.

These tests:

- Validate correctness at the lowest level of the codebase  
- Provide immediate feedback during refactor  
- Enable reliable change without breaking core logic  

**Typical characteristics:**

- Fast  
- Deterministic  
- Local (no DB, no network)  
- Written by developers / SDETs  

---

### 1.2. Why Unit Tests Matter (Especially for Us at BridgeLinx)

- Core business logic (e.g., pricing, eligibility rules, credit logic) must be correct.
- We’ve historically faced bugs that would've been caught earlier with unit tests.
- As our codebase grows, tests make refactoring safer and faster.
- They contribute greatly to building “confidence per deploy”.

> **Quick Example:** Before deploying a new pricing logic for RFQ, a few well-written unit tests could fail immediately if calculations go off by even 1 decimal.

---

### 1.3. Tools for Unit Testing

| Tool   | Language/Stack  | Why It Matters                                     |
|--------|-----------------|-----------------------------------------------------|
| Jest   | TS/JS (ours)    | Zero-config, fast, snapshot & mock support          |
| Mocha  | TS/JS           | Modular, flexible, requires setup                   |
| JUnit  | Java            | Most popular for enterprise-level Java apps         |
| pytest | Python          | Feature-rich, readable, auto-discovery              |

**In our Phase 1, we use:**

- Jest for running tests  
- `ts-jest` for TS support  
- SuperTest (later) for integration/API testing  

---

### 1.4. Best Practices for Unit Testing

✅ One logical assertion per test  
✅ Use descriptive test names  
✅ Mock external dependencies  
✅ Keep tests fast — run before every commit  
✅ Focus first on “critical paths” (billing, auth, validation)  

❌ Do not test frameworks  
❌ Avoid coupling tests to implementation detail  
❌ Don’t test UI rendering in unit tests — keep that for component/integration level  

---

### 1.5. What a Good Unit Test Looks Like

```ts
import { add } from '../utils/math';

describe('math utils', () => {
  it('adds two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
```

### Good Test Structure

- ✅ **Arrange**: Initialize inputs
- ✅ **Act**: Call the function
- ✅ **Assert**: Check the output

---

### 1.6. Case Study: Phase 1 Implementation

- Implemented **Jest-based unit tests** to validate core logic of insertion and retrieval in a sample CRUD API.
- Hands-on introduction to key concepts:
  - Mocking  
  - Isolation  
  - Dependency injection  
  - Assertion style  
- Established the foundation for further automation in future phases.

---

### 1.7. How Unit Testing Supports Phase 2

- Forms the backbone of the **CI workflow** (e.g., via GitHub Actions)
- Helps enforce the policy: **“no broken code gets merged”**
- Reduces the need for manual QA on minor changes
- Encourages developers to own and improve test coverage

---

### 1.8. Next Steps at BridgeLinx

- Identify **3 high-logic modules in each active service** (RFQ, Terminal, OPUI) → propose unit test coverage
- Analyze past production bugs → **retrofit missing unit tests** when feasible
- Involve developers for shared testing ownership, supported by SDET/QA

---

## 2. API Testing – Deep Dive

### 2.1. What Is API Testing?

- Focuses on testing backend endpoints that don’t rely on a UI  
- Verifies request/response payloads, status codes, headers, and core logic  
- Ensures the backend behaves correctly under expected and edge-case scenarios  
- Allows isolated testing of server functions before they are wired into the frontend  

---

### 2.2. Why API Testing Matters

- Catches logic bugs early, before UI is built  
- Helps validate integrations (e.g., third-party services, DB interactions)  
- Forms the basis for reliable contract-based development between frontend and backend teams  

---

### 2.3. How to Test APIs

Use HTTP clients such as:

- Postman  
- Insomnia  
- Automated tools like:
  - `SuperTest` (JS/TS)  
  - `Rest Assured` (Java)  

**Send requests (GET, POST, PUT, DELETE) and assert on:**

- ✅ Status Codes (200, 201, 404, 500 etc.)  
- ✅ Body Structure & Data Types  
- ✅ Authentication Flows  
- ✅ Error Scenarios (invalid input, missing auth, rate limits)  

---

### 2.4. Types of API Tests

- 🔹 **Smoke Tests**: `GET /health`  
- 🔹 **CRUD Flows**: Create → Read → Update → Delete sequence  
- 🔹 **Authentication**: Token/session validation  
- 🔹 **Negative Cases**: Missing or malformed inputs  
- 🔹 **Integration Boundaries**: DB or other services connected  

---

### 2.5. SuperTest + Jest Setup (BridgeLinx Example)

- Wrap Express app in `app.ts`  
- Use `supertest(app)` to mock requests  
- Run tests in-memory without a live server  
- Use `ts-jest` and `@types/supertest` for TypeScript support  

**Example:**

```ts
import request from 'supertest';
import { app } from '../app';

it('returns 200 on /health', async () => {
  await request(app).get('/health').expect(200);
});
```

---

### 2.6. When to Use API Testing at BridgeLinx?

- ✅ Build confidence in backend logic before frontend UI is ready  
- ✅ Faster feedback cycles vs. end-to-end tests  
- ✅ Covers 70–90% of core functionality (the “testing pyramid” principle)  
- ✅ Critical layer before we scale user load or microservices

---

## 3. Testing Areas & Strategies

**Purpose:** Map the major kinds of software testing we can use, with crisp guidance on what/why/when/how, suggested tooling, BridgeLinx-specific notes, and simple success metrics.

**Format for each area:**  
What • Why • When • How • Tooling • BridgeLinx Notes • KPIs

---

### 3.1 Integration Testing

**What:**  
Tests how two or more modules collaborate (e.g., controller ↔ service ↔ DB).

**Why:**  
Catches wiring/contract bugs that unit tests miss.

**When:**  
After unit/API basics exist; before full E2E.

**How:**  
Spin up light dependencies (e.g., in-memory DB or test containers).  
Assert business flows across layers.

**Tooling:**  
Jest, SuperTest (for HTTP layer), Testcontainers, SQLite/pg in Docker.

**BridgeLinx Notes:**  
Start with happy-path flows on RFQ/Orders; mock external carriers early.

**KPIs:**  
% of critical flows covered; defect leakage from staging to prod.

---

### 3.2 UI / Component Testing

**What:**  
Tests React/Vue components in isolation (props, state, events).

**Why:**  
Fast feedback on UI correctness without flaky browsers.

**When:**  
Parallel to API work once UI surfaces stabilize.

**How:**  
Render component → simulate user events → assert DOM/ARIA changes.

**Tooling:**  
React Testing Library, Vitest/Jest, MSW (mock API).

**BridgeLinx Notes:**  
Cover table filters, form validation, and empty/loading states on RFQ screens.

**KPIs:**  
Critical UI components covered; reduction in visual/interaction regressions.

---

### 3.3 End-to-End (E2E) Testing

**What:**  
Browser-driven tests of end-user journeys.

**Why:**  
Validates full stack + real environment; catches wiring gaps.

**When:**  
After API and core UI are stable; target “golden journeys.”

**How:**  
Automate minimal happy paths + one key negative path per module.

**Tooling:**  
Playwright or Cypress, seeded test data, MSW/Test DB.

**BridgeLinx Notes:**  
Start with login → create RFQ → submit → verify listing.  
Keep under ~10 high-value E2E tests.

**KPIs:**  
Pass rate on nightly runs; mean time to isolate failures.

---

### 3.4 Contract Testing (Service Contracts)

**What:**  
Ensures producers/consumers agree on request/response shapes.

**Why:**  
Prevents breaking changes across services/teams.

**When:**  
As soon as multiple services or external partners enter the picture.

**How:**  
Define contracts; verify producer publishes; consumer verifies against provider.

**Tooling:**  
Pact, OpenAPI schema checks, Zod/TypeBox for runtime validation.

**BridgeLinx Notes:**  
Lock API shapes for partner/carrier integrations before scaling.

**KPIs:**  
Contract verification pass rate; count of “schema break” incidents.

---

### 3.5 Performance / Load / Capacity

**What:**  
Measures latency, throughput, and resource usage under load.

**Why:**  
Prevents slowdowns and outages at growth inflection points.

**When:**  
Before big launches or traffic spikes; after major backend changes.

**How:**  
Define SLOs; run load tests with realistic data mixes; profile hotspots.

**Tooling:**  
k6, Artillery, Gatling; APM (Datadog/New Relic), pgbadger.

**BridgeLinx Notes:**  
Focus on RFQ listing queries, quotation workflows, bulk CSV ops.

**KPIs:**  
p95/p99 latency, error rate under N RPS, cost per request.

---

### 3.6 Security Testing (AppSec)

**What:**  
Detects auth/authorization flaws, input sanitization issues, and known vulnerabilities.

**Why:**  
Protects data, compliance, and reputation.

**When:**  
CI (SCA/SAST) always; DAST before releases; pen-tests on cadence.

**How:**  
Automate dependency and static scans; run DAST on staging; threat model critical flows.

**Tooling:**  
Snyk/Dependabot, ESLint security rules, OWASP ZAP, Semgrep.

**BridgeLinx Notes:**  
Harden auth flows and quote/price modification endpoints first.

**KPIs:**  
Vulnerability backlog trend; SLA to fix high-severity issues.

---

### 3.7 Reliability / Resilience (Chaos & Recovery)

**What:**  
Tests behavior under failures (timeouts, partial outages).

**Why:**  
Ensures graceful degradation and fast recovery.

**When:**  
After basic monitoring/alerts exist; pre-scale.

**How:**  
Inject failures (latency, dropped dependencies); verify fallbacks and retries.

**Tooling:**  
Toxiproxy, Chaos Mesh, feature flags for kill-switches.

**BridgeLinx Notes:**  
Timeouts/retries around carrier/finance services; idempotency on order creation.

**KPIs:**  
Error budgets, recovery time (MTTR), successful retry ratios.

---

### 3.8 Test Data, Environments, & Seeding

**What:**  
Stable, reproducible data + environments for tests.

**Why:**  
Flaky data = flaky tests; reproducibility accelerates debugging.

**When:**  
Immediately with API/E2E; treat as productized infrastructure.

**How:**  
Deterministic seed scripts; per-test DB schemas; fixture libraries.

**Tooling:**  
Prisma/TypeORM seeders, Testcontainers, Docker Compose.

**BridgeLinx Notes:**  
Seed RFQ clients, sample quotes, roles/permissions matrices.

**KPIs:**  
Time to reproduce a bug locally; % of tests independent of order.

---

### 3.9 CI Gates & Quality Signals

**What:**  
Automated checks that block regressions.

**Why:**  
Keeps main branch healthy; builds trust in releases.

**When:**  
Start with lint + unit/API; add E2E smoke later.

**How:**  
Pipeline stages: Lint → Unit/API → Contract → E2E smoke → Deploy-to-Staging.

**Tooling:**  
GitHub Actions/GitLab CI, codecov, commit hooks.

**BridgeLinx Notes:**  
Keep gates fast (<10 min). E2E smoke only a few golden paths.

**KPIs:**  
Build time, flake rate, coverage of critical paths, main-branch stability.

---

### 3.10 Prioritization Heuristic (What to Add First)

1. Unit/API (already done)  
2. Integration for critical flows  
3. Minimal E2E smoke (golden journeys)  
4. Contract for partner/service edges  
5. Performance for known hotspots  
6. Security scanning always-on  
7. Resilience as we touch high-risk dependencies  
