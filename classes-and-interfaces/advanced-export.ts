export class UserB {
  protected _firstName: string;
  private _lastName: string;

  constructor() {
    this._firstName = "";
    this._lastName = "";
  }

  set firstName(name: string) {
    if (name.trim() === "") throw new Error("Invalid name.");
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") throw new Error("Invalid name.");
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("Hello!");
  }
}

export class Employee extends UserB {
  constructor(public jobTitle: string) {
    super();
  }

  // return the first name so tests can assert on inheritance/protected access
  work() {
    return this._firstName || ""; // protected in base → accessible here
  }
}

export abstract class UIElement {
  constructor(public identifier: string) {}
  clone(targetLocation: string) {
    // simulate duplication
    return `${this.identifier}→${targetLocation}`;
  }
}

export class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}