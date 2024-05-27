import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

// a notification component created using the toastify library
const Notification = () => {
  return (
    <div className="">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
