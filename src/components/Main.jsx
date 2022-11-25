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
    const [diceOne, setDiceOne] = useState(one);
    const [diceTwo, setDiceTwo] = useState(two);
    const [questionOne, setQuestionOne] = useState(undefine);
    const [prevDiceTwo, setPrevDiceTwo] = useState(undefine);
    const [numOne, setNumOne] = useState(six);
    const [numTwo, setNumTwo] = useState(six);
    const [show, setShow] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [showA, setShowA] = useState(true)
    const [showD, setShowD] = useState(true)
    
    
    const magic = () => {
        setNumOne(Math.floor(Math.random() * 6));
        setNumTwo(Math.floor(Math.random() * 6));

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

        setTimeout(() => {
            setShow(true)
          }, 3000)

        setShowBtn(true)
        setShowA(false)
        setShowD(false)
    }

    const accepted = () => {
        setShow(prev => !prev)
        setShowBtn(false) 
        setShowA(true)
        setShowD(true)
    }
    const doubted = () => {
        setDiceOne(undefine);
        setDiceTwo(undefine);
        setShowBtn(false);  
        setShowA(true)
        setShowD(true)       

    }

  return (
    <div className='container'>

        <div className='current'>
            <img src={diceOne} />
            <img src={diceTwo} />
        </div>
        <div className={`undef ${show ? '' : 'hidden'}`}>
            <img src={undefine} />
            <img src={undefine} />
        </div>
        <button className={!showBtn ? '' : 'hidden'} onClick={magic}>jogar</button>
        <button className={!showA ? '' : 'hidden'} onClick={accepted}>aceitou</button>
        <button className={!showD ? '' : 'hidden'} onClick={doubted}>duvidou</button>
    </div>
  )
}

export default Main