import React from 'react'

import './styles.css'

import undefine from '../assets/undefined.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import { useState } from 'react'


const Main = () => {
    const [diceOne, setDiceOne] = useState(undefine);
    const [diceTwo, setDiceTwo] = useState(undefine);
    const [prevDiceOne, setPrevDiceOne] = useState(undefine);
    const [prevDiceTwo, setPrevDiceTwo] = useState(undefine);
    const [numOne, setNumOne] = useState(six);
    const [numTwo, setNumTwo] = useState(six);
    
    
    const magic = () => {
        setNumOne(Math.floor(Math.random() * 6))
        setNumTwo(Math.floor(Math.random() * 6))

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
    }

    const accepted = () => {
        setPrevDiceOne(diceOne);
        setPrevDiceTwo(diceTwo);

        setDiceOne(undefine)
        setDiceTwo(undefine)
    }

  return (
    <div className='container'>
        <div className='prev'>
            <img src={prevDiceOne} />
            <img src={prevDiceTwo} />
        </div>
        <div className='current'>
            <img src={diceOne} />
            <img src={diceTwo} />
        </div>
        <button onClick={magic}>jogar</button>
        <button onClick={accepted}>aceitou</button>
    </div>
  )
}

export default Main