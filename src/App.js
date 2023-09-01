import { useState, useRef } from "react";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, newNotes] = useState([]);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const noteFormRef = useRef();
  const loginFormRef = useRef();

  const addNote = (e) => {
    e.preventDefault();
    noteFormRef.current.toggleVisibility();
    newNotes(notes.concat(newNote));
    setNewNote("");
  };

  // Handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    loginFormRef.current.toggleVisibility();
    setUser(username);
  };

  const loginForm = () => {
    return (
      <Togglable buttonLabel="Click to login" ref={loginFormRef}>
        <LoginForm
          username={username}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handleSubmit={handleLogin}
        />
      </Togglable>
    );
  };

  const noteForm = () => {
    return (
      <Togglable buttonLabel="Add note" ref={noteFormRef}>
        <NoteForm
          newNote={newNote}
          addNote={addNote}
          handleChange={({ target }) => setNewNote(target.value)}
        />
      </Togglable>
    );
  };

  return (
    <div>
      <h1>Notes</h1>
      {user ? noteForm() : loginForm()}

      {/* {!user && loginForm()}
      {user && noteForm()} */}

      <hr />
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </div>
  );
};

export default App;
