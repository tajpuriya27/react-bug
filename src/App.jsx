import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const loginForm = () => {
    return (
      <Togglable buttonLabel="Show Login Form">
        <LoginForm
          username={username}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handleSubmit={(event) => {
            event.preventDefault();
            setUser(username);
          }}
        />
      </Togglable>
    );
  };

  const noteForm = () => {
    return (
      <Togglable buttonLabel="Show Note Form">
        <NoteForm />
      </Togglable>
    );
  };

  return (
    <div>
      <h1>Notes</h1>

      {user === null ? loginForm() : noteForm()}

      {/* {!user && loginForm()}
      {user && noteForm()} */}
    </div>
  );
};

export default App;
