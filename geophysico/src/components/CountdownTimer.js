import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Retrieve the last input from local storage
    const lastInput = localStorage.getItem("lastInput");
    if (lastInput) {
      setCount(parseInt(lastInput));
    }
  }, []);

  const startCountdown = () => {
    const inputElement = document.getElementById("countdownInput");
    const outputElement = document.getElementById("countdownOutput");
    const completionTitleElement = document.getElementById("completionTitle");

    // Get the user input
    const countValue = parseInt(inputElement.value);

    // Check if the input is a valid number and greater than zero
    if (isNaN(countValue) || countValue <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    // Save the input value in local storage
    localStorage.setItem("lastInput", countValue);

    setCount(countValue);

    // Clear previous countdown
    outputElement.innerHTML = "";
    completionTitleElement.innerHTML = "The Words of the Week!"; // Reset completion title

    // Using a Promise for the countdown
    const countdownPromise = new Promise((resolve) => {
      let currentCount = countValue;

      const interval = setInterval(() => {
        outputElement.innerHTML = "T - " + currentCount + " seconds";

        if (currentCount === 0) {
          outputElement.innerHTML = "You've run out of time!";
          clearInterval(interval);
          resolve(); // Resolve the Promise when the countdown is completed
        }

        currentCount--;
      }, 1000);
    });

    // Using the Promise
    countdownPromise.then(() => {
      console.log("Countdown Completed!"); // Log in the console when the countdown is completed

      // Display completion title after one second (adjust the delay as needed)
      setTimeout(() => {
        completionTitleElement.innerHTML =
          "It's like trying to hit snooze on life—doesn't quite work, does it?"; // Update completion title
      }, 1000);
    });
  };

  return (
    <div>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <h2>Countdown Timer</h2>
            <div className="form-inline justify-content-center">
              <label className="mr-2" htmlFor="countdownInput">
                Enter a number:
              </label>
              <input
                type="number"
                className="form-control-sm mr-2 mx-1"
                id="countdownInput"
                min="1"
                max="100"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button
                className="btn btn-dark text-center mb-1 mx-1"
                onClick={startCountdown}
              >
                Start Countdown
              </button>
            </div>
            <div className="justify-content-center" id="countdownOutput"></div>
          </div>
          <div className="col-lg-6 text-center">
            <h4 id="completionTitle">The Words of the Week!</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountdownTimer;
