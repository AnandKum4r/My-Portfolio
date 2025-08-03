const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-[#181b32] hover:bg-[#1f2342] p-4 rounded-xl w-full transition duration-200 border border-[#333]">
      <img
        src={certificate.badge}
        alt={certificate.title}
        className="w-16 h-16 object-contain mx-auto mb-3"
      />
      <h4 className="text-[#cccccc] text-center text-sm font-semibold mb-1">
        {certificate.title}
      </h4>
      <a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-xs block text-center hover:underline"
      >
        View Certificate
      </a>
    </div>
  );
};

export default CertificateCard;
