import React, {useState} from 'react'
import {Myprofile, Mainprofile} from './Mystyle';

export const About = ({mode}) => {

    const [lang, setLang] = useState('Eng');

    return (<div>
        <Myprofile mode={mode}>
            <div>김상원 1991년 7월 18일 생</div>
            <div>홈페이지를 직접 꾸미고 만들고 시스템을 직접 설계하는 것을 좋아합니다.</div>
        </Myprofile>
        <Mainprofile mode={mode}>
            <div>
                <p>주요 약력</p>
                <div>한성대학교 정보통신 공학과 (2017년 2월 졸업)</div>
                <div>CMES Application Team (자바스크립트 개발자) (2017.02 ~ 2018.01)</div>
                <div>FM테크 풀스택 웹 개발자 (2018.05 ~ 2020.04)</div>
                <div>(현) 다겸 풀스택 웹 개발자 (2020.08 ~ 현재)</div>
                <div>(현) 김상원의 웹페이지 개발 총괄(ReactJS, Styled-Component, Firebase)</div>
            </div>
        </Mainprofile>
        <Mainprofile mode={mode}>
            <div>
                <p>포트폴리오</p>
                <div>Reverse Escape 방탈출 카페 홈페이지 개발 (퍼블리싱, 프론트엔드, 백엔드) (2018.12)</div>
                <div>홈페이지 : <a target="_blank" href='https://www.reverseescape.com/'>https://www.reverseescape.com</a>
                </div>
                <div>HappyInside 홈페이지 개발 (프론트엔드, 백엔드) (2019.04)</div>
                <div>홈페이지 : <a target="_blank" href='http://happyinside.co.kr/'>http://happyinside.co.kr</a></div>
                <div>안양 다락방 방탈출 카페 (퍼블리싱, 프론트엔드, 백엔드) (2020.04)</div>
                <div>홈페이지 : <a target="_blank" href='http://www.darockesc.com/'>http://www.darockesc.com</a></div>
                <div>수원 리멤버 방탈출 카페 (퍼블리싱, 프론트엔드, 백엔드) (2020.5)</div>
                <div>홈페이지 : <a target="_blank" href='http://rememberesc.com/'>http://rememberesc.com</a></div>
                <div>생각솜씨 (국제 기억력 테스트 홈페이지) (퍼블리싱, 프론트엔드, 백엔드) (추가 개발 및 유지보수)</div>
                <div>홈페이지 : <a target="_blank" href='http://15.165.13.245/'>http://15.165.13.245</a></div>
                <div>로일스 컨설팅 (퍼블리싱) (2020.10)</div>
                <div>홈페이지 : <a target="_blank" href='http://loyils.com/'>http://loyils.com/</a></div>
                <div>2020mostlikedfeed (퍼블리싱, 프론트엔드, 백엔드) 한시적 서비스(2020.12.26 ~ 2021.01.01)</div>
            </div>
        </Mainprofile>
        <Mainprofile mode={mode}>
            <div>
                <p>주요 키워드</p>
                <div>Html, Css, Javascript, Jquery, React, NodeJS, MongoDB, Mysql, Git, AWS</div>
            </div>
        </Mainprofile>
        <Mainprofile mode={mode}>
            <div>
                <p>웹개발자 김상원의 특징</p>
                <div>
                    이미 만들어진 홈페이지보다는 만들어지지 않은 홈페이지를 처음부터 만드는 것을 지향합니다. 전체 페이지의 구조와 기능의 뼈대를 단계적으로 체계적으로 구성하고,
                    기획자가 구상하고 있는 시스템을 최대한 완벽에 가깝게 홈페이지에 녹여내리는 것에 익숙합니다.
                </div>
                <p>김상원이 환영하는 프로젝트</p>
                <div>
                    전체적인 홈페이지 개발 권한 및 언어와 라이브러리, 프레임워크의 자유로운 활용이 가능한 프로젝트를 환영합니다.
                    퍼블리싱, 프론트엔드 이벤트 구현, 백엔드(구글 로그인, 파일업로드, 메일 전송, 웹페이지 크롤링, 엑셀 다운로드, 그 외 각종 API 이용)를 활용한 홈페이지 제작
                </div>
                <p>별로 맡고싶지 않는 프로젝트</p>
                <div>
                    개발자가 여러명 붙는 프로젝트, 상주 필수인 프로젝트는 받지 않습니다.
                </div>
                <div>
                    완벽주의적 성격을 가지고 있습니다. 제 개인적으로는 장점이라고 생각하는데. 타인이 보기에는 작업속도가 느리게 보일 수 있어보게되고,
                    고민만 하는 모습처럼 보게 되어서 걱정을 하게 됩니다. 하지만 여럿 사람들이 하는 일을 저 혼자 한다는 것은 제게 있어서 큰 장점이라고 생각합니다.
                    혼자서 개발의 전체 분야를 맡아서 홈페이지 개발을 하고 있고 향후에도 계속 지금과 같은 생각을 가질 것 같습니다.
                </div>
                <p>제가 가진 지향점</p>
                <div>
                    프로젝트에 제 역할이 주어질 경우 저에게 있어서 가장 중요한 부분은 바로 개발하는 역할에서 제가 프로젝트의 주도권을 갖는가,
                    그렇지 않는가입니다. 남이 시키는 역할만 하는가 내가 주도적으로 하는가는 자기발전에 큰 차이가 존재합니다. 저는 후자를 원하고 앞으로도
                    후자의 역할군으로 개발을 하는 것을 원합니다.
                </div>
            </div>
        </Mainprofile>
    </div>)
}
