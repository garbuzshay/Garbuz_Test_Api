namespace ClientApi.Models;

public record ClientDto(string clientId, string name, string email, string phone, TaskItem[] tasks); 