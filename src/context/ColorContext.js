import { createContext, useState } from "react";

const ColorContext = createContext();
const initialColor = '#5BCCF6';

const ColorProvider = ({children}) => {
    const [color,setColor] = useState(initialColor);

    const handleColor = (value) => {
        console.log(value)
        setColor(value)
    };

    const data = {color,handleColor};

    return <ColorContext.Provider value={data}>{children}</ColorContext.Provider> 
}

export {ColorProvider};
export default ColorContext;
