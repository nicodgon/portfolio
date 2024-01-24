export default function Projects(props) {
  const iconStyles = "w-10 h-10 max-md:w-8 max-md:h-8"
  return props.pages.map((page) => {
    return (
      <div key={page} className="flex flex-col relative items-center justify-center max-md:px-1">
        <a href="/" className="peer">
          <img
            className="h-[calc(1080px/5)] w-[calc(1920px/5)] cursor-pointer hover:blur transition rounded md:max-xl:h-[calc(1080px/3)] md:max-xl:w-[calc(1920px/3)] max-md:w-full max-md:h-auto"
            src={page}
            alt="página web"
          />
        </a>
        <div className="gap-6 absolute hidden peer-hover:flex hover:flex rounded-lg hover:bg-black/40 hover:p-1 transition-all max-xl:flex max-xl:static max-xl:p-1 max-xl:bg-black/40 max-md:gap-4">
          {page != props.pages[2] ? (
            <>
              <img src={props.reactIcon} alt="react" className={iconStyles} />
              <img src={props.htmlIcon} alt="html" className={iconStyles} />
              <img src={props.cssIcon} alt="css" className={iconStyles} />
            </>
          ) : (
            <>
              <img src={props.htmlIcon} alt="html" className={iconStyles} />
              <img src={props.cssIcon} alt="css" className={iconStyles} />
              <img src={props.sassIcon} alt="sass" className={iconStyles} />
              <img
                src={props.bootstrapIcon}
                alt="bootstrap"
                className={iconStyles}
              />
              <img
                src={props.javaScriptIcon}
                alt="javaScript"
                className={`${iconStyles} rounded-md`}
              />
            </>
          )}
        </div>
          <img src={props.githubIcon} alt="github" className="w-10 h-10 rounded-md mt-3 cursor-pointer" />
      </div>
    );
  });
}
