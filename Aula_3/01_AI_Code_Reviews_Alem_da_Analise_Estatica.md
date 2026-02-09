# Navegação
[Índice](../Aula%203.md) | [Próximo >](02_Geracao_Automatica_Documentacao_Diagramas.md)

---

## AI Code Reviews: Além da Análise Estática

O Code Review evoluiu de uma simples "leitura de diff" para uma **Análise Contextual Profunda**. Enquanto as ferramentas tradicionais de SAST (*Static Application Security Testing*) buscam padrões de texto, o **AI-Driven SAST** busca entender a **intenção** e o **fluxo lógico** do desenvolvedor.

### Triagem Inteligente

A grande dor do SAST tradicional é o ruído. A IA resolve isso através da análise de fluxo:

* **SAST Tradicional (Baseado em Regras):** Identifica o uso de uma função "perigosa" (ex: `Runtime.exec()`) e dispara um alerta, mesmo que o comando esteja "hardcoded" e seja seguro.
* **AI SAST (Baseado em Contexto):** Analisa a origem do dado (*source*) e o destino (*sink*). Ele entende se uma entrada de usuário chega sem sanitização a uma query SQL ou se o código está operando em um ambiente isolado (*sandbox*).
* **Benefício:** Redução drástica no ruído. O desenvolvedor só é interrompido por problemas reais e exploráveis.

### Detecção de Code Smells em Larga Escala

A IA identifica padrões subjetivos que ferramentas puramente matemáticas (como o SonarQube tradicional) costumam ignorar:

* **Complexidade Semântica:** Identifica quando um método "perdeu o foco" e faz coisas demais, mesmo que sua complexidade ciclomática (caminhos de execução) ainda esteja dentro do limite.
* **Inconsistência de Padrões:** A IA atua como guardiã do DNA do time. Ela avisa quando um novo código fere o `.ai/standards.md` definido na Aula 2.
* *Exemplo:* "Você utilizou `@Autowired` no campo, mas a decisão arquitetural do projeto é utilizar *Constructor Injection*."

---

## Ferramentas de Mercado

Para um fluxo de trabalho profissional, estas são as ferramentas que dominam o cenário de automação de revisão:

* **Qodo (ex-Codium):** Agentes especializados que não apenas revisam o PR, mas sugerem planos de teste completos para validar a nova funcionalidade.
* **CodeRabbit:** Integra-se diretamente ao GitHub/GitLab. Oferece um resumo em linguagem natural do que o PR faz e lista pontos de atenção em formato de chat.
* **Snyk DeepCode AI:** Une análise estática simbólica com aprendizado de máquina para encontrar vulnerabilidades lógicas complexas que ferramentas de regex jamais pegariam.
* **SonarQube AI:** A evolução do clássico. Introduz o "AI-Clean Code", sugerindo refatorações automáticas que consideram as bibliotecas e versões que você já usa no projeto.

---

## Framework de Revisão

Uma revisão eficiente não deve ser um "mural de reclamações". Ensinamos a IA (e o time) a categorizar feedbacks para priorizar a ação do desenvolvedor:

| Categoria | Ícone | Descrição | Bloqueia Merge? |
| --- | --- | --- | --- |
| **Action Required** | 🔴 | Erros de lógica, bugs críticos ou falhas de segurança (OWASP). | **Sim** |
| **Recommended** | 🟡 | Melhorias de performance, legibilidade ou refatoração de código "cheiroso". | **Opcional** |
| **Minor/Optional** | ⚪ | Sugestões de estilo, *nitpicks* ou preferências pessoais de design. | **Não** |

---

## O Segredo é o Contexto

O diferencial de um **AI Code Review** de nível sênior não é o modelo de linguagem em si (GPT, Claude ou Gemini), mas o **acesso ao contexto**.

Se a ferramenta de revisão tiver acesso aos arquivos que criamos na aula anterior:

1. `.ai/architecture.md`
2. `.ai/standards.md`
3. `.ai/tech-stack.md`

Ela deixará de fazer comentários genéricos de internet e passará a revisar o código comparando-o com as **nossas decisões de projeto**. Ela se torna um membro do time que conhece as regras da casa.

---

## Prática

1. **Configuração:** Integrar um bot de revisão (como CodeRabbit ou uma GitHub Action customizada) no repositório do projeto.
2. **O Desafio:** Criar um Pull Request propositalmente ferindo uma regra definida no `.ai/standards.md` e contendo um *Code Smell* de complexidade.
3. **Validação:** Verificar se a IA categorizou corretamente o erro e se sugeriu a refatoração baseada no contexto do arquivo de padrões.

---

# Navegação
[Índice](../Aula%203.md) | [Próximo >](02_Geracao_Automatica_Documentacao_Diagramas.md)