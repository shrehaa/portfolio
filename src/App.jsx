import './App.scss';
import Navbar from './components/nav/navbar';
import About from './components/home/about';

const App = () => {
  return (
    <div>
    <section>  <Navbar/> </section>
     <section> <About/> </section>
     <section style={{height:"100vh", background:"blue"}}>Skills</section>
     
     <section style={{height:"100vh", background:"rebeccapurple"}}>Skills</section>
     <section style={{height:"100vh", background:"yellow"}}>Skills</section>
     <section style={{height:"100vh", background:"green"}}>Skills</section>
    </div>
 )

};

export default App;
