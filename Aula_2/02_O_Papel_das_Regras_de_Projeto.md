# Navegação
[< Anterior](01_O_Ecossistema_de_Assistencia_Integrada.md) | [Índice](../Aula%202.md) | [Próximo >](03_Context_Engineering.md)

---

## O Papel das Regras de Projeto (`.cursorrules` / `.clinerules`)

Para garantir que a IA não gere código "genérico", utilizamos arquivos de instrução que definem o padrão de engenharia do time.

**Exemplo de conteúdo para uma regra Spring Boot:**

* "Sempre utilize Java 25 e Records para DTOs."
* "Utilize MapStruct para conversão entre Entity e DTO."
* "Todas as rotas devem ter documentação Swagger/OpenAPI."
* "Tratamento de exceções via `@ControllerAdvice` é obrigatório."

Antes de "codar" com a IA, precisamos ensinar a ela **quem somos** e **como trabalhamos**. Sem contexto, a IA gera código genérico; com contexto, ela gera código que parece ter sido escrito por um membro sênior do seu time. Vamos tratar isso como **Context Engineering**.

---

# Navegação
[< Anterior](01_O_Ecossistema_de_Assistencia_Integrada.md) | [Índice](../Aula%202.md) | [Próximo >](03_Context_Engineering.md)