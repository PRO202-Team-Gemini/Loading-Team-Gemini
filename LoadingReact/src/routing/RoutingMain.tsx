import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "../shared/MainNavigation";
import {
  LandingPage,
  SignInPage,
  LoadingPlayersPage,
  WaitPage,
  OptionPage,
  ResultPage,
  StatsPage,
  MapPage,
  FeedbackPage,
  TurnPhonePage,
} from "../pages";
import React from "react";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header>
        <MainNavigation></MainNavigation>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="turnPhone" element={<TurnPhonePage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="loadingPlayers" element={<LoadingPlayersPage />} />
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
