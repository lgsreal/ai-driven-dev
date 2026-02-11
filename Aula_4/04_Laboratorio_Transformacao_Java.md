# Navegação
[< Anterior](03_Seguranca_Validacao_Refactoring.md) | [Índice](../Aula%204.md) | [Próximo >](05_Discussao_Paradoxo_Modernizacao.md)

---

## Exemplo Prático: O Laboratório de Transformação (Projeto Java)

Utilizaremos um projeto em Java como base para exercitar esses conceitos, dada a sua robustez e clareza para visualização de camadas.

### O Desafio: "The Legacy Rescue"

Os alunos receberão um [projeto legado](https://github.com/lgsreal/aircompany) com:

* Versionamento defasado (Java 8).
* Testes fracos.
* Código com alta complexidade ciclomática.

### Roteiro de Refatoração:

#### 1. Fase de Pré-Refatoração (Blindagem)

* **Baseline de Testes de Caracterização:** Criação de uma rede de segurança com testes que "congelam" o comportamento atual do sistema, garantindo que a funcionalidade original não seja alterada durante a refatoração.
* **Mapeamento de Acoplamento e Dívida Técnica:** Análise diagnóstica do projeto para identificar gargalos, dependências circulares e riscos arquiteturais antes de iniciar qualquer mudança estrutural.

#### 2. Fase de Execução (Transformação Assistida)

* **Migração de Versão e Otimização de Records:** Atualização do projeto para o Java 25, utilizando **Records** para substituir POJOs verbosos, eliminando código *boilerplate* de entidades como `Voo` e `Passageiro`.
* **Refatoração de Domínio (Desacoplamento):** Separação das regras de negócio (validações e cálculos) das camadas de persistência e apresentação, movendo a lógica para serviços de domínio puros.
* **Modernização de Coleções e Streams:** Substituição de iterações manuais e loops `for` por processamento declarativo com **Java Streams** e as novas **Sequenced Collections**, aumentando a legibilidade do código.


#### 3. Fase de Pós-Refatoração (Validação e Evolução)

* **Implementação de Virtual Threads (Project Loom):** Evolução da performance do sistema através de threads leves, otimizando o processamento paralelo de tarefas bloqueantes (como I/O de banco de dados) sem sobrecarregar o S.O.
* **Audit de Segurança e Tratamento de Exceções:** Revisão pós-migração para garantir que novos padrões não introduziram falhas e para centralizar o tratamento de erros em um `GlobalExceptionHandler` moderno.
* **Relatório de Modernização (Dívida Paga):** Consolidação dos ganhos técnicos, medindo a redução de linhas de código, melhoria na complexidade e a robustez da nova arquitetura.

É possível usar os [prompts pré-definidos](04.1_Guia_Demonstracao.md) para a demonstração.

É possível usar um [projeto alternativo](https://github.com/lgsreal/fowler-refactoring).

---

# Navegação
[< Anterior](03_Seguranca_Validacao_Refactoring.md) | [Índice](../Aula%204.md) | [Próximo >](05_Discussao_Paradoxo_Modernizacao.md)
