import Field from "./Field.tsx";
import Button from "./Button.tsx";
import {useState} from "react";

interface Props {
    onAddTask: (title: string) => void;
}

const AddTaskFrom = ({onAddTask}: Props) => {
    const [taskTitle, setTaskTitle] = useState('');

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onAddTask(taskTitle);
        setTaskTitle('');
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label='New task title'
                id="new-task"
                value={taskTitle}
                onInput={(event) => setTaskTitle(event.currentTarget.value)}
            />
            <Button type="submit" className="todo__button">Add</Button>
        </form>
    )
}

export default AddTaskFrom;