import React, { useState } from "react";


const Calculator: React.FunctionComponent = () => {
    // State variables for input values
    let [speed, setSpeed] = useState("");
    let [distance, setDistance] = useState("");

    // State variables for submitted values (after pressing enter)
    const [submittedSpeed, setSubmittedSpeed] = useState<number>();
    const [submittedDistance, setSubmittedDistance] = useState<number>();

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Set submitted values
        setSubmittedSpeed(speed ? parseInt(speed) : undefined);
        setSubmittedDistance(distance ? parseInt(distance) : undefined);

        // Clear input fields after pressing Enter
        setDistance("");
        setSpeed("");
    };

    // Calcuate ETA
    const ETA = submittedDistance && submittedSpeed ? submittedDistance/submittedSpeed : undefined;
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="speed">Speed: </label>
                    <input 
                        type="number" 
                        id="speed" 
                        value={speed} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSpeed(event.target.value)}
                        placeholder="Enter Speed in MPH...">
                    </input>
                </div>
                <div>
                    <label htmlFor="distance">Distance: </label>
                    <input 
                        type="number" 
                        id="distance" 
                        value={distance} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setDistance(event.target.value)}
                        placeholder="Enter Distance in Miles...">
                    </input>
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* If speed and distance are not undefined display results */}
            {submittedSpeed && submittedDistance !== undefined && (
                <div>
                    <p id="displayResults">Your ETA is {ETA} minutes!</p>
                </div>
            )}
        </>
    );
}

export default Calculator;