import profile from "../assets/images/profile.png";

export default function ProfilePicture() {
  return (
    <div
      className={`w-64 h-64 rounded-full border-2 border-gray-800 overflow-hidden`}
    >
      <img src={profile} alt="perfil" />
    </div>
  );
}