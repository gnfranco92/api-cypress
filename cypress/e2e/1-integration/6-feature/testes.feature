Funcionalidade: Consulta da lista de usuários na API

  Cenário: Criar um novo usuário com sucesso
    Dado que eu tenha um usuários cadastrados na API
    Quando eu enviar uma requisição GET para "/usuarios"
    Então a resposta deve conter o status code 200
    E o corpo da resposta deve conter uma lista com todos os dados dos usuários cadastrados

Funcionalidade: Cadastro de usuário na API

  Cenário: Criar um novo usuário com sucesso
    Dado que eu tenha um payload válido de um novo usuário
    Quando eu enviar uma requisição POST para "/usuarios"
    Então a resposta deve conter o status code 201
    E o corpo da resposta deve conter um ID único para o usuário

Funcionalidade: Consulta de usuário especifico na API

  Cenário: Consultar um usuário cadastrado
    Dado que eu tenha um usuário cadastrado na API
    Quando eu enviar uma requisição GET para "/usuarios/{id}"
    Então a resposta deve conter o status code 200
    E o corpo da resposta deve conter os dados do usuário correspondente

Funcionalidade: Atualização de usuário na API

  Cenário: Alterar o nome de um usuário existente
    Dado que eu tenha um usuário previamente cadastrado
    Quando eu enviar uma requisição PUT para "/usuarios/{id}" com um novo nome
    Então a resposta deve conter o status code 200
    E o corpo da resposta deve refletir o nome atualizado

Funcionalidade: Exclusão de usuário na API

  Cenário: Excluir um usuário existente
    Dado que eu tenha um usuário previamente cadastrado
    Quando eu enviar uma requisição DELETE para "/usuarios/{id}"
    Então a resposta deve conter o status code 200
    E ao tentar consultar esse usuário, a resposta deve conter o status code 404
