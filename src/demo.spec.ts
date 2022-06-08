import { expect } from "chai";
import { ok } from "./demo";

describe("demo", () => {
  it("ok", (done) => {
    expect(ok()).to.be.ok;
    done();
  });
});
