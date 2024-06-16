import { useParams } from "react-router-dom";

const Note = () => {
  const { date } = useParams<{ date: string }>();

  return (
    <div>
      <h1>Note for {date}</h1>
      {/* 노트 내용 표시 */}
    </div>
  );
};

export default Note;
