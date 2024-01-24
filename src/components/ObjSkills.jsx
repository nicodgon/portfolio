import PropTypes from "prop-types"

export default function ObjSkills({renderObj,styleContainer}) {
  return (
    <section className={`${styleContainer} items-center pl-5 ${renderObj} max-md:hidden`}>
      <p>
        <span className="block">const fullStack = {"{"}</span>
        <span className="block pl-10">frontend: {"{"}</span>
        <span className="block pl-20">
          languages: [&quot;HTML&quot;, &quot;CSS&quot;,
          &quot;JavaScript&quot;],
        </span>
        <span className="block pl-20">
          frameworksAndLibraries: [&quot;React&quot;, &quot;Bootstrap&quot;,
          &quot;Tailwind&quot;],
        </span>
        <span className="block pl-20">
          programmingTools: [&quot;Sass&quot;, &quot;GitHub&quot;,
          &quot;VSC&quot;]
        </span>
        <span className="block pl-10">{"}"},</span>
        <span className="block pl-10">backend: {"{"}</span>
        <span className="block pl-20">
          programmingTools: [&quot;Node.js&quot;, &quot;Express&quot;,
          &quot;Npm&quot;],
        </span>
        <span className="block pl-20">db: &quot;MongoDB&quot;</span>
        <span className="block pl-10">{"}"},</span>
        <span>{"}"};</span>
      </p>
    </section>
  );
}

ObjSkills.propTypes={
  renderObj: PropTypes.node,
  styleContainer: PropTypes.node
}