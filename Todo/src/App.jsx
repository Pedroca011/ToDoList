import NavBar from "./components/NavBar/NavBar";
import { CgAdd } from "react-icons/cg";
import ClipBoard from "./assets/ClipBoard.svg";
import Task from "./components/Task/Task";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTasks([...tasks, { text: newTask, isCompleted: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const totalTasksCount = tasks.length;

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className="flex flex-row justify-center -mt-8">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-Gray500 text-Gray100 border-black border-2 rounded-lg py-4 pl-3 w-64 md:w-72 lg:w-96"
          required
        />
        <button
          type="submit"
          className="bg-BlueDark text-white font-bold flex flex-row items-center mx-2 p-4 rounded-lg"
        >
          Criar
          <CgAdd size={30} className="p-1" />
        </button>
      </form>
      <div className="flex flex-col mx-2 my-16 md:mx-16 lg:mx-48 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-Blue font-bold mx-1">Tarefas criadas</p>
            <div className="bg-Gray400 px-3 rounded-full">
              <p className="text-white">{totalTasksCount}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="text-Purple mx-1 font-bold">Concluídas</p>
            <div className="bg-Gray400 px-3 rounded-full">
              <p className="text-white">
                {completedTasksCount} de {totalTasksCount}
              </p>
            </div>
          </div>
        </div>
        <div className="text-Gray300 flex flex-col py-8 px-6 rounded-xl border-t-2 border-t-Gray400 mt-6">
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center py-4 px-6 mt-6">
              <img src={ClipBoard} alt="ClipBoard" draggable="false" />
              <p className="mt-6 text-sm md:text-xl">
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            tasks.map((task, index) => (
              <Task
                key={index}
                task={task.text}
                isCompleted={task.isCompleted}
                onToggle={() => toggleTaskCompletion(index)}
                onDelete={() => removeTask(index)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
