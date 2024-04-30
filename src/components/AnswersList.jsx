import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, setFormData }) {
  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} setFormData={setFormData}/>
      ))}
    </ul>
  );
}
