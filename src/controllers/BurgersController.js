import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
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
}