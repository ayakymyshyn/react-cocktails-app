import { useState } from 'react';

export const usePagination = <T>(posts: Array<T>, defaultPage = 1, amountPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [postsPerPage] = useState(amountPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let amountOfPages = 0;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  amountOfPages = Math.ceil(posts.length / postsPerPage);
  return {
    setCurrentPage,
    amountOfPages,
    currentPosts,
  };
};
