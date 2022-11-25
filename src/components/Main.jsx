import React, { useState, useEffect} from 'react'

import { Container } from './styles'

import undef from '../assets/undefined.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'


const Main = () => {
    const [diceOne, setDiceOne] = useState(undef);
    const [diceTwo, setDiceTwo] = useState(undef);
    const [numOne, setNumOne] = useState(six);
    const [numTwo, setNumTwo] = useState(six);
    const [showDice, setShowDice] = useState(false)
    const [showPlay, setShowPlay] = useState(false)
    const [showAccept, setShowAccept] = useState(true)
    const [showDefy, setShowDefy] = useState(true)
    
    useEffect(() => {
        if (numOne === 0) setDiceOne(one);
        else if (numOne === 1) setDiceOne(two);
        else if (numOne === 2) setDiceOne(three);
        else if (numOne === 3) setDiceOne(four);
        else if (numOne === 4) setDiceOne(five);
        else if (numOne === 5) setDiceOne(six);
    
        if (numTwo === 0) setDiceTwo(one);
        else if (numTwo === 1) setDiceTwo(two);
        else if (numTwo === 2) setDiceTwo(three);
        else if (numTwo === 3) setDiceTwo(four);
        else if (numTwo === 4) setDiceTwo(five);
        else if (numTwo === 5) setDiceTwo(six);

    }, [numOne, numTwo]);


    const play = () => {
        setNumOne(Math.floor(Math.random() * 6));
        setNumTwo(Math.floor(Math.random() * 6));

        setTimeout(() => {
            setShowDice(true)
          }, 2000)

        setShowPlay(true)
        setShowAccept(false)
        setShowDefy(false)
    };

    const accepted = () => {
        setShowDice(prev => !prev)
        setShowPlay(false) 
        setShowAccept(true)
        setShowDefy(true)
    };

    const doubted = () => {
        setDiceOne(undef);
        setDiceTwo(undef);
        setShowPlay(false);  
        setShowAccept(true)
        setShowDefy(true)       
    };

  return (
    <Container>
        <div className='current'>
            <img src={diceOne} />
            <img src={diceTwo} />
        </div>
        <div className={`undef ${showDice ? '' : 'hidden'}`}>
            <img src={undef} />
            <img src={undef} />
        </div>
        <button className={!showPlay ? '' : 'hidden'} onClick={play}>Play</button>
        <button className={!showAccept ? '' : 'hidden'} onClick={accepted}>Accept</button>
        <button className={!showDefy ? '' : 'hidden'} onClick={doubted}>Defy</button>
    </Container>
  )
}

export default Main