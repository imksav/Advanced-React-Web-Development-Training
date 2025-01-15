import { useState } from "react";

function BasicForm() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    agreedToTerms: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
    // setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // form validation.................................
    if (formdata.username.length < 6 || formdata.username.length > 16) {
      errors.username = "Username lenght must be between 6 and 16 characters";
    }
    if (!formdata.email.includes("@")) {
      errors.email = "Invalid email format";
    }
    if (
      formdata.password.length < 8 ||
      formdata.password.length > 16 ||
      !/[0-9]/.test(formdata.password) ||
      !/[a-zA-Z]/.test(formdata.password)
    ) {
      errors.password =
        "Password must be 8-16 characters long and include both letters and numbers.";
    }
    if (formdata.password !== formdata.confirmpassword) {
      errors.confirmpassword = "Password do not match";
    }
    if (!formdata.agreedToTerms) {
      errors.agreedToTerms = "You must agree to the terms and conditions.";
    }
    if (Object.keys(errors).length === 0) {
      console.log("Registration Data: ", formdata);
      localStorage.setItem("userData", JSON.stringify(formdata));
      setFormdata({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        agreedToTerms: false,
      });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };
  return (
    <>
      <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formdata.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div style={{ color: "red", fontSize: "0.8em" }}>
                {errors.username}
              </div>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div style={{ color: "red", fontSize: "0.8em" }}>
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div style={{ color: "red", fontSize: "0.8em" }}>
                {errors.password}
              </div>
            )}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={formdata.confirmpassword}
              onChange={handleChange}
            />
            {errors.confirmpassword && (
              <div style={{ color: "red", fontSize: "0.8em" }}>
                {errors.confirmpassword}
              </div>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formdata.agreedToTerms}
                onChange={handleChange}
              />
              Agree to the terms and conditions
            </label>
            {errors.agreedToTerms && (
              <div style={{ color: "red", fontSize: "0.8em" }}>
                {errors.agreedToTerms}
              </div>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default BasicForm;
