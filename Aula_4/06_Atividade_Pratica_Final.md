# Navegação
[< Anterior](05_Discussao_Paradoxo_Modernizacao.md) | [Índice](../Aula%204.md)

---

# Atividade Prática Final: Auditoria e Refatoração de Arquitetura

**Objetivo:** Aplicar técnicas de "Modernização de Sistemas" no projeto desenvolvido nas aulas anteriores. O aluno deve identificar dívidas técnicas geradas (inclusive pela própria IA) e realizar uma refatoração estruturada.

---

## O Desafio

Você deve realizar uma **Auditoria Técnica** no sistema que você implementou (baseado na arquitetura da Aula 1). O foco não é adicionar novas funcionalidades, mas garantir que o sistema seja **sustentável, seguro e moderno**.

### Entregáveis:

1. **Código Refatorado:** No seu repositório GitHub (branch `refactoring`).
2. **Relatório de Modernização:** Um arquivo PDF ou Markdown.

---

## Estrutura do Relatório

### 1. Diagnóstico de Dívida Técnica

O aluno deve usar um agente de IA para escanear o projeto e listar:

* **Code Smells:** (Ex: Métodos muito longos, classes com responsabilidades múltiplas).
* **Violação de Padrões:** (Ex: Lógica de banco de dados dentro do Controller).
* **Obsolescência:** (Ex: Uso de loops manuais onde caberia Java Streams).

> **Dica de Prompt:** *"Aja como um Arquiteto de Software. Analise meu projeto e gere um relatório de dívida técnica, focando em violações de SOLID e acoplamento excessivo."*

### 2. Plano de Refatoração e Execução

Documente as intervenções realizadas. Para cada problema encontrado, registre:

* **Problema:** (Ex: Classe `ProcessadorPedido` está fazendo validação, cálculo e salvamento).
* **Técnica Aplicada:** (Ex: Extração de Service, Implementação de Pattern Strategy, conversão para Records).
* **Prompt de Refatoração:** O comando utilizado na IDE para transformar o código.

> **Dica:** Inclua nos seus prompts de refatoração: *Ao final, descreva brevemente o problema resolvido e a técnica aplicada.*

---

# Navegação
[< Anterior](05_Discussao_Paradoxo_Modernizacao.md) | [Índice](../Aula%204.md)
