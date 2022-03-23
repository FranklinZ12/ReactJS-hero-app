import { toast } from 'react-toastify';
const notifyInfo = () => toast.info("Porfavor ingresar una busqueda!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    toastId: "custom-id-yes",
});

const notifyError = () => toast.error("No se encontro el heroe.", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    toastId: "custom-id-yes",
});

export { notifyInfo, notifyError }