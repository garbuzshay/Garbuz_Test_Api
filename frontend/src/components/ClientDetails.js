import React from 'react';
import { TaskList } from './TaskList';

export const ClientDetails = ({ client, fadeIn, updatingTask, onTaskToggle }) => (
  <div className={`client-content ${fadeIn ? 'fade-in' : ''}`}>
    <div className="client-details">
      <h1>{client.name}</h1>
      <div className="info-section">
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
      </div>
    </div>
    
    <div className="tasks-section">
      <h3>Tasks</h3>
      <TaskList 
        tasks={client.tasks}
        updatingTask={updatingTask}
        onTaskToggle={onTaskToggle}
      />
    </div>
  </div>
); 