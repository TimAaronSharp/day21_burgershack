import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/test', this.getTest)
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  getTest(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}