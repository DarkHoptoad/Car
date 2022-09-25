import { ContactForm } from "./ContactForm"
import { Featured } from "./Featured"
import { Works } from "./Works"

const Main = () => {
    return <>
        <div className="container">
           <Featured/>
            <Works/>
            <ContactForm/>
        </div>
    </>
} 

export {Main}