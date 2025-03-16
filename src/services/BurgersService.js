import { dbContext } from "../db/DbContext.js"



class BurgersService {

  async getAllBurgers() {
    const burgers = await dbContext.Burger.find()
    return burgers
  }
  async createBurger(burgerData) {
    const burger = await dbContext.Burger.create(burgerData)
    return burger
  }
}

export const burgersService = new BurgersService()