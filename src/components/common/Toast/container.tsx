import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledContainer = styled(ToastContainer)`
  &&.Toastify__toast-container {
    padding: 0;
    width: auto;
    max-width: 575px;
    font-size: 1.4rem;
    height: 5rem;
    text-align: center;
  }
  .Toastify__toast {
    position: relative;
    padding: 0;
    min-height: 0;
    border-radius: 8px;
  }
  .Toastify__toast-body {
    padding: 1.2rem 2.2rem;
    margin: 0;
  }
`;

export default StyledContainer;
