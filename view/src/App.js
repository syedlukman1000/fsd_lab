
import './App.css';
import React from 'react'
import Axios from 'axios'

function App() {
  const nameref = React.useRef()
  const techref = React.useRef()
  const subref = React.useRef()


  const submit = (e) => {
    e.preventDefault()

    Axios.post('http://localhost:3001/aliens/add', {
      name: nameref.current.value,
      tech: techref.current.value,
      sub: subref.current.value
    })
      .then(() => {
        console.log("doneeeeeeeeeeeeeee")
      })

  }

  return (
    <div className="App">

      <form onSubmit={submit}>

        <input
          type="text"
          placeholder="name"
          ref={nameref}
        />
        <input
          type="text"
          placeholder="tech"
          ref={techref}
        />
        <input
          type="text"
          placeholder="sub"
          ref={subref}
        />
        <button type="submit">increase</button>
      </form>

    </div>
  );
}

export default App;
