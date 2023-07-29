import { ToastContainer } from "react-toastify";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./providers/AuthProvider";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>

      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
