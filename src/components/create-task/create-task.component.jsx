import './create-task.styles.scss'

export const CreateTask = ({ placeholder, taskValue, handleChange, handleAddTask }) => {
  return (
    <form
      className='task-form'
      onSubmit={handleAddTask}
    >
      <input
        className='input'
        type='text'
        placeholder={placeholder}
        value={taskValue}
        onChange={handleChange}
      />
      <button
        className='button submit-button'
        type='submit'
        disabled={taskValue === ''}
      >Add</button>
    </form>
  );
};
