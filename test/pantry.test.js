import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  const pantry = new Pantry()

  it("has a stock", () => {
    expect(pantry.stock).to.eq({})
  })
})
