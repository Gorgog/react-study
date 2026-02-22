interface Props {
    className?: string;
    id: string;
    title: string;
    isDone: boolean;
    onDeleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
}

const ToDoItem = ({className, isDone, id, title, onDeleteTask, toggleTask}: Props) => {
    return (
        <li className={`todo-item ${className}`}>
            <input
                className="todo-item__checkbox"
                id={id}
                type="checkbox"
                checked={isDone}
                onChange={() => toggleTask(id)}
            />
            <label
                className="todo-item__label"
                htmlFor={id}
            >
                {title || 'Untitled task'}
            </label>
            <button
                className="todo-item__delete-button"
                aria-label="Delete"
                title="Delete"
                onClick={() => onDeleteTask(id)}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 5L5 15M5 5L15 15"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </li>
    )
}

export default ToDoItem;