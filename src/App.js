import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Game from './components/Game';


function App() {
  const [type, setType] = useState('standard');
  const [score, setScore] = useState(localStorage.getItem('rps_score')?parseInt(localStorage.getItem('rps_score')):0);
  const [modalVisible, setModalVisible] = useState(false);
  const [reset, setReset] = useState(false);

  const handleResult = (result) => {
    switch (result) {
      case 'win':
        setScore(prev => {
          localStorage.setItem('rps_score', prev + 1);
          return prev + 1;
        });
        break;
      case 'lose':
        setScore(prev => {
          localStorage.setItem('rps_score', prev - 1);
          return prev - 1;
        });
        break;
    }
  }

  const handleGameChange = (game) => {
    type != game && setType(game);
  }

  const handleReset = () => {
    setScore(0);
    setReset(true);
    setType('standard');
    localStorage.setItem('rps_score', 0);
  }


  return (
    <div className="px-7 sm:px-9">
      <div className="w-full h-screen flex flex-col justify-between mx-auto max-w-700 py-7 sm:py-9">
        <Header type={type} score={score} />
        <Game type={type} reset={reset} onResult={handleResult} />
        <Footer type={type} onGameChange={handleGameChange} onReset={handleReset} onShowRules={()=>setModalVisible(true)} />
        <Modal visible={modalVisible} onClose={()=>setModalVisible(false)} title="Rules">
          <img className="block w-full h-auto"
            src={type == 'standard' ? './images/image-rules.svg' : './images/image-rules-bonus.svg'}
            alt={`Rules for Rock, Paper, Scissors${type != 'standard' && ', Lizard Spock'}`}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
