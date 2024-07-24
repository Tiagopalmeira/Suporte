import React from "react";
import "./CSS/servicos.css";
import SlideService from "./Slideservicos";


export default function Servicos() {
    return (

    <div className="cremosinho">
            <img src="./public/img/9.png" alt="" className="foto"/>      
      <div>
        <h1>
          Aqui é onde você encontra sua rede de profissionais qualificados para
          atender você e sua empresa.
        </h1>
      </div>
            <div>
                <h3> Confira abaixo alguns de nosso serviços: </h3>
            </div>
      <div>
        <h2>Outsourcing (terceirização). </h2>
        <h6>
        Manter equipe própria de TI pode ser caro e tirar o foco do seu negócio. Temos o objetivo de prover equipe especializada e mantém seu parque tecnológico atualizado, para que você possa se dedicar ao seu negócios – e economizar com TI: sem se preocupar com férias, afastamentos, treinamento e certificação.
        </h6>
      </div>
      <div>
        <h2>Suporte de TI.</h2>
        <h6>
        Através de software de gerenciamento e processos bem delineados, mantemos servidores e estações de trabalho com atualizações automáticas de seus sistemas operacionais e demais programas. Somos capazes de identificar falhas em seus sistemas, antes mesmo que você perceba. E entregamos relatórios mensais para que você tenha a certeza de que tudo está funcionando dentro do esperado.
        </h6>
      </div>
      <div>
        <h2>Monitoramento.</h2>
        <h6>
        Através de software de gerenciamento e processos bem delineados, mantemos servidores e estações de trabalho com atualizações automáticas de seus sistemas operacionais e demais programas, além de executarmos rotinas periódicas.
        </h6>
      </div>
      <div>
        <h2>Gestão de Infraestrutura de Rede.</h2>
        <h6>
        A gestão eficiente da infraestrutura de rede é essencial para o funcionamento contínuo de sua empresa. Nossa equipe especializada oferece serviços abrangentes de gestão de infraestrutura de rede, incluindo monitoramento proativo, manutenção preventiva e resolução rápida de problemas. Com um foco em maximizar a disponibilidade e a segurança da sua rede, podemos ajudá-lo a alcançar seus objetivos de negócios com confiança.
        </h6>
      </div>
      <div>
        <h2>Soluções de CFTV (Circuito Fechado de Televisão).</h2>
        <h6>
        Oferecemos soluções completas de CFTV para garantir a segurança de sua empresa. Com uma variedade de câmeras de alta definição e sistemas de monitoramento avançados, ajudamos a proteger suas instalações e a monitorar atividades em tempo real, proporcionando tranquilidade para você e sua equipe.
        </h6>
      </div>
      <div>
        <h2>Automação Comercial e Residencial.</h2>
        <h6>
        A automação comercial e residencial pode aumentar significativamente a eficiência e a conveniência. Oferecemos soluções de automação personalizadas que simplificam processos, economizam tempo e energia e melhoram a experiência do usuário. Desde controle de iluminação e temperatura até sistemas de segurança integrados, ajudamos você a transformar sua empresa ou residência em um ambiente inteligente e conectado.
        </h6>
      </div>
      <div>
        <h2>Desenvolvimento de Sites e Aplicações Web. (Circuito Fechado de Televisão):</h2>
        <h6>
        Uma presença online sólida é fundamental para o sucesso nos negócios modernos. Oferecemos serviços abrangentes de desenvolvimento web, desde a criação de sites responsivos e otimizados para SEO até o desenvolvimento de aplicativos web personalizados. Combinando design atraente, funcionalidade intuitiva e desempenho superior, ajudamos você a alcançar seus objetivos online e a cativar seu público-alvo.
        </h6>
      </div>
      <div>
        <h2>Design Gráfico e Identidade Visual. </h2>
        <h6>
        Uma forte identidade visual é essencial para diferenciar sua empresa e criar uma impressão duradoura. Oferecemos serviços de design gráfico personalizados, incluindo criação de logotipos, materiais de marketing, embalagens e muito mais. Com uma abordagem criativa e orientada para o cliente, ajudamos a transmitir a mensagem certa e a destacar sua marca em um mercado competitivo.
        </h6>
        <div className="fotosservicos">
        <h1> Alguns de nossos serviços: </h1>
        </div>
        
        <div>
            
        </div>
        <SlideService/>
      </div>
    </div>
  );
}
