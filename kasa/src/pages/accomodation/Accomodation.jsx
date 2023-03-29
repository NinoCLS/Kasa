import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../notFound/notFound";

import Header from "../../components/Header/Header";
import Slider from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import datas from "../../assets/api/housing.json";
import greyStar from "../../assets/img/Pages/accomodation/Star.png";
import redStar from "../../assets/img/Pages/accomodation/RedStar.png";

import "./accomodation.scss";

const Accomodation = () => {
    const [imageSlider, setImageSlider] = useState([]);
    const { id } = useParams();
    const [dataCurrentAccomodation, setDataCurrentAccomodation] = useState({});
    const {
        title = "",
        location = "",
        tags = [],
        host: { name = "", picture = "" } = {},
        rating = 0,
        description = "",
        equipments = "",
    } = dataCurrentAccomodation;
    const [firstName, lastName] = name.split(" ");

    useEffect(() => {
        const currentAccomodation = datas.find((data) => data.id === id) || {};
        setImageSlider(currentAccomodation.pictures || []);
        setDataCurrentAccomodation(currentAccomodation);
    }, [id]);

    // if (Object.keys(dataCurrentAccomodation).length === 0) {
    //     return (
    //         <>
    //             <NotFound />
    //         </>
    //     );
    // }

    return (
        <>
            {Object.keys(dataCurrentAccomodation).length === 0 ? (
                <NotFound />
            ) : (
                <>
                    <Header />
                    <Slider imageSlider={imageSlider} />
                    <main className="accomodation">
                        <div className="accomodation_content">
                            <div className="accomodation_content_infos">
                                <h1>{title}</h1>
                                <p>{location}</p>
                                <div>
                                    {tags.map((tag, index) => (
                                        <button key={index}>{tag}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="accomodation_content_host">
                                <div>
                                    <div className="accomodation_content_host_name">
                                        <span>{firstName}</span>
                                        <span>{lastName}</span>
                                    </div>
                                    <img
                                        src={picture}
                                        alt="host of this accomodation"
                                    />
                                </div>

                                <div className="accomodation_content_host_stars">
                                    {/* affiche le bon nombre d'etoile rouge ou grise en fonction du rating */}
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index}
                                            src={
                                                index + 1 <= rating
                                                    ? redStar
                                                    : greyStar
                                            }
                                            alt="star"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="accomodation_dropdown">
                            <div className="accomodation_dropdown_item">
                                <Dropdown
                                    title={"Description"}
                                    content={description}
                                />
                            </div>
                            <div className="accomodation_dropdown_item">
                                <Dropdown
                                    title={"Équipements"}
                                    content={equipments}
                                />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Accomodation;
