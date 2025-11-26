import { useState } from 'react';

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    setIsWarningShown(false);
  }

  function handleCloseWarningClick() {
    setIsWarningShown(false);
  }

  console.log('App render');
  return (
    <>
      <h1>gwiezdne wojny V</h1>
      <h2>Data produkcji: 1988</h2>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga opis fabuły zawiera spoiler!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, fuga?
      </p>
      {isSpoilerShown ? (
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
