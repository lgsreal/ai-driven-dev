# Navegação
[< Anterior](03_Prompt_Engineering_Padroes.md) | [Índice](../Aula%201.md) | [Próximo >](05_Ferramentas_de_Chat.md)

---

## Prompt Engineering para Devs - Antipadrões de Prompting

* [The Wall of Text](#the-wall-of-text)
* [Ambiguous Constraints](#ambiguous-constraints)
* [The "Yes-Man" Trap](#the-yes-man-trap)
* [Over-Reliance on Zero-Shot](#over-reliance-on-zero-shot)
* [Prompt Leakage & Security Neglect](#prompt-leakage--security-neglect)
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

# Navegação
[< Anterior](03_Prompt_Engineering_Padroes.md) | [Índice](../Aula%201.md) | [Próximo >](05_Ferramentas_de_Chat.md)
