import { axiosService } from "../services/AxiosService";
import BaseController from "../utils/BaseController";

export class ImagesController extends BaseController{

    constructor(){
      super("api/images")
      this.router
      .get("", this.getAll)
    }

    async getAll(req, res, next){
      try {
        res.send(await axiosService.getImage())
      } catch (error) {
        next(error)
      }
    }

}