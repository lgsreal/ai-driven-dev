# Navegação
[< Anterior](05_Ferramentas_de_Chat.md) | [Índice](../Aula%201.md) | [Próximo >](07_Discussao_AI_Drift.md)

---

## Ferramentas CLI

* [1. Claude Code (Anthropic)](#1-claude-code-anthropic)
* [2. Gemini CLI (Google)](#2-gemini-cli-google)
* [3. Aider (Aider)](#3-aider-aider)
* [4. GitHub Copilot CLI (Microsoft)](#4-github-copilot-cli-microsoft)
* [5. Codex CLI (OpenAI)](#5-codex-cli-openai)

A nova fronteira da produtividade ignora a interface visual para ganhar velocidade.

As ferramentas de Linha de Comando (CLI) representam a evolução da produtividade para desenvolvedores que desejam manter o foco no terminal. Elas variam desde assistentes de comandos simples até agentes autônomos capazes de gerenciar repositórios inteiros.

### 1. Claude Code (Anthropic)

É um agente de codificação agentic que reside no terminal. Ele não apenas sugere código, mas executa tarefas complexas de engenharia.

* **O que faz:** Pesquisa bases de código, edita arquivos, executa testes, corrige bugs e gerencia commits/PRs.
* **Diferencial:** Possui um raciocínio superior para entender a arquitetura do projeto e tomar decisões autônomas com base no feedback do terminal (ex: rodar um teste, ler o erro e corrigir o código sozinho).
* **Acesso:** [https://claude.com/product/claude-code](https://claude.com/product/claude-code)

### 2. Gemini CLI (Google)

Ferramenta focada em trazer a imensa janela de contexto do Gemini para automação via scripts.

* **O que faz:** Permite interagir com modelos Gemini (1.5 Pro/2.0 Flash) para análise de arquivos locais, geração de documentação e tradução de código em lote.
* **Diferencial:** Ideal para processar arquivos gigantescos ou logs de erro massivos que não caberiam em outros modelos, aproveitando a integração nativa com o ecossistema Google Cloud.
* **Acesso:** [https://geminicli.com/](https://geminicli.com/)

### 3. Aider (Aider)

Um assistente de *pair programming* de código aberto que se conecta a quase qualquer LLM (via API ou local).

* **O que faz:** Edita múltiplos arquivos simultaneamente e, após cada alteração bem-sucedida, realiza o **commit automático** no Git com uma mensagem descritiva gerada pela IA.
* **Diferencial:** Cria um "mapa do repositório" para dar contexto à IA sem gastar muitos tokens. É altamente versátil, permitindo usar Claude 3.5, GPT-4o ou modelos locais via Ollama.
* **Acesso:** [https://aider.chat/](https://aider.chat/)

### 4. GitHub Copilot CLI (Microsoft)

A extensão do Copilot para o ambiente de shell, focada em produtividade operacional.

* **O que faz:** Explica comandos complexos de terminal, sugere comandos baseados em linguagem natural e ajuda com flags obscuras do Git ou Docker.
* **Diferencial:** Integração direta com a conta GitHub do desenvolvedor. É excelente para "traduzir" intenções (ex: "como listar processos na porta 8080?") em comandos executáveis.
* **Acesso:** [https://github.com/features/copilot/cli/](https://github.com/features/copilot/cli/)

### 5. Codex CLI (OpenAI)

Uma interface simplificada para interagir com os modelos da OpenAI voltados para código diretamente do terminal.

* **O que faz:** Geração rápida de snippets, refatoração de arquivos isolados e explicações de código via linha de comando.
* **Diferencial:** Focado em velocidade e simplicidade para desenvolvedores que já utilizam a API da OpenAI e desejam um atalho rápido no workflow diário.
* **Acesso:** [https://developers.openai.com/codex/cli](https://developers.openai.com/codex/cli)

---

# Navegação
[< Anterior](05_Ferramentas_de_Chat.md) | [Índice](../Aula%201.md) | [Próximo >](07_Discussao_AI_Drift.md)
