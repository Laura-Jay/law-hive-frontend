import { PostInterface } from "../Interfaces";

function Post(props: PostInterface): JSX.Element {

  let feePercentageString;
  if (props.feePercentage){
    feePercentageString = (props.feePercentage * 100) 
    feePercentageString = feePercentageString.toString() + "%";
  }

 
  return (
    <>
      <div className="post--container">
        <h1>{props.title}</h1>
        <p>Description: {props.description}</p>
        {props.feeStructure === "fixedFee" ? 
        <div>
          <p>Fee Structure: Fixed Fee</p>
          <p>Fee Amount: {props.feeAmount}</p>
        </div>
         : 
         <div>
          <p>Fee Structure: No Win No Fee</p>
          <p>Fee Percentage: {feePercentageString}</p>
        </div>
        }

        <p>State: {props.state}</p>
      </div>
    </>
  );
}

export default Post;
