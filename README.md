# ETA Calculator

This is a simple React-based ETA (Estimated Time of Arrival) calculator. It allows users to input their speed (in miles per hour) and distance (in miles), and then calculates and displays the ETA in hours and minutes.

To view this app on GitHub Pages please click the link below:

https://morning-dove.github.io/ETACalculator/

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Functions](#functions)


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Morning-Dove/ETACalculator.git
    cd eta-calculator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

To use the ETA calculator:

1. Enter your speed in miles per hour (MPH) in the "Speed" input field.
2. Enter the distance in miles in the "Distance" input field.
3. Press the "Submit" button.
4. The calculated ETA will be displayed below the form in hours and minutes.

## Components

### `Calculator`

This is the main component that contains the form for inputting speed and distance, and displays the calculated ETA.

#### State Variables
- `speed`: Holds the value of the speed input.
- `distance`: Holds the value of the distance input.
- `submittedSpeed`: Holds the submitted value of speed after form submission.
- `submittedDistance`: Holds the submitted value of distance after form submission.

#### Form Submission
The form submission is handled by `handleSubmit`, which prevents the default form submission behavior, sets the submitted values, and clears the input fields.

### Functions

#### `formatETA`

This function takes `minutesETA` as a parameter and formats it into a string displaying hours and minutes if `minutesETA` is over 60 minutes. If `minutesETA` is `undefined`, it returns 'Invalid ETA'.

```typescript
function formatETA(minutesETA: number | undefined): string {
    if (minutesETA === undefined) {
        return 'Invalid ETA';
    }

    const hours = Math.floor(minutesETA / 60);
    const minutes = minutesETA % 60;

    if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }

    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
}