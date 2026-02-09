# Navegação
[< Anterior](02_O_Papel_das_Regras_de_Projeto.md) | [Índice](../Aula%202.md) | [Próximo >](04_Exemplo_Pratico_Clone_API_GNews.md)

---

## Context Engineering

> **A Regra de Ouro:** "A IA não sabe o que você não disse."
> O objetivo desta aula é criar uma "Bússola de Engenharia" que guiará todos os agentes e assistentes dentro do repositório.

---

## Onde o Contexto Reside?

Para que a IA entenda o projeto, o contexto deve ser estruturado em camadas:

1. **Contexto Global:** Regras de negócio, visão do produto e glossário.
2. **Contexto de Engenharia (ADRs & Patterns):** Por que escolhemos Java 25? Por que usamos PostgreSQL?
3. **Contexto de Sintaxe:** Como nomeamos variáveis? Como estruturamos pacotes?

---

## Estrutura Sugerida de Diretório de Contexto

Podemos criar o diretório `docs/context/` ou `.ai/` no raiz do projeto:

```bash
.ai/
├── standards.md        # Convenções de código e estilo
├── architecture.md     # Decisões de alto nível (ADRs)
├── tech-stack.md       # Versões e libs permitidas (Java 25, Spring AI)
└── business-rules.md   # Lógica de negócio e domínio

```

---

## Exemplos Práticos de Arquivos de Contexto

Aqui estão alguns modelos que podemos utilizar como base para criar os arquivos de contexto.

### `standards.md` (Convenções)

```markdown
# Coding Standards - Java 25

## Naming Conventions
- **Classes:** PascalCase (ex: `DiplomaService`)
- **Métodos/Variáveis:** camelCase (ex: `emitirCertificado`)
- **Records:** Devem ser usados para DTOs e Value Objects.
- **Interfaces:** Não usar prefixo 'I'. O sufixo 'Impl' é desencorajado; prefira nomes semânticos.

## Patterns
- Use **Constructor Injection** para dependências (evite @Autowired em campos).
- Use **Optional** para retornos que podem ser nulos.
- Exceções de domínio devem ser mapeadas no `GlobalExceptionHandler`.

```

### `architecture.md` (ADRs - Architectural Decision Records)

Este é o ponto onde a IA entende o "porquê".

```markdown
# ADR 001: Persistência de Dados

* **Status:** Aceito
* **Decisão:** Usar PostgreSQL com Hibernate/JPA.
* **Contexto:** Precisamos de integridade referencial forte para os registros de diplomas.
* **Consequência para a IA:** Não sugira bancos NoSQL para este módulo. Sempre gere scripts de migration (Flyway/Liquibase).

```

---

## Como Conectar isso às Ferramentas (The "Agent Instruction")

Não basta ter os arquivos; precisamos dizer para a IA lê-los.

### No Cursor (`.cursorrules`):

Crie um arquivo `.cursorrules` na raiz e aponte para seus docs:

```text
Sempre leia os arquivos em .ai/ antes de propor qualquer mudança.
Siga estritamente as convenções em .ai/standards.md.
Não utilize bibliotecas fora das especificadas em .ai/tech-stack.md.

```

### No Antigravity e outras IDEs ou Extensões:

Você pode iniciar o chat dizendo:

> "Aja como um sênior deste projeto. Analise o diretório `.ai/` para entender nossas decisões arquiteturais e padrões de código antes de começarmos."

---

# Navegação
[< Anterior](02_O_Papel_das_Regras_de_Projeto.md) | [Índice](../Aula%202.md) | [Próximo >](04_Exemplo_Pratico_Clone_API_GNews.md)