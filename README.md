## Law App FrontEnd 

Run yarn to install dependencies

Story 1 Tasks: 

- Create Interfaces: y
- Create Post Component: y
- Fetch posts from api: y
- Map fetched posts to Post componenet in PostList Component: y
- create PostForm: y
- test locally: y 
- lint and prettier checks: y
- push to development: y
- test remote: y


Story 2 Tasks: 

- Alter interfaces: y
- Add Fee-Structure to form: y 
- Add Fee Percentage and Fee Amount to Form, conditionally render: y 
- Convert percentage to decimal prior to submission to database: y
- Reflect changes in Post.tsx: y
- Test locally: y 

Story 3 Tasks: 

- Create Payment Form Contained within Post.tsx: y
- Mark as Paid Button: y
- OnClick Button should conditionally render form through use of toggleForm useState: y
- Cancel Button should close form and empty all form fields, conditionally render buttons toggleButtons: y
- OnSubmit update state to Paid: y
- add amountPaid and settlementAmount to PostInterface and FetchPostInterface as optional paramenters: y
- Jest Test for amountPaid: y
- trigger re-render on submission: n 
- test passing locally: n 

Added CSS: 
Additional time: 50mins

Trade Offs: 

- At the point of story 3 if I had more time I would refactor my code to implement useReducer to clean up all the useStates
- If this were a longer project I would use multiple database tables, keeping job information and payment information seperately to observe atomic data practices. 
- I would prefer not to enter 0 values into the database, ideally these would be entered as null values or be entered into seperate tables for NWNF and fixed fee. 
- From a design perspective I would use radio buttons rather than a select option. However I find in short time frames implementing radio buttons can lead to additional code to resolve potential bugs caused by adding checked attributes the OnChange functions combined with the conditional rendering of other inputs on the form. I would be comfortable implementing them with some additonal time. 
- I should have implemented the auto-refresh via passing down props earlier in the development of the app as it became more complex to try and retro-fit it later. It currently only works when a post is created but not when a post payment is updated. 
- In hindsight I could have made the typing much simpler by handling type conversion in the backend and converting empty string values to null before they entered the database. 
- It would have been a more functional approach to create a seperate componenet for my paymentform. 

Issues: 

- Could not get form submission for the update of payment to work as expected. If I remove the section of code which refreshes the form inputs then the form will submit correctly, but only after pressing submit several times. I have decided to submit the test as is although I understand story 3 is not complete and there is no UX design present. I initially thought I would be able to get to story 4 and implement a basic UX design within a time of 4 hours. Not including breaks I have taken to complete personal tasks it has taken roughly 4-5 hours to get to this point.
- I made the mistake of having this be the first project I built after setting up a new development environment in a virtual machine on my laptop and wasted time in the early setup stage of the project resolving issues with the development environment.


