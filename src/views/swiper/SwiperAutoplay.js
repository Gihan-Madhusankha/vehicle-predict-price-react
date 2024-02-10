// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

// ** Images
import img1 from "@src/assets/images/portrait/product-1-720x480.jpg";
import img2 from "@src/assets/images/portrait/product-2-720x480.jpg";
import img3 from "@src/assets/images/portrait/product-3-720x480.jpg";
import img4 from "@src/assets/images/portrait/product-4-720x480.jpg";
import img5 from "@src/assets/images/portrait/product-5-720x480.jpg";
import img6 from "@src/assets/images/portrait/product-6-720x480.jpg";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true
};

const SwiperAutoplay = ({ isRtl }) => {
  return (
    // <Card>
    <div className="mt-1">
      <Swiper dir={isRtl ? "rtl" : "ltr"} {...params}>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img1} alt="swiper 1" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Kasun Cars</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>Dacia/Sandero II facelift (2016-2020)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>LKR
                8,500,000</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img2} alt="swiper 2" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Amila Enterprises</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>BMW/Z8 E52 (2000-2003)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>
                LKR 12,500,000</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img3} alt="swiper 3" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Senu Motors</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>MAZDA/CX-3 I facelift (2018-)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>LKR
                9,000,000</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img4} alt="swiper 4" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Sampath Cars & Tours</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>KIA/Sportage IV facelift (2018-2022)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>LKR
                8,100,000</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img5} alt="swiper 5" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Spin Rider</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>BMW/M2 F87 (2015-)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>LKR
                31,500,000</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card text-bg-dark">
            <img src={img6} alt="swiper 6" className="img-fluid" />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
              <p className="card-text m-0 ps-1 pt-1" style={{ background: "rgba(0,0,0,0.4)" }}><small>Kasun Cars</small>
              </p>
              <h4 className="card-title m-0 ps-1 fw-bolder text-white shadow-lg"
                  style={{ background: "rgba(0,0,0,0.4)" }}>BMW/M3 IV (E90) (2007-2013)</h4>
              <h4 className="m-0 p-1 fw-bolder" style={{ color: "#009877", background: "rgba(0,0,0,0.4)" }}>LKR
                27,000,000</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // </Card>
  );
};

export default SwiperAutoplay;
