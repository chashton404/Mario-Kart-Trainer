import { KeyboardControls, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { TrackScene } from "./TrackScene";
import { Lighting } from "./misc/Lighting";
import { Composer } from "./Composer";
import { useThree } from "@react-three/fiber";
import { Leva } from "leva";
import { useGameStore } from "./store";

export const App = () => {
  const controls = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
  ];

  const noiseTexture = useTexture("./textures/noise.png");

  const setNoiseTexture = useGameStore((state) => state.setNoiseTexture);
  const { camera } = useThree();

  useEffect(() => {
    if (camera) {
      camera.layers.enable(1);
      if (noiseTexture) {
        setNoiseTexture(noiseTexture);
      }
    }
  }, [camera, noiseTexture, setNoiseTexture]);

  return (
    <>
      <KeyboardControls map={controls}>
        <TrackScene />

        <Lighting />
      </KeyboardControls>

      <Composer />
      <Leva
        fill // default = false,  true makes the pane fill the parent dom node it's rendered in
        flat // default = false,  true removes border radius and shadow
        oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
        hideTitleBar // default = false, hides the GUI header
        collapsed // default = false, when true the GUI is collpased
        hidden // def
      />
    </>
  );
};
