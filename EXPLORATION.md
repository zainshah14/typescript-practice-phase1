## 1. General

### 1.1 Testing Principles / Manifesto

- **Quality is everyone’s responsibility**  
  Testing isn’t an isolated function — developers, QA, product, and ops must co-own it.

- **Test early, test often**  
  Detecting bugs earlier in the lifecycle reduces risk and saves cost exponentially.

- **Automate where it helps, not where it hurts**  
  Automation is not a goal, but a strategy to free human testers for exploratory and UX-focused work.

- **Shift Left + Shift Right**  
  Balance proactive (pre-release) testing with reactive (post-release) observability, logging, and feedback loops.

- **Risk-based prioritization**  
  Don’t test everything the same way — focus on impact, frequency, and breakability.

- **Data-informed decisions**  
  Testing should produce measurable outputs: failures, stability trends, time-to-detect, etc.

- **Continuous learning**  
  QA and testing practices adapt with evolving products, tooling, and organizational maturity.

---

### 1.2 Developments + AI (Industry-Wide)

Modern testing is evolving rapidly, powered by:

- **Self-healing test suites**  
  Tools like Testim and Mabl auto-update broken selectors using ML.

- **AI-assisted test creation + code generation**  
  Systems like GitHub Copilot, Kite, and Codium help generate test cases based on code structure.

- **Intelligent regression selection**  
  Platforms such as Launchable predict which subset of tests should be run based on change diff.

- **Visual + UX diffs with baseline learning**  
  Tools like Percy, Applitools use CV models to flag front-end changes beyond static snapshots.

- **LLM-based exploratory testing support**  
  GPT models augment exploratory testing by suggesting flow deviations and edge-cases based on app context.

- **Synthetic data generation**  
  AI tools can create realistic edge-case data without exposing sensitive production datasets.

> _This section will be revisited and expanded in Phase 2 or when implementing AI-backed tools._

---

### 1.3 Applies to All Testing Types (Cross-Cutting Knowledge)

- **Test environments & data**  
  Each test type requires matching environments and data needs — mock vs. sandbox vs. prod-shadow.

- **Observability + debug loops**  
  Logs, traces, error tracking, CI outputs — make sure they’re tightly integrated with the test pipeline.

- **Standardized reporting**  
  Use consistent frameworks (e.g., Allure, reporters in Jest/Cypress, Slack notifications) to remove ambiguity.

- **Clear ownership and handoff paths**  
  Who owns failures? Who remediates? What is the SLA for triage? These must be agreed upfront.

- **Version control + PR hooks**  
  Tests should be part of the pull request lifecycle — not manual, not after-merge.

- **Security + compliance awareness**  
  All testing (even performance or UI) should keep data sensitivity, audit trails, and access controls in mind.
  
---

## 2. Unit Testing

### 2.1 What Is Unit Testing?

Unit testing is the process of testing the smallest individual parts of a codebase in isolation — typically functions, methods, or classes — to verify their behavior.

The purpose is to ensure that a specific piece of logic behaves as expected in all defined scenarios (valid input, edge cases, invalid input, etc.).

---

### 2.2 Why Unit Testing Matters

- **Lowest-cost bug detection**  
  Most issues caught during unit testing cost 10–100x less time than those caught in QA or production.

- **Safety during refactor**  
  Unit tests provide a safety net enabling fearless code changes or modular rewrites.

- **Reusable examples**  
  Unit tests become examples of how functions are intended to be used.

- **Doc-as-code**  
  Living documentation that evolves with code, far better than stale wiki entries.

---

### 2.3 When to Use It

- Core modules that influence many other layers  
- Shared utility libraries or business logic functions  
- Feature logic that must be highly predictable (e.g., pricing, rules engines)  
- Refactors — write or update tests before changing behavior  
- New code — ideally as part of TDD (Test-Driven Development)  

---

### 2.4 How It Works (Concept)

1. Load component in isolation  
2. Mock or stub dependencies  
3. Run predefined inputs  
4. Compare actual output with expected output  
5. Report pass/fail  

> _A good unit test asserts exactly one behavior and gives one reason to fail._

---

### 2.5 Common Testing Tools

| Tool   | Language / Framework     | Why It Matters                               |
|--------|---------------------------|----------------------------------------------|
| Jest   | JavaScript / TypeScript   | Fast, feature-rich, and widely adopted       |
| Mocha  | JS/TS                     | Flexible test runner                         |
| JUnit  | Java                      | Built-in, reliable, highly performant        |
| NUnit  | C# / .NET                 | Easy to use, standard in .NET                |
| pytest | Python                    | High expressivity, small syntax              |
| RSpec  | Ruby                      | Simple syntax, behavior-driven approach      |

---

### 2.6 Key Metrics (KPIs)

- **Test coverage** — Lines of code or functions covered by tests  
- **Failing to passing ratio** — How many tests fail after recent code changes  
- **Test runtime** — Duration of full test suite  
- **Mutation score** — Indicator of test robustness against code change  

---

## 3. API Testing

### 3.1 What Is API Testing?

API testing focuses on validating the functionality, reliability, performance, and security of application programming interfaces (APIs).  
Instead of testing frontend behavior, it ensures that endpoints:

- Return the correct responses  
- Handle valid, invalid, and edge-case input variations  
- Maintain request/response contract integrity  

---

### 3.2 Why Use It?

- Ensures backend correctness before UI integration  
- Validates business logic at the service level  
- Catches issues early with lower cost of fixing  
- Suitable for microservices, headless systems, and mobile backends  
- Enables automated regression coverage without flaky UI layers  

---

### 3.3 When Is It Most Useful?

- Early in development (before UI exists)  
- For backend-only modules  
- When building public-facing/external APIs  
- During refactoring or version upgrades  
- In distributed systems with multiple service consumers  

---

### 3.4 Tools for API Testing

| Tool         | Stack / Type              | Why Use It                                            |
|--------------|---------------------------|-------------------------------------------------------|
| Postman      | REST/GraphQL              | Easy request building + scripts + environments        |
| Newman       | Postman + CLI             | Automate Postman tests in pipelines                   |
| SuperTest    | Node/Express Testing      | Simple and fast for testing HTTP endpoints in code    |
| Jest + Axios | JS/TS API Test Runner     | Flexible, unit-style assertions                       |
| REST Assured | Java-based APIs           | Extensive DSL for validation + payload handling       |
| cURL + Bash  | Shell/CI environments     | Lightweight, quick smoke tests                        |

---

### 3.5 Key KPIs for API Testing

- **Endpoint success rate** (2xx/4xx/5xx ratios)  
- **Contract/schema validation success**  
- **Response time and payload size**  
- **Backward compatibility checks** (versioning)  

---

### 3.6 AI & Industry Developments

- AI agents that auto-generate test cases from OpenAPI specs  
- Contract drift detection using code graph models  
- API mocking through AI-driven response generation  
- Performance optimization via AI-assisted load test generation  

---

## 4. Testing Areas & Strategies

This section covers different types of software testing beyond unit and API testing, giving a broader picture of testing options and when they matter.

For each type of testing, we answer:

- What is it?  
- Why use it?  
- When is it useful?  
- What tools are available?  
- What key performance indicators (KPIs) can be tracked?  
- What’s happening in AI + modern developments?  

---

### 4.1 Integration Testing

#### 4.1.1 What Is It?

Integration testing verifies that different modules or services work together correctly as a combined unit.  
Rather than testing small units (as in unit tests), it ensures interactions — e.g., service-to-database or function-to-API.

#### 4.1.2 Why It Matters

- Catches interface or contract mismatches  
- Ensures systems don’t break when stitched together  
- Helps detect breaking changes early, especially in microservices  

#### 4.1.3 When to Use It

- After integrating a service, API, or component  
- Before deploying a release candidate  
- During major dependency version upgrades  

#### 4.1.4 Tooling

| Tool                | Stack / Type        | Why Use It                                   |
|---------------------|---------------------|----------------------------------------------|
| Jest (w/ mocks)     | JS/TS Applications  | Easy to combine unit + integration           |
| SuperTest           | Express/Node        | UI-less API endpoint testing                 |
| Postman / Newman    | REST-based services | Supports pre/post scripts, CI-ready          |
| Cypress             | Frontend + API combo| End-to-end with integrated checkpoints       |
| PyTest + Requests   | Python microservices| Highly customizable fixture support          |

#### 4.1.5 KPIs

- % of critical flows covered  
- API contract compliance rate  
- Service dependency break-rate  
- Mean time between integration failures  

#### 4.1.6 AI & Industry Developments

- AI agents to auto-generate integration mocks  
- Auto-discovery of service dependencies via code graphing  
- Smart diffing engines to detect contract updates  

---

### 4.2 UI / Component Testing

#### 4.2.1 What Is It?

Component testing validates isolated UI pieces (like a button, popup, or form) for visual consistency and behavior.

#### 4.2.2 Why It Matters

- Ensures reusable components behave as expected  
- Prevents visual and functional regression  
- Increases confidence in design systems  

#### 4.2.3 When to Use It

- Developing shared component libraries  
- Adding new UI features before integration  
- Refactoring or theming UI  

#### 4.2.4 Tooling

| Tool       | Target           | Why It Matters                        |
|------------|------------------|---------------------------------------|
| Storybook  | React, Angular   | Visual playground with snapshots      |
| Cypress    | End-to-end       | UI + functional flow testing          |
| Playwright | Modern JS apps   | Auto-wait, supports trace capture     |
| Percy      | Visual diffs     | Automates screenshot regression       |

#### 4.2.5 KPIs

- Component reusability rate  
- Visual regression failures  
- % components tested in isolation  

#### 4.2.6 AI & Industry Developments

- AI visual diffing to identify pixel-level anomalies  
- Smart component state generation for full permutation testing  
- Generative UI cases based on usage patterns  

---

### 4.3 End-to-End (E2E) Testing

#### 4.3.1 What Is E2E Testing?

End-to-End testing validates the entire application workflow from the user's perspective.  
It simulates real-world usage to ensure that all interconnected components—frontend, backend, database, and third-party services—work together correctly.

#### 4.3.2 Why Use It?

- Verifies business-critical workflows (e.g. signup, checkout)  
- Catches integration issues not visible at unit/API level  
- Emulates actual user flows for confidence before release  
- Detects broken hooks between UI and backend systems  

#### 4.3.3 When Is It Most Useful?

- Before production deployments  
- In apps with multi-step user journeys  
- When multiple services/APIs are involved in a workflow  
- For smoke/regression testing in CI pipelines  

#### 4.3.4 Tools for E2E Testing

| Tool       | Stack / Application           | Why Use It                                          |
|------------|-------------------------------|-----------------------------------------------------|
| Cypress    | JavaScript/TypeScript (Web)   | Popular, reliable E2E with built-in waits and UI    |
| Playwright | Web, Mobile Web, Chromium     | Fast, cross-browser, supports multiple languages    |
| Selenium   | Web, Cross-browser            | Classic, works with many languages and browsers     |
| TestCafe   | Web Testing                   | No browser plugins, easy test concurrency           |
| Appium     | Mobile Testing                | UI automation for Android + iOS apps                |

#### 4.3.5 Key KPIs for E2E Testing

- Test pass rate for core flows  
- Average execution time (speed)  
- Flakiness rate (test reruns due to unstable behavior)  
- Coverage of high-value business scenarios  

#### 4.3.6 AI & Industry Developments

- Self-healing locators for UI changes  
- AI-powered flakiness detection  
- Code-to-test auto-generation for critical paths  
- Visual regression via AI-driven screenshot comparison  

---

### 4.4 Performance Testing

#### 4.4.1 What Is Performance Testing?

Performance testing measures how an application behaves under expected workloads. It evaluates responsiveness, stability, scalability, and resource usage under various conditions.

#### 4.4.2 Why Use It?

- Ensures system reliability during peak usage  
- Detects performance bottlenecks (CPU, memory, DB queries)  
- Helps plan infrastructure scaling and capacity  
- Prevents slow response times that degrade user experience  

#### 4.4.3 When Is It Most Useful?

- Before large feature releases  
- When expecting traffic spikes (e.g., marketing campaigns)  
- During architectural changes or infrastructure migration  
- When SLAs or performance thresholds are defined  

#### 4.4.4 Tools for Performance Testing

| Tool      | Focus / Stack                       | Why Use It                                        |
|-----------|-------------------------------------|---------------------------------------------------|
| JMeter    | Load, stress, distributed testing   | Open-source, highly extensible for APIs & services|
| Locust    | Load testing with Python            | Developer-friendly, programmable test scenarios   |
| k6        | API & microservices                 | Modern, scriptable, integrates with CI pipelines  |
| Gatling   | JVM-based performance testing       | High throughput, good for real-time metrics       |
| Artillery | Node.js performance tool            | Lightweight, easy to embed in JS projects         |

#### 4.4.5 Key KPIs for Performance Testing

- Response Time (P95, P99 latency)  
- Throughput (requests per second)  
- Error rate under load  
- Resource utilization (CPU, memory, I/O)  
- Scaling efficiency under increased load  

#### 4.4.6 AI & Industry Developments

- AI-based pattern detection in performance anomalies  
- Predictive scaling via machine learning (autoscaling triggers)  
- Real-time performance maps and bottleneck identification  

---

### 4.5 Load & Stress Testing

#### 4.5.1 What Is Load & Stress Testing?

- **Load Testing** checks how a system performs under expected user loads.  
- **Stress Testing** pushes the system beyond normal load levels (e.g., extreme traffic) to determine breaking points and recovery behavior.

#### 4.5.2 Why Use It?

- Ensures app remains functional under anticipated peak loads  
- Identifies system limits — both graceful degradation and total failure points  
- Validates auto-scaling or elasticity settings in production-like environments  
- Reveals performance ceilings (e.g., max DB connections, network I/O, session limits)  

#### 4.5.3 When Is It Most Useful?

- Before public launches or viral marketing events  
- For mission-critical modules like checkout, payments, or booking  
- During refactors of core infrastructure (e.g. monolith to microservices)  
- In SLAs where downtime penalties apply  

#### 4.5.4 Tools for Load & Stress Testing

| Tool        | Primary Use                 | Why Use It                                         |
|-------------|-----------------------------|----------------------------------------------------|
| JMeter      | Load and stress at scale    | Mature tool, excellent for multi-threaded testing  |
| k6          | Developer-centric load      | Scriptable in JS, lightweight, great in CI pipelines |
| Locust      | Load and concurrency testing| Python-based, easy for custom user scenarios       |
| Artillery   | Node ecosystem              | Good for rapid validation, simple YAML config      |
| LoadRunner  | Enterprise-grade load       | Extensive reporting, great for legacy/enterprise   |

#### 4.5.5 Key KPIs for Load & Stress Testing

- Max users supported at target response time (e.g. < 500ms)  
- System recovery time post-failure  
- Error percentage during peak throughput  
- Transactions per second (TPS) threshold under pressure  
- System break-down points and bottleneck diagnostics  

#### 4.5.6 AI & Industry Developments

- AI-based burst load simulation (e.g., forecasting real user surge distribution)  
- Auto-tuning load profiles based on historical metrics/log data  
- Early-warning systems for failure prediction during real-world traffic  

---

### 4.6 Security Testing

#### 4.6.1 What Is Security Testing?

Security testing evaluates a system's defenses against malicious attacks.  
The goal is to find vulnerabilities before attackers do—ensuring data integrity, confidentiality, and availability.

#### 4.6.2 Why Use It?

- Prevent data breaches, fraud, and unauthorized access  
- Protect brand trust and avoid legal penalties (e.g. GDPR, HIPAA)  
- Make sure authentication, authorization, and session flows are robust  
- Identify misconfigurations that might leak credentials or expose APIs  

#### 4.6.3 When Is It Most Useful?

- Before releasing features that involve sensitive data  
- When adding 3rd-party integrations or public APIs  
- During authentication or payment module changes  
- For periodic compliance certifications (e.g. SOC2, PCI DSS)  

#### 4.6.4 Types of Security Testing

| Type                              | Purpose                                         |
|-----------------------------------|-------------------------------------------------|
| Vulnerability Scanning            | Automated scan for known weaknesses             |
| Penetration Testing               | Simulated attack by ethical hacker              |
| Fuzz Testing                      | Inputting random data to cause system crashes   |
| Static App Security Testing (SAST)| Scans source code for vulnerabilities           |
| Dynamic App Security Testing (DAST)| Runs tests on live app to detect runtime exploits |
| API Security Testing              | Focused on endpoint access, rate limiting, scopes, etc. |

#### 4.6.5 Tools for Security Testing

| Tool         | Use Case                       | Why Use It                                       |
|--------------|--------------------------------|--------------------------------------------------|
| OWASP ZAP    | DAST                           | Free and easy to add to CI                       |
| Burp Suite   | Manual + automated pen-testing | Industry-standard GUI for ethical hackers        |
| Snyk         | SAST + dependency scan         | Developer-first, great reporting and PR feedback |
| Postman + Newman | API security flows         | Chains auth/rate limits/security assertions      |
| GAUNTLT      | Command-line security testing  | Good for running security attack scripts in pipelines |

#### 4.6.6 Key KPIs for Security Testing

- Number of critical vulnerabilities (must be 0 for production)  
- % of codebase scanned and secured  
- Time to detect and time to patch (MTTD/MTTP)  
- OWASP compliance score / audit readiness  

#### 4.6.7 AI & Industry Developments

- AI-powered code review for security smells  
- Automated mutation testing for exploit defense validation  
- Behavior analysis of production logs for anomaly detection  

---

### 4.7 Accessibility Testing

#### 4.7.1 What Is Accessibility Testing?

Accessibility testing ensures that applications are usable by people with disabilities—including visual, auditory, cognitive, and motor impairments.  
It validates compliance with standards like **WCAG (Web Content Accessibility Guidelines)**.

#### 4.7.2 Why Use It?

- Legal compliance (e.g., ADA, WCAG 2.1)  
- Inclusive design increases product reach and user trust  
- Helps avoid legal risks and PR backlash  
- Improves UX for all users, e.g., keyboard navigation, high contrast  

#### 4.7.3 When Is It Most Useful?

- During UI development and review cycles  
- Before major releases or redesigns  
- For user-facing flows (e.g., onboarding, checkout, dashboards)  
- When supporting regions with strict accessibility laws (e.g., EU, US)  

#### 4.7.4 Types of Accessibility Testing

| Type               | Description                                          |
|--------------------|------------------------------------------------------|
| Manual Testing     | Keyboard navigation, screen reader testing, tab flow |
| Automated Scans    | Tool-based rules validation (labels, alt tags, ARIA) |
| Color Contrast     | Ensures readable color combinations                  |
| Cognitive Testing  | Verifies clarity and intent of content               |

#### 4.7.5 Tools for Accessibility Testing

| Tool           | Use Case                        | Why Use It                                   |
|----------------|---------------------------------|----------------------------------------------|
| axe DevTools   | Chrome extension for quick scan | Easy to use during dev reviews               |
| Lighthouse     | Built-in Chrome audit for a11y  | Good for performance + a11y combo            |
| NVDA / JAWS    | Screen reader testing           | Validates real-world usability               |
| WAVE           | Visual overlay of violations    | Great for design reviews                     |
| Storybook a11y | Component-level accessibility   | Helps devs enforce a11y in isolation         |

#### 4.7.6 Key KPIs for Accessibility Testing

- WCAG conformance level (A / AA / AAA)  
- Number of violations per screen or flow  
- % of UI components passing accessibility standards  
- Keyboard navigation coverage score  

#### 4.7.7 AI & Industry Developments

- AI-assisted alt text generation for images and complex visuals  
- Predictive design feedback to highlight inaccessible components  
- Automatic focus order correction suggestions during build  

---

### 4.8 Cross-Browser / Cross-Platform Testing

#### 4.8.1 What Is Cross-Browser / Cross-Platform Testing?

Cross-browser and cross-platform testing ensure that a web or mobile application performs consistently across multiple browsers (e.g., Chrome, Firefox, Safari, Edge) and platforms (e.g., Windows, macOS, Android, iOS).

#### 4.8.2 Why Use It?

- Users access apps from diverse environments and devices  
- Prevents layout, input, and performance issues across OS/browser combos  
- Helps detect platform-specific bugs early (e.g., CSS rendering differences)  
- Critical for customer-facing apps to reduce friction and support  

#### 4.8.3 When Is It Most Useful?

- Before every major release of UI features  
- In production-like staging environments  
- For global products with diverse user bases  
- When rolling out new browser APIs or responsive UIs  

#### 4.8.4 Types of Cross-Browser / Platform Testing

| Type               | Description                                       |
|--------------------|---------------------------------------------------|
| Visual Comparisons | Layout differences, font rendering, responsiveness |
| Functional Testing | Click flows, form submissions, interactions        |
| Device Emulation   | Screen resolution, touch vs pointer behavior       |
| Performance Checks | Load times across different browsers               |

#### 4.8.5 Tools for Cross-Browser / Cross-Platform Testing

| Tool          | Use Case                              | Why Use It                                  |
|---------------|----------------------------------------|---------------------------------------------|
| BrowserStack  | Cloud testing across devices/browsers  | Real device & quick setup                   |
| LambdaTest    | Automated & manual cross-browser tests | Affordable & scalable testing               |
| Selenium Grid | Distributed test execution             | Great for integration with CI               |
| Cypress + Plugins | Modern web test runner with support| Fine control via custom configs             |
| Playwright    | Automated cross-browser (Chromium/WebKit/FF) | Great for E2E automation             |

#### 4.8.6 Key KPIs for Cross-Platform Testing

- % of supported browsers passing critical paths  
- Number of browser-specific issues reported per sprint  
- Time to isolate and fix cross-browser defects  
- Performance baseline for each supported device type  

#### 4.8.7 AI & Industry Developments

- Automated visual testing via ML diff detection (e.g., Percy, Applitools)  
- Smart selectors that adapt to DOM changes, reducing flaky tests  
- Cloud-run device lab with autoscaling and test suggestion algorithms  

---

### 4.9 Static Code Analysis

#### 4.9.1 What Is Static Code Analysis?

Static Code Analysis (SCA) is the process of examining source code without executing it, to identify potential errors, security vulnerabilities, code smells, and maintainability issues.

#### 4.9.2 Why Use It?

- Detects defects early in the development cycle  
- Ensures code quality and consistency across the team  
- Helps enforce coding standards (like clean architecture or naming conventions)  
- Prevents critical security issues like injection or unsafe patterns  

#### 4.9.3 When Is It Most Useful?

- During development (pre-commit or pre-push)  
- In CI pipelines before builds are approved  
- For legacy code audits before major refactors or upgrades  

#### 4.9.4 Common Static Analysis Checks

| Check Type       | Examples                                  |
|------------------|--------------------------------------------|
| Code Quality     | Unused vars, unreachable code, duplication |
| Code Security    | Hard-coded credentials, insecure functions |
| Style Consistency| Naming, spacing, formatting conventions    |
| Best Practices   | Null checks, exception handling, complexity|

#### 4.9.5 Tools for Static Code Analysis

| Tool       | Language / Ecosystem     | Why Use It                                        |
|------------|---------------------------|---------------------------------------------------|
| ESLint     | JavaScript / TypeScript   | Popular for custom rules and plugin ecosystem     |
| SonarQube  | Multi-language            | Full dashboard for code quality and security      |
| Pylint     | Python                    | Highly configurable static analyzer               |
| PMD        | Java / Apex               | Helps enforce best practices for Java teams       |
| Bandit     | Python security           | Detects common security issues                    |

#### 4.9.6 Key KPIs for Static Analysis

- Rule violation count per merge request  
- Security issues caught pre-merge  
- Average defect density per 1,000 lines of code  
- Time needed to fix static issues vs dynamic issues  

#### 4.9.7 AI & Industry Developments

- AI-powered tools like GitHub Advanced Security or DeepCode to identify real issues vs noise  
- Predictive code reviews that catch likely regressions  
- Refactoring suggestions based on complexity or maintainability score  

---

### 4.10 Mutation Testing

#### 4.10.1 What Is Mutation Testing?

Mutation Testing is a method to evaluate the quality of test suites by introducing small, intentional changes (mutations) into the code and checking whether the test cases detect and fail due to those changes.

#### 4.10.2 Why Use It?

- Measures the effectiveness of existing test cases  
- Ensures tests fail when code behavior changes  
- Prevents false confidence from weak or incomplete tests  
- Reinforces focus on “asserting behavior” rather than coverage percentages  

#### 4.10.3 How It Works

1. Mutations are introduced into the code (e.g., changing `>=` to `>`, swapping operators, inverting logic)  
2. Tests are run against the mutated code  
3. If a test fails → mutation is “killed” (good)  
4. If all tests pass → mutation “survived” (indicates weak/incomplete test coverage)  

#### 4.10.4 Tools for Mutation Testing

| Tool     | Language          | Highlights                                     |
|----------|-------------------|------------------------------------------------|
| Stryker  | JavaScript, TS    | Popular in JS ecosystem with great reporting   |
| PIT / Pitest | Java          | Fast and easy to integrate in CI pipelines     |
| MutPy    | Python            | Simple tool for academic and smaller projects  |
| Infection| PHP               | Integrates well with PHPUnit                   |

#### 4.10.5 KPIs for Mutation Testing

- Mutation Score (% of mutations caught)  
- Survived mutation count (lower is better)  
- Test execution time impact  
- Mutation types that frequently survive (pattern analysis)  

#### 4.10.6 AI & Developments

- Smart mutation selection using ML (avoid redundant or trivial mutations)  
- Automatic refactor suggestions for hard-to-kill mutants  
- Cloud-based mutation analysis services for faster feedback loops  

---

### 4.11 Prioritization Heuristics _(To Be Reorganized Later Under Strategies Section)_

#### 4.11.1 What Is It?

Prioritization heuristics help teams decide what to test first, given limited time or resources.  
They are especially useful in large-scale systems or continuous delivery environments.

#### 4.11.2 Why It Matters

- Ensures critical features and flows are always covered first  
- Prevents spending time on low-value test cases during crunch periods  
- Helps align testing with business risk, usage data, and system behavior  

#### 4.11.3 Common Heuristics

| Heuristic        | Focus Area                                           |
|------------------|-------------------------------------------------------|
| RCRCRC           | Recent, Core, Risk, Configuration, Reputation, Critical |
| SFDIPOT          | Structure, Function, Data, Interfaces, Platform, Operations, Time |
| MICRO Heuristics | Money, Impact, Complexity, Risk, Odds                |
| Usage Frequency  | Based on most-used features by real users            |
| Risk-based Testing | Focus on high-risk modules or integrations         |

#### 4.11.4 How to Apply

1. Rank modules or features using one or more heuristics  
2. Map against available time and team capacity  
3. Execute highest impact tests first  
4. Revisit after deployments or major releases  

#### 4.11.5 AI & Developments

- AI-based failure prediction using real-user telemetry  
- Automated prioritization suggestions based on code changes  
- ML-based test suite sorting for optimized CI runtime  

---

## 5. Test Strategies & Rollout Logic

### 5.1 Principles of Introduction

**How to introduce new testing practices into a growing engineering culture.**

---

#### 📌 What This Is About

When introducing a new type of testing (Unit, Load, Security, etc.), timing + approach matter as much as the quality of the tests themselves.  
These principles ensure we're not just “adding tests,” but improving confidence, reducing risk, and earning adoption.

---

#### 🧭 Key Principles

- **Start Where Pain Is Highest**  
  Introduce testing in modules/features where failures cause the most chaos (e.g. critical paths, money flows, high-volume endpoints).

- **Automate the Boring, Not the Creative**  
  Reserve manual/exploratory testing for UX, edge-case empathy, and critical flows.  
  Automate repetitive, deterministic checks that ensure stability.

- **Inside-Out Layering**  
  Build confidence layer-by-layer:  
  `Unit → API → Integration → E2E → Performance → Resilience`

- **Own What You Ship**  
  Testing isn't a “QA job done at the end.”  
  Every squad owns the quality of what it builds.

- **Make It Useful Before Making It Fancy**  
  No “grand automation strategy” without early user (developer) adoption.  
  Start with local scripts → then CI → then dashboards.

- **Educate Before Enforcing**  
  Rollout = docs, examples, training, demos → _then_ introduce gates/metrics.  
  People support what they understand.

- **Tooling Follows Workflow (Not the Other Way Around)**  
  Don’t add a tool unless it fits the existing dev experience.  
  CI/CD comes _after_ local confidence.

- **Measure Confidence, Not Coverage**  
  Test coverage = vanity metric.  
  Real metric: _“Can we ship faster AND fail less?”_

---

#### 🔁 Example Flow (Practical Steps)

1. Map the highest-risk user flows/modules  
2. Introduce 1–2 focused unit/API test suites around those flows  
3. Earn trust with developers by catching early regressions  
4. Add tooling/CI support only after local wins  
5. Scale into broader test types (E2E, load, security, etc.)  

---

#### 🧩 Related Sections

- **(5.2)** Socio-Technical Rollout  
- **(5.4)** Risks & Guards  
- **(2.2)** CI/CD Testing Integration  
- **(4.x)** Test Types (Unit → Performance)  

---

### 5.2 Socio-Technical Rollout (Teams + Process)

**How testing practices evolve within teams, culture, and workflows.**

---

#### 📌 Why This Matters

Even the best-written tests fail if the team won’t adopt or maintain them.  
Technical testing practices must fit into team structures, delivery flows, and cultural expectations.  
This is where organizational architecture meets testing architecture.

---

#### 🧭 Key Dimensions of Rollout

| Dimension            | What It Affects                        | Example Scenario                                               |
|----------------------|----------------------------------------|----------------------------------------------------------------|
| Team Structure       | Who owns tests? How is QA resourced?  | SQA as consultants vs. embedded QA/SDET in every squad        |
| Development Workflow | Where and how tests are written/reviewed | TDD, pre-commit hooks, PR test enforcement                     |
| Delivery Model       | Frequency of release cycles            | Weekly deploy → more integration tests needed                 |
| Tooling Stack        | Coverage, CI, automation maturity      | CircleCI + Jest + Cypress vs. only manual QA                  |
| Skill Distribution   | Who can write/debug tests              | Only QA? Or QA + Backend + Frontend?                          |
| Cultural Readiness   | Leadership + developer buy-in          | “Do tests matter here?” or “Tests slow us down?”              |

---

#### 🧩 Typical Rollout Models

- **Centralized QA (Beginner Mode)**  
  → QA team owns most tests; delivery is test-passive  
  → Good for early-stage, but scales poorly.

- **Hybrid (Transition Mode)**  
  → QA & Engineering share ownership  
  → Test frameworks mature, shared codebases start forming  

- **Embedded SDET (Mature Mode)**  
  → Test responsibility sits with squads  
  → QA builds tooling, quality gates, and performs audits  

---

#### 🔁 Suggested Rollout Flow (for Teams Like BridgeLinx)

1. **Build Confidence (Phase 1)**  
   Single project + 1–2 test types + visible wins  

2. **Standardize + Template (Phase 2)**  
   Reusable patterns, ESLint rules, baseline CI  

3. **Scale to All Squads (Phase 3)**  
   Integrate into definition of done, release gates  

4. **Continuous Improvement (Phase 4)**  
   Track test ROI, runtime, failure signals, flakiness  

---

#### 🧠 Key Idea

> _“Your testing architecture will fail if your org architecture can’t support it.”_  
> – Adapted from Conway’s Law

---

#### 🔗 Related Sections

- **5.1** Principles of Introduction  
- **2.1** CI/CD Integration  
- **4.x** Test Types & Tooling  
- _(Future)_ BridgeLinx Test Strategy Evolution Roadmap  

---

### 5.3 Risks & Guards

**What could go wrong? How we prepare against test strategy, tooling, or rollout risks.**

---

#### 🔎 Why This Matters

Every testing approach brings trade-offs. Poorly chosen tools or premature testing strategies can lead to slower development, broken pipelines, flaky tests, or false confidence in production.  
Identifying risks and defining mitigation steps early reduces “quality debt.”

---

#### 🧱 Core Risk Categories + Guards

| Risk Type         | Description                                      | Guard / Solution                                               |
|-------------------|--------------------------------------------------|---------------------------------------------------------------|
| Over-Testing      | Excessive test layers slow feedback or block deploys | Define clear test pyramid + match test type to use case     |
| Under-Testing     | Lack of coverage gives false confidence           | Coverage metrics + risk-based prioritization                  |
| Flaky Tests       | Tests pass/fail unpredictably                     | Stabilize environments, seed data, retry on CI                |
| Tool Misfit       | Wrong framework chosen for stack/team skills      | Trial bubbles + tooling alignment round before rollout        |
| Slow Tests on CI  | Builds break often or block deploys               | Parallelization, caching, selective test run strategies       |
| No Owners         | Tests break with no one to fix                    | Assign codeowners + squad-level ownership                     |
| No Runtime Feedback | Bugs only found in production                  | Alerting + runtime SLOs + monitoring                          |
| Security Blind Spots | Missing static/dynamic scans                   | Integrate SAST/DAST into the pipeline                         |

---

#### 💡 Pro Strategy: “Red Flags Before They Turn Into Fires”

- ✅ Pilot tests with small scope  
- ✅ Add alerting for build failures  
- ✅ Document _known flaky_ tests or exclude temporarily  
- ✅ Define SLA for broken tests (e.g. fix within 24 hours)  
- ✅ Parallelize CI checks early  

---

#### 🚦 When to Pause or Rethink?

| Situation                                  | Likely Action                          |
|--------------------------------------------|----------------------------------------|
| Tooling friction > value delivered         | Re-evaluate or replace tool            |
| CI time > 10 mins for critical pipelines   | Review test pyramid and lazy env setup |
| >10% tests marked “skip” or “flaky”        | Initiate stabilization sprint          |
| No one able to debug/maintain test suite   | Upskill devs/QA or simplify design     |

---

#### 🔗 Related Topics

- **5.2** Socio-Technical Rollout  
- **4.x** Test Type Trade-offs & ROI  
- _(Future)_ Test Failure Playbook  

---

### 5.2 Socio-Technical Rollout (Teams + Process)

#### 5.2.1 Why Socio-Technical Rollout?

Testing doesn’t exist in isolation. It’s shaped by:

- **People** (skills, ownership)  
- **Process** (how workflows evolve)  
- **Tech** (tools, CI, coverage gates)  

Effective testing strategy connects all three — ensuring that quality becomes an organizational capability, not a bottleneck.

---

#### 5.2.2 Rollout Principles

- **Start where pain is highest** — focus first on teams slowed by bugs or blocked by manual QA.
- **Automate the boring, not the creative** — leave exploratory and UX empathy to humans.
- **Ownership > Handoff** — each squad ships with its own tests as part of “Definition of Done.”
- **Workflows > Tools** — don’t introduce new tools until there’s a clear usage path in the workflow.
- **Lean, layered adoption** — start with small wins (e.g., unit tests in one repo), then scale outward.

---

#### 5.2.3 Integration with Agile & Lean

| Agile Principle                           | Translated into Quality Practice                            |
|-------------------------------------------|-------------------------------------------------------------|
| Deliver working software frequently       | Early smoke tests + CI checks per PR                        |
| Welcome change, even late                 | Fast-running tests + localized test impact                  |
| Simplicity — maximize work not done       | Avoid over-engineering test suites; focus on risk-based tests|
| Build around motivated individuals        | Shift-left ownership to devs; reduce reliance on downstream QA |

---

#### 5.2.4 Change Management Roadmap (Example)

1. **Phase 1** – Unit + API coverage for new features  
2. **Phase 2** – Add E2E smoke tests into CI for business-critical paths  
3. **Phase 3** – Enable squad-owned quality gates (coverage, mutation thresholds)  
4. **Phase 4** – Introduce performance and resilience checks for scale-critical modules  

---

#### 5.2.5 Anti-Patterns to Avoid

- ❌ “QA is responsible for quality” — it becomes a gatekeeper instead of a partner  
- ❌ Heavy up-front planning of test frameworks with no iteration  
- ❌ Test debt pile-up because “we’ll automate later”  

---

#### 5.2.6 Scaling Drivers

| Driver                    | Trigger                          | What Gets Added                         |
|---------------------------|----------------------------------|------------------------------------------|
| Increased regressions     | QA time rising per release       | Systematic unit + API tests              |
| High PR failure rate      | Duplicate bugs in production     | Static analysis + test prechecks         |
| Enterprise clients onboard| SLAs, performance requirements   | Performance + load suites                |
| Microservices explosion   | Multiple breakpoints             | Contract testing + E2E orchestration     |

---

### 5.3 Scaling Practices (When & Where to Expand)

#### 5.3.1 What Does “Scaling” Mean in Testing?

Scaling is the process of expanding test coverage and test types as:

- System complexity increases  
- Risk profile evolves  
- Team maturity grows  
- Performance, security, or compliance needs emerge  

> Scaling ≠ “automate everything”  
> Scaling = “automate what matters, where it matters most, at the right time.”

---

#### 5.3.2 Triggers for Scaling

| Trigger Type            | Observable Signal                        | Example Response                                       |
|-------------------------|------------------------------------------|--------------------------------------------------------|
| 🔁 Frequent regressions | Same feature breaks every release        | Add unit/API test coverage + mutation testing          |
| 🚀 High-feature velocity| 10+ PRs/day across multiple devs         | Introduce PR-based smoke tests & pre-merge checks     |
| 🌍 Large-scale usage    | 100+ concurrent users, enterprise onboarding | Introduce performance + load tests                    |
| 🔐 Security → priority  | Client data, auth layers in focus        | Layer security testing + code scanning                 |
| 🧩 Service decomposition| 7+ microservices, async comms            | Add contract, integration + chaos tests                |

---

#### 5.3.3 Scaling Playbook

| Phase         | Focus                 | Test Types Added          | Key Owners                |
|---------------|-----------------------|---------------------------|---------------------------|
| 🟢 Phase 1    | Local confidence      | Unit + API                | Devs + SDET               |
| 🔵 Phase 2    | Critical path coverage| E2E smoke tests           | SDET + QA                 |
| 🟠 Phase 3    | Scale & resiliency    | Load + contract           | Platform + infra + SDET   |
| 🔴 Phase 4    | Platform quality gates| Mutation + chaos          | Platform + all squads     |

---

#### 5.3.4 When Not to Scale

- ❌ Adding 50+ UI tests just because “we can”  
- ❌ Automating flaky UIs instead of refactoring  
- ❌ Investing in browser matrix before stabilizing core product  
- ❌ Building test infra before knowing what teams actually need  

---

#### 5.3.5 Scaling Heuristics (Quick Checklist)

Use this list when deciding _“should we scale this testing now?”_

- Is the failure cost of this feature high?  
- Would automation cut cycle time by >30%?  
- Is this code changing regularly?  
- Is this part of the business-critical flow?  
- Will this unlock team autonomy?  

---

### 5.4 Risks, Anti-Patterns & Guards

#### 5.4.1 Common Risks in Test Strategy Rollout

| Risk Type             | Description                                           | Example Impact                                      |
|-----------------------|-------------------------------------------------------|-----------------------------------------------------|
| 🚫 Over-Automation    | Attempting to automate every test case without prioritization | High maintenance cost, flaky pipelines             |
| 🔁 Flaky Tests        | Tests that fail intermittently due to non-determinism  | Developer distrust → tests get ignored              |
| 🔨 Tool-First Thinking| Choosing a tool before defining the testing need       | Misalignment, rework, wasted effort                 |
| ⏱️ Slow Feedback Loops| Test suites that take 30+ minutes to run               | Slows down PR merges & developer velocity           |
| 🧪 Lack of Ownership  | Tests become “QA's job only” instead of team responsibility | Broken CI builds → finger-pointing              |
| 📉 Unbalanced Testing | Too many UI tests, very few unit/API tests             | Delayed detection of bugs, higher costs             |

---

#### 5.4.2 Anti-Patterns to Avoid

| Anti-Pattern                    | Why It’s Harmful                     | Recommended Guardrail                               |
|----------------------------------|--------------------------------------|------------------------------------------------------|
| ❌ UI-Only Test Strategy         | Slow, brittle, non-scalable          | 🔁 Use pyramid: Unit → API → UI                       |
| ❌ Testing = Post-Development Phase | Catches bugs too late               | 🔁 Test early, shift-left                             |
| ❌ Overuse of Mocks/Stubs        | Masks real-world dependencies        | 🔁 Balance mocks with integration tests               |
| ❌ Single Test Environment       | Every change disrupts everyone’s workflow | 🔁 Isolated/dev environments + staging           |
| ❌ Gold-Plated Test Coverage %   | Targets coverage number instead of value | 🔁 Prioritize business and risk-based tests      |

---

#### 5.4.3 Essential Guards to Protect Healthy Testing

| Guardrail               | Why It Matters                                    | Implementation Tactic                          |
|-------------------------|---------------------------------------------------|-----------------------------------------------|
| ✅ Test Review Checklist | Ensures each test adds value                      | Add checklist to PR template                  |
| ✅ Flakiness Monitoring  | Stops “ignored” test culture                      | CI flags flaky tests → auto-quarantine         |
| ✅ Test Data Strategy    | Maintains reliability & independence              | Use seed data + DB snapshots + network mocks   |
| ✅ Standardized Tooling  | Reduces context switching                        | Single framework per layer (e.g., Jest, Playwright) |
| ✅ Owner-Driven Failures | Build fails only on relevant test failure         | Map tests to owners in CI metadata             |

---

#### 5.4.4 Red Flags (Immediate Intervention Required)

- 🚨 20%+ of your CI time is spent retrying failed tests  
- 🚨 Teams skip writing tests “to hit the deadline”  
- 🚨 Core flows are not covered by smoke tests  
- 🚨 Every bug fix requires QA to validate manually  
- 🚨 Developers cannot run tests locally in < 60 seconds  

---

### 5.5 Prioritization Heuristics

_Not all tests are created equal — and in fast-paced product environments like BridgeLinx, prioritization isn’t optional; it’s survival._

---

#### 5.5.1 Core Prioritization Dimensions

| Dimension             | What It Measures                                          | Example                                |
|-----------------------|-----------------------------------------------------------|----------------------------------------|
| 🔥 Business Criticality | Impact on revenue, customer trust, or ops continuity      | Booking workflow, payouts, invoices    |
| 🧱 Architectural Depth | Component's impact across layers / services                | Auth service, messaging queue          |
| 📊 Change Frequency     | How often code in this area changes                       | Pricing logic, UI components           |
| 🧪 Failure Visibility    | How quickly a user or system notices a failure            | Login failures vs. analytics drop      |
| 💣 Blast Radius         | How many users are affected by a failure                  | Monthly billing vs. internal logs      |

---

#### 5.5.2 Practical Ordering Model: Test Pyramid Priority Flow

1. **Unit Tests First**  
   - Critical flow logic, business rules, and boundary checks  
   - Fastest to run, highest ROI on bugs caught early  

2. **API & Integration Tests**  
   - Contract validation, DB integration, auth layers  
   - Mocks where possible; real DBs where valuable  

3. **End-to-End (E2E) / UI Tests**  
   - Bare minimum smoke flows only: _“Can user X do Y?”_  
   - Triggered on every deploy, not every PR  

---

#### 5.5.3 Risk-Based Testing Matrix (Quadrant Method)

| Risk Likelihood ↓ / Impact → | 🔵 Low Impact | 🟡 Medium Impact | 🔴 High Impact |
|------------------------------|---------------|------------------|----------------|
| 🔁 Frequent                  | ✔️ Later      | ⚠️ Soon          | 🚨 Immediate   |
| 🧊 Rare                      | ➖ Skip/Defer | ✔️ Later         | ⚠️ Soon        |

> Use this matrix during sprint planning to decide what needs automated coverage _now_ vs. later.

---

#### 5.5.4 When Time Is Short (Real-World Heuristic)

👉 Ask these two questions:

- _What’s the worst thing that could break if this feature ships tomorrow?_
- _Which test, if missing, would make me lose sleep tonight?_

If the answer is **checkout flow, login, payouts, or pricing** —  
➡️ _write the test now._  
Everything else is negotiable.

---

#### 5.5.5 Prioritization Checklist (Use Before Deploying)

- ✅ Core user journeys covered by smoke tests?  
- ✅ 90% of high-risk areas have tests?  
- ✅ Unit tests ≥ integration tests ≥ E2E?  
- ✅ No pending “red flag” anti-patterns (see Section 5.4)?  
- ✅ New dependencies or third-party APIs mocked & tested?  

---

## 6. AI & Industry Developments in Testing

_Modern testing isn’t just about catching bugs — it's about accelerating development, improving reliability, and adapting to evolving systems. This is where AI-powered testing tools and modern industry shifts come in._

---

### 6.1 Why AI Matters in Testing Today

| Driver               | Impact on Testing                                        |
|----------------------|-----------------------------------------------------------|
| ⚡ Speed of Releases | Automated coverage becomes a necessity to keep up         |
| 🧠 Dynamic Apps     | AI helps handle changing UI/DOM workflows                 |
| 🤖 Repetitive Checks | AI-powered regression replaces slow manual cycles         |
| 📉 Lack of Test Resources | AI generates missing tests and reduces tester workload |

---

### 6.2 Current AI-Enhanced Testing Capabilities

| Area                      | Example Tools              | How AI Helps                                         |
|---------------------------|-----------------------------|------------------------------------------------------|
| Test Script Generation    | Mabl, Testim, Diffblue      | Auto-create unit/integration/UI tests from code paths |
| Visual Regression Testing | Applitools, Percy           | AI detects UI diffs that humans miss                 |
| Self-healing Tests        | Tricentis, Katalon Studio   | AI auto-fixes locators when UI changes occur         |
| Log & Error Analysis      | Kibana + GPT, Datadog       | Surfaces probable root causes from log noise         |
| Impact Analysis           | GitHub CodeQL, Launchable   | Predicts where tests need to run based on code diff  |
| NLP-driven Test Case Writing | ChatGPT API + TestRail  | Generates boilerplate or scenario test cases         |

---

### 6.3 AI in Testing – BridgeLinx Opportunities (Future Scope)

| Area                     | Early-Win Opportunity                                         | Why It’s Worth Exploring                                  |
|--------------------------|---------------------------------------------------------------|-----------------------------------------------------------|
| API Contract Generation  | Auto-generate API tests from Postman collections / GraphQL schemas | Fits current BridgeLinx architecture (GraphQL APIs)      |
| UI Smoke Test Generation | Use Cypress + AI locators for minimal flows                    | Bridges manual → automated testing ROI gap               |
| Static Analysis + CodeQL | Detect vulnerable or dead code early                           | Ideal for growing TypeScript codebase                    |
| Test Coverage Suggestions| ML suggests missing coverage in critical paths                 | Directly improves CI/CD quality gates                    |

---

### 6.4 Risks & Caveats of Relying on AI Testing

- ❌ AI won’t understand business logic — humans still own “test intention”  
- 🔐 Model hallucinations can lead to false confidence  
- 🛠️ Self-healing UI locators can hide deeper selector fragility  
- 💸 Most enterprise-grade AI testing tools come at a high licensing cost  

> **Key takeaway:**  
> Use AI to _accelerate_, not replace thoughtful test design and domain knowledge.

---

### 6.5 What’s Next

- 🔎 As part of future phases, experiment with AI-based test case generation tools based on our most frequently reused flows  
- 🧪 For BridgeLinx, start mapping one manual process into a partially AI-driven test to build a case study (e.g. _RFQ → Create Request_ flow)  

---

## 7. Final Notes & Future Outlook

---

### 7.1 What We’ve Achieved in Phase 1 (Exploration)

- 🧩 Mapped the full spectrum of testing types — from the basics (unit, API) to advanced types (mutation, security, prioritization).
- 📚 Created a knowledge-backed document that supports both learning and future implementation.
- 🔍 Developed industry-aligned structure covering tools, metrics, risks, and rollout strategies.
- 🤝 Ensured alignment with Adil’s exploratory direction, including key areas like AI, socio-technical rollout, and phased adoption.

---

### 7.2 Gaps to Tackle in Phase 2 & Beyond

| Gap Area                           | Plan of Action                           | Owner        |
|------------------------------------|-------------------------------------------|--------------|
| Deep-dive demos or proof-of-concept | Phase 2 kickoff: APIs or UI automation    | Zain + Adil  |
| Rollout Timelines & Prioritization  | Co-build based on product-level priorities | Zain + Adil  |
| Security & Load Testing Strategy    | Expand via team sync or external resources | TBD          |
| Risk Libraries & Anti-patterns      | Use time during implementation to refine   | Zain         |
| Automation Framework (starter)      | Start in Week 2 of Phase 2                 | Zain         |

---

### 7.3 Proposed Flow for Moving Forward

1. 📅 **Finalize Phase 1** – Thu, 6th Nov  
2. 🛠️ **Present + walk Adil through the document and Q&A** – Fri, 7th Nov  
3. 📌 **Phase 2 Setup Day** – Mon, 10th Nov  
   - Lock scope (API first? UI? CI/CD hooks?)  
   - Create execution trackers in Notion/Linear  
   - Book weekly sync cadence with Adil (e.g., Wed/Fri)  

---

### 7.4 Optional Enhancements (If Time Allows)

- 🔍 Link each testing type to BridgeLinx-specific modules (like RFQ, OPUI, Supply)  
- 🎥 Create or embed a couple of **Loom video walk-throughs**  
- 🧠 Add real-world examples (e.g., _“What failure in 2024 could’ve been caught by ___ testing?”_)  

---

### 7.5 Final Thought

_Phase 1 wasn’t about perfection. It was about clarity, breadth, and ownership._  

What you’ve built isn’t just a document — it’s the blueprint of how you’ll elevate yourself and BridgeLinx’s QA culture: smarter, faster, and more reliable.  
You’ve now got the language, the references, and the structure.  
Now comes the exciting part: **action**.

