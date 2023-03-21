import "./about.scss";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import aboutDatas from "../../assets/api/aboutDatas.json";

const About = () => {
    return (
        <div>
            <Header />
            <Banner />
            <main className="about_main">
                {aboutDatas.map((data) => {
                    return (
                        <div key={data.id} className="about_main_dropdown">
                            <Dropdown
                                style={{ margin: "30px 0" }}
                                title={data.title}
                                content={data.content}
                            />
                        </div>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
};

export default About;
