import unittest
from app import app, todos

class TodoAppTestCase(unittest.TestCase):
    def setUp(self):
        # Cria um cliente de teste usando o aplicativo Flask
        self.app = app.test_client()
        self.app.testing = True

    def test_get_todos_empty(self):
        # Testa a rota de listagem de tarefas quando a lista está vazia
        response = self.app.get('/todos')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, [])

    def test_add_todo(self):
        # Testa adicionar uma nova tarefa
        new_todo = {'task': 'Comprar leite'}
        response = self.app.post('/todos', json=new_todo)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json, new_todo)

        # Verifica se a tarefa foi adicionada corretamente
        response = self.app.get('/todos')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, [new_todo])

    def test_update_todo(self):
        # Adiciona uma tarefa
        new_todo = {'task': 'Comprar leite'}
        response = self.app.post('/todos', json=new_todo)
        self.assertEqual(response.status_code, 201)

        # Atualiza a tarefa
        updated_todo = {'task': 'Comprar pão'}
        response = self.app.put('/todos/0', json=updated_todo)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, updated_todo)

    def test_delete_todo(self):
        # Limpar a lista de todos
        todos.clear()

        # Adiciona uma tarefa
        new_todo = {'task': 'Comprar leite'}
        response = self.app.post('/todos', json=new_todo)
        self.assertEqual(response.status_code, 201)

        # Deleta a tarefa
        response = self.app.delete('/todos/0')
        self.assertEqual(response.status_code, 204)

        # Verifica se a lista de tarefas está vazia
        response = self.app.get('/todos')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, [])

if __name__ == '__main__':
    unittest.main()
