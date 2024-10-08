import { useState, useEffect } from "react";
import { deserts } from "../../assets/data/data";
import { useParams } from "react-router-dom";
import "./Detail.css";
const Detail = () => {
  const { name } = useParams();
  console.log(name);
  const [detail, setDetail] = useState({});
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const findDetail = deserts.filter((data) => data.data === name);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [name]);

  const handleImageClick = () => {
    setIsEnlarged(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseClick = () => {
    setIsEnlarged(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <section className="detail-container">
        <div className="image-container">
          <div className="image-content">
            <img
              src={detail.image}
              alt="Coffe 4 You"
              onClick={handleImageClick}
              className={isEnlarged ? "enlarged" : ""}
            />
            {isEnlarged && (
              <div className="enlarged-image-container">
                <img src={detail.image} alt="Coffe 4 You" />
                <button className="close-button" onClick={handleCloseClick}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="text-container">
          <h3>{detail.name}</h3>
          <p className="description">{detail.description}</p>
          <p>
            <span>Ingridients:</span>
            <br />
            {detail.ingridients}
          </p>
          <span>Interesting:</span>
          <br />
          <i className="history">"{detail.history}"</i>
          <br />
          <span>Price:</span>
          <span className="price">{detail.price}$</span>
        </div>
      </section>
    </>
  );
};

export default Detail;
