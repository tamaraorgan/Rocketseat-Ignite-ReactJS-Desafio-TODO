import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent } from 'react'

import styles from './InputNewTask.module.css'

interface PropsNewTask {
  createNewTask: (event: FormEvent) => void
  onChangeTask: (event: ChangeEvent<HTMLInputElement>) => void
  onInvalid: (event: InvalidEvent<HTMLInputElement>) => void
  isNewTaskEmpty: boolean
  emptyTitle: string
}

function InputNewTask({
  onChangeTask,
  createNewTask,
  onInvalid,
  isNewTaskEmpty,
  emptyTitle
}: PropsNewTask) {
  return (
    <form className={styles.containerNewTask} onSubmit={createNewTask}>
      <input
        type='text'
        className={styles.inputNewTask}
        placeholder='Adicione uma nova tarefa'
        onChange={onChangeTask}
        onInvalid={onInvalid}
        value={emptyTitle}
        required
      />
      <button
        type='submit'
        disabled={isNewTaskEmpty}
        className={styles.buttonNewTask}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}

export { InputNewTask }
