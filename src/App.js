
import './App.css';
import './Personalinfo.css';
import Personalinfo from './Personalinfo';
import Objective from './Objective/Objective';
import Education from './Education/Education';
import Exprience from './Exprience/Exprience';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <header>
         <h3>My Resume</h3>
        </header>
       
       <Personalinfo name="lieyla Bahta" contacts="214-345-6789" address="2345 richards dallas Tx"/>
       <Objective Objective1="Learning FullStack" Objective2="Landing First-Job" Objective3="Having a Solid Career"/>
       <Education education1="nepvill University" education2="skillspire" education3="southeast collage"/>
<Exprience exprience1="worked in software industry" exprience2="worked as an Engineerr" exprience3="worked as an instructor"/>
<AboutMe about1="love going on long road trips" about2="love Animals" about3="Out Going"/>
    </div>
  );
}

export default App;
