# Navegação
[< Anterior](02_Prompt_Engineering_Tecnicas.md) | [Índice](../Aula%201.md) | [Próximo >](04_Prompt_Engineering_Antipadroes.md)

---

## Prompt Engineering para Devs - Padrões de Prompting

* [Persona Pattern](#persona-pattern)
* [Template Pattern](#template-pattern)
* [Contextual Anchor](#contextual-anchor)
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

# Navegação
[< Anterior](02_Prompt_Engineering_Tecnicas.md) | [Índice](../Aula%201.md) | [Próximo >](04_Prompt_Engineering_Antipadroes.md)
