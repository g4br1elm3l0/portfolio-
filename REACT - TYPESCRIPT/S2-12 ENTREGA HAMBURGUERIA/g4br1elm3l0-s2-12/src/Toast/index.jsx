import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const toastError = () => {
    toast.error('Só é permitido um item de cada no carrinho', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    });

}

export default toastError