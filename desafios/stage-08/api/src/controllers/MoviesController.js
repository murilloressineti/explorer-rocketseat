const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MoviesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const { user_id } = request.params

    if (rating < 1 || rating > 5) {
        throw new AppError(`O valor do campo 'rating' deve estar entre 1 e 5.`)
    }

    const [MovieNote_id] = await knex("MovieNotes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        MovieNote_id,
        name,
        user_id
      }
    })

    await knex("MovieTags").insert(tagsInsert)

    response.json()
  }

}

module.exports = MoviesController