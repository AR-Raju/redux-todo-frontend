import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient p-[5px] w-full h-full rounded-xl ">
        {todos.length === 0 && (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There is no task pending</p>
          </div>
        )}
        {todos.length > 0 && (
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos.map((todo) => (
              <TodoCard {...todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
