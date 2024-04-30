import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, setFormData, setEdit }) {
  return (
    <ul>
      {answers.map((answerItem, index) => (
        <AnswersItem answerItem={answerItem} key={index} index={index} setFormData={setFormData} setEdit={setEdit}/>
      ))}
    </ul>
  );
}
