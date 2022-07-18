import './App.css';
import {useEffect, useState} from "react";
import SingleCard from "./SingleCard";


const cardImages = [
    {"src": "/img/cat1.jpeg", matched: false},
    {"src": "/img/cat2.png", matched: false},
    {"src": "/img/cat3.jpeg", matched: false},
    {"src": "/img/cat4.jpeg", matched: false},
    {"src": "/img/cat5.jpeg", matched: false},
    {"src": "/img/cat6.jpeg", matched: false},
]

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);


    const shuffleCard = () => {
        const shuffledledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo){
            if (choiceOne.src === choiceTwo.src){
                setCards(prevCard => {
                    return prevCard.map(card => {
                        if (card.src === choiceOne.src){
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurns();
            } else  {
                setTimeout(() => resetTurns(), 1000 );
            }
        }
        console.log(cards)
    }, [choiceOne,choiceTwo])



    const resetTurns = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(PrevTurns => PrevTurns + 1)
    }

  return (
    <div className="App">
      <h1>Match Match Game</h1>
        <button onClick={shuffleCard}>New Game</button>
        <div className="cards-grid">
            {cards.map(card => (
                <SingleCard key={card.id} card={card} handleChoice = {handleChoice} flipped = {card === choiceOne || card === choiceTwo || card.matched}/>
            ))}
        </div>
    </div>
  );
}

export default App;
