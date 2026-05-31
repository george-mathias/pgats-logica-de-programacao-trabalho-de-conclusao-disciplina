# Programação para Automação de Testes de Software 
Trabalho de conclusão da disciplina da Pós-Graduação em Automação de Testes de Software.

## Requisitos do Projeto
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.  
Pagamentos serão armazenados como objetos JavaScript dentro de uma lista de pagamentos.  
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor.  
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade `category` preenchida pela função como `'cara'`, caso contrário, a propriedade `category` será preenchida pela função como `'padrão'`.  
O método de consultar trará apenas o último pagamento.
  
### Exemplo de Uso:
```javascript
const paymentService = new PaymentService();
paymentService.pay('0987-7656-3475', 'Samar', 156.87);
console.log(paymentService.getLastPayment());

// Retorno esperado:
{
   barcode: '0987-7656-3475',
   company: 'Samar',
   amount: 156.87,
   category: 'cara'
}
```

## Estrutura do Projeto
A entrega foi realizada seguindo estritamente a arquitetura solicitada:
* `src/`: Contém a implementação da classe `PaymentService.js`.
* `test/`: Contém os casos de teste automatizados dos métodos utilizando **Mocha** e o módulo nativo **Node Assert**.
* `.github/workflows/`: Pipeline de Integração Contínua (CI) configurado para execução automatizada dos testes a cada push.

## Instalação e Execução

Certifique-se de estar utilizando o **Node.js (v24 ou superior)**.

```bash
# 1. Clonar o repositório
git clone <url-do-seu-repositorio>

# 2. Entrar na pasta do projeto
cd <nome-da-pasta>

# 3. Instalar as dependências de desenvolvimento
npm install

# 4. Executar a suíte de testes automatizados
npm test
```
