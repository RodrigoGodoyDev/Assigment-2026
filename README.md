# ABB QA Assignment - Automation Project

Candidate:
Rodrigo Godoy
Date:
January 2026

This repository contains the automated test suite for the Book Store Application (DemoQA). It covers Frontend (UI) and Backend (API) testing using Cypress.

Scope of Automation:
1. Login Functionality.
2. Search Functionality.
3. API Testing (GET /BookStore/v1/Books validation).

The manual Test Cases and Refinement Meeting analysis are located in the file: ABB QA ASSIGNMENT.md

Installation and Setup

1. Clone the repository:
git clone https://github.com/RodrigoGodoyDev/Assigment-2026.git

2. Enter the project directory:
cd Assigment-2026

3. Install dependencies:
npm install

4. Configuration:
The credentials are not included in the repository for security. Please refer to the provided documentation to get the valid username and password.

Create a file named cypress.env.json in the root folder with the following format:

{
  "test_user": "DOCUMENTATION_USER",
  "test_password": "DOCUMENTATION_PASSWORD"
}

5. Running the Tests:
To execute all tests in headless mode:
npx cypress run

To open the Test Runner:
npx cypress open
