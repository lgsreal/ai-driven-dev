# Navegação
[< Anterior](04_Prompt_Engineering_Antipadroes.md) | [Índice](../Aula%201.md) | [Próximo >](06_Ferramentas_de_Chat.md)

---

## Discussão: AI Drift

* [AI Drift](#ai-drift)
* [Comparativo de Modelos para Programação (Jan/2026)](#comparativo-de-modelos-para-programação-jan2026)
* [Como mitigar o risco de Drift no desenvolvimento?](#como-mitigar-o-risco-de-drift-no-desenvolvimento)

### AI Drift
O conceito de **AI Drift** refere-se à mudança de comportamento ou perda de qualidade de um modelo ao longo do tempo, geralmente após atualizações feitas pelos provedores para melhorar segurança ou eficiência, mas que acabam "emburrecendo" o modelo em tarefas lógicas ou de nicho.

* **Degradação Logística:** Estudos recentes (como os relatórios do Stanford HAI 2025) mostram que, embora a performance geral em benchmarks sintéticos suba, a capacidade de **raciocínio em múltiplos passos** pode cair. Desenvolvedores notam que o modelo começa a ignorar restrições ("não use a biblioteca X") que antes ele respeitava.
* **Verbosity Drift:** Um problema comum onde o modelo passa a explicar demais e codar de menos, ou vice-versa, perdendo o equilíbrio necessário para o par de programação.
* **O Risco do "Overfitting" em Benchmarks:** Muitos modelos novos estão sendo treinados agressivamente nos conjuntos de dados dos testes (como HumanEval). Resultado: eles brilham no teste, mas falham em **codebases reais** com dependências complexas (onde a precisão cai de ~85% para ~30%).

### Comparativo de Modelos para Programação (Jan/2026)

| Categoria | Modelo Recomendado | Por que é mais estável? |
| --- | --- | --- |
| **Arquitetura & Refatoração** | **Claude 3.7 / 4.5 Sonnet** | Atualmente o mais confiável para não quebrar lógica em arquivos grandes. Tem menos tendência a "alucinar" dependências. |
| **Lógica Pura & Algoritmos** | **DeepSeek V3 / R1** | Uso massivo de *Multi-Token Prediction* e foco técnico. É menos "policiado" por filtros morais que às vezes interferem na lógica de código. |
| **Open Source / Local** | **Qwen 2.5-Coder** | O melhor modelo aberto para código hoje. Versátil e multilíngue. Atenção ao compliance em empresas com restrições a provedores chineses. |
| **Autocomplete (FIM)** | **Codestral** | Especializado em "Fill-in-the-Middle" (FIM), ideal para extensões de IDE. É focado em código puro, sendo menos capaz em raciocínio lógico geral. |
| **Análise de Repositório (Monorepo)** | **Gemini 2.0 / 3 Pro** | Janela de contexto massiva (2M+ tokens). É o que menos sofre para "lembrar" de uma função definida em outro módulo distante. |
| **Scripts & Debug Rápido** | **GPT-5.2 / 4.1 Turbo** | Alta velocidade e excelente integração nativa com o ecossistema VS Code/Cursor, embora sofra mais com *drift* de segurança. |

### Como mitigar o risco de Drift no desenvolvimento?

1. **Pinagem de Versão via API:** Evitar usar o modelo "latest" em pipelines de automação. Use versões datadas (ex: `gpt-4o-2024-08-06`) para garantir que o comportamento do seu script não mude da noite para o dia.
2. **Bring Your Own Model (BYOM):** Se o Claude começar a falhar em uma tarefa, o dev deve ser capaz de trocar para o DeepSeek no meio do processo.
3. **Testes Automatizados para a IA:** Se você criou um prompt complexo, tenha um "unit test" para a saída da IA. Se o modelo sofrer drift, seus testes de integração vão acusar a falha na geração de código.

---

# Navegação
[< Anterior](04_Prompt_Engineering_Antipadroes.md) | [Índice](../Aula%201.md) | [Próximo >](06_Ferramentas_de_Chat.md)
