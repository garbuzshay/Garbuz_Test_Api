import React, { useEffect } from "react";
import { useClientData } from "./hooks/useClientData";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ClientSelector } from "./components/ClientSelector";
import { ClientDetails } from "./components/ClientDetails";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const {
    clientNames,
    selectedClient,
    loading,
    error,
    fadeIn,
    updatingTask,
    fetchClientNames,
    fetchClientById,
    updateTaskStatus,
  } = useClientData();

  // Fetch only client names on initial load
  useEffect(() => {
    fetchClientNames();
  }, [fetchClientNames]);

  // Show error if there's an error and no client is selected.
  if (error && !selectedClient) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <div className="client-container">
        <ClientSelector clients={clientNames} onClientChange={fetchClientById} />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          selectedClient && (
            <ClientDetails
              client={selectedClient}
              fadeIn={fadeIn}
              updatingTask={updatingTask}
              onTaskToggle={updateTaskStatus}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
