import styles from "./styles.module.css";

const ContactForm = ({ currentAnswer, setCurrentAnswer }) => {
  const handleForm = (key, title, value) => {
    setCurrentAnswer(
      Object.assign({}, currentAnswer, { [key]: { value, title } })
    );
  };

  return (
    <form className={`${styles.contact_form}`}>
      <div>
        <input
          type='text'
          placeholder='Vorname'
          name='forename'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Nachname'
          name='surname'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
      </div>
      <div className='d-flex direction-column'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
        <input
          type='tel'
          placeholder='Telefonnummer'
          name='phoneNumber'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Stadt'
          name='city'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
        <input
          type='number'
          placeholder='PLZ'
          name='postIndex'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Straße'
          name='street'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Hausnummer'
          name='homeNumber'
          onChange={(e) => {
            handleForm(e.target.name, e.target.placeholder, e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default ContactForm;
