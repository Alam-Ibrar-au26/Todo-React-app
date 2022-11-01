

const Register = () => {
  return (
    <div className="div">
      <form className="signup-form">
        <label>
          Full Name:
          <input type="text" placeholder="Enter Fullname" name="name" />
        </label>
        <label>
          Email:
          <input type="text" placeholder="Enter Email" name="email" />
        </label>
        <label>
          Password:
          <input type="text" placeholder="Enter Password" name="password" />
        </label>
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default Register;
