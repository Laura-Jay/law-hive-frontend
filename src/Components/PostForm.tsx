import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { CreatePostInterface } from "../Interfaces";

interface PostFormProps {
  triggerReload: (arg: boolean) => void;
  reload: boolean;
}

export function PostForm(props: PostFormProps): JSX.Element {
  const [feeType, setFeeType] = useState("noWinNoFee");
  const [feeData, setFeeData] = useState("");
  const [formData, setFormData] = useState<CreatePostInterface>({
    title: "",
    description: "",
    feeStructure: "noWinNoFee",
    feePercentage: "",
    feeAmount: "",
    state: "Started",
  });

  function handleFormChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function handleFeeTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFeeType(event.target.value);
    setFeeData("");
    setFormData((previous) => {
      return { ...previous, feeStructure: event.target.value };
    });
  }

  function handleFeeAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFeeData(event.target.value);
    if (feeType === "noWinNoFee") {
      const fee = parseInt(event.target.value) / 100;
      setFormData((previous) => {
        return { ...previous, feePercentage: fee, feeAmount: 0 };
      });
    } else if (feeType === "fixedFee") {
      const fee = parseInt(event.target.value);
      setFormData((previous) => {
        return { ...previous, feeAmount: fee, feePercentage: 0 };
      });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      (formData.feeStructure && formData.feePercentage) ||
      (formData.feeStructure && formData.feeAmount)
    ) {
      console.log(formData);
      await axios.post(baseUrl + "/posts", formData);
      setFormData({
        title: "",
        description: "",
        feeStructure: "noWinNoFee",
        feePercentage: "",
        feeAmount: "",
        state: "Started",
      });
      setFeeData("");
      props.triggerReload(!props.reload);
    } else {
      alert(
        "Please ensure you have selected a fee structure and provided costing information."
      );
    }
  }

  return (
    <>
      <h2>Create A New Job Post</h2>
      <div className="form--container">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              className="form--input"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Enter a title"
              required
              onChange={(e) => handleFormChange(e)}
            />
          </label>

          <label>
            Description:
            <textarea
              className="form--textarea"
              name="description"
              value={formData.description}
              placeholder="Enter a description to help clients understand the service you are providing"
              required
              onChange={(e) => handleFormChange(e)}
            />
          </label>

          <label>
            Fee Structure:
            <select
              name="feeStructure"
              value={formData.feeStructure}
              onChange={(e) => handleFeeTypeChange(e)}
            >
              <option value="noWinNoFee">No Win No Fee</option>
              <option value="fixedFee">Fixed Fee</option>
            </select>
          </label>

          {feeType === "noWinNoFee" && (
            <div>
              <label>
                Fee Percentage (%):
                <input
                  className="form--input"
                  type="text"
                  name="feePercentage"
                  value={feeData}
                  placeholder="Example: 30%"
                  onChange={(e) => handleFeeAmountChange(e)}
                />
              </label>
            </div>
          )}
          {feeType === "fixedFee" && (
            <div>
              <label>
                Fee Amount (£):
                <input
                  className="form--input"
                  type="text"
                  name="feeAmount"
                  value={feeData}
                  placeholder="Example: 300"
                  required
                  onChange={(e) => handleFeeAmountChange(e)}
                />
              </label>
            </div>
          )}

          <input className="form--submit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default PostForm;
