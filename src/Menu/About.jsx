import React from 'react'
import {Myprofile, Mainprofile} from './Mystyle';

export const About = () => {
    return(<div>
        <Myprofile>
            <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
            }}>김상원 1991년 7월 18일 생</div>
            <div>다양한 기능을 가진 예쁜 웹페이지를 만들어보자.</div>
        </Myprofile>
        <Mainprofile>
            <div>
                <p>주요 약력</p>
                <div>한성대학교 정보통신 공학과 (2017년 2월 졸업)</div>
                <div>CMES Application Team (자바스크립트 개발자) (2017.02 ~ 2018.01)</div>
                <div>FM테크 풀스택 웹 개발자 (2018.05 ~ 2020.04)</div>
                <div>(현) 생각솜씨 개발 총괄(ReactJS, Styled-Component, Github, Webcrawling)</div>
                <div>(현) 김상원의 웹페이지 개발 총괄(ReactJS, Styled-Component, NodeJS, MongoDB, AWS)</div>
            </div>
            <div>
                <p>포트폴리오</p>
                <div>Reverse Escape 방탈출 카페 홈페이지 개발 (퍼블리싱, 프론트엔드, 백엔드) (2018.12)</div>
                <div>홈페이지 : <a  target="_blank" href ='https://www.reverseescape.com/'>https://www.reverseescape.com</a></div>
                <div>HappyInside 홈페이지 개발 (프론트엔드, 백엔드) (2019.04)</div>
                <div>홈페이지 : <a  target="_blank" href ='http://happyinside.co.kr/'>http://happyinside.co.kr</a></div>
                <div>안양 다락방 방탈출 카페 (퍼블리싱, 프론트엔드, 백엔드) (2020.04)</div>
                <div>홈페이지 : <a  target="_blank" href ='http://www.darockesc.com/'>http://www.darockesc.com</a></div>
                <div>수원 리멤버 방탈출 카페 (퍼블리싱, 프론트엔드, 백엔드) (2020.5)</div>
                <div>홈페이지 : <a  target="_blank" href ='http://rememberesc.com/'>http://rememberesc.com</a></div>
                <div>생각솜씨 (국제 기억력 테스트 홈페이지 제작 중) (퍼블리싱, 프론트엔드, 백엔드) (현재 개발중)</div>
            </div>
        </Mainprofile>
        <Mainprofile>
            <div>
                <p>논문</p>
                <div>제목 : 불완전한 오버워치 게임결과 데이터를 이용한 인공신경망 기반 영웅 캐릭터 추천</div>
                <div>설명 : 대학교 4학년때 인공지능 수강과목의 수업을 들으면서 인공지능이라는 학문에
                관심을 가지게 되면서 인공지능이라는 학문을 프로그래밍과 연동을 하는 프로젝트를 하게 되었습니다.
                    어느 날 교수님께서 제 프로젝트로 한국지능시스템학회의 학술지 논문 게제를 제안하셨고 저도
                    인공지능에 계속 관심을 가지고 싶어서 "오류 역전파 알고리즘"을 이용해서 당시 유행했던 게임
                    "오버워치"라는 소재를 활용해서 게임의 맵과 아군 팀의 캐릭터, 적 팀의 캐릭터의 이미지를
                    입력층으로 사용해서 그 상황에서 가장 선택하기 적합한 캐릭터 추천 프로그램을 만들었습니다.
                    그리고 이 논문은 현재 한국지능시스템학회 논문지 제27권 제3호, 2017.6, 268-275 (8 pages)에 게제되어있습니다.
                    관련 링크 : <a target="_blank" href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07187579&language=ko_KR">
                        https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07187579&language=ko_KR
                    </a>
                </div>
            </div>
            <div>
                <p>취업 후 직장생활</p>
                <div>
                    <div>
                        첫번째 직장생활 : 처음 입사한 회사는 3D스캐너를 자체 제작 및 납품하는 회사고 저는 어플리
                        케이션 팀의 일원으로서 스캐너와 PC와 자바스크립트 코드를 통해서 연동해주는 역할을 했습니다.
                        고객및 팀원과 커뮤니케이션이 중요한 업무였고 여러 고객사의 요청에 응해줘야 했기 때문에 당일 주어진 업무를 하면서
                        언제 닥칠 지 모르는 고객사 업무까지 응해줘야 해서 불가피하게 야근을 자주 했었고, 따라서 제가 가지고 있는 강점인 프로그래밍의
                        역량을 그리고 제가 좋아하는 취미 생활을 발전시키기에는 너무나도 시간이 부족해서 퇴사하게 되었습니다.
                    </div>
                    <div>
                        두번째 직장생활 : 첫번째 직장을 그만두고 제가 좋아하는 프로그래밍 위주로 할 수 있는 회사 그리고 업무 강도가 높지 않는 회사에
                        취업하는 것을 원했었고 마침 지인의 추천으로 에프엠커뮤니케이션즈라는 이벤트, 프로모션 회사의 자회사 격인 에프엠테크라는 회사에
                        입사하게 되었습니다. 업무강도는 상대적으로 전 회사에 비해서 유연해서 야근은 거의 하지 않았고, 만일 야근을 하게될
                        상황이 올 경우 개인노트북이 있으니 대신 카페나 집에서 재택근무를 하겠다는 약속을 해서 업무시간은 근무 외 시간에는 주도적으로
                        진행했습니다. 제 포지션은 풀스택 개발자로 웹프로그래밍을 두번째 직장생활에서 시작하게 되어서 지금까지 하고 있습니다.
                        언어는 자바스크립트를 사용해서 프로그래밍 언어를 새로 배울 필요는 없었고 대신 웹개발은 처음부터 배웠어야 했는데 당시 입사 후
                        3개월동안 제이쿼리, 노드JS, MongoDB라는 NoSQL을 배우기 시작해서 현재까지 역량을 키워 나가고 있습니다.
                    </div>
                    <div>
                        현재는 다른 제 지인이 부탁한 홈페이지 개발을 하고 있습니다.
                        그리고 동시에 제 개인 웹페이지 개발도 하고 있습니다. 웹개발을 주도적으로 할 수 있다고 생각합니다. 고로
                        프리랜서로 일하기를 지향합니다.
                    </div>
                    <div>
                        세번째 직장생활 : 만일 재취업을 결심하게 된다면 제가 들어가고싶은 가상의 회사입니다.
                        퍼블리싱부터 프론트엔드, 백엔드까지 전부 총괄하는 업을 할 것입니다. 개발 하나만큼은 모든 업무를 주도적으로 할 수 있는 회사에 취업하는 것을 원합니다.
                    </div>
                </div>
            </div>
        </Mainprofile>
        <Mainprofile>
            <div>
                <p>주요 키워드</p>
                <div>Html, Css, Javascript, Jquery, React, NodeJS, MongoDB, Git, AWS</div>
            </div>
            <div>
                <p>제가 가진 강점</p>
                <div>
                    프로젝트 혹은 역할 분담에 있어서 주도권을 가질 때 제 역량을 크게 발휘할 수 있습니다.
                    논리학, 철학을 좋아해서 문제가 생겼을 때 문제의 본질에 대해서 이해하려고 하는 경향이 강합니다.
                </div>
                <p>제가 가진 약점</p>
                <div>
                    프로젝트 혹은 역할 분담에 있어서 주도권을 잃을 경우 정해진 일 외 그 이상 창조적인 생각을 하지 않게 됩니다.
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