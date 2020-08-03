import React from 'react';
import {Box, Boxwrapper, Container, GithubIcon, InstaIcon, NaverIcon, YoutubeIcon} from "../AppStyle";

export const Home = () => {
    return (<Container><Boxwrapper>
        <Box Github><a target="_blank" href='https://github.com/ksw7581'><GithubIcon/></a></Box>
        <Box Naverblog><a target="_blank" href='https://blog.naver.com/ksw75811'><NaverIcon/></a></Box>
    </Boxwrapper>
        <Boxwrapper>
            <Box Youtube><a target="_blank"
                            href='https://www.youtube.com/channel/UCmFU3f71kg1nonxio47QlGA?view_as=subscriber'><YoutubeIcon/></a></Box>
            <Box Instagram><a target='_blank' href='https://www.instagram.com/sangwon_d/'> <InstaIcon/></a></Box>
        </Boxwrapper>
    </Container>);

};