import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

interface TaskProps {
  handleDeleteTask: () => void;
  handleClickCheckbox: () => void;
  id: string;
  title: string;
  isComplete: boolean;
}

export function Task({ handleDeleteTask, handleClickCheckbox, id, title, isComplete}: TaskProps) {

  return (
      <div className={styles.taskList}>

        <div className={styles.container}>
          <div className={styles.round}>
            <input
              type="checkbox"
              id={id}
              checked={isComplete}
              onChange={handleClickCheckbox}
              
            />
            <label
              htmlFor={id}
            >
            </label>
          </div>
        </div>
        
        <p
          className={`${isComplete ? styles.doneText : ''}`}>
        {title}
        </p>
        
        <button
          className={styles.deleteButton}
          onClick={handleDeleteTask}
        >
          <Trash size={18} />
        </button>
        
      </div>
  )
}