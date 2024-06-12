import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/feedback");
  };
  return (
    <article onClick={handleClick}>
      <div>Map</div>
    </article>
  );
};

export default Map;
