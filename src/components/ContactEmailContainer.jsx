import { useChecked } from "../hooks/useChecked";
import CopyToClipboard from "react-copy-to-clipboard";
import email from "../assets/images/icons/email.svg";

export default function ContactEmailContainer() {
  const { img, change } = useChecked();
  return (
    <div className="bg-white/50 rounded-xl p-2 w-full flex justify-between items-center max-md:w-11/12">
      <div className="flex items-center gap-4">
        <a
          href="https://login.live.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="email" className="w-8 hover:scale-125 transition" />
        </a>
        <span className="text-lg">nicolasdgz20@gmail.com</span>
      </div>
      <CopyToClipboard text="nicolasdgz20@gmail.com">
        <button className="w-8" onClick={change}>
          <img src={img} alt="copiar" />
        </button>
      </CopyToClipboard>
    </div>
  );
}
