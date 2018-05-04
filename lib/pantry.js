import pry from 'pryjs'
export default class Pantry {
  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck (ingredient) {
    return this.stock[ingredient] || 0
  }

  restock (ingredient, quantity) {
    if(ingredient in this.stock) {
      this.stock[ingredient] += quantity
    } else {
      this.stock[ingredient] = quantity
    }
    return this.stock
  }

  addToShoppingList (recipe) {
    const ingredients = recipe.ingredients
    for (var ingredient in ingredients) {
      if(ingredient in this.shoppingList) {
        this.shoppingList[ingredient] += ingredients[ingredient]
      } else {
        this.shoppingList[ingredient] = ingredients[ingredient]
      }
    }
    return this.shoppingList
  }

}
