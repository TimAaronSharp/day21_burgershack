import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"



class BurgersService {
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }
  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }
  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (burgerToDelete == null) {
      throw new BadRequest(`YOUR REQUEST WAS BAD AND YOU SHOULD FEEL BAD! INVALID burgerId ${burgerId}`)
    }
    await burgerToDelete.deleteOne()
    return `${burgerToDelete.name} was deleted! That was the best thing on the menu you monster! 
    
    Deleted burger: ${burgerToDelete}`
  }
  async updateBurger(burgerData, burgerId) {
    const burgerToUpdate = await dbContext.Burgers.findById(burgerId)
    if (burgerToUpdate == null) {
      throw new BadRequest(`YOUR REQUEST WAS BAD AND YOU SHOULD FEEL BAD! INVALID burgerId ${burgerId}`)
    }
    burgerToUpdate.name = burgerData.name ?? burgerToUpdate.name
    burgerToUpdate.price = burgerData.price ?? burgerToUpdate.price
    // const burgerName = burgerToUpdate.name


    burgerToUpdate.save()
    return `Burger ${burgerId} has been updated!
    
    Updated burger: ${burgerToUpdate}`
  }
}


export const burgersService = new BurgersService()