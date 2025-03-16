import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const createdBurger = await burgersService.createBurger(burgerData)
      res.send(createdBurger)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const deleteMessage = await burgersService.deleteBurger(burgerId)
      res.send(deleteMessage)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async updateBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burgerId = req.params.burgerId
      const updateMessage = await burgersService.updateBurger(burgerData, burgerId)
      res.send(updateMessage)
    } catch (error) {
      next(error)
    }
  }
}