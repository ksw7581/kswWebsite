import React, {useState, useEffect, useRef, useCallback} from 'react';
import {MainSection} from "@styles/style";

const introImages = [
    '/src/images/aboutimage4.jpg',
    '/src/images/aboutimage.jpg',
    '/src/images/aboutimage3.jpg',
    '/src/images/aboutimage5.jpg',
]

const Main = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [positionX, setPositionX] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const imageSlide = useRef<any>(null);

    const getWindowDimensions = () => {
        return 1440;
    };

    const handleResize = () => {
        setWindowWidth(getWindowDimensions());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setWindowWidth(getWindowDimensions());
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const toggle = setInterval(() => {
            imageSlide.current.style.transitionDuration = '300ms';
            if (slideIndex === 0 && introImages.length > 1) {
                setSlideIndex(1);
                imageSlide.current.style.transform = `translate(${-(windowWidth === 0 ? getWindowDimensions() : windowWidth)}px)`;
                setPositionX(-(windowWidth));
            } else if (slideIndex === introImages.length - 1) {
                setSlideIndex(0);
                imageSlide.current.style.transform = `translate(0px)`;
                setPositionX(0);
            } else {
                setSlideIndex((prev) => {
                    imageSlide.current.style.transform = `translate(${-(windowWidth * (prev + 1))}px)`;
                    setPositionX(-(windowWidth * (prev + 1)));
                    return prev + 1;
                });
            }

            setTimeout(() => {
                if (imageSlide.current !== null) {
                    imageSlide.current.style.transitionDuration = '0ms';
                }
            }, 300);
        }, 30000);
        return () => {
            clearInterval(toggle);
        };
    }, [introImages, slideIndex]);

    const onMoveSliderButton = useCallback((v: number) => {
        imageSlide.current.style.transitionDuration = '300ms';
        setSlideIndex(v);
        imageSlide.current.style.transform = `translate(${-(v * windowWidth)}px)`;
        setPositionX(-(v * windowWidth));
        setTimeout(() => {
            imageSlide.current.style.transitionDuration = '0ms';
        }, 30000);

    }, [slideIndex, imageSlide, positionX, windowWidth]);

    return <MainSection
        slideIndex={slideIndex}
        id={'Home'}
    >
        <div ref={imageSlide}>
            {
                introImages.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image} alt='intro_image'
                                 onDragStart={(e) => {
                                     e.preventDefault();
                                     e.stopPropagation();
                                 }} />
                        </div>
                    );
                })
            }
        </div>
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
        <div>
            {
                introImages.map((item, index) => {
                    return <div key={index} onClick={() => onMoveSliderButton(index)}></div>;
                })
            }
        </div>
    </MainSection>
}

export default Main;
