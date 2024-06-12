import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TurnPhonePage from "../pages/TurnPhonePage";
import SignInPage from "../pages/SignInPage";
import LoadingPlayersPage from "../pages/LoadingPlayersPage";
import WaitPage from "../pages/WaitPage";
import OptionPage from "../pages/OptionPage";
import ResultPage from "../pages/ResultPage";
import StatsPage from "../pages/StatsPage";
import MapPage from "../pages/MapPage";
import FeedbackPage from "../pages/FeedbackPage";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="turnPhone" element={<TurnPhonePage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="waiting-room" element={<LoadingPlayersPage />} />
          <Route path="wait" element={<WaitPage />} />
          <Route path="option" element={<OptionPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;
