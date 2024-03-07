/* eslint-disable react/prop-types */
import StarLogo from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(StarLogo);

  return (
    <>
      {stars.map((star, index) => (
        <img src={star} width="14" height="14" alt="Star Logo" key={index} />
      ))}
    </>
  );
}
