import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  const pantry = new Pantry()
  const pizza = new Recipe("Cheese Pizza")
  pizza.addIngredient("Cheese", 20)
  pizza.addIngredient("Flour", 20)
  const spaghetti = new Recipe("Spaghetti")
  spaghetti.addIngredient("Noodles", 10)
  spaghetti.addIngredient("Sauce", 10)
  spaghetti.addIngredient("Cheese", 5)

  it("has a stock", () => {
    expect(pantry.stock).to.deep.equal({})
  })

  it("can check stock for an item", () => {
    expect(pantry.stockCheck("Cheese")).to.equal(0)
  })

  it("can restock", () => {
    expect(pantry.restock("Cheese", 10)).to.deep.equal({"Cheese": 10})
    expect(pantry.stock).to.deep.equal({"Cheese": 10})
    expect(pantry.restock("Cheese", 20)).to.deep.equal({"Cheese": 30})
    expect(pantry.stock).to.deep.equal({"Cheese": 30})
  })

  it("can add recipes to shopping list", () => {
    expect(pantry.addToShoppingList(pizza)).to.deep.equal({"Cheese": 20, "Flour": 20})
    expect(pantry.addToShoppingList(spaghetti)).to.deep.equal({"Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10})
    expect(pantry.shoppingList).to.deep.equal({"Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10})
  })
})
