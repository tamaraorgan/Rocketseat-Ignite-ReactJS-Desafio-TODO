import { Trash } from 'phosphor-react';
import { PropsTask } from './Tasks';

import styles from './TodoCard.module.css';

interface PropsTodoCard {
   task: PropsTask;
   onDeleteTask: (id: string) => void;
   onChangeIsComplete: (id: string) => void;
}

function TodoCard({ task, onDeleteTask, onChangeIsComplete }: PropsTodoCard) {
   function handleDeleteTask() {
      onDeleteTask(task.id);
   }

   function handleCheckedTask() {
      onChangeIsComplete(task.id);
   }


   return (
      <div className={styles.container}>
         <label>
            <input
               type="checkbox"
               name="checkbox"
               onChange={handleCheckedTask}
               checked={task.isComplete}
            />
            <span>{task.title}</span>
         </label>

         <button onClick={handleDeleteTask} className={styles.buttonTask}>
            <Trash size={24} />
         </button>
      </div>
   );
}

export { TodoCard };
