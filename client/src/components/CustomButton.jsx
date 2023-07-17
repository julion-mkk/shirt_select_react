import {useSnapshot} from "valtio";
import state from "../store/index.js";


const CustomButton = ({title, type, customStyle, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type)=> {
        if(type === 'filled') {
            return {
                backgroundColor: state.color,
                color: '#fff'
            }
        }
    }
    return (
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`} style={generateStyle(type)} onClick={handleClick}>
            {title}
        </button>
    );
};

export default CustomButton;