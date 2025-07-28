const ProjectCard = ({
  title,
  subtitle,
  description,
  techStack,
  image,
  repoLink,
  color = "#459bd5",
  arrow,
  isLeft = false, // controls image alignment
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        isLeft ? "sm:flex-row-reverse" : ""
      } gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative`}
    >
      {/* Line and dot in center */}
      <div
        className={`h-[1px] ${
          isLeft ? "left-1/2 right-1/4" : "left-1/4 right-1/2"
        } bg-[#1788ae] absolute top-1/2 hidden sm:block`}
      ></div>
      <div
        className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        style={{
          borderColor: color,
          backgroundColor: "#111",
        }}
      ></div>

      {/* Image section */}
      <a
        href={repoLink}
        target="_blank"
        rel="noreferrer"
        className={`flex w-full relative justify-center ${
          isLeft ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <img
            className="max-w-[400px] w-full relative z-10 transition duration-300 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:drop-shadow-[0_0_60px_rgba(59,130,246,0.8)]"
            src={image}
            alt={title}
          />
          <span
            className="flex group-hover:-top-14 ease-jump duration-200 text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
            style={{ backgroundColor: color }}
          >
            {title}
            {arrow}
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="w-full">
        <h3 className="font-bold text-2xl md:text-4xl" style={{ color }}>
          {title}
        </h3>
        <span className="text-base md:text-lg" style={{ color }}>
          {subtitle}
        </span>
        <p className="text-justify text-sm md:text-base mt-2">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #{tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
