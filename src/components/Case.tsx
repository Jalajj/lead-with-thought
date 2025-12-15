  {/*const CaseStudyPDF = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFFf",
        overflow: "hidden",
      }}
    >
      <iframe
        src="../../public/case-study.pdf#toolbar=0&navpanes=0&scrollbar=0"
        title="Case Study Presentation"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
       
      />
    </section>
  );
};*/}
 {/*const CaseStudyPDF = () => {
  return (
    <section
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen w-full bg-white flex flex-col items-center justify-start py-16"
    >
      {/* SECTION HEADING 
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
         B2B Fintech Case Study
        </h2>
      </div>

      {/* PDF CONTAINER 
      <div
        className="
          w-[90vw]
          max-w-[720px]
          h-[90vh]
          bg-white
          shadow-xl
          rounded-lg
          overflow-hidden
        "
      >
        <object
          data="../../public/case-study.pdf#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>PDF cannot be displayed.</p>
        </object>
      </div>
    </section>
  );
};
*/}


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "/slides/1.jpg",
  "/slides/2.jpg",
  "/slides/3.jpg",
  "/slides/4.jpg",
  "/slides/5.jpg",
  "/slides/6.jpg",
  "/slides/7.jpg",
  "/slides/8.jpg",
  "/slides/9.jpg",
  "/slides/10.jpg",
  "/slides/11.jpg",
  "/slides/12.jpg",
  "/slides/13.jpg",
  "/slides/14.jpg",
];


export default function CaseStudyPDF() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        B2B Fintech Case Study
      </h2>

      {/* Slider */}
      <div className="w-[90vw] max-w-[720px] h-[80vh]">
  <Swiper
    modules={[Navigation, Keyboard]}
    navigation
    keyboard
    slidesPerView={1}
  >
    {slides.map((src, i) => (
      <SwiperSlide key={i} className="flex items-center justify-center">
        <img
          src={src}
          alt={`Slide ${i + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </section>
  );
}
