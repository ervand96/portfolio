import { useState } from 'react';
import Header from "./components/shared/header-section";
import Main from "./components/shared/main/main";
import Loader from "./components/shared/loader";

import "./App.css";

function App() {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <div>
      <Header />
      <Main />
      <Loader isLoader={isLoader} setIsLoader={setIsLoader}/> 
    </div>
  );
}

export default App;
