import Button from "./Button.tsx";

interface Props {
    totalTasks: number;
    doneTasks: number;
    onDeleteAll?: () => void;
}

const ToDoInfo = ({doneTasks, totalTasks, onDeleteAll}: Props) => {
    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {doneTasks} of {totalTasks} tasks
            </div>
            {totalTasks > 0 &&
                <Button
                    className='todo__delete-all-button'
                    type='button'
                    onClick={onDeleteAll}
                >
                    Delete all
                </Button>
            }
        </div>
    )
}

export default ToDoInfo;