const LoginForm = (props) => {
  const { handleSubmit, handleUsernameChange, username } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
