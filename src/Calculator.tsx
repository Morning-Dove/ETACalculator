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

    // Calculate ETA in hours
    const ETA = submittedDistance && submittedSpeed ? (submittedDistance / submittedSpeed).toFixed(2) : undefined;
    // Convert ETA to minutes, or set to undefined if ETA is undefined
    const minutesETA: number | undefined = ETA ? parseFloat(ETA) * 60 : undefined;
    
    /**
     * Formats the ETA in hours and minutes if over 60 minutes, otherwise just minutes.
     * @param {number | undefined} minutesETA - The ETA in minutes.
     * @returns {string} - The formatted ETA.
    */
    function formatETA(minutesETA: number | undefined): string {
        // Check if minutesETA is undefined
        if (minutesETA === undefined) {
            return 'Invalid ETA';
        }
        
        // Calculate hours and remaining minutes
        const hours = Math.floor(minutesETA / 60);
        const minutes = minutesETA % 60;

        // Format the ETA in hours and minutes if hours is greater than 0
        if (hours > 0) {
            // If hours and/or minutes are not equal to one then add an s to the end
            return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }

        // Return the ETA in minutes if hours is 0 --- If minutes is not equal to 1 then add an s the the end
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="speed">Speed: </label>

                    {/* input field for speed in miles per hour */}
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

                    {/* input field for distance in miles */}
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
                    <p id="displayResults">Your ETA is {formatETA(minutesETA)}!</p>
                </div>
            )}
        </>
    );
}

export default Calculator;