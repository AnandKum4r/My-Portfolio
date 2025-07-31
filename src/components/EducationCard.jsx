const EducationCard = ({
  title,
  subtitle,
  description,
  timeline,
  index,
  isLast,
}) => {
  return (
    <div className="relative">
      {/* Timeline lines */}
      <div
        className={`hidden md:block h-[140px] border-b
        ${index > 0 ? "min-w-96 border-l" : "ml-auto w-40"}
        ${isLast ? "w-40 mr-auto" : ""} border-blue-500`}
      />
      {!isLast && (
        <div className="hidden md:block min-w-96 h-[140px] border-r border-b border-blue-500" />
      )}

      {/* Card */}
      <div
        className="w-full bg-[#0f1123] border border-[#444] 
        rounded-2xl p-6 mx-auto md:mx-10 md:absolute top-[70px] mb-8 md:mb-0 
        transition duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] 
        hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[#cccccc] text-[15px] md:text-lg font-semibold leading-tight">
              {title}
            </h3>
            <p className="text-blue-400 text-xs md:text-sm mt-1">{subtitle}</p>
          </div>

          <div
            className="text-[11px] md:text-xs text-sky-100 font-medium bg-[#0f172a] 
            rounded-full border border-blue-700/60 border-dashed px-4 py-1.5 
            shadow-sm shadow-blue-900/30"
          >
            {timeline}
          </div>
        </div>

        {/* Description */}
        <p className="text-blue-100 text-[12.5px] md:text-sm font-light leading-6 mt-4 tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
