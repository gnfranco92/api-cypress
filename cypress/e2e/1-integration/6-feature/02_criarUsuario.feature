Feature: Cadastro de Usuário

  Scenario: Criar um novo usuário com sucesso
    Given que eu tenha os dados de um novo usuário "Teste Guilherme" e "usuario{timestamp}@teste.com"
    When eu enviar uma requisição para criar o usuário
    Then o usuário deve ser criado com sucesso
    And a resposta deve conter a mensagem "Cadastro realizado com sucesso"
    And o ID do usuário deve ser salvo para uso futuro
