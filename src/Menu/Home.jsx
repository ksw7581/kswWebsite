import React from 'react';
import {Box, Boxwrapper, Container, GithubIcon, InstaIcon, LinkedinIcon, YoutubeIcon} from "../AppStyle";

export const Home = ({mode}) => {
    return (<Container mode={mode}>
        <Boxwrapper>
            <Box Instagram><a target='_blank' href='https://www.instagram.com/sangwon_f/'>
                <InstaIcon/>
                <div>My Instagram</div>
            </a></Box>
            <Box LinkedinIcon><a target="_blank"
                                 href='https://www.linkedin.com/in/%EC%83%81%EC%9B%90-%EA%B9%80-41b4671b3/'>
                <LinkedinIcon/>
                <div>My Linkedin</div>
            </a>
            </Box>
        </Boxwrapper>
        <Boxwrapper>
            <Box Youtube><a target="_blank"
                            href='https://www.youtube.com/channel/UCmFU3f71kg1nonxio47QlGA?view_as=subscriber'>
                <YoutubeIcon/>
                <div>My Youtube Channel</div>
            </a></Box>
            <Box Github><a target="_blank" href='https://github.com/ksw7581'>
                <GithubIcon/>
                <div>My Github</div>
            </a></Box>
        </Boxwrapper>
    </Container>);

};
