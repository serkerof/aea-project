import styles from "./contact-form.module.css"
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const handleSubmit = (e) => {
        emailjs.sendForm('service_ebbwn4f', 'template_ev9nfxr', e.target, "i_Sr8vndWQHxXL_e6").then(res => console.log(res)).catch(err => console.log(err))
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input type="text" name="name" placeholder="Ihre Name" />
                <input type="text" name="message" placeholder="Ihre Nachricht" />
                <input type="text" name="email" placeholder="Ihre Email" />
                <button>submut</button>
            </form>
        </div>
    )
}

export default ContactForm