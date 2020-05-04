import React from 'react';
import {BlogWrapper} from './Mystyle';

export const Blog = ({posts}) => {
  console.log(posts);
  return(posts.map((docs, index) => {
    return(<BlogWrapper key={index}>{docs}</BlogWrapper>);
  }))
};