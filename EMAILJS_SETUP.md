# Configuração EmailJS - Guia Passo a Passo

## O que foi feito?
✅ Removido FormSubmit.co
✅ Adicionado EmailJS (funciona 100% no navegador)
✅ Atualizado o JavaScript do formulário

## Como Configurar (5 minutos)

### 1️⃣ Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up Free"**
3. Preencha o cadastro (use seu email pessoal)
4. Confirme seu email

### 2️⃣ Obter a Chave Pública (Public Key)

1. Na dashboard, vá para **Account** (canto superior direito)
2. Copie sua **Public Key** (tipo: `abc123def456ghi789`)
3. Abra `assets/js/form.js` e substitua:
   ```javascript
   const EMAILJS_PUBLIC_KEY = "SEU_PUBLIC_KEY_AQUI";
   ```
   Por:
   ```javascript
   const EMAILJS_PUBLIC_KEY = "sua_chave_aqui";
   ```

### 3️⃣ Conectar Gmail (ou outro email)

1. Na dashboard, clique em **Email Services**
2. Clique **"Add Service"**
3. Selecione **Gmail**
4. Clique **"Connect Gmail"**
5. Autorize o EmailJS (você receberá um **Service ID**, ex: `service_abc123def456`)

### 4️⃣ Criar um Template de Email

1. Clique em **Email Templates**
2. Clique **"Create New Template"**
3. Configure assim:
   - **Template Name:** `Contact Form` (ou o nome que quiser)
   - **From Email:** `{{from_email}}`
   - **To Email:** `{{to_email}}`
   - **Subject:** `{{subject}}`
   - **Template Content:**
   ```
   Nome: {{from_name}}
   Email: {{from_email}}
   Assunto: {{subject}}
   
   Mensagem:
   {{message}}
   ```

4. Salve e copie o **Template ID** (ex: `template_xyz789abc`)

### 5️⃣ Atualizar o form.js

Abra `assets/js/form.js` e atualize as 3 constantes no topo:

```javascript
const EMAILJS_PUBLIC_KEY = "sua_public_key_copiada"; // Do passo 2
const EMAILJS_SERVICE_ID = "service_seu_id"; // Do passo 3
const EMAILJS_TEMPLATE_ID = "template_seu_id"; // Do passo 4
```

### 6️⃣ Testar

1. Salve o arquivo
2. Abra seu portfólio no navegador
3. Vá até a seção de **Contato**
4. Preencha o formulário e clique **"Enviar Mensagem"**
5. Se tudo OK, verá: ✅ **"Mensagem enviada! Obrigado."**

## Dicas Importantes

- ✅ **Gratuito:** 200 emails/mês no plano free
- ✅ **Seguro:** Não expõe suas credenciais (Public Key é pública mesmo)
- ✅ **Sem backend:** Funciona 100% no lado do cliente
- ⚠️ Se esquecer de colocar as chaves corretas, verá erro no console (F12)

## Troubleshooting

**Não está enviando?**
1. Abra o console (F12 → Console)
2. Procure por erros vermelhos
3. Verifique se copiou as chaves corretamente
4. Certifique-se que autorizou o Gmail

**Dúvidas?** Consulte: https://www.emailjs.com/docs/

---

Qualquer dúvida, é só chamar! 🚀
