import './css/App.css';
import './css/carrousel.css';
import './css/table.css';
import Slider from './components/slider';
import { sliderData } from './components/sliderData';
import ProjectTable from './components/projectTable';
import ContactForm from './components/contactForm';

function App() {
  return (
    <div className="App">
      <Slider
          slides={sliderData}
        />
      <br></br>
      <ProjectTable/>
      <br></br>
      <ContactForm/>
    </div>
  );
}

export default App;
