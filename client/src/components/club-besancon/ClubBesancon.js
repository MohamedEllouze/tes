import React from "react";
import "./Besancon.scss";
import direction from "../../styles/direction.png";
import piscine from "../../styles/piscine.jpg";
import { Link } from "react-router-dom";

const activtiesInfo = [
  {
    id: 0,
    name: "Train",
    image:
      "https://i2.wp.com/www.thirdspace.london/media/19_02_19_ThirdSpace_Soho_Tower_Update-009.jpg?resize=800%2C500&ssl=1%20800w,%20https://i2.wp.com/www.thirdspace.london/media/19_02_19_ThirdSpace_Soho_Tower_Update-009.jpg?resize=1000%2C625&ssl=1%201000w,%20https://i2.wp.com/www.thirdspace.london/media/19_02_19_ThirdSpace_Soho_Tower_Update-009.jpg?resize=1200%2C750&ssl=1%201200w,%20https://i2.wp.com/www.thirdspace.london/media/19_02_19_ThirdSpace_Soho_Tower_Update-009.jpg?resize=1600%2C1000&ssl=1%201600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole", "Dole"],
  },

  {
    id: 1,
    name: "Vestiaires",
    image:
      "https://i1.wp.com/www.thirdspace.london/media/SO-005-ChangingRoom-Main.jpg?resize=800%2C500&ssl=1 800w, https://i1.wp.com/www.thirdspace.london/media/SO-005-ChangingRoom-Main.jpg?resize=1000%2C625&ssl=1 1000w, https://i1.wp.com/www.thirdspace.london/media/SO-005-ChangingRoom-Main.jpg?resize=1200%2C750&ssl=1 1200w, https://i1.wp.com/www.thirdspace.london/media/SO-005-ChangingRoom-Main.jpg?resize=1600%2C1000&ssl=1 1600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole"],
  },
  {
    id: 2,
    name: "Cycling",
    image:
      "https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_Soho_Store_26.11.19_JMS-010.jpg?resize=800%2C500&ssl=1%20800w,%20https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_Soho_Store_26.11.19_JMS-010.jpg?resize=1000%2C625&ssl=1%201000w,%20https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_Soho_Store_26.11.19_JMS-010.jpg?resize=1200%2C750&ssl=1%201200w,%20https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_Soho_Store_26.11.19_JMS-010.jpg?resize=1600%2C1000&ssl=1%201600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole"],
  },
  {
    id: 3,
    name: "Adrenaline",
    image:
      "https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_gym_climbingwall_037-1.jpg?resize=800%2C500&ssl=1 800w, https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_gym_climbingwall_037-1.jpg?resize=1000%2C625&ssl=1 1000w, https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_gym_climbingwall_037-1.jpg?resize=1200%2C750&ssl=1 1200w, https://i0.wp.com/www.thirdspace.london/media/ThirdSpace_gym_climbingwall_037-1.jpg?resize=1600%2C1000&ssl=1 1600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole"],
  },
  {
    id: 4,
    name: "Athlétic",
    image:
      "https://i0.wp.com/www.thirdspace.london/media/SO-008-Pilates-Main.jpg?resize=800%2C500&ssl=1%20800w,%20https://i0.wp.com/www.thirdspace.london/media/SO-008-Pilates-Main.jpg?resize=1000%2C625&ssl=1%201000w,%20https://i0.wp.com/www.thirdspace.london/media/SO-008-Pilates-Main.jpg?resize=1200%2C750&ssl=1%201200w,%20https://i0.wp.com/www.thirdspace.london/media/SO-008-Pilates-Main.jpg?resize=1600%2C1000&ssl=1%201600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole"],
  },
  {
    id: 5,
    name: "Zen",
    image:
      "https://i2.wp.com/www.thirdspace.london/media/ThirdSpace_gym_soho_club_027-1.jpg?resize=800%2C500&ssl=1%20800w,%20https://i2.wp.com/www.thirdspace.london/media/ThirdSpace_gym_soho_club_027-1.jpg?resize=1000%2C625&ssl=1%201000w,%20https://i2.wp.com/www.thirdspace.london/media/ThirdSpace_gym_soho_club_027-1.jpg?resize=1200%2C750&ssl=1%201200w,%20https://i2.wp.com/www.thirdspace.london/media/ThirdSpace_gym_soho_club_027-1.jpg?resize=1600%2C1000&ssl=1%201600w",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
    subMenu: ["Dole", "Dole"],
  },
];

const ClubBesancon = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      {/* <div className="navbar-besancon">
        <span>besancon</span>
      </div> */}
      <section className="first-section-besancon">
        <img src="https://i2.wp.com/www.thirdspace.london/media/18_05_09_Third_Space_Soho_JMS-008.jpg?resize=800%2C600&ssl=1 800w, https://i2.wp.com/www.thirdspace.london/media/18_05_09_Third_Space_Soho_JMS-008.jpg?resize=1000%2C750&ssl=1 1000w, https://i2.wp.com/www.thirdspace.london/media/18_05_09_Third_Space_Soho_JMS-008.jpg?resize=1200%2C900&ssl=1 1200w, https://i2.wp.com/www.thirdspace.london/media/18_05_09_Third_Space_Soho_JMS-008.jpg?resize=1600%2C1200&ssl=1 1600w"></img>
        <div>
          <h2>EVEREST</h2>
          <span>BESANCON</span>
          <h2>SPORT CLUB</h2>
        </div>
      </section>
      <section className="besancon-info">
        <div className="top-part">
          <div>
            <h4>ADRESSE</h4>
            <h6>266 C rue de Dole 25000 Besancon 03 00 00 00 00</h6>
            <h5>Google map</h5>
          </div>
          <div>
            <h4>HORAIRES</h4>
            <h6 className="time">
              6h -> 23h <br /> 7j/7
            </h6>
          </div>
          <div>
            <h4>ACTIVITIES</h4>
            <h6>
              pole cardio musculation libre musculation guidée studios club aqua
              beauté spa LPG
            </h6>
            <h5>détails</h5>
          </div>
        </div>
        <div className="description bottom-part">
          <p>
            Meme la vue sur la rivière donne un sentiment de débuts épiques.
            Everest est une pure inspiration de fitness à double hauteur, à une
            piscine avec des zones chaudes en bois de genévrier, des studios
            chauffés dédiés à des cours de haute qualité,classe d'exercices de
            groupe inspirantes à une conception d'éclairage interactive sur
            mesure.
          </p>
          <h3>RESERVEZ VOTRE SEANCE</h3>
          <button>VIDEO DU CLUB</button>
        </div>
      </section>
      {activtiesInfo.map((el, index) => (
        <section key={index} className="activity">
          <img src={el.image}></img>

          <div className="description des-act">
            <h2>{el.name} </h2>
            <p>{el.description}</p>

            {/* <span>VOIR PLUS</span>
            <a href="#0">
              <img className="direction" src={direction}></img>
            </a> */}
          </div>

          <div className="links">
            <ul>
              {el.subMenu &&
                el.subMenu.map((subEl) => (
                  <Link to="" className="link">
                    <li>{subEl}</li>
                  </Link>
                ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="coaching-personnel">
        <img
          className="fond lyon"
          src="https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=600%2C300&ssl=1%20600w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=900%2C450&ssl=1%20900w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1200%2C600&ssl=1%201200w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1600%2C800&ssl=1%201600w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1800%2C900&ssl=1%201800w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=2400%2C1200&ssl=1%202400w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=3200%2C1600&ssl=1%203200w"
        ></img>
        <div className="description">
          <h3>COACHING PERSONNEL</h3>
          <p>Maximisez vos entrainement et obtenez des resultats rapidement </p>
          <button>Decouvrir</button>
        </div>
      </section>

      <section className="last-section">
        <img
          className="fond lyon"
          src="https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=600%2C300&ssl=1 600w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=900%2C450&ssl=1 900w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=1200%2C600&ssl=1 1200w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=1600%2C800&ssl=1 1600w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=1800%2C900&ssl=1 1800w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=2400%2C1200&ssl=1 2400w, https://i1.wp.com/www.thirdspace.london/media/Classes2@2x.jpg?resize=3200%2C1600&ssl=1 3200w"
        />
        <div className="description bes-desc">
          <h3>NOS ACTIVITIES</h3>
          <p>Exiger du choix, de la qualité... </p>
          <p>Sans jamais vous ennuyer </p>
          <button className="bes-btn">Button</button>
        </div>
      </section>
      <section className="nos-formule">
        <img
          className="fond lyon"
          src="https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=600%2C300&ssl=1%20600w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=900%2C450&ssl=1%20900w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1200%2C600&ssl=1%201200w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1600%2C800&ssl=1%201600w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=1800%2C900&ssl=1%201800w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=2400%2C1200&ssl=1%202400w,%20https://i1.wp.com/www.thirdspace.london/media/Personal-Training@2x-e1551463984897.jpg?resize=3200%2C1600&ssl=1%203200w"
        ></img>
        <div className="description">
          <h3>REJOIGNEZ NOUS</h3>
          <p>Maximisez vos entrainement et obtenez des resultats rapidement </p>
          <Link to="/rejoignez-nous">
            <button>Nos Formule</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ClubBesancon;
