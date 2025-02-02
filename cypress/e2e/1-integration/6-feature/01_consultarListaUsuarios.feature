Feature: Consulta de Lista de Usuários

  Scenario: Consultar a lista de usuários com sucesso
    Given que a API possui usuários cadastrados
    When eu enviar uma requisição para listar os usuários
    Then a resposta deve conter o status code 200
    And a resposta deve conter uma lista de usuários
    And a quantidade de usuários deve ser igual ao tamanho da lista retornada
    And cada usuário na lista deve conter um ID, nome, email, password e status de administrador