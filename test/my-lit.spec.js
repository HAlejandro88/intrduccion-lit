/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../my-lit.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<my-lit></my-lit>");
    assert.strictEqual(_element.hello, "Hello World!");
  });
});
