import CertificateCard from "../components/CertificateCard";
import UdemyLogo from "../assets/certs/Udemy-Logo.svg";
import IEEELogo from "../assets/certs/IEEE-Logo.svg";
import IITMLogo from "../assets/certs/IITM-Logo.svg";

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
    title:
      "IIT Madras NPTEL Online Certification On Social Networks",
    badge: IITMLogo,
    link: "https://drive.google.com/file/d/1fexNrefTbv2NWF3Cz6_fd97Rv-0j5GyP/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <section
      id="certifications"
      className="bg-[#0f1123] text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 rounded-2xl border border-[#444] my-10 mx-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] transition duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-[#cccccc]">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {certificates.map((cert, i) => (
          <CertificateCard key={i} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
