import React from 'react';
import {CareerSection} from "@styles/style";
import {MyCareer} from "./const";

const Career = () => {
    return <CareerSection>
        <div>Career</div>
        <div>{
            Object.entries(MyCareer).reverse().map(([key, value], index) => {
                return <div key={index}>
                    <div>{key}년</div>
                    {
                        Object.entries(value).reverse().map(([key2, value2], index2) => {
                            return <div key={index2}>
                                <div>{key2}월</div>
                                <div>{
                                    value2.map((text, index3) => {
                                        return <div key={index3}>{text}</div>
                                    })
                                }</div>
                            </div>
                        })
                    }
                </div>
            })
        }</div>
    </CareerSection>
}

export default Career;
