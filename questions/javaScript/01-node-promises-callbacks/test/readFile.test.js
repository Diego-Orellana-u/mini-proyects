import { leerArchivos } from "../solutions/index.js";

import { describe, it, beforeEach, afterEach } from "node:test";
import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

describe("4. leerArchivos", () => {
  // it('4.1. leerArchivos', () => {
  //   const mensaje = leerArchivos()
  //   equal(mensaje, 'hola qué tal')
  // })

  it("4.1. leerArchivos", async () => {
    const mensaje = await leerArchivos();
    equal(mensaje, "hola qué tal");
  });
});
