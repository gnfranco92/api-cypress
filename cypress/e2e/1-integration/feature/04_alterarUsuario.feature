Feature: Alteração de Nome do Usuário

  Scenario: Alterar o nome do usuário cadastrado anteriormente
    Given que os dados do usuário foram previamente salvos
    When eu envio uma requisição PUT para alterar o nome do usuário para "Teste Guilherme alterado"
    Then valido a resposta que deve ter o status 200
    And a mensagem de sucesso deve ser "Registro alterado com sucesso"
    And os dados do usuário salvos devem ser atualizados com o novo nome
