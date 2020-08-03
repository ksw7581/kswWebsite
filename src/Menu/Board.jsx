import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {BlockWrapper, Block} from './Mystyle';

const useAudio = () => {
    const [audios] = useState([new Audio('/sounds/1.wav'), new Audio('/sounds/2.wav'), new Audio('/sounds/3.wav'), new Audio('/sounds/4.wav')]);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    const playSnd = (index) => {
        if (index === audios.length)
            return;
        audios[index].addEventListener('ended', () => {
            setTimeout(() => {
                playSnd(index + 1)
            }, 600)
        });
        audios[index].play();
    }

    useEffect(() => {
        playSnd(0);
    }, [playing])

    return [playing, toggle];
};

export const Board = () => {

    return (
        <BlockWrapper>
            <Block>1</Block>
            <Block>2</Block>
            <Block>3</Block>
            <Block>4</Block>
            <Block>5</Block>
            <Block>6</Block>
        </BlockWrapper>
    );
};
