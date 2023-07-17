import { motion, AnimatePresence} from "framer-motion";
import { useSnapshot } from "valtio";
import config from '../config/config.js';
import state from "../store/index.js";
import { download } from '../assets'
import { downloadCanvasToImage, reader } from "../config/helpers.js";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants.js";
import { fadeAnimation, slideAnimation } from "../config/motion.js";
import tab from "../components/Tab.jsx";
import Tab from "../components/Tab.jsx";
import {CustomButton} from "../components/index.js";

const Customizer = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {!state.intro && (
                <>
                    <motion.div key="custom" className="absolute top-0 left-0 z-100" {...slideAnimation('left')}>
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab)=> (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={()=>{}}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
                        <CustomButton
                            title="Back"
                            type="filled"
                            handleClick={()=> state.intro = true}
                            customStyle="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                    <motion.div className="filtertabs-container" {...slideAnimation('up')}>
                        {FilterTabs.map((tab)=> (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                ifFilterTab
                                isActiveTab=""
                                handleClick={()=>{}}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Customizer;