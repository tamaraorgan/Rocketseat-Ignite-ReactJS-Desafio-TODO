import { TodoCard } from './TodoCard';

import clipboard from '../assets/clipboard.svg';

import styles from './Tasks.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { InputNewTask } from './InputNewTask';

function Tasks() {
   const [tasks, setTasks] = useState(["Ficar Ricaaaaa"]);
   const [newTask, setNewTask] = useState('');

   function handleCreateNewTask(event: FormEvent) {
      event.preventDefault();

      setTasks([...tasks, newTask]);
      setNewTask('');
   }

   function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
      setNewTask(event.target.value);
   }

   function deleteTask(taskToDelete: string) {
      const taskWithoutDeleteOne = tasks.filter(task => {
         return task !== taskToDelete
      })
      setTasks(taskWithoutDeleteOne)
   }

   const isTaskEmpty = tasks.length === 0

   return (
      <main>
         <InputNewTask
            onChangeTask={handleNewTaskChange}
            createNewTask={handleCreateNewTask}
         />
         <div className={styles.infoTasks}>
            <strong className={styles.createdTasks}>
               Tarefas criadas<span>0</span>
            </strong>
            <strong className={styles.completedTasks}>
               Concluídas<span>0</span>
            </strong>
         </div>
         <div className={styles.toDoList}>
            {isTaskEmpty ? (
               <div className={styles.toDoInfo}>
                  <img src={clipboard} alt="Icon de uma plancheta" />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
               </div>
            ) : (
               <>
                  {tasks.map((task) => {
                     return <TodoCard content={task} onDeleteTask={deleteTask}/>;
                  })}
               </>
            )}
         </div>
      </main>
   );
}

export { Tasks };
