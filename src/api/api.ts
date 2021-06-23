export class Api {
  static async getMoviesList(title: string, page: number = 1) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${title}&page=${page}`
    );
    return response.json();
  }

  static async getMovieDetails(id: number) {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    return response.json();
  }
}
