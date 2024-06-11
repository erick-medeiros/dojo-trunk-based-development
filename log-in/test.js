import { describe, test, before, after } from 'node:test'
import assert from 'node:assert'
import server from './index.js'

function login(username, password) {
    return fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
}

describe('server', () => {
    after((done) => {
        server.close(done)
    })
    test("login user1", async () => {
        const response = await login('user1', 'password1')
        const text = await response.text()
        assert.strictEqual(response.status, 200)
        assert.strictEqual(text, 'Login bem-sucedido, bem-vindo user1!')
    })
    test("login user2", async () => {
        const response = await login('user2', 'password2')
        const text = await response.text()
        assert.strictEqual(response.status, 200)
        assert.strictEqual(text, 'Login bem-sucedido, bem-vindo user2!')
    })
    test("login wrong", async () => {
        const response = await login('user1', 'asdsa')
        const text = await response.text()
        assert.strictEqual(response.status, 400)
        assert.strictEqual(text, 'Credenciais inválidas. Por favor, tente novamente.')
    })
})