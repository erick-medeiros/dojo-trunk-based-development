# dojo-trunk-based-development

> 📋 Resumo do desafio: Em grupos de pelo menos 3 pessoas, escolham uma das opções de miniprojeto propostos e desenvolvam utilizando branchs diferentes para cada funcionalidade do miniprojeto.

## O desafio

O desafio aqui consiste em adotar a estratégia de desenvolvimento Trunk Based Development. Após a escolha do miniprojeto as seguintes etapas devem ser seguidas:

* Criação de um repositório no GitHub por grupo 
* Configuração de uma Pipeline com GitHub Actions
* Todos as funcionalidades do miniprojeto devem virar issues no repositório
* Cada issue deve ser resolvida em um branch diferente
* E a branch deve ser mergeada na main através de Pull Requests

### Regras
* É proibido fazer `push` direto na main. Usem Pull Requests
* Quem fez o Pull Request não pode fazer o merge
* Inicialmente cada membro deve pegar uma funcionalidade para desenvolver
* Todo problema encontrado ou ideia nova deve ser cadastrada em uma issue
* Pull Requests só devem ser aceitas se estiverem passando na Pipeline do GitHub Actions

O Ciclo de desenvolvimento segue a seguinte lógica:

1. Nova issue com a alteração
2. Criação de uma branch que resolve a issue
3. Criação de uma Pull Request da nova branch
4. Pull Request é avaliada e se aprovada deve ser mergeada e a issue é fechada

### MiniProjetos

#### builtin-shell

Desenvolver uma shell apenas com comandos builtins, a nossa `builtin-shell`

#### engine-ex

Faça uma web api que gerencie uma lista de todos. Implementando as rotas GET, POST, PUT and DELETE

#### mini-pong

... transcendence

## Dicas

- Configurem Squash Merges!!! O histórico de commits fica mais legível 😁
- Quem estiver resolvendo uma issue se cadastre como Assignee 👀
- Usem códigos já desenvolvidos em outros projetos. A ideia é se acostumar com a prática do Trunk Based Development

## Bonus

Criem um Projeto no Github para organizar as issues
