import { UserB, Employee, UIElement, SideDrawerElement } from "../classes-and-interfaces/advanced-export";

describe("UserB", () => {
  it("builds fullName via setters", () => {
    const u = new UserB();
    u.firstName = "Max";
    u.lastName = "Shah";
    expect(u.fullName).toBe("Max Shah");
  });

  it("throws on empty names", () => {
    const u = new UserB();
    expect(() => (u.firstName = " ")).toThrow("Invalid name.");
    expect(() => (u.lastName = "")).toThrow("Invalid name.");
  });

  it("has static eid and greet()", () => {
    expect(UserB.eid).toBe("USER");
    // optional: ensure greet doesn't throw (don’t assert on console output)
    expect(() => UserB.greet()).not.toThrow();
  });
});

describe("Employee (inheritance + protected)", () => {
  it("can read protected _firstName via subclass method", () => {
    const e = new Employee("QA Engineer");
    e.firstName = "Zain";
    e.lastName = "Shah";
    expect(e.work()).toBe("Zain");
    expect(e.fullName).toBe("Zain Shah");
    expect(e.jobTitle).toBe("QA Engineer");
  });
});

describe("UIElement / SideDrawerElement", () => {
  it("clones with target", () => {
    const sd = new SideDrawerElement("drawer", "left");
    expect(sd.clone("sidebar")).toBe("drawer→sidebar");
    expect(sd.position).toBe("left");
  });
});
