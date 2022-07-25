import { v4 as uuidv4 } from 'uuid'

import { TodoCard } from './TodoCard'

import clipboard from '../assets/clipboard.svg'

import styles from './Tasks.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { InputNewTask } from './InputNewTask'

export interface PropsTask {
  id: string
  title: string
  isComplete: boolean
}

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Ficar Rica', isComplete: false }
  ])

  const [newTask, setNewTask] = useState({
    id: '',
    title: '',
    isComplete: false
  })
  const [isComplete, setIsComplete] = useState()

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])

    const emptyTask = {
      id: '',
      title: '',
      isComplete: false
    }
    setNewTask(emptyTask)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira uma nova Task')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    const task = {
      id: uuidv4(),
      title: event.target.value,
      isComplete: false
    }
    setNewTask(task)
  }

  function deleteTask(idTaskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task.id !== idTaskToDelete
    })
    setTasks(taskWithoutDeleteOne)
  }

  function handleChangeIsComplete(idTaskChange: string) {
    const editedTasks = tasks.map(task => {
      if (task.id === idTaskChange) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    })

    setTasks(editedTasks)
  }

  
   const CompletedTasks = tasks.filter(task => {
      return task.isComplete === true
   })



  const isTaskEmpty = tasks.length === 0
  const isNewTaskEmpty = newTask.title === ''

  return (
    <main>
      <InputNewTask
        onChangeTask={handleNewTaskChange}
        createNewTask={handleCreateNewTask}
        onInvalid={handleNewTaskInvalid}
        isNewTaskEmpty={isNewTaskEmpty}
        emptyTitle={newTask.title}
      />
      <div className={styles.infoTasks}>
        <strong className={styles.createdTasks}>
          Tarefas criadas<span>{tasks.length}</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas <span>{CompletedTasks.length} de {tasks.length}</span>
        </strong>
      </div>
      <div className={styles.toDoList}>
        {isTaskEmpty ? (
          <div className={styles.toDoInfo}>
            <img src={clipboard} alt='Icon de uma plancheta' />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <>
            {tasks.map(task => {
              return (
                <TodoCard
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onChangeIsComplete={handleChangeIsComplete}
                />
              )
            })}
          </>
        )}
      </div>
    </main>
  )
}

export { Tasks }
