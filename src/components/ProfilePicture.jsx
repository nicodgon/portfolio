import profile from "../assets/images/profile.png";
import PropTypes from "prop-types"

export default function ProfilePicture({colors}){
  return(
    <div className={`w-64 h-64 rounded-full border-2 ${colors.border} overflow-hidden`}>
      <img
        src={profile}
        alt="perfil"
        className="translate-x-2"
      />
    </div>

  )
}

ProfilePicture.propTypes={
  colors: PropTypes.object
}