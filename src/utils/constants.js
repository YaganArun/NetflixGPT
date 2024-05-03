export const URL = {
  loginPageBackgroundImage:
    "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/3838227f-4f02-4fbf-9fcc-ca852c0313f6/GB-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg",
  logo: "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
  profileIcon:
    "https://occ-0-1174-1168.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png",
  getNowPlayingMovies:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  getMovieVideos:
    "https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
  getPopularMovies:
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  getUpcomingMovies:
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

export const API_OPTION = {
  movieApi: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjI0ZTEyZWY2M2I4YWNlNmU5OGEyNGRiNDZlYWMyZCIsInN1YiI6IjY2MGFmZjEzMTVkZWEwMDE3YzMzOTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nj8X4fEcaaslu3jbvxoSYS0WifCEomlu5Z4dBvg0aUg",
    },
  },
};
