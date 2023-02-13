import { useState, useContext } from "react";
import TimerForm from "./TimerForm.jsx";
import Timer from "./Timer.jsx";
import { TimerContext } from "../context/TimerContext";
export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { handleEditFormSubmit } = useContext(TimerContext);
  function handleFormClose() {
    closeForm();
  }

  function handleEditClick() {
    openForm();
  }

  function handleSubmit(timer) {
    handleEditFormSubmit(timer);
    closeForm();
  }

  function closeForm() {
    setEditFormOpen(false);
  }

  function openForm() {
    setEditFormOpen(true);
  }

  return (
    <div>
      {editFormOpen ? (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={handleSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onEditClick={handleEditClick}
        />
      )}
    </div>
  );
}
