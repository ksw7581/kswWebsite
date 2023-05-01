import React from 'react';
import {MainSection} from "@styles/style";

const introImages = [
    '/src/images/AboutMe1.jpg',
    '/src/images/AboutMe2.jpg',
    '/src/images/AboutMe3.jpg',
]

const Main = () => {
    return <MainSection img={`/src/images/aboutimage4.jpg`} id={'Home'}>
        <div>
            <div>
                비즈니스 시스템에 필요한 데이터 설계부터 디자인 및 웹서버에 배포까지
            </div>
            <div>
                체계적인 작업 일정 수행과 능동적이고 주도적인 소통 과정과
            </div>
            <div>
                {new Date().getFullYear() - 2017 + 1}년차 경력의 웹프로그래밍 경험을 기반으로 빠르고 안정적인 비즈니스 모델을 만들어드립니다.
            </div>
        </div>
    </MainSection>
}

export default Main;
