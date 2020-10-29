import React from 'react';
import {BlogCtntWrapper} from './Mystyle';

const yyyymmdd = (date) => {
    const fDate = new Date(date)
    let year = fDate.getFullYear();
    let month = fDate.getMonth() + 1;
    let day = fDate.getDate();
    if (String(month).length === 1) {
        month = '0' + month;
    }
    if (String(day).length === 1) {
        day = '0' + day;
    }
    return year + '/' + month + '/' + day;
}

export const BlogContent = ({Blog}) => {

    return (<BlogCtntWrapper>
        <div>
            <div>{Blog.title}</div>
            <div>
                <div>{yyyymmdd(Blog.registerDate.seconds * 1000)}</div>
                <div>작성자 : 김상원</div>
            </div>
        </div>
        <div>
            <img src={Blog.mainImg}/>
        </div>
        <div>
            <div>{Blog.content}</div>
        </div>
    </BlogCtntWrapper>);
};
