export class Api {
  static async getMoviesList(title: string, page: number = 1) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${title}&page=${page}`
    );
    return response.json();
  }

  static async getMovieDetails(id: number) {
    const details = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const movie_suggestions = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;
    const response = await Promise.all([
      fetch(details),
      fetch(movie_suggestions),
    ]);

    try {
      const [res1, res2] = response;
      if (res1.ok && res2.ok) {
        return Promise.all([res1.json(), res2.json()]);
      }
      return;
    } catch {
      return;
    }
  }
}
