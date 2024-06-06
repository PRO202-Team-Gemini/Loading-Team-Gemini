import { PlayerProvider } from "../context/PlayerProvider";
import RoutingMain from "../routing/RoutingMain";
import "../shared/App.css";

function App() {
  return (
    <PlayerProvider>
      <RoutingMain />
    </PlayerProvider>
  );
}

export default App;
