import Header from '.././header/Header.js'
import Content from '.././content/Content.js'
import Footer from '.././footer/Footer.js'
import './App.css';

const App = () => {
  document.hideWeatherWidget();  

  return (
    <div className="App">      
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
