import { FaRegTrashAlt } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import cn from 'classnames';
import './task-list.styles.scss'

export const TasksList = ({ tasks, handleRemoveTask, handleChangeTaskState }) => {
  return (
    <ul className='tasks-list'>
      {
        tasks.allIds.map((id) => {
          return (
            <li
              className='task-item'
              key={tasks.byId[id].id}
            >
              <div className='check-box'>
                {
                  tasks.byId[id].state === 'active' ? <MdCheckBoxOutlineBlank
                    onClick={handleChangeTaskState(id)}
                  /> : <MdCheckBox
                    onClick={handleChangeTaskState(id)}
                  />
                }
              </div>
              <p
                className={cn({
                  'task-text': true,
                  finished: tasks.byId[id].state === 'finished',
                })}
                onClick={handleChangeTaskState(id)}
              >
                {tasks.byId[id].text}
              </p>
              <button
                className='button delete-button'
                onClick={handleRemoveTask(id)}
              >
                <FaRegTrashAlt />
              </button>
            </li>
          );
        })
      }
    </ul>
  );
}