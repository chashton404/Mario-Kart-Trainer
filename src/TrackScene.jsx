import { PlayerController } from "./PlayerController";
import {Track} from './models/Mario-circuit-test';
export const TrackScene = () => {
  return (
    <>
      <PlayerController />
      <Track />

      {/* <Grid position={[0, -1.99, 0]} infiniteGrid/> */}
    </>
  );
};
