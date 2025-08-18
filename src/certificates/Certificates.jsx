import CertificateCard from "../components/CertificateCard";
import UdemyLogo from "../assets/certs/Udemy-Logo.svg";
import IEEELogo from "../assets/certs/IEEE-Logo.svg";
import IITMLogo from "../assets/certs/IITM-Logo.svg";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

// Dummy certificates data
const certificates = [
  {
    title: "MERN-Complete Web Development Course by Hitesh Choudhary",
    badge: UdemyLogo,
    link: "https://drive.google.com/file/d/1o1NwWMtDcjzVmJkFIKQojf2nt75Ex2Qi/view?usp=sharing",
  },
  {
    title: "Certificate of Presentation, Final Year Project (IDCIoT-2024)",
    badge: IEEELogo,
    link: "https://drive.google.com/file/d/11gVPlM8wupIZ9NzqCB9UQOpXMrWZawtT/view?usp=sharing",
  },
  {
    title: "IIT Madras NPTEL Online Certification On Social Networks",
    badge: IITMLogo,
    link: "https://drive.google.com/file/d/1fexNrefTbv2NWF3Cz6_fd97Rv-0j5GyP/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <>
      <div className="flex justify-center relative  after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#certificate"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          Certificates
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>

      <section
        id="certificate"
        className="max-w-screen-xl scroll-mt-23 mx-auto px-4 relative pb-8 sm:pb-10"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Certificates
        </h2>

        <div className="grid pt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} certificate={cert} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
