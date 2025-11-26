import { useState } from 'react';

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);

  function handleClick() {
    setIsSpoilerShown(true);
    setIsButtonShown(false);
    console.log('handleClick');
  }

  console.log('App render');
  return (
    <>
      <h1>gwiezdne wojny V</h1>
      <h2>Data produkcji: 1988</h2>
      <h2>Fabuła</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, fuga?
      </p>
      {isButtonShown && <button onClick={handleClick}>Pokaż spoiler</button>}
      {isSpoilerShown && (
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      )}
    </>
  );
}

export default App;
