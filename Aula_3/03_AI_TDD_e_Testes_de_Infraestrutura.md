# Navegação
[< Anterior](02_Geracao_Automatica_Documentacao_Diagramas.md) | [Índice](../Aula%203.md) | [Próximo >](04_Laboratorio_Pratico_AI_Code_Reviewer.md)

---

## AI-TDD e Testes de Infraestrutura

> **Conceito Chave:** "Inversão de Fricção". No TDD tradicional, o esforço humano é maior na escrita do teste. No AI-TDD, o esforço humano é deslocado para a **definição de requisitos**, enquanto a IA lida com a verbosidade do código de teste.

---

## Test-Driven Development with AI (AI-TDD)

O TDD (*Test-Driven Development*) é amplamente reconhecido como uma das melhores práticas de engenharia, mas sofre com a baixa adesão devido à "fricção" inicial de escrever testes para um código que ainda não existe. A IA transforma esse fluxo ao atuar como o braço executor do desenvolvedor.

### O Fluxo AI-TDD (Red-Green-Refactor 2.0)

Neste novo modelo, você não escreve o código; você define a **intenção**.

1. **Prompt de Requisito (Red):** Em vez de iniciar pela classe `Service`, você fornece o contrato da API ou o requisito de negócio para a IA.
* *Exemplo:* "Dado este contrato de API, gere um conjunto de testes unitários com JUnit 5 e AssertJ que cubra os casos de borda (entrada nula, campos vazios, valores negativos e formatos de data inválidos)."
* *Resultado:* Você tem uma suíte de testes que não compila ou falha (Red).


2. **Implementação Assistida (Green):**
* Você entrega os testes falhos para a IA e pede: "Gere a implementação mínima necessária para que todos esses testes passem."
* *Resultado:* O código é gerado e os testes passam (Green).


3. **Refatoração (Refactor):**
* Com a rede de segurança dos testes pronta, você pede à IA para otimizar o código: "Melhore a legibilidade deste método, remova redundâncias e garanta que ele segue os padrões em `.ai/standards.md`."
* *Resultado:* Código limpo e validado.

---

## Testes de Integração com Testcontainers

Para aplicações Java/Spring modernas, testes unitários não são suficientes. Precisamos testar a integração com o banco de dados e mensageria de forma real. O **Testcontainers** é o padrão ouro para isso, e a IA facilita drasticamente sua configuração.

* **Configuração Complexa:** Configurar o ciclo de vida de containers no JUnit (subir o Postgres, aplicar migrations do Flyway, configurar propriedades dinâmicas) é verboso.
* **O Papel da IA:** A IA é excelente para gerar as classes de configuração base (`AbstractIntegrationTest`) que sobem containers de PostgreSQL, Redis ou Kafka de forma programática e eficiente (reutilizando containers entre testes).

---

## Mão na Massa: Laboratório GNews

Agora, vamos aplicar esses conceitos no repositório **GNews**. O objetivo é transformar o processo de desenvolvimento em um fluxo de automação onde a IA atua como revisora e garantidora da qualidade.

### Atividade: O "Robô Revisor" no Pipeline

Nesta etapa, você configurará um **GitHub Action** que utiliza uma LLM para revisar cada Pull Request aberto no seu fork do GNews.

1. **Objetivo:** Impedir que falhas de segurança (OWASP Top 10) e Code Smells sejam integrados.
2. **Ação:** O aluno deve criar um workflow que intercepta o `diff` do código e solicita à IA uma análise crítica baseada nas decisões arquiteturais do projeto.

### Prática: Gerando Massa de Dados e Casos de Borda

Muitos bugs de produção ocorrem por falta de "imaginação" nos testes. Usaremos a IA para expandir nossa cobertura.

* **Prompt de QA Adversário:** > *"Analise o serviço de busca de notícias do GNews. Aja como um tester malicioso e gere uma massa de dados em JSON que contenha tentativas de SQL Injection, caracteres Unicode complexos e payloads extremamente longos. Em seguida, gere os testes de integração que garantam que o sistema responde com as exceções corretas sem expor o stacktrace."*

---

## Desafio de Entrega

1. **Implemente uma funcionalidade nova** no GNews (ex: sistema de favoritos ou categorias) seguindo o fluxo **AI-TDD**.
2. **Documente** como a IA lidou com a geração dos testes de integração usando Testcontainers.
3. **Abra um Pull Request** e observe o AI Code Reviewer (configurado na etapa anterior) analisar seu código. Ele encontrou algo que você deixou passar?

---

# Navegação
[< Anterior](02_Geracao_Automatica_Documentacao_Diagramas.md) | [Índice](../Aula%203.md) | [Próximo >](04_Laboratorio_Pratico_AI_Code_Reviewer.md)