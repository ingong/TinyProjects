import React, { useMemo } from "react";

const getColorKor = (color) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getSeason = (season) => {
  console.log("getSeason");
  switch (season) {
    case "Spring":
      return "봄";
    case "Summer":
      return "여름";
    case "Fall":
      return "가을";
    case "Winter":
      return "겨울";
    default:
      return "아직 잘 모름";
  }
};

const Info = ({ color, season }) => {
  const colorKor = useMemo(() => getColorKor(color), [color]);
  const seasonKor = useMemo(() => getSeason(season), [season]);

  return (
    <div className='info-wrapper'>
      <br></br>
      <span>
        제가 가장 좋아하는 색은 <b>{colorKor}</b> 이고,{" "}
      </span>
      <br></br>
      <span>
        좋아하는 계절은 <b>{seasonKor}</b> 입니다.
      </span>
    </div>
  );
};

export default Info;
