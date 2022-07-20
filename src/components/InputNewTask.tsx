import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';

import styles from './InputNewTask.module.css';

interface PropsNewTask {
   createNewTask: (event: FormEvent) => void;
   onChangeTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputNewTask({ onChangeTask, createNewTask }: PropsNewTask) {
   return (
      <form className={styles.containerNewTask} onSubmit={createNewTask}>
         <input
            type="text"
            className={styles.inputNewTask}
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTask}
         />
         <button type="submit" className={styles.buttonNewTask}>
            Criar <PlusCircle size={16}/>
         </button>
      </form>
   );
}

export { InputNewTask };
