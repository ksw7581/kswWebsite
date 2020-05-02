import React from 'react';

export const Blog = ({posts}) => {
  console.log(posts);
  return(posts.map((docs, index) => {
    return(<div key={index}>{docs}</div>);
  }))
};