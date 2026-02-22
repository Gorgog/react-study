import AddTaskFrom from "../components/AddTaskFrom.tsx";
import SearchTaskForm from "../components/SeatchTaskForm.tsx";
import ToDoInfo from "../components/ToDoInfo.tsx";
import ToDoList from "../components/ToDoList.tsx";
import {useEffect, useState} from "react";

export type Task = {
    id: string;
    title: string;
    isDone: boolean;
}
const ToDoPage = () => {
    const [tasks, setTasks] = useState<Task[]>(
        () => {
            const storedTasks = localStorage.getItem('tasks');
            return storedTasks ? JSON.parse(storedTasks) : [];
        }
    );

    const [searchQuery, setSearchQuery] = useState('');

    function deleteAllTasks() {
        const isConfirmed = confirm('Are you sure you want to delete all tasks?');
        if (!isConfirmed) return;
        setTasks([]);
    }

    function deleteTask(id: string) {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    function toggleTask(id: string) {
        const updatedTasks = tasks.map(task => task.id === id ? {...task, isDone: !task.isDone} : task);
        setTasks(updatedTasks);
    }

    function addTask(title: string) {
        if (!title) return;

        const newTask = {id: crypto?.randomUUID() ?? Date.now().toString(), title, isDone: false};

        setTasks([...tasks, newTask])
        setSearchQuery('');
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filteredTasks = clearSearchQuery.length > 0 ? tasks.filter(task => task.title.toLowerCase().includes(clearSearchQuery)) : tasks;

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskFrom onAddTask={addTask}/>
            <SearchTaskForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ToDoInfo
                onDeleteAll={deleteAllTasks}
                totalTasks={tasks.length}
                doneTasks={tasks.filter(task => task.isDone).length}/>
            <ToDoList tasks={filteredTasks} onDeleteTask={deleteTask} toggleTask={toggleTask}/>
        </div>
    )
}

export default ToDoPage;