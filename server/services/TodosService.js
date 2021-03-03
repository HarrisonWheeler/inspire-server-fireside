import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"
class TodosService{

  async getAll(query = {}){
    return await dbContext.Todos.find(query)
  }

  async create(newTodo){
    return await dbContext.Todos.create(newTodo)
  }

  async getById(todoId){
    return await dbContext.Todos.findById(todoId)
  }

  async delete(todoId){
    // return await dbContext.Todos.findByIdAndDelete(todoId)
    const deleted = await dbContext.Todos.findByIdAndDelete(todoId)
    if(!deleted){
      throw new BadRequest("Invalid Id")
    }
  }

  async edit(todoId, editedTodo){
    return await dbContext.Todos.findByIdAndUpdate(todoId, editedTodo, {new: true})
  }
}

export const todosService = new TodosService()