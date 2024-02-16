import PropTypes from "prop-types";

export default function ObjSkills({ colors, renderObj, styleContainer }) {
  return (
    <section
      className={`${styleContainer} items-center pl-5 ${renderObj} max-md:hidden`}
    >
      <p>
        <span className={`block ${colors.text.normal}`}>const fullStack = {"{"}</span>
        <span className={`block pl-1 ${colors.text.normal}`}>frontend: {"{"}</span>
        <span className={`block pl-20 ${colors.text.normal}`}>
          languages: [&quot;HTML&quot;, &quot;CSS&quot;,
          &quot;JavaScript&quot;],
        </span>
        <span className={`block pl-20 ${colors.text.normal}`}>
          frameworksAndLibraries: [&quot;React&quot;, &quot;Bootstrap&quot;,
          &quot;Tailwind&quot;],
        </span>
        <span className={`block pl-20 ${colors.text.normal}`}>
          programmingTools: [&quot;Sass&quot;, &quot;GitHub&quot;,
          &quot;VSC&quot;]
        </span>
        <span className={`block pl-10 ${colors.text.normal}`}>{"}"},</span>
        <span className={`block pl-10 ${colors.text.normal}`}>backend: {"{"}</span>
        <span className={`block pl-20 ${colors.text.normal}`}>
          programmingTools: [&quot;Node.js&quot;, &quot;Express&quot;,
          &quot;Npm&quot;],
        </span>
        <span className={`block pl-20 ${colors.text.normal}`}>db: &quot;MongoDB&quot;</span>
        <span className={`block pl-10 ${colors.text.normal}`}>{"}"},</span>
        <span className={colors.text.normal}>{"}"};</span>
      </p>
    </section>
  );
}

ObjSkills.propTypes = {
  colors: PropTypes.object,
  renderObj: PropTypes.node,
  styleContainer: PropTypes.node,
};
