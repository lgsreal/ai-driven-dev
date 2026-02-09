# Navegação
[< Anterior](01_AI_Code_Reviews_Alem_da_Analise_Estatica.md) | [Índice](../Aula%203.md) | [Próximo >](03_AI_TDD_e_Testes_de_Infraestrutura.md)

---

## Geração Automática de Documentação e Diagramas (Mermaid.js)

O grande desafio da documentação técnica não é escrevê-la, mas **mantê-la atualizada**. Frequentemente, o código evolui e os diagramas em ferramentas visuais (como Visio ou Lucidchart) tornam-se obsoletos por falta de sincronia.

Na **Engenharia de Software 2.0**, a documentação é tratada como **Documentation as Code (DaC)**. A IA lê o código-fonte e gera representações visuais e textuais em tempo real, garantindo que a documentação seja um reflexo fiel da implementação.

---

## O Poder do Mermaid.js

O **Mermaid.js** é uma ferramenta baseada em JavaScript que renderiza gráficos a partir de texto simples inspirado no Markdown. Tornou-se a linguagem favorita para integração com LLMs por três motivos principais:

* **Texto-Nativo:** Por ser puramente textual, as IAs conseguem gerar e interpretar diagramas com precisão cirúrgica (diferente de tentar editar uma imagem binária).
* **Versionável:** Os diagramas residem dentro do repositório Git. Se a arquitetura muda, o diff do diagrama aparece no Pull Request.
* **Renderização Nativa:** É suportado nativamente pelo **GitHub**, GitLab, Notion e pela maioria das IDEs modernas (via plugins), eliminando a necessidade de exportar imagens.

---

## Tipos de Diagramas Essenciais via IA

Para uma documentação técnica robusta, devemos dominar a geração de quatro tipos principais de diagramas:

1. **Diagramas de Fluxo (Flowcharts):** Excelentes para documentar algoritmos complexos ou regras de negócio ramificadas (ex: fluxo de aprovação de crédito ou estados de um pedido).
2. **Diagramas de Sequência:** O "padrão ouro" para arquiteturas distribuídas e Microsserviços. Mostra como os objetos/serviços interagem ao longo do tempo (ex: fluxo de autenticação entre App, Auth-Service e Database).
3. **Diagramas de Entidade-Relacionamento (ERD):** Crucial para visualizar o banco de dados. A IA pode ler suas classes `@Entity` (JPA/Hibernate) e gerar o esquema visual instantaneamente.
4. **Diagramas de Classe:** Úteis para entender a hierarquia, acoplamento e os padrões de projeto aplicados (Strategy, Factory, Observer).

---

## Estratégias de Geração

Existem duas abordagens principais para implementar isso no dia a dia do time:

### 1. In-IDE (Prompting Contextual)

É a forma mais rápida de gerar documentação durante o desenvolvimento.

* **Ação:** Selecione o código de uma funcionalidade na sua IDE (ex.: Antigravity).
* **Prompt:** *"Analise estas 3 classes e gere um diagrama de sequência em formato Mermaid descrevendo o fluxo de salvamento de dados, incluindo as validações."*
* **Resultado:** O código Mermaid é gerado no chat e você o cola diretamente no seu arquivo `.md`.

### 2. Pipeline/CLI (Automação Total)

Para projetos de grande escala, o objetivo é a documentação "viva".

* **Ação:** Configurar scripts no pipeline de CI/CD (GitHub Actions).
* **Fluxo:** Um script varre o código em busca de mudanças estruturais e utiliza uma LLM via CLI para atualizar o arquivo `ARCHITECTURE.md` automaticamente antes do merge.

---

## Atividade Prática

**Tarefa:** Vá ao seu projeto (clone da API GNews, ou projeto que você implementou na Aula 2) e gere um arquivo `docs/diagrams.md`.

1. Peça à IA para gerar um **Diagrama ERD** baseado nas entidades JPA que você criou anteriormente.
2. Gere um **Diagrama de Sequência** de um endpoint, detalhando, por exemplo, a passagem pela camada de Security, Service e Repository.
3. Visualize o resultado diretamente no Preview do VS Code ou suba para o GitHub para ver a renderização nativa.

---

# Navegação
[< Anterior](01_AI_Code_Reviews_Alem_da_Analise_Estatica.md) | [Índice](../Aula%203.md) | [Próximo >](03_AI_TDD_e_Testes_de_Infraestrutura.md)