import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import ModalForm from "./components/ModalForm/ModalForm";
import Button from "./components/Button/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Banner />
      <Button text="Editar" className="card__button open-modal-btn" onClick={handleOpenModal}></Button>
      
      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
