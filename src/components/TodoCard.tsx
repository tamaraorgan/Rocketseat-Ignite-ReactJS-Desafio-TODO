import { Trash } from 'phosphor-react';
import styles from './TodoCard.module.css';

interface PropsTodoCard {
   content: string;
   onDeleteTask: (content: string) => void;
}
function TodoCard({ content, onDeleteTask }: PropsTodoCard) {
   function handleDeleteTask() {
      onDeleteTask(content);
   }

   return (
      <div className={styles.container}>
         <label>
            <input type="checkbox" name="checkbox" />
            <span>{content}</span>
         </label>

         <button onClick={handleDeleteTask} className={styles.buttonTask}>
            <Trash size={24} />
         </button>
      </div>
   );
}

export { TodoCard };
