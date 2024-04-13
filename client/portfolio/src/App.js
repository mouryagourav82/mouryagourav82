import './App.css';
import Thirdblock from './component_firstpage/below_navbar_3';
import Firstblock from './component_firstpage/below_navbar_1';
import Secondblock from './component_firstpage/below_navbar_2';
import Navbar from './component_firstpage/navbar';
import Forthblock from './component_firstpage/below_navbar_4';
import Footer from './component_firstpage/footer';
import Contact from './component_firstpage/Contact';
// import Card4 from './component_firstpage/card4';

function App() {
  
  return (
    <div className="App">
      <div className="nav">
      <Navbar/>
      </div>
      <div style={{height:'90vh', marginTop:'5%',background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(206,211,213,1) 0%, rgba(228,228,228,1) 88%)', justifyContent:'left', alignItems:'center' ,display:'flex'}} className="first">
      <Firstblock/>
      </div>
      <div className="second">
        <Secondblock/>
      </div>
      <div className="third">
        <Thirdblock/>
      </div>
      <div  className="forth">
        <Forthblock/>
      </div>
      <div className="fifth">
        <Contact/>
      </div>
      <div className="fifth">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
