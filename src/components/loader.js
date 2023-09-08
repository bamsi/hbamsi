import Loading from "../images/loading.gif";
import "../style/index.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Loading} alt="Loading...." />
    </div>
  );
};

export default Loader;
