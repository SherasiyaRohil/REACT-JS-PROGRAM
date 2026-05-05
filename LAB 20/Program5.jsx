import React from "react";
import { useFormStatus } from "react-dom";


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

async function handleSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}


function Program5() {
  return (
    <form action={handleSubmit}>
      <h2>Contact Form</h2>

      <input type="email" name="email" placeholder="Enter Email"/>
      <br />

      <SubmitButton />
    </form>
  );
}

export default Program5 ;
