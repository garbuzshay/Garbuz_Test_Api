import { useState, useCallback, useRef } from 'react';
import axios from 'axios';

// API hooks for interacting with the backend. All endpoints use plural 'clients' routes.
const API_BASE_URL = 'http://localhost:5000/api';

export const useClientData = () => {
  const [clientNames, setClientNames] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [updatingTask, setUpdatingTask] = useState(null);
  const fetchedOnce = useRef(false);

  // Fetch only client names and IDs for the select bar
  const fetchClientNames = useCallback(async () => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;
    try {
      const response = await axios.get(`${API_BASE_URL}/clients/names`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setClientNames(response.data);
      setLoading(false);
      setFadeIn(true);
    } catch (err) {
      console.error('Error details:', err);
      setError(`Error fetching client names: ${err.message}`);
      setLoading(false);
    }
  }, []);

  // Fetch full client data by ID when a user is selected
  const fetchClientById = useCallback(async (clientId) => {
    setFadeIn(false);
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/clients/${clientId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setSelectedClient(response.data);
      setError(null);
      setTimeout(() => {
        setFadeIn(true);
        setLoading(false);
      }, 300);
    } catch (err) {
      console.error('Error details:', err);
      setError(`Error fetching client data: ${err.message}`);
      setSelectedClient(null);
      setLoading(false);
    }
  }, []);

  const updateTaskStatus = useCallback(async (taskId, currentStatus) => {
    if (!selectedClient) return;

    setUpdatingTask(taskId);
    try {
      await axios.put(
        `${API_BASE_URL}/clients/${selectedClient.clientId}/task/${taskId}`,
        { completed: !currentStatus },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );

      setSelectedClient(prev => ({
        ...prev,
        tasks: prev.tasks.map(task =>
          task.taskId === taskId
            ? { ...task, completed: !currentStatus }
            : task
        )
      }));

      setError(null);
    } catch (err) {
      console.error('Error updating task:', err);
      setError(`Error updating task: ${err.message}`);
    } finally {
      setUpdatingTask(null);
    }
  }, [selectedClient]);

  return {
    clientNames,
    selectedClient,
    loading,
    error,
    fadeIn,
    updatingTask,
    fetchClientNames,
    fetchClientById,
    updateTaskStatus
  };
}; 