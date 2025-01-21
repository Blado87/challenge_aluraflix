import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import SectionTitle from './components/SectionTitle/SectionTitle';
import Card from './components/Card/Card'
import SectionGroup from "./components/SectionGroup/SectionGroup";

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
      <SectionGroup
        title={<SectionTitle color="cyan" text="FRONT END" />}
        cards={[
          <Card
            key={1}
            logo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
              <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
              <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
              <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
            </svg>}
            title="Card 1"
            description="Descripción de la tarjeta 1"
          />,
          <Card
            key={2}
            logo={<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z" /><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z" /><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" /><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" /></svg>}
            title="Card 2"
            description="Descripción de la tarjeta 2"
          />,
        ]}
      />

      <SectionGroup
        title={<SectionTitle color="green" text="BACK END" />}
        cards={[
          <Card
            key={3}
            logo={<i className="bi bi-code-slash"></i>}
            title="Card 3"
            description="Descripción de la tarjeta 3"
          />,
          <Card
            key={4}
            logo={<i className="bi bi-gear-fill"></i>}
            title="Card 4"
            description="Descripción de la tarjeta 4"
          />,
        ]}
      />

      <SectionGroup
        title={<SectionTitle color="orange" text="INNOVACION Y GESTION" />}
        cards={[
          <Card
            key={3}
            logo={<i className="bi bi-code-slash"></i>}
            title="Card 3"
            description="Descripción de la tarjeta 3"
          />,
          <Card
            key={4}
            logo={<i className="bi bi-gear-fill"></i>}
            title="Card 4"
            description="Descripción de la tarjeta 4"
          />,
          <Card
            key={5}
            logo={<i className="bi bi-gear-fill"></i>}
            title="Card 4"
            description="Descripción de la tarjeta 4"
          />,
          <Card
            key={6}
            logo={<i className="bi bi-gear-fill"></i>}
            title="Card 4"
            description="Descripción de la tarjeta 4"
          />, 
          <Card
            key={7}
            logo={<i className="bi bi-gear-fill"></i>}
            title="Card 4"
            description="Descripción de la tarjeta 4"
          />,         
        ]}
      />


      {/* <Button text="Editar" className="card__button open-modal-btn" onClick={handleOpenModal}></Button> */}
      {/* <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      {/* <Categories /> */}
      {/* <SectionTitle color="orange" text="Welcome to the Orange Section" />
      <SectionTitle color="green" text="Green Energy Zone" />
      <SectionTitle color="cyan" text="Cyan Ocean View" />
      <SectionTitle color="purple" text="Purple Galaxy" />
      <SectionTitle color="pink" text="Pink Blossom Field" /> */}
      <Footer />
    </>
  );
}

export default App;
