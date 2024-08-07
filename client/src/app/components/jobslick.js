
"use client"
import Link from "next/link";

import Slider from "react-slick";
import Card from "./Card";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#cdddf4", borderRadius:"50%",color:"white",paddingTop:"1px" }}
      onClick={onClick}
    >X</div>
  );
}
  

const Responsivejob = ({data}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleArrow/>,
    prevArrow: <SampleArrow/>,
    responsive: [
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div >
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
          // <CarouselComp data={internship}/>
          <Card key={internship._id} data={internship}/>
          
          // <div className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg mx-5 text-start w-44">
          //   <Link
          //     href="/"
          //     className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg  "
          //   >
          //     <div>
          //       <h4 className=" text-lg text-black">{internship.profile}</h4>
          //       <p>ED Tech</p>
          //     </div>
          //     <div>
          //       <p>pune</p>
          //       <h6>{internship.ducation}</h6>
          //       <h6>150 rs dega</h6>
          //     </div>
          //   </Link>
          // </div>
        ))}
       
      </Slider>
    </div>
  );
};
export default Responsivejob;