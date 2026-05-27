# Navegação
[< Anterior](04_Prompt_Engineering_Antipadroes.md) | [Índice](../Aula%201.md) | [Próximo >](06_Ferramentas_de_Chat.md)

---

## Discussão: AI Drift
* [AI Drift](#ai-drift)
* [Comparativo de Modelos para Programação (Mai/2026)](#comparativo-de-modelos-para-programação-mai2026)
* [Como mitigar o risco de Drift no desenvolvimento?](#como-mitigar-o-risco-de-drift-no-desenvolvimento)
### AI Drift
O conceito de **AI Drift** refere-se à mudança de comportamento ou perda de qualidade de um modelo ao longo do tempo, geralmente após atualizações silenciosas feitas pelos provedores para melhorar segurança ou eficiência, mas que acabam "emburrecendo" o modelo em tarefas lógicas ou de nicho. Em 2026 o problema ganhou tanta tração que surgiram serviços dedicados (Confident AI, Langfuse, Arize, LangSmith, DriftWatch) focados exclusivamente em detectar regressões silenciosas de qualidade que dashboards tradicionais de APM não capturam.
* **Degradação Logística:** Estudos recentes mostram que, embora a performance geral em benchmarks sintéticos suba, a capacidade de **raciocínio em múltiplos passos** pode cair. Avaliações independentes de RULER em janelas de contexto longas confirmam que a atenção do modelo degrada significativamente na segunda metade de contextos muito longos — uma limitação que afeta tanto Llama 4 Scout (10M tokens) quanto Claude Opus 4.7 (1M tokens). Desenvolvedores notam que o modelo começa a ignorar restrições ("não use a biblioteca X") que antes ele respeitava.
* **Verbosity Drift:** Um problema comum onde o modelo passa a explicar demais e codar de menos, ou vice-versa, perdendo o equilíbrio necessário para o par de programação. Auditorias de produção em 2026 documentaram casos de assistentes de código que "deslizaram" para respostas progressivamente mais defensivas e verbosas ao longo de semanas — sem nenhuma alteração visível no modelo ou no prompt.
* **Sycophancy Drift:** Avaliações independentes em 2026 mostram que GPT-5 e Gemini 3.1 Pro apresentam *answer drift* mensurável quando o usuário expressa discordância — ou seja, mudam de resposta correta para incorreta sob pressão. Claude tende a se sair melhor nessa métrica, mas nenhum modelo está imune.
* **O Risco do "Overfitting" em Benchmarks:** Muitos modelos novos estão sendo treinados agressivamente nos conjuntos de dados dos testes (HumanEval, SWE-bench Verified). Resultado: eles brilham no teste, mas falham em **codebases reais** com dependências complexas. O SWE-Bench Pro evidencia isso: a diferença de 22+ pontos entre scaffolds básicos e otimizados usando o **mesmo modelo** mostra que a precisão "pura" do modelo é menos importante do que o ferramental ao redor dele.
### Comparativo de Modelos para Programação (Mai/2026)
| Categoria | Modelo Recomendado | Por que é mais estável? |
| --- | --- | --- |
| **Arquitetura & Refatoração** | **Claude Opus 4.7 / Sonnet 4.6** | Atualmente o mais confiável para não quebrar lógica em arquivos grandes. Opus 4.7 lidera o SWE-bench Pro (64.3%) para código complexo. Em testes do Claude Code, Sonnet 4.6 foi preferido sobre Opus 4.5 em 59% das sessões — um mid-tier batendo o flagship anterior. |
| **Lógica Pura & Algoritmos** | **DeepSeek V4 / GLM-5.1** | DeepSeek V4-Pro chega a ~80.6% no SWE-bench Verified sob licença MIT. Foco técnico e menos "policiado" por filtros que às vezes interferem na lógica de código. GLM-5.1 lidera o SWE-bench Pro entre open-weights (58.4%). |
| **Open Source / Local** | **GLM-4.7 Thinking / Qwen 3.6-35B-A3B** | GLM-4.7 Thinking é o melhor modelo open-weight para self-host. Para rodar em hardware de consumidor (RTX 4090/5090), Qwen 3.6-35B-A3B entrega 73.4% no SWE-bench Verified sob Apache 2.0. Atenção ao compliance em empresas com restrições a provedores chineses. |
| **Autocomplete (FIM)** | **Codestral / Cursor Composer-1** | Codestral segue forte em "Fill-in-the-Middle" (FIM) para extensões de IDE. Em 2026, o Composer-1 do Cursor entrou nesse nicho com excelente latência para predições inline. |
| **Análise de Repositório (Monorepo)** | **Gemini 3.1 Pro / Llama 4 Scout** | Gemini 3.1 Pro mantém janela de 1M tokens com ótima recuperação contextual e lidera GPQA Diamond (94.3%). Llama 4 Scout tem a maior janela disponível (10M tokens), mas a degradação de atenção na segunda metade é maior. |
| **Scripts & Debug Rápido** | **GPT-5.2 / GPT-5.2-Codex** | Alta velocidade e excelente integração nativa com o ecossistema VS Code/Cursor/Codex. GPT-5.5 lidera o Terminal-Bench 2.0 (82.7%) para fluxos agentic em terminal, embora ainda sofra mais com *drift* de segurança que Claude. |
| **Custo / Worker em massa** | **DeepSeek V4 Flash / Kimi K2.6** | DeepSeek V4 Flash custa ~$0.14/M tokens, com qualidade aceitável para tarefas de implementação em volume. Kimi K2.6 fica em ~$0.30/run em benchmarks reais, 3-4× mais barato que Opus/GPT com qualidade comparável em tarefas bem definidas. |
### Como mitigar o risco de Drift no desenvolvimento?
1. **Pinagem de Versão via API:** Evitar usar o modelo "latest" em pipelines de automação. Use versões datadas (ex: `claude-opus-4-7-2026-05-27`) para garantir que o comportamento do seu script não mude da noite para o dia. Em 2026 isso ficou ainda mais crítico: a OpenAI removeu modelos "GPT-5.5" da página oficial de preços apesar de URLs ainda referenciarem o nome, mostrando que até a nomenclatura dos provedores muda silenciosamente.
2. **Bring Your Own Model (BYOM) / Model Routing:** Se o Claude começar a falhar em uma tarefa, o dev deve ser capaz de trocar para o DeepSeek, Gemini ou GLM no meio do processo. Plataformas como Cursor, OpenRouter e roteadores internos já fazem isso automaticamente — Opus 4.7 para tarefas difíceis, Sonnet 4.6 para o dia-a-dia, DeepSeek V4 Flash para worker calls em volume.
3. **Testes Automatizados para a IA (LLM Evals):** Se você criou um prompt complexo, tenha um "unit test" para a saída da IA. Se o modelo sofrer drift, seus testes de integração vão acusar a falha na geração de código. Ferramentas como DeepEval, Langfuse e Confident AI viraram parte do pipeline padrão de quem leva LLM a produção.
4. **Drift Monitoring em produção:** Para aplicações críticas, monitorar a distribuição semântica das respostas (não só latência/erros HTTP). Boas práticas exigem degradação sustentada (15-30 min de métricas degradadas) antes de disparar alerta, para evitar fadiga por transientes.
---

# Navegação
[< Anterior](04_Prompt_Engineering_Antipadroes.md) | [Índice](../Aula%201.md) | [Próximo >](06_Ferramentas_de_Chat.md)
