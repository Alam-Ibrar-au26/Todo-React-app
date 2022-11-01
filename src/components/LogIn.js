const Login = () => {
  return (
    <div className="login-div">
      <form className="login-form">
        <label>
          Email:
          <input type="text" placeholder="Enter Email" name="email" />
        </label>
        <label>
          Password:
          <input type="text" placeholder="Enter Password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
