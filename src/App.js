import { Route, Routes } from 'react-router-dom';
import './App.css';
import SocialMediaIcons from './components/SocialMediaIcons';
import MainBody from './components/MainBody';
import Project from './components/Project';
import About from './components/About';
import Stacks from './components/Stacks';

const App = () => {
  return (
    <div className="wrapper">
      <SocialMediaIcons/>
      <Routes>
        <Route path="/" element={ <MainBody /> }/>
        <Route path="/projetos" element={ <Project /> }/>
        <Route path="/sobre" element={ <About /> }/>
        <Route path="/linguagens&tools" element={ <Stacks /> }/>
        <Route path="/certificados" element={ <Stacks /> }/>
      </Routes>
    </div>
  );
}

export default App;
