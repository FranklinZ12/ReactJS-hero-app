import { toast } from 'react-toastify';
export const notify = () => toast.info("Porfavor ingresar una busqueda!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    toastId: "custom-id-yes",
});