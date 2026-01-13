ABB QA Assignment Solution
Candidate: Rodrigo Godoy
Date: January 2026

1. Task 1: Refinement Meeting (US-19667)

The current Acceptance Criteria is functional but needs more clarity to be properly tested. I would ask the following questions to the Product Owner:

•	Search Scope: Besides Title and Author, shouldn't Publisher also be included in the search?
•	Minimum Characters: Does the filter work with just one character, or do I need to type more to see results?
•	Case Sensitivity: Does it differentiate between Uppercase and Lowercase?
•	Whitespace: Does it care about spaces at the beginning, middle, or end of the word?
•	Special Characters: How does it handle special characters like '?
•	Spelling Errors: Does it have any logic to find matches even if there are typos or spelling mistakes?


2. Task 2: Test Cases (Search Functionality)

List of scenarios to validate User Story 19667.

<US-19667> | TC01: Validate successful list filtering when entering the exact title of an existing book
<US-19667> | TC02: Validate successful list filtering when entering the exact name of an existing author
<US-19667> | TC03: Validate successful list filtering when entering a partial book title
<US-19667> | TC04: Validate successful list filtering when entering a partial author name
<US-19667> | TC05: Validate successful list filtering ignoring Case Sensitivity when searching with uppercase characters
<US-19667> | TC06: Validate successful list filtering ignoring Case Sensitivity when searching with lowercase characters
<US-19667> | TC07: Validate "No rows found" message appears when entering special characters
<US-19667> | TC08: Validate "No rows found" message appears when entering a non-existent name
<US-19667> | TC09: Validate full book list restoration when clearing the search input field
<US-19667> | TC10: Validate successful list filtering ignoring accidental leading spaces in the search term
<US-19667> | TC11: Validate successful list filtering ignoring accidental trailing spaces in the search term
