import Header from './components/header/header';
import ContentField from './components/content-field';
import Slider from './components/slider';
import InfoLine from './components/infoline/infoline';
import Counter from './components/tasklist';

import style from 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./components/header/index"

function App() {
  return (
    <>
      <Header appName="WebApp"/>
      <ContentField/>
      <InfoLine/>
      <Slider/>
      <Counter/>
      {/* Компонент для тасков(добавление, удаление, чекбоксы) */}
    </>
  );
}

export default App;