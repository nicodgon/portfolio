import Swal from "sweetalert2";

export const alertForm = (text) => {
  Swal.fire({
    background: "#000",
    position: "top",
    width: 400,
    showConfirmButton: false,
    timer: 3000,
    text: text,
    color: "#fff",
  });
};
