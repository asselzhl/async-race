import ControlPanel from '../components/ControlPanel/ControlPanel';
import Track from '../components/Track/Track';
import GarageStatus from '../components/GarageStatus/GarageStatus';

function Garage() {
  return (
    <>
      <ControlPanel />
      <Track />
      <GarageStatus />
    </>
  );
}

export default Garage;
