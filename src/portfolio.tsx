import React from 'react';
import {PortfolioSection} from "@styles/style";
import {MyPortfolios} from "./const";

const Portfolio = () => {
    return <PortfolioSection id={'Portfolio'}>
        <div>Portfolio</div>
        <div>
            <div>
                {
                    MyPortfolios.mainProjects.map((item, index) => {
                        return <div key={index} onClick={() => {window.open(item.url, 'blank')}}>
                            <div>
                                <img src={item.logo} alt={item.title}/>
                            </div>
                            <div>
                                <img src={item.introImage} alt={item.introImage}/>
                            </div>
                            <div>{item.title}</div>
                            <div>{item.contents}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </PortfolioSection>
}

export default Portfolio;
