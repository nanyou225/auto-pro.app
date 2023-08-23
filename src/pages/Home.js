import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Select from "react-select";



const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Acheter Maintenant",
    image: "/assets/carousel/bentley-litres-1922-chassis-143.JPG",
  },
  {
    title: "Mecano",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Acheter Maintenant",
    image: "/assets/carousel/garageImg.png",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Acheter Maintenant",
    image: "/assets/carousel/bentley-3-litres-1922-chassis.JPG",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Acheter Maintenant",
    image: "/assets/carousel/bentley-litres-1922-chassis-141.JPG",
  },
  {
    title: "Attelier de garage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Acheter Maintenant",
    image: "/assets/carousel/mecanoHero.png",
  },
];


const Home = () => {
  const brandsOptions = [
    { value: "renault", label: "Renault" },
    { value: "peugeot", label: "Peugeot" },
    { value: "mercedes", label: "Mercedes" },
    { value: "opel", label: "Opel" }
  ];

  const modelsOptions = {
    renault: [
      { value: "clio", label: "Clio" },
      { value: "megane", label: "Megane" },
      { value: "captur", label: "Captur" }
    ],
    peugeot: [
      { value: "208", label: "208" },
      { value: "308", label: "308" },
      { value: "3008", label: "3008" }
    ],
    mercedes: [
      { value: "aclass", label: "A-Class" },
      { value: "eclass", label: "E-Class" },
      { value: "sclass", label: "S-Class" }
    ],
    opel: [
      { value: "corsa", label: "Corsa" },
      { value: "astra", label: "Astra" },
      { value: "insignia", label: "Insignia" }
    ]
  };

  const enginesOptions = {
    renault: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
      { value: "electric", label: "Electric" }
    ],
    peugeot: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
      { value: "electric", label: "Electric" }
    ],
    mercedes: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
      { value: "electric", label: "Electric" }
    ],
    opel: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
      { value: "electric", label: "Electric" }
    ]
  };

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Fonction pour afficher le véhicule sélectionné
  const displayVehicle = () => {
    if (selectedBrand && selectedModel && selectedEngine) {
      const vehicle = `${selectedBrand.label} ${selectedModel.label} (${selectedEngine.label})`;
      setSelectedVehicle(vehicle);
    } else {
      setSelectedVehicle(null);
    }
  };

  return (
    <>
      <section className='home-wrapper-1 py-2'>
        <div className='container-xxl'>
          <div className='row gap-30'>
            <div className="col-3">
              <h2>Sélectionnez un véhicule</h2>
              <div className="form-group mb-3">
                <label>Marque</label>
                <Select
                  options={brandsOptions}
                  value={selectedBrand}
                  onChange={(selectedOption) => {
                    setSelectedBrand(selectedOption);
                    setSelectedModel(null); // Réinitialiser le modèle lorsqu'une nouvelle marque est sélectionnée
                    setSelectedEngine(null); // Réinitialiser la motorisation lorsque la marque change
                  }}
                  placeholder="Sélectionnez une marque"
                />
              </div>
              <div className="form-group mb-3">
                <label>Modèle</label>
                <Select
                  options={modelsOptions[selectedBrand?.value] || []}
                  value={selectedModel}
                  onChange={(selectedOption) => {
                    setSelectedModel(selectedOption);
                    setSelectedEngine(null); // Réinitialiser la motorisation lorsque le modèle change
                  }}
                  placeholder="Sélectionnez un modèle"
                  isDisabled={!selectedBrand}
                />
              </div>
              <div className="form-group mb-3">
                <label>Motorisation</label>
                <Select
                  options={enginesOptions[selectedBrand?.value] || []}
                  value={selectedEngine}
                  onChange={setSelectedEngine}
                  placeholder="Sélectionnez une motorisation"
                  isDisabled={!selectedModel} // Désactive la sélection de la motorisation si le modèle n'est pas sélectionné
                />
              </div>
              <button className="btn btn-primary mt-2 w-100" onClick={displayVehicle}>
                Rechercher
              </button>
              {selectedVehicle && (
                <div className="mt-3">
                  <h3>Véhicule sélectionné :</h3>
                  <p>{selectedVehicle}</p>
                </div>
              )}
            </div>

            <div className='col-8'>
              {/* <div className='main-banner position-relative p-3'>
                <img className='img-fluid rounded-3' src='/assets/images/main-banner-1.jpg'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>PLUS D'ECONOMIE AVEC AUTO-PRO</h4>
                  <h5>LIVRAISON GRATUITE</h5>
                  <p>Dès 30€ d'achat</p>
                  <Link className='button'>ACHETER MAINTENANT</Link>
                </div>
              </div> */}
              <div className='main-banner position-relative p-3'>
                <Slider autoplay={5000}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: `url('${item.image}') no-repeat center center`,
                      }}
                    >
                      <div className="main-banner-content position-absolute">
                        <div className='button text-center'>{item.button}</div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home