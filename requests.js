const API_KEY = "2eecec5ede2a502b0f72ad94e497125a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&launguage=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocimentariesL: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;