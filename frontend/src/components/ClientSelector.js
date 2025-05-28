import React from 'react';

export const ClientSelector = ({ clients, onClientChange }) => (
  <div className="client-selector">
    <h2>Select Client</h2>
    <select 
      onChange={(e) => onClientChange(e.target.value)}
      className="client-dropdown"
      defaultValue=""
    >
      <option value="" disabled>Choose a client...</option>
      {clients.map(client => (
        <option key={client.clientId} value={client.clientId}>
          {client.name}
        </option>
      ))}
    </select>
  </div>
); 