import React, { useState, useEffect} from 'react'

import { Container } from './styles'
import { One, Two, Three, Four, Five, Six, Question } from '../components/Dice/Export'


const Main = () => {
    const [diceOne, setDiceOne] = useState(<Question />);
    const [diceTwo, setDiceTwo] = useState(<Question />);
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [showDice, setShowDice] = useState(false)
    const [showPlay, setShowPlay] = useState(false)
    const [showAccept, setShowAccept] = useState(true)
    const [showDefy, setShowDefy] = useState(true)
    
    useEffect(() => {
        if (numOne === 0) setDiceOne(<One />);
        else if (numOne === 1) setDiceOne(<Two />);
        else if (numOne === 2) setDiceOne(<Three />);
        else if (numOne === 3) setDiceOne(<Four />);
        else if (numOne === 4) setDiceOne(<Five />);
        else if (numOne === 5) setDiceOne(<Six />);
    
        if (numTwo === 0) setDiceTwo(<One />);
        else if (numTwo === 1) setDiceTwo(<Two />);
        else if (numTwo === 2) setDiceTwo(<Three />);
        else if (numTwo === 3) setDiceTwo(<Four />);
        else if (numTwo === 4) setDiceTwo(<Five />);
        else if (numTwo === 5) setDiceTwo(<Six />);

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
        setDiceOne(<Question />);
        setDiceTwo(<Question />);
        setShowPlay(false) 
        setShowAccept(true)
        setShowDefy(true)
        setShowDice(false)
    };

    const doubted = () => {
        setShowDice(false)
        setShowPlay(false);  
        setShowAccept(true)
        setShowDefy(true)       
    };

  return (
    <Container>
        <div className='current'>
            {diceOne}
            {diceTwo}
        </div>
        <div className={`undef ${!showDice ? 'hidden' : ''}`}>
            <Question />
            <Question />
        </div>

        <div className='btnWrapper'>
            <button className={`btn ${!showPlay ? '' : 'hidden'}`}  onClick={play}>Play</button>
            <button className={`btn ${!showAccept ? '' : 'hidden'} ${!showDice ? 'opacityBtn' : ''}`} disabled={!showDice ? true : false} onClick={accepted}>Accept</button>
            <button className={`btn ${!showDefy ? '' : 'hidden'}  ${!showDice ? 'opacityBtn' : ''}`} disabled={!showDice ? true : false} onClick={doubted}>Dare</button>
        </div>
    </Container>
  )
}

export default Main