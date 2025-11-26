function App() {
  function logMouseLeave() {
    console.log('on mouse out');
  }

  const buttonEl = (
    <button
      onClick={() => alert('KLIK')}
      onMouseEnter={() => console.log('on mouse enter')}
      onMouseOut={logMouseLeave}
    >
      Pokaż spoiler
    </button>
  );

  // document.querySelector('button').addEventListener('click', () => {
  //   alert('KLIK');
  // });

  return (
    <>
      <h1>gwiezdne wojny V</h1>
      <h2>Data produkcji: 1988</h2>
      <h2>Fabuła</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, fuga?
      </p>
      {buttonEl}
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  );
}

export default App;
