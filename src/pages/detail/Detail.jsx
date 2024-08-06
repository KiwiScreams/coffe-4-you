import { useState, useEffect, useDispatch } from "react";
import { deserts } from "../../assets/data/data";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { name } = useParams();
  console.log(name);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const findDetail = deserts.filter((data) => data.data === name);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [name]);
  return (
    <>
      <div className="car-detail-container">
        <div className="car-detail-left">
          <div className="car-detail-image">
            {/* <img src={detail.image} alt="" /> */}
          </div>
        </div>
        <div className="car-detail-info">
          <h1>{detail.name}</h1>
          {/* <p>starting price {detail.price} $</p> */}
          <p>{detail.description}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
