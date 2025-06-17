import { useState, useEffect} from 'react';
import axios from 'axios';
import TaskCard from '../components/TaskCard';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/tasks/')
        .then((res) => {
            setTasks(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setError("Failed to fetch tasks.");
            setLoading(false);
        })
    }, []);

    if (loading) return <p className='text-center mt-10'>Loading tasks...</p>
    if (error) return <p className='text-center text-red-500 mt-10'>{error}</p>
    if(tasks.length === 0) return <p className='text-center mt-10'>No tasks yet.</p>

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TaskList;