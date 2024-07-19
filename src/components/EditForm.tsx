"use client";
import React, { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { Smoothie } from "@/lib/definitions";
import { editForm } from "@/lib/actions";

type EditFormT = {
  result: Smoothie;
};
const EditForm = ({ result }: EditFormT) => {
  const [recipe, setRecipe] = useState({
    title: result.title,
    method: result.method,
    rating: result.rating,
  });

  const editFormWithId = editForm.bind(null, String(result.id));
  return (
    <form
      action={editFormWithId}
      className="flex flex-col gap-4 w-[500px] bg-[#D3D3D3]  rounded-sm  p-2 px-5 py-5"
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={(e) => {
          setRecipe({ ...recipe, title: e.target.value });
        }}
        className="rounded h-10 px-2"
      />
      <label htmlFor="method">Method:</label>
      <textarea
        name="method"
        id="textarea"
        onChange={(e) => {
          setRecipe({ ...recipe, method: e.target.value });
        }}
        value={recipe.method}
        className=" border-2 h-[150px] rounded px-2"
      ></textarea>
      <label htmlFor="Rating">Rating:</label>
      <input
        onChange={(e) => {
          setRecipe({ ...recipe, rating: Number(e.target.value) });
        }}
        type="number"
        name="rating"
        value={recipe.rating}
        className="rounded h-10 px-7"
      />
      <SubmitButton label="Update" loading="updating..." />
    </form>
  );
};

export default EditForm;
