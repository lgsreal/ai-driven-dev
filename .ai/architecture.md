# Arquitetura do Projeto

## Visão geral
Este projeto segue uma arquitetura em camadas:

- Controller (API / entrada)
- Service (regras de negócio)
- Repository (acesso a dados)

Fluxo padrão:
Controller → Service → Repository → (DB)

## Regras
1. Controller não deve conter regra de negócio.
2. Service concentra validações e regras do domínio.
3. Repository só faz operações de persistência/consulta.
4. DTOs podem ser usados para entrada/saída da API.
5. Exceções devem ser tratadas com mensagens claras para o usuário.

## Estrutura sugerida de pastas
- controller/
- service/
- repository/
- dto/
- domain/ (ou model/)
- config/
