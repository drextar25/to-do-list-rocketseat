import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState, ChangeEvent, FormEvent, } from "react";
import { PlusCircle } from 'phosphor-react';
import styles from './AddTask.module.css';
import { Task } from './TaskList';
import { EmptyArea } from './EmptyArea';


export function AddTask() {

    const [newTask, setNewTask] = useState("");
    
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper.",
            isComplete: false,
          },
    ])
    
    const doneTasks = tasks.filter((task) =>
        task.isComplete === true).length;
    
    const hasTasks = tasks.length !== 0;
	
    const isInputEmpty = newTask === '';


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks,
            {
                id: uuidv4(),
                title: newTask,
                isComplete: false
            }]);
        setNewTask("");
    }

    function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
		setNewTask(event.target.value);
    }

    function handleDeleteTask(idToBeRemoved: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id !== idToBeRemoved;
		});

		setTasks(tasksWithoutDeletedOne);
    }
    
    function handleClickCheckbox(idToBeChecked: string) {
        const tasksEdited = tasks.map((task) => {
            if (task.id === idToBeChecked) {
                return {
                    ...task,
                    isComplete: !task.isComplete,
                };
            } else {
                return task;
            }
        });

        setTasks(tasksEdited);
    }

    return (
        <div className={styles.all}>
		    
            <form className={styles.taskInput} >
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Add a new task'
                    onChange={handleChangeTaskText}
                    value={newTask}
                />
                <button
                    className={styles.inputButton}
                    type='submit'
		    disabled={isInputEmpty}
                    onClick={handleCreateNewTask}
                 >
					Add
                    <PlusCircle
                        size={16}
                        weight='bold' />
                </button>
            </form >
		    
            <div className = {styles.taskAmount}>
                <p
                    className={styles.taskCreated}>
                    Tasks created
                    <span>
                        {tasks.length}
                    </span>
                </p>
                <p
                    className={styles.taskConcluded}>
                    Tasks Concluded
                    <span>
                        {doneTasks} of {tasks.length}
                    </span>
                </p>
            </div>

            <div>
                {hasTasks ? (
                    <div className={styles.taskMain}>
                        {tasks.map(task => {
                            return (
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    isComplete={task.isComplete}
                                    handleDeleteTask={() => handleDeleteTask(task.id)}
                                    handleClickCheckbox={() => handleClickCheckbox(task.id)}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <EmptyArea />
                )}
            </div>
            
        </div>
    )
 }
