# [AI-Driven Development](README.md)
## A nova stack do desenvolvedor
*Prof MSc Luiz Real*

---

## Conteúdo
* [O espectro da assistência](#o-espectro-da-assistência)
  * [Autocomplete](#autocomplete)
  * [Chat](#chat)
  * [Inline Edit](#inline-edit)
  * [Agentic Mode](#agentic-mode)
* [Prompt Engineering para Devs](#prompt-engineering-para-devs---técnicas-de-prompting)
  * [Técnicas de Prompting](#prompt-engineering-para-devs---técnicas-de-prompting)
    * [Zero-Shot Prompting](#zero-shot-prompting)
    * [Few-Shot Prompting](#few-shot-prompting)
    * [Chain-of-Thought (CoT)](#chain-of-thought-cot)
    * [Iterative / Self-Criticism Prompting](#iterative--self-criticism-prompting)
  * [Padrões de Prompting](#prompt-engineering-para-devs---padrões-de-prompting)
    * [Persona Pattern](#persona-pattern)
    * [Template Pattern](#template-pattern)
    * [Contextual Anchor](#contextual-anchor)
  * [Antipadrões de Prompting](#prompt-engineering-para-devs---antipadrões-de-prompting)
    * [The Wall of Text](#the-wall-of-text)
    * [Ambiguous Constraints](#ambiguous-constraints)
    * [The "Yes-Man" Trap](#the-yes-man-trap)
    * [Over-Reliance on Zero-Shot](#over-reliance-on-zero-shot)
    * [Prompt Leakage & Security Neglect](#prompt-leakage--security-neglect)
* [Dica de Ouro do Prompting (Ancoragem de Contexto)](#dica-de-ouro-do-prompting-ancoragem-de-contexto)
* [Ferramentas de Chat](#ferramentas-de-chat)
  * [ChatGPT](#1-chatgpt-openaius)
  * [Claude](#2-claude-anthropicus)
  * [Gemini](#3-gemini-googleus)
  * [DeepSeek](#4-deepseek-deepseekch)
  * [Mistral](#5-mistral--le-chat-mistral-aifr)
  * [Amazon Q](#6-amazon-q-awsus)
  * [Grok](#7-grok-xaius)
  * [Maritaca](#8-maritaca-maritaca-aibr)
* [Ferramentas CLI](#ferramentas-cli)
  * [Claude Code](#1-claude-code-anthropic)
  * [Gemini CLI](#2-gemini-cli-google)
  * [Aider](#3-aider-aider)
  * [GitHub Copilot CLI](#4-github-copilot-cli-microsoft)
  * [Codex CLI](#5-codex-cli-openai)
* [Discussão: AI Drift](#discussão-ai-drift)
  * [Comparativo de Modelos para Programação (Jan/2026)](#comparativo-de-modelos-para-programação-jan2026)
  * [Como mitigar o risco de Drift no desenvolvimento?](#como-mitigar-o-risco-de-drift-no-desenvolvimento)
* [Prática: Criando um site de notícias](#prática-criando-um-site-de-notícias)
* [Prática: Criando a arquitetura de um sistema](#prática-criando-a-arquitetura-de-um-sistema)

---

## O espectro da assistência
### Autocomplete
Sugestões em tempo real baseadas no contexto imediato. Baixa latência, focado em sintaxe.

<img src="resources/autocomplete.gif" alt="autocomplete.gif" width="80%">

### Chat
Interface conversacional para dúvidas, explicações de código e geração de snippets. Usa contexto (como arquivo ou seleção).

<img src="resources/chat.gif" alt="chat.gif" width="50%">

### Inline Edit
Modificação direta no arquivo aberto. Excelente para refatorações pontuais e documentação.

<img src="resources/inline-edit.gif" alt="inline-edit.gif" width="80%">

### Agentic Mode
A IA tem autonomia para ler múltiplos arquivos, executar comandos no terminal, criar novos arquivos e planejar a solução (ex: Junie, Github Copilot).

![agentic-mode.gif](resources/agentic-mode.gif)

---

## Prompt Engineering para Devs - Técnicas de Prompting
### Zero-Shot Prompting
É o nível mais básico. Você pede para a IA realizar uma tarefa sem fornecer nenhum exemplo prévio de como fazê-la.
*   **Quando usar:** Tarefas comuns onde o modelo já tem alto conhecimento.
*   **Recurso:**

    ```java
    @Entity
    @Table(name = "produtos")
    public class Produto {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        @NotBlank(message = "O nome é obrigatório")
        @Size(min = 3, max = 100)
        private String nome;
    
        @Positive
        private BigDecimal preco;
    
        // Getters, Setters e Constructor omitidos
    }
    ```
*   **Exemplo:**
    ```
    Converta esta classe Java de entidade JPA para um Record do Java 21, mantendo as anotações do Bean Validation.
    ```

### Few-Shot Prompting
Você fornece alguns exemplos (shots) do formato de entrada e saída desejado antes de fazer a pergunta final. Isso "calibra" o estilo da resposta.
*   **Quando usar:** Quando você precisa que a IA siga um padrão de arquitetura muito específico da sua empresa.
*   **Exemplo:** 

    ```
    Exemplo 1: Entrada: find user by id.
    Saída: public UserDTO findById(Long id)...
    
    Exemplo 2: Entrada: delete product by code.
    Saída: public void deleteByCode(String code)...
    
    Agora faça: Entrada: update inventory status.
    ```

### Chain-of-Thought (CoT)
Força o modelo a "pensar alto" e quebrar o problema em passos lógicos antes de entregar o código final. Isso reduz drasticamente alucinações em lógica complexa.
*   **Quando usar:** Algoritmos complexos, cálculos ou refatorações de arquitetura.
*   **Recurso:**

    ```java
    public double calcular(double v, int t) {
        if (t == 1) return v * 0.1;
        else if (t == 2) return v * 0.05;
        else if (t == 3) return v * 0.2;
        else return 0;
    }
    ```

*   **Exemplo:**

    ```
    Analise este método calcular.
    Primeiro, identifique as responsabilidades e o que os parâmetros v e t representam.
    Segundo, sugira como aplicar o padrão Strategy para remover os IFs encadeados.
    Por fim, escreva o código refatorado e bem nomeado.
    ```

### Iterative / Self-Criticism Prompting
Nesta técnica, você pede para a IA gerar uma solução e, em seguida, pede para ela mesma encontrar falhas ou otimizações naquela solução.
*   **Quando usar:** Garantia de qualidade e segurança (Cybersecurity).
*   **Exemplo:**

    ```
    Gere um script de conexão com o banco em Python.
    
    [Após a primeira resposta do modelo...]
    
    Agora, aja como um auditor de segurança: identifique 3 vulnerabilidades nesse código e reescreva-o de forma segura.
    ```

---

## Prompt Engineering para Devs - Padrões de Prompting
### Persona Pattern
Define o papel e o nível de senioridade da IA.
*   **Recurso:**

    ```java
    public void processar() {
        synchronized(lock1) {
            synchronized(lock2) {
                // lógica de negócio
            }
        }
    }
    ```

*   **Exemplo:**

    ```
    Aja como um Principal Engineer focado em performance e concorrência.
    Revise este código Java buscando possíveis deadlocks e proponha uma solução usando CompletableFuture.
    ```

### Template Pattern
Fornece uma estrutura rígida para a resposta, facilitando o parse ou a leitura humana.
*   **Cenário:** Padronizar saídas para documentação ou relatórios de PR.
*   **Recurso:**

    ```javascript
    function login(u, p) {
        if (u == 'admin' && p == '123') return true;
        return false;
    }
    ```

*   **Exemplo:**

    ```
    Analise o código e responda seguindo estritamente este template:
    Resumo da alteração:
    Complexidade Ciclomática atual:
    Sugestão de melhoria:
    Código refatorado:
    ```

### Contextual Anchor
Em IDEs como o Cursor ou extensões de IA, você usa arquivos específicos como âncoras para que a IA não "se perca" em outros arquivos do projeto.
*   **Exemplo:** `Baseado nas regras definidas em @.cursorrules e na estrutura da interface @UserInterface.java, implemente a classe @UserServiceImpl.java.`

---

## Prompt Engineering para Devs - Antipadrões de Prompting
###  The Wall of Text
*   **O Erro:** Enviar um prompt gigantesco com múltiplos requisitos misturados, sem formatação ou hierarquia.
*   **Por que falha:** O modelo sofre de "Lost in the Middle" (perda de atenção no meio do contexto) e pode ignorar instruções cruciais.
*   **Como evitar:** Use Markdown. Separe \# Contexto, \# Requisitos, \# Restrições e \# Formato de Saída.

### Ambiguous Constraints
*   **O Erro:** Usar termos subjetivos como "faça um código performático", "deixe o código limpo" ou "use boas práticas".
*   **Por que falha:** O que é "limpo" para o modelo pode não ser o padrão do seu projeto (ex: Clean Architecture vs. KISS).
*   **Como evitar:** Seja específico. "Use Java 21, evite bibliotecas externas, implemente tratamento de exceção customizado com @ControllerAdvice."

### The "Yes-Man" Trap
*   **O Erro:** Fazer perguntas indutivas que forçam a IA a concordar com um erro. Ex: "Este código não tem vazamento de memória, certo?"
*   **Por que falha:** Modelos de linguagem tendem à adulação. Eles tentam confirmar sua hipótese mesmo que ela esteja errada.
*   **Como evitar:** Seja neutro. "Analise este código em busca de vazamentos de memória e apresente evidências pró ou contra."

### Over-Reliance on Zero-Shot
*   **O Erro:** Esperar que a IA adivinhe seu estilo de codificação e/ou da sua empresa sem nenhum exemplo.
*   **Por que falha:** Resulta em código funcional, mas que gera dívida técnica por estar fora do padrão do resto do repositório.
*   **Como evitar:** Use Few-Shot. Forneça ao menos um exemplo de uma classe similar já existente no projeto.

### Prompt Leakage & Security Neglect
*   **O Erro:** Colar logs de erro que contêm segredos, chaves de API ou dados sensíveis de clientes no prompt.
*   **Por que falha:** Dependendo da configuração da ferramenta, esses dados podem ser usados para treinamento futuro ou ficar armazenados em histórico de terceiros.
*   **Como evitar:** Use ferramentas de sanitização ou garanta que está em ambientes Enterprise com políticas de privacidade rígidas.

---

## Dica de Ouro do Prompting (Ancoragem de Contexto)
"A qualidade da saída é diretamente proporcional à qualidade do contexto, não ao tamanho do prompt."

---

## Ferramentas de Chat

Os assistentes de chat baseados em modelos de linguagem (LLMs) funcionam como o cérebro central da Engenharia de Software 2.0. Diferente do autocomplete tradicional, eles oferecem uma interface conversacional capaz de compreender intenções complexas, atuar no planejamento arquitetural e servir como um par programador sênior disponível 24/7. Eles são a porta de entrada para a resolução de problemas de alto nível, desde a refatoração de monólitos até o design de sistemas escaláveis.

### 1. ChatGPT (OpenAI/US)

* **Acesso:** [https://chatgpt.com/](https://chatgpt.com/)
* **Lançamento:** 2022.
* **Público-alvo:** Uso geral e desenvolvedores.
* **Casos de Uso:** Brainstorming, automação de tarefas e suporte.
* **Destaque em Eng. de Software:** O modelo **o1/o3** tem liderado em raciocínio lógico (*reasoning*), ideal para debugar problemas de concorrência ou algoritmos complexos.

### 2. Claude (Anthropic/US)

* **Acesso:** [https://claude.ai/](https://claude.ai/)
* **Lançamento:** 2023.
* **Público-alvo:** Profissionais que buscam alta precisão e segurança.
* **Casos de Uso:** Escrita técnica, análise de segurança e UI/UX.
* **Destaque em Eng. de Software:** Atualmente o favorito dos desenvolvedores. O recurso **Artifacts** permite criar protótipos de front-end e diagramas que rodam direto no chat.

### 3. Gemini (Google/US)

* **Acesso:** [https://gemini.google.com/](https://gemini.google.com/)
* **Lançamento:** 2023.
* **Público-alvo:** Desenvolvedores de sistemas complexos e usuários Google.
* **Casos de Uso:** Multimodalidade (vídeo/áudio) e pesquisa integrada.
* **Destaque em Eng. de Software:** **Janela de contexto massiva**. Você pode subir toda a documentação de um framework novo ou o código de um monólito para que ele encontre inconsistências.

### 4. DeepSeek (Deepseek/CH)

* **Acesso:** [https://chat.deepseek.com/](https://chat.deepseek.com/)
* **Lançamento:** 2024 (Salto em 2025).
* **Público-alvo:** Desenvolvedores e empresas focadas em custo.
* **Casos de Uso:** Matemática, lógica e automação via API.
* **Destaque em Eng. de Software:** Performance de nível GPT-4o com custo quase nulo. O modelo **DeepSeek-V3** é excelente para geração de código boilerplate e scripts.

### 5. Mistral / Le Chat (Mistral AI/FR)

* **Acesso:** [https://chat.mistral.ai/](https://chat.mistral.ai/)
* **Lançamento:** 2023.
* **Público-alvo:** Desenvolvedores que prezam por modelos abertos e eficientes.
* **Casos de Uso:** Roda muito bem "on-premise" (localmente).
* **Destaque em Eng. de Software:** O **Codestral** é um modelo treinado especificamente para código em mais de 80 linguagens. Tende a ser recomendado para rodar dentro da infraestrutura da empresa.

### 6. Amazon Q (AWS/US)

* **Acesso:** [https://aws.amazon.com/q/](https://aws.amazon.com/q/)
* **Lançamento:** 2023 (Evolução do CodeWhisperer).
* **Público-alvo:** Desenvolvedores que utilizam a nuvem AWS.
* **Casos de Uso:** Gestão de infraestrutura e governança.
* **Destaque em Eng. de Software:** **Modernização de Legado**. Possui agentes específicos (Code Transformation) que automatizam o upgrade de versões do Java (ex: de Java 8 para 17 ou 21) quase sem intervenção humana.

### 7. Grok (xAI/US)

* **Acesso:** [https://grok.com/](https://grok.com/)
* **Lançamento:** 2023.
* **Público-alvo:** Usuários do X e quem busca menos filtros de censura.
* **Casos de Uso:** Análise de tendências em tempo real.
* **Destaque em Eng. de Software:** Útil para pesquisar bugs em bibliotecas recém-lançadas, onde a solução pode estar em uma thread do X antes de chegar ao StackOverflow.

### 8. Maritaca (Maritaca AI/BR)

* **Acesso:** [https://chat.maritaca.ai](https://chat.maritaca.ai)
* **Lançamento:** 2023.
* **Público-alvo:** Setor corporativo e público brasileiro.
* **Casos de Uso:** Processamento de normas brasileiras e regras de negócio locais.
* **Destaque em Eng. de Software:** Análise de requisitos para sistemas nacionais (ex: regras do Banco Central, LGPD brasileira e tributação).

---

## Ferramentas CLI

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

## Discussão: AI Drift

O conceito de **AI Drift** refere-se à mudança de comportamento ou perda de qualidade de um modelo ao longo do tempo, geralmente após atualizações feitas pelos provedores para melhorar segurança ou eficiência, mas que acabam "emburrecendo" o modelo em tarefas lógicas ou de nicho.

* **Degradação Logística:** Estudos recentes (como os relatórios do Stanford HAI 2025) mostram que, embora a performance geral em benchmarks sintéticos suba, a capacidade de **raciocínio em múltiplos passos** pode cair. Desenvolvedores notam que o modelo começa a ignorar restrições ("não use a biblioteca X") que antes ele respeitava.
* **Verbosity Drift:** Um problema comum onde o modelo passa a explicar demais e codar de menos, ou vice-versa, perdendo o equilíbrio necessário para o par de programação.
* **O Risco do "Overfitting" em Benchmarks:** Muitos modelos novos estão sendo treinados agressivamente nos conjuntos de dados dos testes (como HumanEval). Resultado: eles brilham no teste, mas falham em **codebases reais** com dependências complexas (onde a precisão cai de ~85% para ~30%).

### Comparativo de Modelos para Programação (Jan/2026)

| Categoria | Modelo Recomendado | Por que é mais estável? |
| --- | --- | --- |
| **Arquitetura & Refatoração** | **Claude 3.7 / 4.5 Sonnet** | Atualmente o mais confiável para não quebrar lógica em arquivos grandes. Tem menos tendência a "alucinar" dependências. |
| **Lógica Pura & Algoritmos** | **DeepSeek V3 / R1** | Uso massivo de *Multi-Token Prediction* e foco técnico. É menos "policiado" por filtros morais que às vezes interferem na lógica de código. |
| **Análise de Repositório (Monorepo)** | **Gemini 2.0 / 3 Pro** | Janela de contexto massiva (2M+ tokens). É o que menos sofre para "lembrar" de uma função definida em outro módulo distante. |
| **Scripts & Debug Rápido** | **GPT-5.2 / 4.1 Turbo** | Alta velocidade e excelente integração nativa com o ecossistema VS Code/Cursor, embora sofra mais com *drift* de segurança. |

### Como mitigar o risco de Drift no desenvolvimento?

1. **Pinagem de Versão via API:** Evitar usar o modelo "latest" em pipelines de automação. Use versões datadas (ex: `gpt-4o-2024-08-06`) para garantir que o comportamento do seu script não mude da noite para o dia.
2. **Bring Your Own Model (BYOM):** Se o Claude começar a falhar em uma tarefa, o dev deve ser capaz de trocar para o DeepSeek no meio do processo.
3. **Testes Automatizados para a IA:** Se você criou um prompt complexo, tenha um "unit test" para a saída da IA. Se o modelo sofrer drift, seus testes de integração vão acusar a falha na geração de código.

---

## Prática: Criando um site de notícias

**Objetivo:** Criar um site de notícias em português que consuma a API GNews.

* **Requisitos básicos:**
  * Página inicial com notícias gerais
  * Campo de busca para pesquisar notícias
  * Menu de navegação com as categorias da API
  * Botões de compartilhamento em redes sociais para cada notícia
  * Design responsivo (funcionar bem em desktop e mobile)
* **Recursos fornecidos:**
  * Documentação da API: https://docs.gnews.io/
  * API Key: Cadastre-se para ter 100 requisições gratuitas por dia.
  * Exemplo de chamada: https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&apikey=SUA_API_KEY
* **Dicas:**
  * Lembre-se das técnicas de prompt.
  * Você também pode usar a própria IA para melhorar seu prompt.
  * Utilize um dos chats vistos.
* **Exemplo de resultado final:**

![site-noticia-responsivo.png](resources/site-noticia-responsivo.png)
![site-noticia.png](resources/site-noticia.png)

---

## Prática: Criando a arquitetura de um sistema

**Objetivo:** Criar a arquitetura de um sistema (projeto livre) para ser a base de implementação da próxima aula.

* **Defina:**
  * Funcionalidades principais
  * Tipos de usuários e suas permissões
  * Diagrama de arquitetura (camadas: frontend, backend, banco de dados)
  * Entidades principais e relacionamentos
  * Endpoints da API (principais rotas REST)
  * Tecnologias sugeridas (pode ser genérico: "banco relacional", "framework web", etc.)
  * Fluxos principais (diagrama ou descrição textual)
* **Entregável:**
  * Documento PDF ou Markdown com diagramas (pode usar draw.io, Excalidraw, Mermaid, etc.) via Github

---

[Voltar ao início](#ai-driven-development)