import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log({
      id: Math.random(),
      title: titleInput.current.value,
      image: imageInput.current.value,
      address: addressInput.current.value,
      description: descriptionInput.current.value,
    });

    titleInput.current.value = "";
    imageInput.current.value = "";
    addressInput.current.value = "";
    descriptionInput.current.value = "";

    titleInput.current.focus();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input id="title" type="text" ref={titleInput} />
      <label htmlFor="image">Meetup Image</label>
      <input id="image" type="url" ref={imageInput} />
      <label htmlFor="address">Address</label>
      <input id="address" type="address" ref={addressInput} />
      <label htmlFor="description">Description</label>
      <textarea id="description" ref={descriptionInput} />
      <button type="submit">Add Meetup</button>
    </form>
  );
}
