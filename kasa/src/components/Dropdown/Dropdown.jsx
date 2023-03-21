import "./dropdown.scss";
import arrow from "../../assets/img/Components/Dropdown/arrow.png";
import { useState } from "react";

const Dropdown = ({ title, content }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="dropdown">
                <h3
                    className="dropdown_title"
                    onClick={() => setToggle(!toggle)}
                >
                    {title}
                    <img
                        className={
                            toggle ? "arrow arrow_up" : "arrow arrow_down"
                        }
                        src={arrow}
                        alt="show content"
                    />
                </h3>
                <div
                    className={
                        toggle ? "dropdown_content" : "dropdown_content_hidden"
                    }
                >
                    {Array.isArray(content)
                        ? content.map((item, index) => {
                              return <p key={index}>{item}</p>;
                          })
                        : content}
                </div>
            </div>
        </>
    );
};

export default Dropdown;
