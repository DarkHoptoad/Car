import { useState } from "react"

const ContactForm = () => {

    const {name, setName} = useState("");
    const {email, setEmail} = useState("");
    const {phone, setPhone} = useState("");
    const {message, setMessage} = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    return <>
    <div className="contactForm">
        <h2>Contact with Me!</h2>
        <div className="contact__item">
             <input className="contact__input" name="name" placeholder="Youre name" value={name} onChange={handleName}/>
        </div>
        <div className="contact__item">
            <input className="contact__input" name="email" placeholder="Youre email" value={email} onChange={handleEmail}/>
        </div>
        <div className="contact__item">
            <input className="contact__input" name="phone" placeholder="Youre phone" value={phone} onChange={handlePhone}/>
        </div>
        <div className="contact__item">
            <textarea className="contact__textarea" name="message" placeholder="Youre message" value={message} onChange={handleMessage}/>
        </div>
        <button className="contact__btn">Send</button>
    </div>

    </>
}

export {ContactForm}