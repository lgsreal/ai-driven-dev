# Navegação
[< Anterior](01_O_Espectro_da_Assistencia.md) | [Índice](../Aula%201.md) | [Próximo >](03_Prompt_Engineering_Padroes.md)

---

## Prompt Engineering para Devs - Técnicas de Prompting

* [Dica de Ouro do Prompting (Ancoragem de Contexto)](#dica-de-ouro-do-prompting-ancoragem-de-contexto)
* [Zero-Shot Prompting](#zero-shot-prompting)
* [Few-Shot Prompting](#few-shot-prompting)
* [Chain-of-Thought (CoT)](#chain-of-thought-cot)
* [Iterative / Self-Criticism Prompting](#iterative--self-criticism-prompting)
### Dica de Ouro do Prompting (Ancoragem de Contexto)
"A qualidade da saída é diretamente proporcional à qualidade do contexto, não ao tamanho do prompt."
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

# Navegação
[< Anterior](01_O_Espectro_da_Assistencia.md) | [Índice](../Aula%201.md) | [Próximo >](03_Prompt_Engineering_Padroes.md)
