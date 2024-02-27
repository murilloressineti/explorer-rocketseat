const { query } = require("express");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MoviesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const { user_id } = request.params

    if (rating < 1 || rating > 5) {
        throw new AppError(`O valor do campo 'rating' deve estar entre 1 e 5.`)
    }

    const [note_id] = await knex("MovieNotes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("MovieTags").insert(tagsInsert)

    response.json()
  }

  async show(request, response) {
    const {id} = request.params

    const MovieNotes = await knex('MovieNotes').where({id}).first()
    const tags = await knex('MovieTags').where({ note_id: id}).orderBy('name')

    return response.json(
      {
        ...MovieNotes,
        tags
      }
    )
  }

  async delete(request, response) {
    const {id} = request.params

    await knex('MovieNotes').where({id}).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query

    let MovieNotes

    if(tags){
      const filterTags = tags.split(',').map(tag => tag.trim())
      
      MovieNotes = await knex('MovieTags')
      .whereIn('name', filterTags)

    }else {
      MovieNotes = await knex('MovieNotes')
      .where({user_id})
      .whereLike('title', `%${title}%`)
      .orderBy('title')
    }

    return response.json(MovieNotes)
  }
}

module.exports = MoviesController