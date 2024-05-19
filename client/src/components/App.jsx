import "../style.css";

const App = () => {
  return (
    <div className="container">
      <h1 id="">Registeration</h1>
      <div className="main">
      <form action="" id="reg-form">
        <div className="form-grp">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-grp">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-grp">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="reg-button">
        <button type="submit">Sign up</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default App;
