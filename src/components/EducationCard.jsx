const EducationCard = ({
  degree,
  institution,
  description,
  timeline,
  grade,
  logo,
  color = "#459bd5",
  isLeft = false,
}) => {
  const baseShadow = `0 4px 20px ${color}55`;
  const hoverShadow = `0 6px 30px ${color}aa`;

  return (
    <div
      className={`flex flex-col sm:flex-row ${
        isLeft ? "sm:flex-row-reverse" : ""
      } items-start gap-8 sm:gap-16 mt-6 sm:mt-10`}
    >
      {/* Card Section */}
      <div
        className={`w-full sm:w-[75%] flex justify-center sm:justify-${
          isLeft ? "end" : "start"
        }`}
      >

        <div
          className="group w-full transition-transform duration-300 sm:hover:scale-[1.02]"
          style={{ filter: `drop-shadow(${baseShadow})` }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = `drop-shadow(${hoverShadow})`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = `drop-shadow(${baseShadow})`)
          }
        >
          <div className="w-full bg-[#1b1b1b] border border-[#333] rounded-2xl px-6 py-6 text-white">
            {/* Logo */}
            {logo && (
              <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  alt="institution logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full border border-[#555] bg-white p-1"
                />
              </div>
            )}

            {/* Degree */}
            <h3
              className="text-lg sm:text-2xl font-semibold text-center mb-1"
              style={{ color }}
            >
              {degree}
            </h3>

            {/* Institution */}
            <p className="text-center text-sm sm:text-base font-medium text-gray-200 mb-1">
              {institution}
            </p>

            {/* Timeline */}
            <p className="text-center text-xs sm:text-sm text-gray-400 mb-1">
              {timeline}
            </p>

            {/* Grade */}
            {grade && (
              <p className="text-center text-xs sm:text-sm text-gray-300 font-semibold mb-3">
                {grade}
              </p>
            )}

            {/* Description */}
            <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden sm:block sm:w-[25%]"></div>
    </div>
  );
};

export default EducationCard;
