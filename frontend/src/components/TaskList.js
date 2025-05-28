import React from 'react';

const TaskStatus = ({ completed, updating }) => {
  if (updating) {
    return <span className="task-status updating">Updating...</span>;
  }
  return completed ? (
    <span className="task-status completed">Completed</span>
  ) : (
    <span className="task-status pending">Pending</span>
  );
};

export const TaskList = ({ tasks, updatingTask, onTaskToggle }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li 
          key={task.taskId} 
          className={`task-item ${updatingTask === task.taskId ? 'updating' : ''} ${task.completed ? 'completed' : ''}`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskToggle(task.taskId, task.completed)}
              disabled={updatingTask === task.taskId}
              aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            <div className="task-info">
              <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                {task.title}
              </span>
              <TaskStatus 
                completed={task.completed} 
                updating={updatingTask === task.taskId} 
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}; 