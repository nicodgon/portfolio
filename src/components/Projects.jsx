export default function Projects(props) {
  const iconStyles = "w-10 h-10 max-md:w-8 max-md:h-8"
  return props.pages.map((page) => {
    return (
      <div key={page} className="flex flex-col relative items-center justify-center">
        <img
          className="h-[calc(1080px/5)] w-[calc(1920px/5)] peer cursor-pointer hover:blur transition rounded md:max-xl:h-[calc(1080px/3)] md:max-xl:w-[calc(1920px/3)] max-md:w-[16em] max-md:h-[10em]"
          src={page}
          alt="página web"
        />
        <div className="gap-6 absolute hidden peer-hover:flex hover:flex rounded-lg hover:bg-black/40 hover:p-1 transition-all max-xl:flex max-xl:static max-xl:p-1 max-xl:bg-black/40 max-md:gap-4">
          {page != props.pages[2] ? (
            <>
              <img src={props.reactIcon} alt="icono de react" className={iconStyles} />
              <img src={props.htmlIcon} alt="icono de html" className={iconStyles} />
              <img src={props.cssIcon} alt="icono de css" className={iconStyles} />
            </>
          ) : (
            <>
              <img src={props.htmlIcon} alt="icono de html" className={iconStyles} />
              <img src={props.cssIcon} alt="icono de css" className={iconStyles} />
              <img src={props.sassIcon} alt="icono de sass" className={iconStyles} />
              <img
                src={props.bootstrapIcon}
                alt="icono de bootstrap"
                className={iconStyles}
              />
              <img
                src={props.javaScriptIcon}
                alt="icono de javaScript"
                className={`${iconStyles} rounded-md`}
              />
            </>
          )}
        </div>
          <img src={props.githubIcon} alt="icono de github" className="w-10 h-10 rounded-md mt-3 cursor-pointer" />
      </div>
    );
  });
}
