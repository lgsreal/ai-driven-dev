## Arquitetura em camadas
- Controllers devem ser "finos" (sem regra de negócio).
- Regras de negócio devem ficar na camada Service.
- Controllers apenas recebem requisições e retornam respostas.
