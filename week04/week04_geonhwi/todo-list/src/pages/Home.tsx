import { useParams } from "react-router-dom";

const Home = () => {
  const { date } = useParams<{ date: string }>();

  return (
    <div>
      <h1>{date}</h1>
      {/* 노트 내용 표시 */}
    </div>
  );
};

export default Home;
