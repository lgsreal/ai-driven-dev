# Navegação
[< Anterior](04_Laboratorio_Pratico_AI_Code_Reviewer.md) | [Índice](../Aula%203.md)

---

# Prática: Geração de Dados e Testes de Borda (Edge Cases)

> **O Desvio do Desenvolvedor:** Naturalmente, tendemos a testar nossos sistemas com dados previsíveis (ex: "Teste 1", "João Silva", "123456"). Isso cria uma falsa sensação de segurança. A IA nos permite automatizar o **caos** e a **diversidade de dados**.

---

## 1. Geração de Massa de Dados Realista

Em sistemas de produção brasileiros, validar dados como CPF, CNPJ e CEP com algoritmos reais é um requisito básico. A IA elimina a necessidade de geradores manuais ou scripts complexos de terceiros.

### O Poder do Contexto Local

Ao pedir massa de dados, seja específico sobre a localização e as regras de negócio:

> **Exemplo de Prompt:** *"Gere um arquivo JSON com 50 registros de alunos brasileiros. Os nomes devem ser diversos, CPFs devem ser válidos (seguindo o algoritmo de dígito verificador) e as datas de nascimento devem ser consistentes com alunos de pós-graduação (entre 1980 e 2002)."*

### Benefícios para o GNews

No projeto GNews, isso permite testar a paginação e a renderização de feeds com centenas de notícias variadas em segundos, em vez de cadastrar uma a uma.

---

## Explorando Cenários de Borda (Edge Cases)

Muitos incidentes em produção ocorrem por falta de "imaginação" durante a fase de testes. A IA pode atuar como um **QA Adversário**.

### Expansão de Pensamento

Peça para a IA analisar um método específico e identificar o que você esqueceu:

* *"Analise este método de processamento de datas e sugira 5 cenários de erro não cobertos (ex: anos bissextos, mudanças de fuso horário/horário de verão, formatos ISO-8601 malformados)."*

### Chaos Engineering

Inverta o papel da IA:

* *"Aja como um tester malicioso especializado em Pentest. Como você tentaria quebrar esse endpoint REST? Considere Null Pointer Exceptions, SQL Injection camuflado e Buffer Overflow através de strings imensas."*

---

## Prática: Fortalecendo o GNews

Agora que o seu pipeline de Code Review está ativo, vamos fortalecer a suíte de testes automatizados do projeto utilizando o **Antigravity**.

### Exercício de Prompting na IDE

1. Abra a classe de serviço principal do GNews no seu ambiente de desenvolvimento.
2. Utilize o assistente (Antigravity ou Gemini integrado) com o seguinte comando:

> **Prompt:** *"Baseado na estrutura da API de notícias deste projeto, realize as seguintes tarefas:
> 1. Gere um arquivo `src/test/resources/payloads/news_edge_cases.json` contendo:
> * Uma notícia com título em caracteres especiais e emojis (UTF-8 complexo).
> * Uma notícia com um corpo de texto de 50.000 caracteres (Stress Test).
> * Uma notícia com campos obrigatórios nulos.
> 
> 
> 2. Em seguida, crie uma classe de teste de integração no Spring Boot que utilize `@ParameterizedTest` para percorrer esse JSON e validar se o sistema trata cada caso graciosamente (retornando 400 Bad Request ou erro de validação) em vez de lançar um 500 Internal Server Error."*
> 
> 

### O que observar no resultado:

* **Robustez:** O sistema foi capaz de lidar com o payload gigante sem estourar a memória (*Heap Space*)?
* **Sanitização:** O título com caracteres especiais quebrou a renderização ou o banco de dados?
* **Validação:** A IA utilizou as anotações do `jakarta.validation` corretamente para validar os campos nulos?

---

## Conclusão

Ao final desta aula, seu projeto GNews deve ter:

1. Um pipeline de **AI Code Review** comentando em cada Pull Request.
2. Diagramas **Mermaid** atualizados descrevendo a arquitetura.
3. Testes robustos cobrindo **Edge Cases** que antes eram invisíveis.

---

# Navegação
[< Anterior](04_Laboratorio_Pratico_AI_Code_Reviewer.md) | [Índice](../Aula%203.md)