import { useState } from "react";
import copy from "../assets/images/icons/copy.svg";
import copySuccess from "../assets/images/icons/successful-copy.svg";
import Swal from "sweetalert2";

export const useChecked = () => {
  const [img, setImg] = useState(copy);
  const change = () => {
    setImg(copySuccess);
    setTimeout(() => {
      setImg(copy);
    }, 3000);
    Swal.fire({
      background: "#000",
      position: "bottom-end",
      width: 400,
      showConfirmButton: false,
      timer: 1500,
      text: "Email copiado al portapapeles",
      color: "#fff",
    });
  };
  return { img, change };
};
