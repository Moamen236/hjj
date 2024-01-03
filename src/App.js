import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Test/Page';
import { AnimatePresence } from 'framer-motion';
import i18n from "i18next";
import { useTranslation, initReactI18next, I18nextProvider } from "react-i18next";
import ar from './lang/ar.json';
import en from './lang/en.json';
import fr from './lang/fr.json';
import DigitalInfrastructure from './components/Pages/DigitalInfrastructure';
import AccessingHousing from './components/Pages/AccessingHousing';
import DigitalServices from './components/Pages/DigitalServices';
import DevelopingSubsistence from './components/Pages/DevelopingSubsistence';
import DevelopingAccommodation from './components/Pages/DevelopingAccommodation';
import Introduction from './components/Introduction';

const saveLanguageToLocalStorage = (language) => {
  localStorage.setItem('currentLanguage', language);
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { global: en },
      ar: { global: ar },
      fr: { global: fr }
    },
    lng: localStorage.getItem('currentLanguage') || 'ar',
    fallbackLng: "ar",

    interpolation: {
      escapeValue: false
    }
  }).then(() => {
    i18n.on('languageChanged', (lang) => {
      saveLanguageToLocalStorage(lang);
    });
  });

function App() {
  const location = useLocation();
  const [t, i18n] = useTranslation("global");


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (event.currentTarget.performance.navigation.type === 1) {
        window.location.href = '/';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [window.location.href]);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="app text-white overflow-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Introduction i18n={i18n} />} />
              <Route path='/home' element={<Home t={t} />} />
              <Route path='/page' element={<Page t={t} />} />
              <Route path='/digital-infrastructure' element={<DigitalInfrastructure t={t} i18n={i18n} />} />
              <Route path='/accessing-housing' element={<AccessingHousing t={t} i18n={i18n} />} />
              <Route path='/digital-services' element={<DigitalServices t={t} i18n={i18n} />} />
              <Route path='/developing-subsistence' element={<DevelopingSubsistence t={t} i18n={i18n} />} />
              <Route path='/developing-accommodation' element={<DevelopingAccommodation t={t} i18n={i18n} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </I18nextProvider>
    </>
  );
}

export default App;
