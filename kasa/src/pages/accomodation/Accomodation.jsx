import "./accomodation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../assets/api/housing.json";
import Header from "../../components/Header/Header";
import Slider from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import greyStar from "../../assets/img/Pages/accomodation/Star.png";
import redStar from "../../assets/img/Pages/accomodation/RedStar.png";

const Accommodation = () => {
    const [imageSlider, setImageSlider] = useState([]);
    const { id } = useParams();
    const currentAccommodationData = datas.filter((data) => data.id === id)[0];
    const {
        title,
        location,
        tags,
        host: { name, picture },
        rating,
        description,
        equipments,
    } = currentAccommodationData;

    useEffect(() => {
        setImageSlider(currentAccommodationData.pictures);
    }, [id, currentAccommodationData]);

    return (
        <>
            <Header />
            <Slider imageSlider={imageSlider} />
            <main className="accommodation">
                <div className="accommodation_content">
                    <div className="accommodation_content_infos">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div>
                            {tags.map((tag, index) => (
                                <button key={index}>{tag}</button>
                            ))}
                        </div>
                    </div>
                    <div className="accommodation_content_host">
                        <div>
                            <div className="accommodation_content_host_name">
                                <span>{name.split(" ")[0]}</span>
                                <span>{name.split(" ")[1]}</span>
                            </div>
                            <img
                                src={picture}
                                alt="host of this accommodation"
                            />
                        </div>
                        <div className="accommodation_content_host_stars">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img
                                        key={index}
                                        src={
                                            ratingValue <= rating
                                                ? redStar
                                                : greyStar
                                        }
                                        alt="star"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="accommodation_dropdown">
                    <div className="accommodation_dropdown_item">
                        <Dropdown title={"Description"} content={description} />
                    </div>
                    <div className="accommodation_dropdown_item">
                        <Dropdown title={"Équipements"} content={equipments} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Accommodation;
