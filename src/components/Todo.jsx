import { useState} from "react";
import "../CSS/Todo.css";

const Todo = () => {


    const testApi = async () => {
        // try {
        //     const response = await fetch(`http://todo-env.eba-asbueigp.eu-north-1.elasticbeanstalk.com/users`, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(
        //         {
        //             userName : "Blabla",
        //             password : "blabla123123" 
        //         }
        //     ),
        //     });
    
        //     const data = await response.json();
        //     console.log(data)
    
        //     if (!response.ok) {
        //       throw new Error('Fel uppstod!');
        //     }
        
        //   } catch (error) {
        //     console.error('Fel!!!!', error);
        //   }


        try {
            const response = await fetch(`http://todo-env.eba-asbueigp.eu-north-1.elasticbeanstalk.com/users/4/tasks`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
            });
    
            const data = await response.json();
            console.log(data)
    
            if (!response.ok) {
              throw new Error('Fel uppstod!');
            }
        
          } catch (error) {
            console.error('Fel!!!!', error);
          }
    
        }


















    const [taskList, setTaskList] = useState([
        { taskTitle: "Buy Milk", isChecked: false, id: 2 },
        { taskTitle: "Walk the Dog", isChecked: false, id: 3 },
        { taskTitle: "Do Homework", isChecked: false, id: 5 }
    ]);

    const [newTask, setNewTask] = useState("");

    const toggleCheckbox = (id) => {
        setTaskList((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    const newCheckedState = !task.isChecked;
                    console.log(`Task id "${id}" has been ${newCheckedState ? "checked" : "unchecked"}`);
                    return { ...task, isChecked: newCheckedState };
                }
                return task;
            })
        );
    };

    const getNextAvailableId = () => {
        const existingIds = taskList.map(task => task.id).sort((a, b) => a - b);
        let nextId = 1;
        for (let id of existingIds) {
            if (id === nextId) {
                nextId++;
            } else {
                break;
            }
        }
        return nextId;
    };

    const addTask = () => {
        if (newTask.trim() === "") return;
        
        const newTaskObj = {
            taskTitle: newTask,
            isChecked: false,
            id: getNextAvailableId()
        };

        setTaskList([...taskList, newTaskObj]);
        setNewTask("");
    };

    return (
        <section className="todo-page">

            <button onClick={testApi}>Testa api!</button>




            <section className="task-section">
                <section className="task-list">
                    {taskList.map((task) => (
                        <section className="task" key={task.id}>
                            <p className="task-title">{task.taskTitle}</p>
                            <div className="checkbox-wrapper-19">
                                <input
                                    type="checkbox"
                                    id={`input-${task.id}`}
                                    checked={task.isChecked}
                                    onChange={() => toggleCheckbox(task.id)}
                                />
                                <label htmlFor={`input-${task.id}`} className="check-box"></label> 
                            </div>
                        </section>
                    ))}
                </section>

                <section className="add-task-section">
                    <input 
                        className="task-title-input"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button className="add-task-button" onClick={addTask}>Add task</button>
                </section>
            </section>
        </section>
    );
};

export default Todo;
