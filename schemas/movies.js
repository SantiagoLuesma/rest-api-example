const z = require('zod')

const movieSchema = z.object({
  title: z.string(),
  genre: z.array(z.enum(['Action', 'Crime', 'Comedy', 'Drama', 'Horror', 'Fantasy', 'Sci-fi'])),
  year: z.number().int().min(1900),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z.string().url(),
  rate: z.number().optional()
})

function validateMovie (input) {
  return movieSchema.safeParse(input)
}

function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
