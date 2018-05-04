export default class Pantry {
  constructor () {
    this.stock = {}
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
}
