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
- Jest Test for amountPaid: 
- trigger re-render on submission:
- test locally: 



Trade Offs: 

- At the point of story 3 if I had more time I would refactor my code to implement useReducer to clean up all the useStates
- If this were a longer project I would use multiple database tables, keeping job information and payment information seperately to observe atomic data practices. 
- I would prefer not to enter 0 values into the database, ideally these would be entered as null values or be entered into seperate tables for NWNF and fixed fee. 
- From a design perspective I would use radio buttons rather than a select option. However I find in short time frames implementing radio buttons can lead to additional code to resolve potential bugs caused by adding checked attributes the OnChange functions combined with the conditional rendering of other inputs on the form. I would be comfortable implementing them with some additonal time. 

