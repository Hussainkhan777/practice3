export const BASE_URL_EXAM = "https://jsonplaceholder.typicode.com";
export const APIs = {
  POSTS: {
    getAllPosts: `${BASE_URL_EXAM}/posts`,
    getSinglePost: (id) => `${BASE_URL_EXAM}/posts/${id}`,
  },
};
