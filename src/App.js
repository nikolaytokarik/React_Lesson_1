import "./app.css"


export function App(props) {
  return (
    <div className="app">
      <header className="App-header">hello</header>
      {props.children}
    </div>
  );

}

export function Message(props) {
  return (
    <p className="message">
      {props.someText.message}
    </p>
  );
}




