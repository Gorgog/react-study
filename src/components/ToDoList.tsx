import ToDoItem from "./ToDoItem.tsx";
import type {Task} from "../page/ToDoPage.tsx";

interface Props {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
}

const ToDoList = ({tasks, onDeleteTask, toggleTask}: Props) => {
    const hasTask = tasks.length > 0;

    if (!hasTask) {
        return (
            <div className="todo__empty-message">Список пуст</div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <ToDoItem key={task.id} {...task} className='todo__item' onDeleteTask={onDeleteTask} toggleTask={toggleTask}/>
            ))}
        </ul>
    )
}

export default ToDoList;