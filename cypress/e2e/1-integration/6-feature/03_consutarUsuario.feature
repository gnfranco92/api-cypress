Feature: Consulta de Usuário

  Scenario: Consultar usuário previamente cadastrado
    Given que o ID do usuário foi salvo previamente
    When eu consulto o usuário pelo ID
    Then a resposta deve ter o status 200
    And os dados retornados devem corresponder ao usuário salvo
