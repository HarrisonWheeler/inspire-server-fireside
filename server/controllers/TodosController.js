import BaseController from "../utils/BaseController.js"
import {todosService} from "../services/TodosService.js"

export class TodosController extends BaseController{

  constructor(){
    super("api/:user/todos")
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
  }


  async getAll(req, res, next){
    try {
      req.query.user = req.params.user
      res.send(await todosService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next){
    try {
      res.send(await todosService.getById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
        req.body.user = req.params.user
        res.send(await todosService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      res.send(await todosService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next){
    try {
      let editedTodo = req.body
      res.send(await todosService.edit(req.params.id, editedTodo))
    } catch (error) {
      next(error)
    }
  }
}