import React,{useState} from 'react'

const Question = ({ question, answer, id }) => {
    const [show,setShow] = useState(0)
    const [symbol,setSymbol] = useState("+")
    
    const showBtn = () => {
        setShow(!show)
        if (show) {
            setSymbol("+")
        } else {
            setSymbol("-")
        }
    }

    return (
        <div className='question-wrapper'>
            <div className="question">
                <p>{question}</p>
                <div className="open" onClick={() => showBtn()}>
                    {symbol}
                </div>
            </div>
            <div className="answer">
                {show ? answer : ""}
            </div>
        </div>
    )
}

export default Question
