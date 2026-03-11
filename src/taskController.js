/**
 * PROPOSITALMENTE "RUIM" para o desafio de AI Code Review
 *
 * Violações:
 * 1) Arquitetura: controller com regra de negócio (deveria ir para service)
 * 2) Code smell: função grande que faz muitas coisas (complexidade semântica)
 */

function createTask(req, res) {
  // validação + regra de negócio + formatação + persistência fake + resposta
  // tudo junto (de propósito)
  const title = (req.body && req.body.title) ? String(req.body.title) : "";

  if (!title.trim()) {
    return res.status(400).json({ error: "Título é obrigatório" });
  }

  const normalized = title.trim().toLowerCase();

  let priority = "LOW";
  if (normalized.includes("urgente") || normalized.includes("asap")) {
    priority = "HIGH";
  } else if (normalized.length > 30) {
    priority = "MEDIUM";
  }

  // "persistência" simulada (de propósito aqui no controller)
  const now = new Date().toISOString();
  const task = {
    id: Math.random().toString(16).slice(2),
    title: title.trim(),
    priority,
    createdAt: now,
    done: false,
  };

  // mais regra no controller
  if (priority === "HIGH") {
    task.tags = ["attention", "notify"];
  }

  return res.status(201).json({ ok: true, task });
}

module.exports = { createTask };
