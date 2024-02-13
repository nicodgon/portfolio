import Swal from "sweetalert2";

export const alertCertificate = (img) => {
  Swal.fire({
    imageUrl: img,
    imageWidth: 750,
    imageAlt: "Certificación",
    width: 1000,
    confirmButtonText: "Cerrar",
    timer: 10000,
    background: "#002",
  });
};
