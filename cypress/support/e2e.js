import './pages/cotacao-automovel.page'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorne false para evitar que o Cypress falhe o teste
    if (err.message.includes('e is not defined')) {
        return false
    }
})
