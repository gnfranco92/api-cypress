Feature: Exclusão de Usuário

  Scenario: Excluir o usuário e confirmar sua remoção
    Given que o usuário foi previamente cadastrado e seus dados foram salvos
    When eu envio uma requisição DELETE para excluir o usuário
    Then valido a requisição com o status 200
    And a mensagem deve ser "Registro excluído com sucesso"
    When eu envio uma requisição GET para consultar o usuário
    Then a resposta da consulta deve ter o status 400
    And a mensagem de erro deve ser "Usuário não encontrado"
