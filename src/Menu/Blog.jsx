import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { parse } from 'node-html-parser';
import {BlogWrapper} from './Mystyle';


const manufacture = (data) => {
  let posts = [];
  const root = parse(data);
  root.querySelectorAll('.card-contents').map((div) => {
    // console.log(div);
    const title = div.childNodes[1].childNodes[5];
    // const imageSrc = div.childNodes[3].childNodes[1].childNodes[1].rawAttrs;
    // const hashtag = div.childNodes[5].childNodes[0].childNodes[0].rawText;
    if(title === undefined) {
      return;
    } else {
      posts.push(title.innerHTML);
    }
  });
  root.querySelectorAll('.metadata').map((div) => {
  })
  //제목, 내용, 게시일자, 썸네일이미지, 해시태그 가지고 오면 됨
  return posts;
}

export const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(
      () => {
        axios({
            method : 'GET',
            url : 'https://www.rocketpunch.com/@b00b23e820f041a1/posts',
        }).then( res => {
            setPosts(manufacture(res.data))
        }).catch( response => { console.log(response); });
      },
      []
  );

  return(posts.map((docs, index) => {
    return(<BlogWrapper key={index}>{docs}</BlogWrapper>);
  }))
};