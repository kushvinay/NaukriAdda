"use client";
import Slider from "react-slick";
import Internshipcard from "./intershipCard";

const CustomArrow = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    <span className="text-black">x</span>
  </button>
);
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#cdddf4",
        borderRadius: "50%",
        color: "white",
        paddingTop: "1px",
      }}
      onClick={onClick}
    >
      X
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#cdddf4",
        borderRadius: "50%",
        color: "white",
        paddingTop: "1px",
      }}
      onClick={onClick}
    >
      X
    </div>
  );
}

const Responsive = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      <Slider className="ps-3" {...settings}>
        {data.map((internship) => (
          <Internshipcard key={internship._id} data={internship} />
        ))}
      </Slider>
    </div>
  );
};
export default Responsive;
