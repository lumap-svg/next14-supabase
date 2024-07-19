import { createSmoty } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";

const CreateForm = () => {
  return (
    <form
      action={createSmoty}
      className="flex flex-col gap-4 w-[300px] bg-[#D3D3D3]  rounded-sm  p-2 px-5 py-5"
    >
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" className="rounded h-10 px-2" />
      <label htmlFor="method">Method:</label>
      <textarea
        name="method"
        id="textarea"
        className=" border-2 rounded px-2"
      ></textarea>
      <label htmlFor="Rating">Rating:</label>
      <input type="number" name="rating" className="rounded h-10 px-7" />
      <SubmitButton label="Create" loading="creating ..." />
    </form>
  );
};

export default CreateForm;
