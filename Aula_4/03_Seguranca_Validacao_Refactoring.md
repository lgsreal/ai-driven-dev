# Navegação
[< Anterior](02_Tecnicas_Refactoring_IA.md) | [Índice](../Aula%204.md) | [Próximo >](04_Laboratorio_Transformacao_Java.md)

---

## Segurança e Validação de Refactoring

Refatorar sem testes é apenas "estragar código de forma organizada".

* **Test-Snapshotting:** Antes de iniciar a refatoração, use a IA para gerar testes que capturem o comportamento atual do sistema (mesmo que o comportamento esteja errado, ele é o seu *baseline*).
* **Paridade Funcional:** Após a transformação, rode a suíte de testes. Se a IA sugere mudar uma lógica, ela deve provar que o resultado final para o usuário permanece o mesmo.

---

# Navegação
[< Anterior](02_Tecnicas_Refactoring_IA.md) | [Índice](../Aula%204.md) | [Próximo >](04_Laboratorio_Transformacao_Java.md)
