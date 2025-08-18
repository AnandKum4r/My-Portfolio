const SkillGrid = ({ title, skills }) => {
  return (
    <div className="rounded-2xl p-6 bg-[#0f1123] border border-[#444] transition duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
      <h3 className="text-2xl font-semibold text-center mb-6 text-[#cccccc]">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#181b32] hover:bg-[#1f2342] w-full px-2 py-2 rounded-xl flex flex-col items-center justify-center transition duration-200"
          >
            <img src={skill.logo} alt={skill.name} className="w-8 h-8 mb-1" />
            <p className="text-sm text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default SkillGrid;
