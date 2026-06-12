// ===== CONFIGURAÇÃO EMAILJS =====
// Substitua pela sua chave pública do EmailJS
const form = document.getElementById("contact-form");
const success = document.getElementById("form-success");

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.getElementById("contact-form");
const success = document.getElementById("form-success");

// garantir que o navegador não mostre o tooltip nativo
form.setAttribute("novalidate", "");

function setInvalid(wrapper) {
  wrapper.classList.add("invalid");
  const input = wrapper.querySelector("input, textarea");
  if (input) input.setAttribute("aria-invalid", "true");
}

function clearInvalid(wrapper) {
  wrapper.classList.remove("invalid");
  const input = wrapper.querySelector("input, textarea");
  if (input) input.removeAttribute("aria-invalid");
}

function validateField(input) {
  // trim para evitar espaços em branco
  const value = input.value ? input.value.trim() : "";
  if (input.required && value === "") return false;
  if (input.type === "email" && value !== "") {
    // usa regex simples para validar email; delega a checkValidity se preferir
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const wrappers = Array.from(form.querySelectorAll(".input-wrapper"));
  let firstInvalid = null;
  let allValid = true;

  wrappers.forEach((wrapper) => {
    const input = wrapper.querySelector("input, textarea");
    if (!input) return;
    const valid = validateField(input);
    if (!valid) {
      setInvalid(wrapper);
      allValid = false;
      if (!firstInvalid) firstInvalid = input;
    } else {
      clearInvalid(wrapper);
    }
  });

  if (!allValid) {
    // foca no primeiro inválido para mostrar ao usuário
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Se chegar aqui, o formulário está válido — enviar via EmailJS
  form.submit();
});
  // remove estado inválido quando usuário corrige o campo
  form.addEventListener("input", (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) return;
    const wrapper = input.closest(".input-wrapper");
    if (!wrapper) return;

    if (validateField(input)) {
      clearInvalid(wrapper);
    } else {
      // opcional: manter invalid até que fique válido
    }
  });