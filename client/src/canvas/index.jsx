import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt.jsx";
import CameraRig from "./CameraRig.jsx";
import Backdrop from "./Backdrop.jsx";

const CanvasModel = () => (
    <Canvas>
        <ambientLight intensity={0.5}/>
        <Environment preset="city" />
        <CameraRig>
        {/*    <Backdrop />*/}
        <Center>
            <Shirt />
        </Center>
        </CameraRig>
    </Canvas>
);

export default CanvasModel;