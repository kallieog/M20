import React, {useState} from"react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage)
  return (
    <main style={{border: "1px solid black"}}>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </main>
  );
}

export default App;
