# 📌 Testes Automatizados com Cypress

## 📖 Sobre o Projeto
Este projeto contém testes automatizados de API utilizando o **Cypress** para validar as funcionalidades da API [Serverest](https://serverest.dev/usuarios). Os testes incluem:
- Consultar lista de usuários cadastrados
    - Verifica se o status code é 200
    - Verifica se o corpo da resposta contém a propriedade "usuarios"
    - Verifica se "usuarios" é um array
    - Verifica se a propriedade "quantidade" existe
    - Verifica se a quantidade é igual ao tamanho do array "usuarios"
    - Verifique o primeiro usuário na lista (se existir)

- Cadastro de um usuário
    - Verifica se o status code é 201 (Criado)
    - Valida a mensagem de sucesso
        
- Consulta do usuário cadastrado
    - Realiza a consulta do usuário
    - Verifica se o status code é 200
    - Valida os dados retornados

- Alteração do nome do usuário
    - Verifica se o status code é 200 (OK)
    - Valida a mensagem de sucesso
    
- Exclusão do usuário e validação da remoção
    - Verifica se o status code é 200
    - Valida a mensagem de sucesso
    - Realiza uma consulta para garantir que o usuário foi excluído
    - Verifica se o status code é 400 (Não encontrado)
    - Valida a mensagem de erro

Além disso, os testes são executados automaticamente ao realizar um push através de uma **pipeline de CI/CD** no **GitHub Actions**, gerando relatórios de execução.

---

## 🛠️ Configuração do Ambiente

### **1️⃣ Pré-requisitos**
Certifique-se de ter as seguintes dependências instaladas em seu ambiente local:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Git](https://git-scm.com/)

### **2️⃣ Clonando o Repositório**
Execute o seguinte comando no terminal:

```bash
git clone https://github.com/gnfranco92/desafio_api_cypress.git
cd desafio_api_cypress
```

### **3️⃣ Instalando Dependências**
Após acessar o diretório do projeto, instale as dependências necessárias:

```bash
npm install
```

### **4️⃣ Configuração do Cypress**
O Cypress já está configurado no arquivo `cypress.config.js`, mas caso precise realizar alguma alteração, edite conforme necessário.


---

## 🚀 Executando os Testes

### **1️⃣ Executando os Testes Localmente**
Para rodar os testes em **modo headless** (sem abrir o navegador), utilize:

```bash
npx cypress run
```

Caso queira abrir o **Cypress Test Runner** e executar os testes manualmente:

```bash
npx cypress open
```

### **2️⃣ Geração de Relatórios**
Os testes são configurados para gerar relatórios no formato Mochawesome. Para visualizar o relatório após a execução dos testes:

```bash
npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
npx mochawesome-report-generator cypress/reports/report.json -o cypress/reports/html
```

Abra o arquivo `cypress/reports/html/index.html` no navegador para visualizar os resultados.

---

## 🔄 Integração Contínua (CI) no GitHub Actions

O projeto inclui uma pipeline de **GitHub Actions** que executa os testes automaticamente em cada **push** para a branch `main`.

### **📌 Configuração da Pipeline**
O arquivo da pipeline está localizado em:

```
.github/workflows/ci-cypress.yml
```

### **📌 Execução Automática**
Sempre que houver um **push ou pull request** para `main`, a pipeline será acionada automaticamente para:
1. Instalar as dependências
2. Executar os testes
3. Gerar os relatórios de teste
4. Disponibilizar os relatórios como **artefato** no GitHub

### **📌 Como Acessar os Relatórios no GitHub Actions**
1. Vá até a aba **Actions** no seu repositório do GitHub.
2. Selecione a execução mais recente.
3. No final da página, clique em **Artifacts**.
4. Baixe o artefato chamado `cypress-test-report`.
5. Abra o arquivo `index.html` dentro da pasta para visualizar o relatório.

---

## 📞 Contato
Caso tenha dúvidas ou sugestões, entre em contato através do e-mail: **gnetofranco@gmai.com**

---

### 🎯 **Bons testes! 🚀**
### PS: **Estou ansioso pelo feedback :D**
