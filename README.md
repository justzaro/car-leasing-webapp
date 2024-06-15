# Car Leasing Calculator

A user-friendly car leasing calculator to help potential customers estimate their monthly leasing costs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
  - [UI Design](#ui-design)
  - [Dynamic Functionality](#dynamic-functionality)

## Features

- **Responsive Design:** The UI adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.
- **Dynamic Calculations:** Monthly installments, total leasing costs, down payments, and interest rates are calculated in real-time as users adjust inputs.
- **User Inputs:** Users can input car type (brand new or used), car value, lease period, and down payment percentage.

## Technologies Used

- **HTML:**
- **CSS:**
- **JavaScript:**

## Approach

### UI Design

1. **HTML Structure:** The form is divided into two main columns:
    - **Left Column:** Car type and car value inputs.
    - **Right Column:** Lease period and down payment inputs.
2. **Responsive Layout:** CSS media queries are used to adjust the layout for smaller screens, stacking inputs vertically when the screen width is reduced.

### Dynamic Functionality

1. **JavaScript Logic:**
    - Event listeners capture user input changes.
    - Calculations for total leasing cost, monthly installment, down payment amount, and interest rate are performed in real-time.
    - Results are updated dynamically in the UI without requiring a submit button.

2. **Input Synchronization:**
    - Range inputs for car value and down payment percentage are synchronized with their respective number inputs.
    - Lease period is selected from a dropdown menu.
