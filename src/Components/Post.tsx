import { useState } from "react";
import { PostInterface } from "../Interfaces";

interface PaymentFormInterface {
  settlementAmount?: string | number;
  amountPaid: string | number;
  state?: string;
}

interface FeeDataInterface {
  settlementAmount?: string;
  amountPaid: string;
}

function Post(props: PostInterface): JSX.Element {
  const [toggleButton, setToggleButton] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);
  const [feeData, setFeeData] = useState<FeeDataInterface>({
    settlementAmount: "",
    amountPaid: "",
  });
  const [paymentFormData, setPaymentFormData] = useState<PaymentFormInterface>({
    amountPaid: 0,
    state: props.state,
  });

  let feePercentageString;
  if (props.feePercentage) {
    feePercentageString = props.feePercentage * 100;
    feePercentageString = feePercentageString.toString() + "%";
  }

  function handleClick() {
    if (toggleButton) {
      setToggleButton(false);
      setToggleForm(true);
    } else if (!toggleButton) {
      setFeeData({
        amountPaid: "",
        settlementAmount: "",
      });
      setToggleForm(false);
      setToggleButton(true);
    }
  }

  function handleFeeAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFeeData((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (props.feeStructure === "fixedFee") {
      setPaymentFormData({
        amountPaid: feeData.amountPaid,
        state: "Paid",
      });
    } else if (feeData.settlementAmount && props.feePercentage) {
      const fee = parseInt(feeData.settlementAmount);
      const feePaid = fee * props.feePercentage;
      setPaymentFormData({
        settlementAmount: feeData.settlementAmount,
        amountPaid: feePaid,
        state: "Paid",
      });
    }
    console.log(paymentFormData);
  }

  return (
    <>
      <div className="post--container">
        <div className="post--info">
          <h1>{props.title}</h1>
          <p>Description: {props.description}</p>
          {props.feeStructure === "fixedFee" ? (
            <div>
              <p>Fee Structure: Fixed Fee</p>
              <p>Fee Amount: £{props.feeAmount}</p>
            </div>
          ) : (
            <div>
              <p>Fee Structure: No Win No Fee</p>
              <p>Fee Percentage: {feePercentageString}</p>
            </div>
          )}

          <p>State: {props.state}</p>
        </div>

        {toggleButton ? (
          <button onClick={handleClick}>Mark as Paid</button>
        ) : (
          <button onClick={handleClick}>Cancel</button>
        )}

        {toggleForm && (
          <div className="form--container">
            <form onSubmit={handleSubmit}>
              {props.feeStructure === "noWinNoFee" ? (
                <div>
                  <label>
                    Settlement Amount (£):
                    <input
                      className="form--input"
                      type="text"
                      name="settlementAmount"
                      value={feeData.amountPaid}
                      placeholder="Example: 300"
                      onChange={(e) => handleFeeAmountChange(e)}
                    />
                  </label>
                  <br />
                </div>
              ) : (
                <div>
                  <label>
                    Amount Paid (£):
                    <input
                      className="form--input"
                      type="text"
                      name="settlementAmount"
                      value={feeData.settlementAmount}
                      placeholder="Example: 300"
                      onChange={(e) => handleFeeAmountChange(e)}
                    />
                  </label>
                  <br />
                </div>
              )}
              <input className="form--submit" type="submit" value="Submit" />
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Post;
