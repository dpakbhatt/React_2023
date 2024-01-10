import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ saveClicked }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredName = nameRef.current.value;
    const enteredDescrition = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    saveClicked({
      name: enteredName,
      description: enteredDescrition,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Name" type="text" isTextArea={false} ref={nameRef} />
        <Input label="Description" isTextArea={true} ref={descriptionRef} />
        <Input
          label="Due Date"
          type="date"
          isTextArea={false}
          ref={dueDateRef}
        />
      </div>
    </div>
  );
}
