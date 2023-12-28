import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page from './components/Page';
import { AnimatePresence } from 'framer-motion';
import i18n from "i18next";
import { useTranslation, initReactI18next, I18nextProvider } from "react-i18next";
import ar from './lang/ar.json';
import en from './lang/en.json';
import fr from './lang/fr.json';
import DigitalInfrastructure from './components/DigitalInfrastructure';
import AccessingHousing from './components/AccessingHousing';
import DigitalServices from './components/DigitalServices';
import DevelopingSubsistence from './components/DevelopingSubsistence';
import DevelopingAccommodation from './components/DevelopingAccommodation';
import ParticlesBackground from './components/ParticlesBackground';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { global: en },
      ar: { global: ar },
      fr: { global: fr }
    },
    lng: "ar",
    fallbackLng: "ar",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const location = useLocation();
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <ParticlesBackground />
      <I18nextProvider i18n={i18n}>
        <div className="app w-full text-white pt-8">
          <Navbar t={t} i18n={i18n} />
          {/* initial={false} */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home t={t} />} />
              <Route path='/page' element={<Page t={t} />} />
              <Route path='/digital-infrastructure' element={<DigitalInfrastructure t={t} />} />
              <Route path='/accessing-housing' element={<AccessingHousing t={t} />} />
              <Route path='/digital-services' element={<DigitalServices t={t} />} />
              <Route path='/developing-subsistence' element={<DevelopingSubsistence t={t} />} />
              <Route path='/developing-accommodation' element={<DevelopingAccommodation t={t} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </I18nextProvider>
    </>
  );
}

export default App;
