import { useState } from "react";


const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
export default function App() {

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(0)
    const date = new Date("june 21 2023");
    date.setDate(date.getDate() + num);

    return (
        <div>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

            {isOpen && (<div className="steps">

                <div className="numbers">
                    <div className={step >= 1 ? 'active' : ''}>1</div>
                    <div className={step >= 2 ? 'active' : ''}>2</div>
                    <div className={step >= 3 ? 'active' : ''}>3</div>
                </div>

                <p className="message">
                    Step {step} : {messages[step - 1]}
                </p>

                <div className="buttons">
                    <button onClick={handlePer} className="button" style={{ background: '#7950f2', color: '#fff' }}>Per</button>
                    <button onClick={handleNext} className="button" style={{ background: '#7950f2', color: '#fff' }}>Next</button>
                </div>
            </div>)}

            <div className="steps">

                <div className="buttons">
                    <button className="button" onClick={() => setCount(count - 1)} style={{ background: '#98f', color: '#fff' }}>-</button>
                    <button className="button" onClick={() => setCount((count + 1))} style={{ background: '#98f', color: '#fff' }}>+</button>
                </div>

                <p className="message">
                    Step: {count}
                </p>

                <p className="message">
                    <span>{num === 0 ? 'Today is ' : num > 0 ? `${num} days from today is ` : `${Math.abs(num)} days ago was`}</span>
                    {date.toDateString()}
                </p>

                <p className="message">
                    Count:  {num}
                </p>

                <div className="buttons">
                    <button className="button" onClick={() => setNum(num - count)} style={{ background: '#98f', color: '#fff' }}>Per</button>
                    <button className="button" onClick={() => setNum(num + count)} style={{ background: '#98f', color: '#fff' }}>Next</button>
                </div>
            </div>

        </div>
    )

    function handlePer() {
        if (step > 1) setStep(step - 1);
    }

    function handleNext() {
        if (step < 3) setStep(step + 1);
    }

}