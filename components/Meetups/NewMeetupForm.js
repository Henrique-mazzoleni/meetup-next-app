import { useRouter } from "next/router";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const router = useRouter()
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify({
        title: titleInput.current.value,
        image: imageInput.current.value,
        address: addressInput.current.value,
        description: descriptionInput.current.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    router.push('/')
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
