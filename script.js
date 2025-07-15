document.addEventListener("DOMContentLoaded", () => {
  const ramos = Array.from(document.querySelectorAll(".ramo"));

  function actualizarBloqueos() {
    ramos.forEach(r => {
      const prereq = r.dataset.prereq;
      if (!prereq) return;
      const ids = prereq.split(",");
      if (ids.every(id => document.querySelector(`.ramo[data-id="${id}"]`).classList.contains("aprobado")))
        r.classList.remove("bloqueado");
      else r.classList.add("bloqueado");
    });
  }

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      actualizarBloqueos();
    });
  });

  actualizarBloqueos();
});
