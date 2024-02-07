import Swal from "sweetalert2";

export const alertCode = (img) => {
  Swal.fire({
    imageUrl: img,
    imageHeight: 600,
    imageWidth: 750,
    imageAlt: "Certificación",
    width: 1000,
    confirmButtonText: "Cerrar",
    timer: 10000,
    background: "#002",
  });
};
