import { useState, useContext } from "react"
import ThemeContext from "../context/ThemeContext";
import ColorContext from "../context/ColorContext";

export const Footer = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const {color,handleColor} = useContext(ColorContext);
    const [btnColor,setBTNColor] = useState('#5BCCF6');
    const [sun,setSun] = useState(true);

    const handleCheck = (e) => {
        console.log(sun)
        setSun(e.target.checked);
        if(e.target.checked === true){
            handleTheme("dark")
        }else{
            handleTheme("light")
        }
        console.log(sun)
    }

    const pickColor = () => {
        const pickerContainer = document.getElementById('pickerContainer')
        if(pickerContainer.classList.contains('hidden')){
            pickerContainer.classList.remove("hidden");
        }else{
            pickerContainer.classList.add("hidden");
        }
    }

    const handleColorFont = (e) => {
        const pickerContainer = document.getElementById('pickerContainer')
        let fontColor = e.target.id
        setBTNColor(fontColor)
        handleColor(fontColor)
        pickerContainer.classList.add("hidden");
    }

    return(
        <aside className="footer">
            <section className="footer_container">
                <div className="select_color ">
                    <button className="btn_colorPicker" onClick={pickColor} style={{backgroundColor : btnColor}}></button>
                    <aside className="colorPicker hidden" id="pickerContainer">
                        <div className="option_color" id="#FCDE67" onClick={handleColorFont}></div>
                        <div className="option_color" id="#ff4d4d" onClick={handleColorFont}></div>
                        <div className="option_color" id="#EF9273" onClick={handleColorFont}></div>
                        <div className="option_color" id="#5BCCF6" onClick={handleColorFont}></div>
                        <div className="option_color" id="#66f070" onClick={handleColorFont}></div>
                    </aside>
                </div>
                <div className="screen_mode">
                    <label className="switch">
                        <input type="checkbox" onClick={handleCheck}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </section>
        </aside>
    )
}