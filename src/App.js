import { Suspense, useState } from "react";
import Welcome from "./Welcome";
import Loading from "./Loading";
import "./App.css";
import  {DefaultValue}  from "./LocaleContext";
import i18n from "i18next";
import i18next from './i18n'

function App() {
  
  const [locale , setLocale] = useState(i18n.language);
  i18next.on("languageChanged",(lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value)
  }


  return (
    <div className="App">
      <DefaultValue.Provider value={{locale,setLocale}}>
          <Suspense fallback = {<Loading/>}>
            <div>
              <label>Local Change</label>
            </div>
            <select value={locale} onChange={handleChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <Welcome/>
          </Suspense>
      </DefaultValue.Provider>
    </div>
  );
}

export default App;
