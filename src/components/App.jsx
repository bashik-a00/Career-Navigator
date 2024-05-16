const App=()=>{
  return(
    <div className="container">
      <h1 id="">Registeration</h1>
      <form action="" id="reg-form">
        <div className="form-grp">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required/>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </form>
    </div>
  );
}

export default App;