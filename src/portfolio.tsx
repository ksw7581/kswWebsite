import React from 'react';
import {PortfolioSection} from "@styles/style";
import {MyPortfolios} from "./const";

const Portfolio = () => {
    return <PortfolioSection>
        <div>Portfolio</div>
        <div>
            <div>
                {
                    MyPortfolios.mainProjects.map((item, index) => {
                        return <div key={index} onClick={() => {window.open(item.url, 'blank')}}>
                            <div>
                                <img src={item.logo} alt={item.title}/>
                            </div>
                            <div>{item.introImage}</div>
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
