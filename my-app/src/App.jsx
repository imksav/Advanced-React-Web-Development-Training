import { useState } from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function UserCard(props) {
  return (
    <>
      <div>
        <h2>User Details - Using Props</h2>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Age:</strong> {props.age}
        </p>
        <p>
          <strong>Location:</strong> {props.location}
        </p>
      </div>
    </>
  );
}
// destructuring
function MyCard({ name, age, location }) {
  return (
    <div>
      <h2>My Card Details - Destructuring</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Please Log In" : "Please Log Out"}
        </button>
      </div>
    </>
  );
}

function ClickHandle() {
  const [message, setMessage] = useState("");
  const handleClick = () => setMessage("Button  Clicked");
  return (
    <>
      <div>
        <h2>Click Event</h2>
        <button onClick={handleClick}>Click Me</button>
        <p>{message}</p>
      </div>
    </>
  );
}

function InputHandler() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="type something......."
          onChange={handleInputChange}
          // onChange={(event) => setInputValue(event.target.value)}
        />
        <p>
          <strong>You Typed: {inputValue}</strong>
        </p>
      </div>
    </>
  );
}

function FormHandler() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setSubmittedValue(inputValue);
    setInputValue(""); // Reset input field
  };

  return (
    <div>
      <h2>Form Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* If submittedValue is falsy (null, undefined, 0, false, or ""), nothing will be rendered (React skips it). */}
      {submittedValue && <p>Submitted: {submittedValue}</p>}
    </div>
  );
}

// main function
function App() {
  return (
    <>
      <center>
        <Greeting name="Keshav" />
        <Counter />
        <UserCard name="Keshav" age={25} location="London, UK" />
        <MyCard name="Keshav" age={25} location="London, UK" />
        <Toggle />
        <ClickHandle />
        <InputHandler />
        <FormHandler />
      </center>
    </>
  );
}

export default App;
