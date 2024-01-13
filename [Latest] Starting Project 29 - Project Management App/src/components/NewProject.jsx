import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ saveClicked, cancelClicked }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredName = nameRef.current.value;
    const enteredDescrition = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredName.trim() === "" ||
      enteredDescrition.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    saveClicked({
      name: enteredName,
      description: enteredDescrition,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for all the input fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={cancelClicked}
            >
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
    </>
  );
}
