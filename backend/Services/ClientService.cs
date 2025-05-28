using ClientApi.Models;

namespace ClientApi.Services;

public class ClientService
{
    private readonly Dictionary<string, ClientDto> _clients = new()
    {
        ["123"] = new ClientDto(
            "123",
            "John Doe",
            "john@example.com",
            "+1-555-1234",
            new[]
            {
                new TaskItem("t1", "Call back", false),
                new TaskItem("t2", "Send proposal", true)
            }
        ),
        ["456"] = new ClientDto(
            "456",
            "Jane Smith",
            "jane@example.com",
            "+1-555-5678",
            new[]
            {
                new TaskItem("t3", "Follow up", true),
                new TaskItem("t4", "Review documents", false)
            }
        ),
        ["789"] = new ClientDto(
            "789",
            "Bob Johnson",
            "bob@example.com",
            "+1-555-9012",
            new[]
            {
                new TaskItem("t5", "Schedule meeting", false),
                new TaskItem("t6", "Send quote", false)
            }
        ),
        ["101"] = new ClientDto(
            "101",
            "Alice Brown",
            "alice@example.com",
            "+1-555-3456",
            new[]
            {
                new TaskItem("t7", "Prepare presentation", false),
                new TaskItem("t8", "Update website", true)
            }
        ),
        ["102"] = new ClientDto(
            "102",
            "Charlie Wilson",
            "charlie@example.com",
            "+1-555-7890",
            new[]
            {
                new TaskItem("t9", "Client training", true),
                new TaskItem("t10", "System upgrade", true)
            }
        ),
        ["103"] = new ClientDto(
            "103",
            "Emma Davis",
            "emma@example.com",
            "+1-555-2345",
            new[]
            {
                new TaskItem("t11", "Project review", false),
                new TaskItem("t12", "Budget planning", true)
            }
        ),
        ["104"] = new ClientDto(
            "104",
            "Frank Miller",
            "frank@example.com",
            "+1-555-6789",
            new[]
            {
                new TaskItem("t13", "Team meeting", false),
                new TaskItem("t14", "Report generation", true)
            }
        )
    };

    public async Task<IEnumerable<ClientDto>> GetAllClientsAsync()
    {
        await Task.Delay(500);
        return _clients.Values;
    }

    public async Task<ClientDto?> GetClientByIdAsync(string id)
    {
        await Task.Delay(500);
        _clients.TryGetValue(id, out var client);
        return client;
    }

    public async Task<TaskItem?> UpdateTaskStatusAsync(string clientId, string taskId, bool completed)
    {
        if (!_clients.TryGetValue(clientId, out var client))
            return null;

        var task = client.tasks.FirstOrDefault(t => t.taskId == taskId);
        if (task == null)
            return null;

        var updatedTask = new TaskItem(task.taskId, task.title, completed);
        var updatedTasks = client.tasks.Select(t => t.taskId == taskId ? updatedTask : t).ToArray();
        var updatedClient = new ClientDto(
            client.clientId,
            client.name,
            client.email,
            client.phone,
            updatedTasks
        );
        _clients[clientId] = updatedClient;
        await Task.Delay(500);
        return updatedTask;
    }

    public async Task<IEnumerable<object>> GetClientNamesAsync()
    {
        await Task.Delay(500);
        return _clients.Values.Select(c => new { c.clientId, c.name });
    }
} 