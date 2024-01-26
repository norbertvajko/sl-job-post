import axios from 'axios';

const BASE_URL = 'https://simplylearn.dev/wp-json/wp/v2';
export const POSTS_PER_PAGE = 5;

export const fetchPosts = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      params: {
        per_page: POSTS_PER_PAGE,
        page,
      },
    });

    return {
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
};
