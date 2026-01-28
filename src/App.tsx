import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Marginals/Navigation";
import Footer from "./components/Marginals/Footer";
import Home from "./Home";


function App(){
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation/>

      <main style={{flex: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;