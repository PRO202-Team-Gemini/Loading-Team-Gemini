import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/map");
  };
  return (
    <article onClick={handleClick}>
      <div>Stats</div>
    </article>
  );
};

export default Stats;
