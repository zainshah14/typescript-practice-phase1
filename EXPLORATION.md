## Unit Testing – Deep Dive

### 1. What Is Unit Testing?

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

### 2. Why Unit Tests Matter (Especially for Us at BridgeLinx)

- Core business logic (e.g., pricing, eligibility rules, credit logic) must be correct.
- We’ve historically faced bugs that would've been caught earlier with unit tests.
- As our codebase grows, tests make refactoring safer and faster.
- They contribute greatly to building “confidence per deploy”.

> **Quick Example:** Before deploying a new pricing logic for RFQ, a few well-written unit tests could fail immediately if calculations go off by even 1 decimal.

---

### 3. Tools for Unit Testing

| Tool      | Language/Stack  | Why It Matters                                     |
|-----------|-----------------|-----------------------------------------------------|
| Jest      | TS/JS (ours)    | Zero-config, fast, snapshot & mock support          |
| Mocha     | TS/JS           | Modular, flexible, requires setup                   |
| JUnit     | Java            | Most popular for enterprise-level Java apps         |
| pytest    | Python          | Feature-rich, readable, auto-discovery              |

**In our Phase 1, we use:**

- Jest for running tests  
- `ts-jest` for TS support  
- SuperTest (later) for integration/API testing  

---

### 4. Best Practices for Unit Testing

✅ One logical assertion per test  
✅ Use descriptive test names  
✅ Mock external dependencies  
✅ Keep tests fast — run before every commit  
✅ Focus first on “critical paths” (billing, auth, validation)

❌ Do not test frameworks  
❌ Avoid coupling tests to implementation detail  
❌ Don’t test UI rendering in unit tests — keep that for component/integration level  

---

### 5. What a Good Unit Test Looks Like

```ts
import { add } from '../utils/math';

describe('math utils', () => {
  it('adds two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
Good structure:

✅ Arrange (initialize inputs)

✅ Act (call the function)

✅ Assert (check output)

6. Include In Our Case Study
“In Phase 1, we implemented Jest-based unit tests to validate the core logic of insertion and retrieval in a sample CRUD API. This served as a hands-on intro to mocking, isolation, dependency injection, and assertion style — all foundational for automation in later phases.”

7. Unit Testing & Phase 2 Roadmap
Unit tests are the backbone of the CI workflow (GitHub Actions, later).

Helps enforce “no broken code gets merged” policy

Reduces manual QA for every small change

Encourages devs to own test coverage

8. Next Steps (Specific to BridgeLinx)
Identify 3 modules in each active service (e.g., RFQ, Terminal, OPUI) with a high logic load → propose unit coverage

Identify code hotspots from production bugs → retrofit unit tests where feasible

Loop in devs for ownership with SDET/QA support