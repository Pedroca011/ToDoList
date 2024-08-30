import { TfiTrash } from "react-icons/tfi";

// eslint-disable-next-line react/prop-types
const Task = ({ task, isCompleted, onToggle, onDelete }) => {
  return (
    <div
      className={`bg-Gray500 rounded-lg border-Gray400 border-2 p-4 my-1 ${
        isCompleted ? "bg-Gray400 text-Gray300 line-through" : ""
      }`}
    >
      <form className="flex flex-row items-center text-Gray100">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          className="bg-transparent border-Blue border-2 rounded-xl focus:bg-Purple"
        />
          <p className="flex-1 mx-2">{task}</p>
        <TfiTrash
          size={20}
          className="text-Gray300 cursor-pointer float-right"
          onClick={onDelete}
        />
      </form>
    </div>
  );
};

export default Task;
