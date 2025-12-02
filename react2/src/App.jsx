import { useState } from 'react';

const initialState = {
  isSpoilerShown: false,
  isWarningShown: true,
  numberOfLikes: 50,
};

function App() {
  const [state, setState] = useState(initialState);

  function handleShowSpoilerClick() {
    setState((prevState) => ({
      ...prevState,
      isWarningShown: false,
      isSpoilerShown,
    }));
  }

  function handleCloseWarningClick() {
    setState((prevState) => ({ ...prevState, isWarningShown: false }));
  }

  function handleLikeButtonClick() {
    setState((prevState) => ({
      ...prevState,
      numberOfLikes: prevState.numberOfLikes + 1,
    }));
  }

  function handleLoveButtonClick() {
    setState((prevState) => ({
      ...prevState,
      numberOfLikes: prevState.numberOfLikes + 3,
    }));
  }

  console.log('App render');
  return (
    <>
      <h1>gwiezdne wojny V</h1>
      <h2>Data produkcji: 1988</h2>
      <h2>Liczba polubień:{state.numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubię to!</button>
      <button onClick={handleLoveButtonClick}>Kocham to!</button>
      <h2>Fabuła</h2>
      {state.isWarningShown && (
        <p>
          Uwaga opis fabuły zawiera spoiler!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, fuga?
      </p>
      {state.isSpoilerShown ? (
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
