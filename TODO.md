- ADD MIGRATION FRAMEWORK 
- CREATE TABLES NECESSARIAS PRA O MOMENTO (USUARIO E PET ) COLOCAR O RELACIONAMENTO ENTRE ELAS




\\User Story

# RF01 - Permitir cadastro de usuário
*Regras*
- Ser possível relizar o cadastro
- Salvar o login e senha cadastrados

*Cenários*
/Cenário1
- Dado que iniciei o aplicativo 
- Quando apresentar a tela inicial de login
- Então deve conter o botão de "Cadastrar"

/Cenário2 
- Dado o botão "Cadastrar" for apresentado
- Quando clicar no botão 
- Então deve ser apresentado a tela de cadastro
- E os campos a serem preenchidos
    Nome
    Sobrenome
    Data de nascimento
    Telefone
    Email
    Senha
    Confirmação de senha
    CPF
    RG
    Foto
- E as informações devem ser gravadas para login futuros


# RF02 Permitir cadastro de usuário com conta google
*Regras*
- Ser possível relizar o cadastro com a conta do google
- Salvar o login e senha cadastrados

*Cenários*
/Cenário1
- Dado que iniciei o aplicativo 
- Quando apresentar a tela inicial de login
- Então deve conter o botão "Google"

/Cenário2 
- Dado que o botão "Google" for apresentado
- Quando clicar no botão
- Então deve ser direcionado para a tela de login do google

/Cenário3
Dado que cliquei no botão "Google"
E realizei o login pelo google
Quando o login foi realizado com sucesso pelo google
Então deve ser direcionado para a tela de cadastro com os dados do google pré preenchidos


# RF03 Permitir cadastro dos pets
*Regras*
- Ser possível relizar o cadastro do pet
- Vincular o pet ao usuário logado

*Cenários*
/Cenário1
Dado que reazlizei o login ou o cadastro
Quando for no perfil do usuário
Então deverá conter o icone de "+" na seção de pet

/Cenário2
Dado que acessei o perfil
Quando cliquar no botão "+" na seção do pet
Então deverá ser apresentado a tela de cadastro do pet
E conter os seguintes campos
    Nome 
    Raça 
    peso
    comportamento
    foto
    sexo
    espécie

/Cenário3
Dado que acessei a tela de cadastro do pet
Quando finalizar o preenchimento das informações
E clicar no botão "Finalizar"
Então as informações devem ser salvas e vinculadas com o usuário


# RF04 Permitir cadastro do motorista
*Regras*
- Ser possível relizar o cadastro
- Salvar o login e senha cadastrados

*Cenários*
/Cenário1
- Dado que iniciei o aplicativo de motorista
- Quando apresentar a tela inicial de login
- Então deve conter o botão de "Cadastrar"

/Cenário2 
- Dado o botão "Cadastrar" for apresentado
- Quando clicar no botão 
- Então deve ser apresentado a tela de cadastro
- E os campos a serem preenchidos
    Nome
    Sobrenome
    Data de nascimento
    Telefone
    Email
    Senha
    Confirmação de senha
    CNH
- E as informações devem ser gravadas para login futuros


# RF05 Validar e-mail
*Regras*
- Necessário verificar o email inserido no cadastro

*Cenários*
/Cenário1
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de email 
E Finalizar o cadastro
Então quero que seja validado o email.

/Cenário2
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de email 
E Finalizar o cadastro
E preenchi um email valido
Então deverá ser apresentado as proximas telas

/Cenário3
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de email 
E Finalizar o cadastro
E preenchi um email inválido
Então deve ser apresentado a mensagem "Email invalido, verifique o email inserido."

# RF06 Validar celular
*Regras*
- Necessário verificar o Telefone inserido no cadastro

*Cenários*
/Cenário1
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de Telefone 
E Finalizar o cadastro
Então quero que seja validado o Telefone.

/Cenário2
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de Telefone 
E Finalizar o cadastro
E preenchi um Telefone valido
Então deverá ser apresentado as proximas telas

/Cenário3
Dado que cliquei no botão de "cadastro"
Quando Preencher a informação de Telefone 
E Finalizar o cadastro
E preenchi um Telefone inválido
Então deve ser apresentado a mensagem "Telefone invalido, verifique o Telefone inserido."

# RF07 Realizar o login
*Regras*
- Ser possível realizar o login com um email e senha já cadastrados

*Cenários*
/Cenário1
Dado que acessei a tela inicial do aplicativo
Quando inserir um email e senha já cadastrados
E clicar no botão "Entrar"
Então deverá ser realizado o login

/Cenário2
Dado que acessei a tela inicial do aplicativo
Quando inserir um email e senha não cadastrados
E clicar no botão "Entrar"
Então deverá ser apresentado a mensagem "Login/senha invalidos."


# RF08 Escolher modalidade

# RF09 Quantidade de Pet

# RF10 Escolher forma de pagamento

# RF11 Calcular viagem

# RF12 Informar tempo estimado da chegada do veículo

# RF13 Solicitar transporte

# RF14 Acompanhar o pet no mapa

# RF15 Conversar com o motorista

# RF16 Agendar Viagem

# RF17 Permitir confirmação da viagem

# RF18 Finalizar viagem

# RF19 Permitir cancelamento da viagem

# RF20 Realizar avaliação do viagem.
