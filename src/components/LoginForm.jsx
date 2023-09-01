const LoginForm = ({ handleSubmit, handleUsernameChange, username }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input value={username} onChange={handleUsernameChange} />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
