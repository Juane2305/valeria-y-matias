// import cancion from '../assets/song.mp3'
// import Countdown from "./Countdown";
import Lugares from "./Lugares";
// import { FocusCardsDemo } from "./FocusCardsDemo";
import GoogleCalendarButton from "./GoogleCalendarButton";
// import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {

  // const targetDate = new Date("2026-01-03T20:00:00-03:00");

  const colorPrincipal =  "#d0bcab"
  const colorSecundario =  "#d0bcab"


  return (
    <div className="w-full relative font-modernaText overflow-hidden">

        {/* <div className="absolute">
          <MusicScreen cancion={cancion}/>
        </div> */}

      <div
        className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740754490/White_Digitalism_Basic_Simple_Presentation_ut9ade_puh4ph_nhvice.webp')" }}
      >
      <div
          className="absolute text-gray-500 font-eleganteTitle text-[10rem] md:text-[17rem]"
          style={{
            opacity: 0.1,
            transform: "translateY(-50%)",
            top: "50%",
          }}
        >
          V M
        </div>

        <p className="z-10 text-xl uppercase font-vintageText tracking-widest mb-20">
          ¡Nos Casamos!
        </p>

        <h1 className="z-10 text-5xl md:text-7xl font-vintageText text-gray-800 italic">
          Valeria & Matias
        </h1>

        <p className="z-10 mt-28 text-xl font-vintageText">0 3 . 0 1 . 2 0 2 6</p>
        </div>
  
      <div>
          <section
            id="contador"
            className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
          >
            <TextoFinal textoFinal="Por temas de espacio, la invitación es solo para quien la recibe. Gracias por tu comprensión y cariño ✨" textClass="text-lg"/>
            {/* <Countdown
              containerClasses={
                "w-full flex flex-col justify-center items-center gap-y-5"
              }
              targetDate={targetDate}
            /> */}
          </section>
        <section id="lugares" className="relative text-center pb-20">
          <Lugares iglesia="[Nombre iglesia]" hora_iglesia="10:00hs" salon="Centro de Jubilados y Pensionados de Villa Regina" hora_civil="20:00hs"/>
          <a
            href="https://maps.app.goo.gl/gUxo6WtWuNeuEDRm7"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <button className="border-2 border-gray-700 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>
        {/* <section className="mb-16">
            <FocusCardsDemo
            texto="Nosotros"
              images={[
                {
                  index: 1,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760019053/c88e8437-81d0-48e1-a4e0-9273b4665e8c_inja5v.jpg",
                },
                {
                  index: 2,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760019064/d9a12cdd-8bd8-4666-8920-168a07028b7e_lempc5.jpg",
                },
                {
                  index: 3,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760019073/2ef6598c-8195-41a5-ad6f-18a0665228f8_flrgvx.jpg",
                },
                {
                  index: 4,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760019081/4f1a223e-f8a0-4270-837a-392f5e171e0f_ofamgk.jpg",
                },
                {
                  index: 5,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760019087/bcf610b0-50a5-4b05-a25c-c9b15eb3284e_tohmoe.jpg",
                },
              ]}
            />
        </section> */}
          <div className="text-center text-white relative" style={{background: colorPrincipal}}>
            <GoogleCalendarButton
              titleCalendar="Casamiento de Valeria y Matias"
              fechaComienzo="20260103T200000"
              fechaFin="20260104T050000"
              salon="Centro de Jubilados Y Pensionados de Villa Regina"
              imgClass="text-white"
              buttonClass="hover:bg-white hover:text-gray-800"
            />
          </div>
          {/* <div className="relative">
            <DressCode dress_code="Elegante Sport"/>
          </div> */}
          <DatosBancarios
            texto="Si deseás hacernos un regalo te dejamos nuestros datos"
            claseContenedor="bg-white"
            claseBoton="border-2 py-3 px-6 rounded-full hover:bg-white hover:text-gray-800 transform transition-transform duration-300 ease-in-out font-semibold"
            textSize="text-lg"
            background={{backgroundColor: "white"}}
            styleBotonModal={{ backgroundColor: 'white',  borderColor: 'black'}}
            claseBotonModal={{backgroundColor: colorSecundario, borderColor: colorSecundario}}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="3840200500000042228741"
            alias="si.quiero.ok"
            banco="Ualá"
            nombre="Valeria Alejandra Ormeño"
            claseModal="bg-principal-light"
            borderModal="border-principal-light"
            textColor="text-principal-light"
          />
          <Asistencia
            clase="py-10 bg-fondo-banner bg-[#d0bcab] text-white"
            claseButton="border-2 text-white py-3 px-6 border-white bg-transparent font-semibold hover:border-gray-700 hover:text-gray:800"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdH0qUGUlmfnGMsNIlEfj_k9JQkvYrZJxqFHgmMIOTQAih3Sw/viewform?usp=publish-editor"
          />
        <TextoFinal textoFinal={<p>Traer bebida. <br /> <br />¡Gracias! Te esperamos.</p>}/>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
