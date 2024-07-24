import React from "react";
import "./CSS/contato.css";

export default function Contato() {
  return (
    <nav>
      <ul className="contact-images">
        <li>
          <a href="https://api.whatsapp.com/send?phone=71986924559">
            <img src="./public/img/whatsappG.png" alt="Botão de telefone" />
            <p>WhatsApp</p>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/omenino_do_computador/">
            <img src="./public/img/instagramG.png" alt="Botão de e-mail" />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://telegram.me/omenino_do_computador">
            <img src="./public/img/telegrama.png" alt="Botão de mensagem" />
            <p>Telegram</p>
          </a>
        </li>
        <li>
          <a href="mailto:Tiago.design.arte@gmail.com">
            <img src="./public/img/gmailG.png" alt="Botão de e-mail" />
            <p>E-mail</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tiago-palmeira123">
            <img src="./public/img/linkedinG.png" alt="Botão do LinkedIn" />
            <p>LinkedIn</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
