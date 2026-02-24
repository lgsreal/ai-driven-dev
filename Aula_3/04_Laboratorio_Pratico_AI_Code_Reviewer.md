# Navegação
[< Anterior](03_AI_TDD_e_Testes_de_Infraestrutura.md) | [Índice](../Aula%203.md) | [Próximo >](05_Pratica_Geracao_Dados_Testes_Borda.md)

---

## Laboratório Prático – AI Code Reviewer com GitHub Actions

> **Objetivo:** Implementar um fluxo de CI (*Continuous Integration*) que utiliza LLMs para realizar auditorias de segurança e qualidade em tempo real no projeto GNews.

---

## O Cenário: Blindando o GNews

Nesta atividade, você atuará como um Engenheiro de DevSecOps. Seu objetivo é configurar o repositório **GNews** para que nenhum código seja integrado sem antes passar pelo crivo de um revisor baseado em IA. Este revisor deve focar em detectar vulnerabilidades críticas antes mesmo que um humano precise olhar o código.

**Repositório Base:** [lgsreal/gnews](https://github.com/lgsreal/gnews)

---

## Passo a Passo da Configuração

### 1. Obtenção da Chave de API

Para que o GitHub Actions possa "conversar" com a IA, precisamos de uma credencial.

* **Recomendação:** Acesse o [Google AI Studio](https://aistudio.google.com/) e gere uma API Key para o modelo **Gemini 2.0 Flash** (que possui um excelente nível gratuito).
* Alternativamente, você pode usar chaves da OpenAI (GPT-4o) ou Anthropic (Claude), caso possua créditos.

### 2. Configuração do GitHub Secret

Nunca coloque chaves de API diretamente no código!

1. No seu fork do GNews, vá em **Settings** > **Secrets and variables** > **Actions**.
2. Clique em **New repository secret**.
3. Nomeie como `AI_API_KEY` e cole o valor da sua chave.

### 3. Criação do Workflow de Revisão

Crie o arquivo `.github/workflows/ai-review.yml` no seu repositório com o conteúdo abaixo:

```yaml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write # Necessário para comentar no PR
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: AI Reviewer
        uses: anc95/ChatGPT-CodeReview@main # Action que orquestra a revisão
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: ${{ secrets.AI_API_KEY }} # Funciona com Gemini via proxy ou OpenAI nativo
          OPENAI_API_ENDPOINT: https://generativelanguage.googleapis.com/v1beta/openai
          LANGUAGE: Portuguese
          MODEL: gemini-2.0-flash # Ajuste para o modelo configurado
          PROMPT: |
            Aja como um Engenheiro de Segurança Sênior (DevSecOps). 
            Analise o DIFF deste Pull Request buscando:
            1. Vulnerabilidades OWASP Top 10 (especialmente SQL Injection e Insecure Deserialization).
            2. Code Smells e complexidade ciclomática desnecessária.
            3. Aderência às melhores práticas de Java 25 e Spring Boot 3.4.
            4. Responda em Português com comentários técnicos e construtivos diretamente nas linhas do código afetado.

```

---

## O Desafio Prático: "O Ataque ao GNews"

Agora vamos testar se o seu sentinela está acordado.

### 1. Inserir uma Vulnerabilidade Proposital

Crie um novo branch chamado `feature/search-update` e introduza propositalmente uma falha de **SQL Injection**. No seu serviço de busca, altere o código para concatenar strings diretamente na consulta:

```java
// Exemplo de código vulnerável a ser inserido
public List<News> findByTitle(String userInput) {
    String query = "SELECT * FROM news WHERE title = '" + userInput + "'";
    return jdbcTemplate.query(query, new NewsRowMapper());
}

```

### 2. Abrir o Pull Request

Suba o branch para o GitHub e abra um Pull Request para o seu próprio `main`.

### 3. Análise Crítica

Acompanhe a execução na aba **Actions**:

* **Precisão:** A IA conseguiu detectar o SQL Injection?
* **Didática:** O comentário explicou o risco e sugeriu o uso de `PreparedStatement` ou `NamedParameterJdbcTemplate`?
* **Falso Positivo:** Ela criticou algo que na verdade estava correto?
* **Desafio Extra:** Tente realizar um "Prompt Injection" no código ou camuflar a vulnerabilidade com ofuscação simples para ver se a IA ainda consegue capturar a intenção maliciosa.

---

### Dica

Documente o comportamento da IA. Entender os limites do seu revisor automático é tão importante quanto saber programar. Se a IA falhar em detectar o erro, como você ajustaria o `PROMPT` no workflow para torná-la mais rigorosa?

---

# Navegação
[< Anterior](03_AI_TDD_e_Testes_de_Infraestrutura.md) | [Índice](../Aula%203.md) | [Próximo >](05_Pratica_Geracao_Dados_Testes_Borda.md)