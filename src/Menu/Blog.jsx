import React from 'react';
import {BlogWrapper} from './Mystyle';
import {Link} from 'react-router-dom';

export const Blog = ({
                         firestore,
                         setBlogContent,
                         useCollectionData,
                     }) => {

    const blogRef = firestore.collection('blogs');
    const query = blogRef.orderBy('registerDate');
    const [blogs] = useCollectionData(query, {idField: 'id'});

    if (blogs === undefined) {
        return (<></>);
    }

    return (<BlogWrapper>{
        blogs.map((blog) => {
            return (<div key={blog.id}>
                <div>
                    <Link to={"/blog/" + blog.id} onClick={() => {
                        console.log('setState');
                        setBlogContent(blog)}
                    }>
                        <img src = {blog.mainImg} />
                    </Link>
                </div>
                <div>
                    <Link to={"/blog/" + blog.id} onClick={() => setBlogContent(blog)}>
                        <div>{blog.title}</div>
                    </Link>
                </div>
            </div>)
        })
    }</BlogWrapper>);
};
