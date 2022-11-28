const SignIn = () => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <div className="social-container">
          <a className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a>Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
