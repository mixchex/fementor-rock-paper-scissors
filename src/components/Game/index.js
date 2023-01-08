import React, { useState, useEffect } from "react";
import _ from 'lodash'

import Disc from "../Disc";

const Game = ({
    onResult,
    type = 'standard',
    reset=false
}) => {
    const standardGame = ['rock', 'paper', 'scissors'];
    const advancedGame = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const [options, setOptions] = useState(type == 'standard' ? standardGame : advancedGame);
    const [chosen, setChosen] = useState(null);
    const [houseChoice, setHouseChoice] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        shuffleOptions();
    }, []);

    useEffect(() => {
        reset && handlePlayAgain();
    }, [reset])

    useEffect(() => {
        setOptions(type == 'standard' ? standardGame : advancedGame);
    }, [type])

    useEffect(() => {
        onResult(result);
    }, [result]);

    const compete = (option) => {
        setDisabled(true);
        setTimeout(() => {
            setChosen(option);
        }, 500);
        setTimeout(() => {
            let house = options[Math.floor(Math.random() * options.length)];
            setHouseChoice(house);
            
            let newResult = getResult(option, house);
            setResult(newResult);
        }, 1500);
    }  

    const getResult = (option, house) => {
        switch (option) {
            case 'rock':
                switch (house) {
                    case 'rock':
                        return 'draw'
                    case 'scissors':
                        return 'win';
                    case 'paper':
                        return 'lose';
                    case 'lizard':
                        return 'win'
                    case 'spock':
                        return 'lose'
                }    
            case 'paper':
                switch (house) {
                    case 'rock':
                        return 'win'
                    case 'scissors':
                        return 'lose';
                    case 'paper':
                        return 'draw';
                    case 'lizard':
                        return 'lose'
                    case 'spock':
                        return 'win'
                }   
            case 'scissors':
                switch (house) {
                    case 'rock':
                        return 'lose'
                    case 'scissors':
                        return 'draw';
                    case 'paper':
                        return 'win';
                    case 'lizard':
                        return 'win'
                    case 'spock':
                        return 'lose'
                }
            case 'lizard': 
                switch (house) {
                    case 'rock':
                        return 'lose'
                    case 'scissors':
                        return 'lose';
                    case 'paper':
                        return 'win';
                    case 'lizard':
                        return 'draw'
                    case 'spock':
                        return 'win'
                }
            case 'spock': 
                switch (house) {
                    case 'rock':
                        return 'win'
                    case 'scissors':
                        return 'win';
                    case 'paper':
                        return 'lose';
                    case 'lizard':
                        return 'lose'
                    case 'spock':
                        return 'draw'
                }
        }
    }

    const shuffleOptions = () => {
        setOptions(_.shuffle(options));
    }

    const handlePlayAgain = () => {
        shuffleOptions();
        setHouseChoice(null);
        setChosen(null);
        setDisabled(false);
        setResult(null);
    }

    return (
        chosen !== null ? 
            <div className="relative flex flex-col space-y-20 lg:space-y-0">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex flex-col items-center md:flex-col-reverse lg:absolute lg:left-0 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
                        <Disc disabled={true} option={chosen} size="lg" winner={result == 'win'} />
                        <h3 className="mt-6 md:mt-0 md:mb-6 uppercase text-white tracking-widest">You Picked</h3>
                    </div>
                    
                    <div className="flex flex-col items-center md:flex-col-reverse lg:absolute lg:right-0 lg:top-0 lg:translate-x-1/2 lg:-translate-y-1/2">
                        <Disc disabled={true} option={houseChoice} size="lg" winner={result == 'lose'} />
                        <h3 className="mt-6 md:mt-0 md:mb-6 uppercase text-white tracking-widest">The House Picked</h3>
                    </div>
                </div>
                <div className={`opacity-0 ${result != null && 'animate-scale-in'} flex flex-col space-y-6 items-center lg:absolute lg:w-full lg:left-0  lg:-top-12`}>
                    <h2 className="text-white uppercase text-4xl">You {result}</h2>
                    <button onClick={handlePlayAgain} className="block bg-white text-dark rounded uppercase h-12 w-55 text-center hover:text-rock-dark">Play Again</button>
                </div>
            </div>
        :
            <div className="discs relative mx-auto flex flex-wrap justify-center items-center">
                {options.map((option, i) => <Disc index={i+1} total={options.length} type={type} size="md" disabled={disabled} key={option} option={option} onClick={compete} />)}
                
                <img src={type == 'standard' ? './images/bg-triangle.svg' : './images/bg-pentagon.svg'}
                    alt=""
                     />
            </div>
    )
}
export default Game;