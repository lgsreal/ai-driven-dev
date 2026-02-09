# Navegação
[< Anterior](03_Context_Engineering.md) | [Índice](../Aula%202.md) | [Próximo >](05_Pratica_Implementando_a_Sua_Arquitetura.md)

---

## Exemplo Prático: Clone da API GNews

**Objetivo:** Criar uma API REST funcional, como um clone da API GNews, usando exclusivamente ferramentas integradas. Os endpoints devem ser iguais, para que possamos apenas substituir a chamada de API no portal de notícias.

### Roteiro de Implementação:

1. **Criar prompt de contexto:** Use a documentação da API GNews e defina regras de projeto (ex.: sua linguagem/framework de preferência, banco de dados, etc.) para criar um *prompt de contexto*.
2. **Criar um prompt de implementação:** Defina as regras de implementação, criando um prompt que permita que a IA implemente, *em modo agente*, a API GNews, após o prompt de contexto. Aqui é importante pensar em dados de testes, pois não podemos usar dados reais de notícias, por conta de copyright. Isso inclui imagens.
3. **Executar os prompts:** Use a ferramenta de agente da sua IDE, como o Antigravity, para executar os prompts.
4. **Executar o projeto:** Execute o projeto e verifique se ele está funcionando corretamente. Peça ajustes para o agente, se necessário.
5. **Ajustar o portal de notícias:** Altere a chamada de API no portal de notícias para usar a sua API local.
6. **Testar:** Teste o portal de notícias para garantir que ele está funcionando corretamente. Peça ajustes para o agente, se necessário.

### Clone da API GNews 

Aqui está um exemplo de como um agente implementou o clone da API GNews seguindo os passos acima.

No projeto estão disponíveis os arquivos markdown com os dois prompts criados, em *extras*.

Veja o projeto no GitHub: [lgsreal/gnews](https://github.com/lgsreal/gnews)

---

# Navegação
[< Anterior](03_Context_Engineering.md) | [Índice](../Aula%202.md) | [Próximo >](05_Pratica_Implementando_a_Sua_Arquitetura.md)