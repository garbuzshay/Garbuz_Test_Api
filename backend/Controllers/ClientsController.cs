using Microsoft.AspNetCore.Mvc;
using ClientApi.Models;
using ClientApi.Services;

namespace ClientApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClientsController : ControllerBase
{
    private readonly ClientService _clientService;

    public ClientsController(ClientService clientService)
    {
        _clientService = clientService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllClients()
    {
        var clients = await _clientService.GetAllClientsAsync();
        return Ok(clients);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetClientById(string id)
    {
        var client = await _clientService.GetClientByIdAsync(id);
        if (client == null)
            return NotFound($"Client with ID {id} not found");
        return Ok(client);
    }

    [HttpPut("{clientId}/task/{taskId}")]
    public async Task<IActionResult> UpdateTaskStatus(string clientId, string taskId, [FromBody] TaskUpdateRequest request)
    {
        var updatedTask = await _clientService.UpdateTaskStatusAsync(clientId, taskId, request.completed);
        if (updatedTask == null)
            return NotFound($"Client or Task not found");
        return Ok(updatedTask);
    }

    [HttpGet("names")]
    public async Task<IActionResult> GetClientNames()
    {
        var names = await _clientService.GetClientNamesAsync();
        return Ok(names);
    }
} 