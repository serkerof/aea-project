import { useEffect, useState } from "react";
import Floor from "./Floor";
import PlacementSize from "./PlacementSize";
import { useSelector } from "react-redux";
import { selectAllQuestions, selectQuestion } from "../slice/questionsSlice";
import styles from "./styles.module.css";
import Option from "./Option";
import Calendar from "./Calendar";
import ContactForm from "./ContactForm";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ConfirmationDialog from "../../confirmation-dialog/ConfirmationDialog";
const Questions = ({ handleCloseDialog }) => {
  const allQuestions = useSelector(selectAllQuestions);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const question = useSelector((state) =>
    selectQuestion(state, currentQuestion + 1)
  );
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [data, setData] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isPreviousQuestion, setIsPreviousQuestion] = useState(false);
  const [submit, SetSubmit] = useState(false);

  useEffect(() => {
    data.length === currentQuestion + 1 && handlePreviousQuestion();
  }, [question]);

  const sendEmail = () => {
    const template_object = {
      service: data[0].answer.title,
      placementType: data[1].answer.title,
      placementSize: data[2].answer,
      floor: data[3].answer,
      parking: data[4].answer,
      wishedAppointment: data[5].answer,
      city: data[6].answer.city.value,
      email: data[6].answer.email.value,
      forename: data[6].answer.forename.value,
      surname: data[6].answer.surname.value,
      street: data[6].answer.street.value,
      postIndex: data[6].answer.postIndex.value,
      phoneNumber: data[6].answer.phoneNumber.value,
      homeNumber: data[6].answer.homeNumber.value,
    };
    emailjs
      .send(
        "service_rk9la5q",
        "template_0cc1k8m",
        template_object,
        "i_Sr8vndWQHxXL_e6"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleNextQuestion = () => {
    if (currentAnswer && Object.keys(currentAnswer).length > 0) {
      const newData = [
        ...data,
        { id: question.id, topic: question.topic, answer: currentAnswer },
      ];
      setCurrentAnswer();
      setData(newData);
      currentQuestion + 1 < allQuestions.length
        ? setCurrentQuestion((currentQuestion += 1))
        : SetSubmit(true);
      setIsPreviousQuestion(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handlePreviousQuestion = () => {
    data.forEach((obj, index) => {
      if (obj.id === question.id) {
        setCurrentAnswer(obj.answer);
        setData(data.filter((p) => p.id !== obj.id));
        setIsPreviousQuestion(true);
      }
    });
  };
  const step = (index) => (
    <div className='d-flex' key={index}>
      <div
        className={`${styles.line} ${
          currentQuestion >= index + 1 && styles.done
        }`}
      ></div>
      <div
        className={`${styles.step_round} ${
          currentQuestion >= index + 1 && styles.done
        }`}
      >
        <div className={`${styles.step_title}`}>Schritt {index + 1}</div>
      </div>
    </div>
  );

  const progressBar = (
    <div className={`${styles.progress_bar} d-flex`}>
      {allQuestions.map((item, index) => step(index))}
      <div className={`${styles.line}`}></div>
    </div>
  );

  const buttonGroup = (
    <div className={`${styles.button_broup} d-flex justify-center`}>
      <button
        className={`${styles.return_btn}`}
        onClick={() => {
          setCurrentQuestion((currentQuestion -= 1));
        }}
      >
        Zurück
      </button>
      <button
        className={`${styles.next_btn}`}
        onClick={() => {
          handleNextQuestion();
        }}
      >
        Weiter
      </button>
    </div>
  );

  const questionChecker = question.hasOptions ? (
    <div className='d-flex flex-wrap'>
      {question.options.map((obj) => (
        <Option
          key={obj.id}
          option={obj}
          currentAnswer={currentAnswer}
          setCurrentAnswer={setCurrentAnswer}
        />
      ))}
    </div>
  ) : question.id === "placementSize" ? (
    <PlacementSize
      isPreviousQuestion={isPreviousQuestion}
      setIsPreviousQuestion={setIsPreviousQuestion}
      currentAnswer={isPreviousQuestion ? currentAnswer : 10}
      setCurrentAnswer={setCurrentAnswer}
    />
  ) : question.id === "floor" ? (
    <Floor
      currentValue={isPreviousQuestion ? currentAnswer : ""}
      setCurrentAnswer={setCurrentAnswer}
    />
  ) : question.id === "parking" ? (
    <FormControl>
      <RadioGroup
        row
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        aria-labelledby='demo-radio-buttons-group-label'
        name='radio-buttons-group'
      >
        <FormControlLabel value='Ja' control={<Radio />} label='Ja' />
        <FormControlLabel value='Nein' control={<Radio />} label='Nein' />
      </RadioGroup>
    </FormControl>
  ) : question.id === "wishedAppointment" ? (
    <Calendar setCurrentAnswer={setCurrentAnswer} />
  ) : question.id === "contactData" ? (
    <ContactForm
      currentAnswer={currentAnswer}
      setCurrentAnswer={setCurrentAnswer}
    />
  ) : (
    ""
  );
  const errorMessage = (
    <div
      className={`${styles.error_message_container} d-flex align-center justify-center`}
    >
      <div className={`${styles.context_container}`}>
        <button
          className={`${styles.close_btn}`}
          onClick={() => {
            setShowErrorMessage(false);
          }}
        >
          X
        </button>
        <h3>Bitte Wählen Sie ein Antwort aus!</h3>
        <button
          className={`${styles.ok_btn}`}
          onClick={() => {
            setShowErrorMessage(false);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
  return (
    <div className={`${styles.container}`}>
      {showErrorMessage && errorMessage}
      {!submit ? (
        <div className={`d-flex direction-column align-center`}>
          {progressBar}
          <div className={`${styles.question_container}`}>
            <h2 className={`${styles.question_name}`}>{question.name}</h2>
            {questionChecker}
            {buttonGroup}
          </div>
        </div>
      ) : (
        <div>
          <h2>Ihre Angaben:</h2>
          <ul className={`${styles.data_list}`}>
            {data.length > 1 &&
              data.map((item) => {
                return item.id === "contactData" ? (
                  <ul className={`${styles.contact_data}`}>
                    <span className={`${styles.title}`}>{item.topic}:</span>
                    <li>
                      <span className={`${styles.topic}`}>Name:</span>
                      {`${item.answer.forename.value} ${item.answer.surname.value}`}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.email.title}:
                      </span>
                      {item.answer.email.value}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.phoneNumber?.title}:
                      </span>
                      {item.answer.phoneNumber?.value}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.city?.title}:
                      </span>
                      {item.answer.city?.value}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.postIndex?.title}:
                      </span>
                      {item.answer.postIndex?.value}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.street?.title}:
                      </span>
                      {item.answer.street?.value}
                    </li>
                    <li>
                      <span className={`${styles.topic}`}>
                        {item.answer.homeNumber?.title}:
                      </span>
                      {item.answer.homeNumber?.value}
                    </li>
                  </ul>
                ) : (
                  <li className={`${styles.item}`}>
                    <span className={`${styles.topic}`}>{item.topic}:</span>
                    <span>
                      {typeof item.answer === "object"
                        ? item.answer.title
                        : item.answer}
                    </span>
                  </li>
                );
              })}
          </ul>
          <button
            className={`${styles.send_btn}`}
            onClick={() => {
              // sendEmail();
              setIsFormSubmitted(true);
            }}
          >
            Abschicken
          </button>
          {isFormSubmitted && (
            <ConfirmationDialog
              setStatus={setIsFormSubmitted}
              handleCloseDialog={handleCloseDialog && handleCloseDialog}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Questions;
