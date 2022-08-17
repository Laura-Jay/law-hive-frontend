import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { CreatePostInterface } from "../Interfaces";

export function PostForm(): JSX.Element {
  const [formData, setFormData] = useState<CreatePostInterface>({
    title: "",
    description: "",
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios.post(baseUrl + "/posts", formData);
    setFormData({
      title: "",
      description: "",
      state: "Started",
    });
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
          <br />

          <label>
            Description:
            <input
              className="form--textarea"
              type="text"
              name="description"
              value={formData.description}
              placeholder="Enter a description to help clients understand the service you are providing"
              required
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <br />

          <input className="form--submit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default PostForm;
