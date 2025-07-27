'use client';

import { useEffect, useState } from 'react';
import { pinaColada, quadratSerial, waveNautical } from '../fonts/fonts';

export default function FursuitTerms() {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const content = {
    en: {
      intro: "These Terms of Service (\"Terms\") are a legally binding agreement between you and us at Dragon Shore Studio, governing your rights and duties regarding the contracting of our creation service!",
      definitions: {
        title: "Definitions",
        items: [
          {
            term: "\"Fursuit\" or \"Furry Suit\" or \"Furry Costume\"",
            definition: "is characterized as the clothing or costume of an anthropomorphic mascot created from an original character created by a person or heavily inspired by a fictional character."
          },
          {
            term: "\"Kigurumi\" or \"Furry Pajama\"",
            definition: "is the clothing or costume in pajama style of an anthropomorphic mascot created from an original character created by a person or heavily inspired by a fictional character."
          },
          {
            term: "\"Premade\"",
            definition: "in this context is the term given to a product made without being customized by the client, of a completely original character created by the Studio."
          }
        ]
      },
      importantNote: "By placing your order, you are agreeing to the terms described in this document. Therefore, read carefully as this term is legally characterized as a service contract.",
      toc: {
        title: "Contents of This Term",
        items: [
          { text: "1 - Important Information", href: "#secao1" },
          { text: "2 - About Production", href: "#secao2" },
          { text: "3 - Financial Information", href: "#secao3" },
          { text: "4 - Contact", href: "#secao4" }
        ]
      },
      scrollTop: "Back to top",
       sections: {
         section1: {
           title: "1 - Important Information",
           importantNote: "First and foremost, it is important to emphasize respect for the artists and production team that make up Dragon Shore studio. If there is disrespect and we feel uncomfortable, we have the right to refuse your order.",
           subsections: [
             {
               title: "1.1 - Right of Refusal",
               content: "If we do not feel comfortable in producing your custom product, we have the right to politely refuse your order. Examples of what may be refused would be:",
               list: [
                 "I - Murrsuit (Costume with anatomical parts for exclusive or majority use in sexual activities)",
                 "II - Copy of Character that has copyrights",
                 "III - Anything that has problematic symbols or that characterizes hate speech, racism, LGBTphobia or xenophobia."
               ]
             },
             {
               title: "1.2 - Client Profile",
               content: "Our client must be or be over 18 years of age and be legally responsible for their actions. Unfortunately, we will not be accepting orders for custom Fursuits or Kigurumis for minors for legal purposes, even upon request from parent/mother or legal guardian.",
               list: [
                 "I - Minors can purchase \"Premade\" Fursuits and Kigurumis from us, but we are not responsible for future adjustments needed in size or fit.",
                 "II - If we believe the client has malicious or controversial intentions with our product, we retain the right to refuse service."
               ]
             }
           ]
         },
         section2: {
           title: "2 - About Production",
           list: [
             "As soon as the initial payment (Read 3.1a. About the Slot) is made, the client will be publicly listed in the commission queue.",
             "The delivery period for the order will depend on the complexity of the order, and if any unforeseen circumstances occur, the client will be informed.",
             "As soon as we start your product, we will inform the client that the process has started and we will request confirmation of all custom product details",
             "Finishing and final touches will be done after confirmation of client satisfaction.",
             "After completion, the product will be photographed for promotional purposes, documented in all its details for Shipping guarantee purposes and Manufacturing Defect, and then sent by the client's chosen shipping method."
           ]
         },
         section3: {
           title: "3 - Financial Information",
           subsections: [
             {
               title: "3.1 - Payment",
               content: "Payment will be divided into two parts:",
               list: [
                 "a. About the Slot: 50% of the total product value will be paid in advance to reserve your place in the production queue. This amount is non-refundable.",
                 "b. Completion: The other 50% of the total product value will be paid when the product is finished and ready for shipping."
               ],
               paymentMethodsTitle: "Accepted payment methods:",
               paymentMethods: [
                 "PIX",
                 "Bank Transfer",
                 "PayPal (Conversion fee at client's expense)"
               ]
             }
           ]
         },
         section4: {
           title: "4 - Contact",
           content: "For questions, quotes or support, contact us through the channels below:",
           contacts: [
             { label: "Production Manager (Telegram): ", value: "@MekhyW", link: "https://t.me/MekhyW" },
             { label: "Production Manager (Discord): ", value: "mekhyw", link: "https://discord.com/users/306202256636641290" },
             { label: "Instagram:", value: "@dragonshore", link: "https://www.instagram.com/dragonshore/" },
             { label: "Telegram Channel:", value: "@dragonshore", link: "https://t.me/dragonshore" },
             { label: "Email:", value: "dragonshorestudio@gmail.com", link: "mailto:dragonshorestudio@gmail.com" }
           ],
           signature: {
             title: "Dragon Shore Studios",
             subtitle: "We craft a wave of vibrant and creative products for every adventurer on board 🍹⚓️"
           }
         }
       }
     },
    pt: {
      intro: "Estes Termos de Serviço (\"Termos\") são um acordo legal vinculante entre você e nós do Studio Dragon Shore, que regem seu direito e seus deveres quando se trata da contratação do nosso serviço de criação!",
      definitions: {
        title: "Definições",
        items: [
          {
            term: "\"Fursuit\" ou \"Furry Suit\" ou \"Fantasia Furry\"",
            definition: "se caracteriza como a roupa ou fantasia de mascote antropomórfico criado a partir de um personagem original criado por uma pessoa ou intensamente inspirado em um personagem fictício."
          },
          {
            term: "\"Kigurumi\" ou \"Pijama Furry\"",
            definition: "é a roupa ou fantasia em estilo pijama de mascote antropomórfico criado a partir de um personagem original criado por uma pessoa ou intensamente inspirado em um personagem fictício."
          },
          {
            term: "\"Premade\"",
            definition: "nesse contexto é o termo dado a um produto feito sem ser personalizado pelo cliente, de um personagem completamente original criado pelo Studio."
          }
        ]
      },
      importantNote: "Ao efetuar o seu pedido, você está concordando com os termos descritos neste documento. Portanto, leia com atenção pois este termo é caracterizado legalmente como um contrato de serviço.",
      toc: {
        title: "Conteúdos Deste Termo",
        items: [
          { text: "1 - Informações Importantes", href: "#secao1" },
          { text: "2 - Sobre A Produção", href: "#secao2" },
          { text: "3 - Informações Financeiras", href: "#secao3" },
          { text: "4 - Contato", href: "#secao4" }
        ]
      },
      scrollTop: "Voltar ao topo",
       sections: {
         section1: {
           title: "1 - Informações Importantes",
           importantNote: "Antes de mais nada, é importante reforçar o respeito aos artistas e a equipe de produção que compõem o estúdio Dragon Shore. Caso haja desrespeito e nós nos sentirmos desconfortáveis, temos o direito de recusar o seu pedido.",
           subsections: [
             {
               title: "1.1 - Direito de Recusa",
               content: "Caso não nos sentirmos confortáveis na produção do seu produto personalizado, temos o direito de educadamente recusar seu pedido. Exemplos do que pode ser recusado seriam:",
               list: [
                 "I - Murrsuit (Fantasia com partes anatômicas para uso exclusivo ou majoritário em atividade sexuais)",
                 "II - Cópia de Personagem que possui direitos autorais",
                 "III - Qualquer coisa que possua símbolos problemáticos ou que caracterize discurso de ódio, racismo, LGBTfobia ou xenofobia."
               ]
             },
             {
               title: "1.2 - Perfil do Cliente",
               content: "Nosso cliente precisa possuir ou ser maior de 18 anos de idade e ser legalmente responsável por suas ações. Infelizmente, não estaremos aceitando pedidos de Fursuits ou Kigurumis customizadas para menores de idade por fins legais, mesmo sob pedido de pai/mãe ou responsável legal.",
               list: [
                 "I - Menores de idade podem adquirir Fursuits e Kigurumis \"Premades\" conosco, porém não nos responsabilizamos por futuros ajustes necessários em tamanho ou caimento da mesma.",
                 "II - Caso acreditemos que o cliente possui intenções maliciosas ou controversas com nosso produto, retemos o direito de recusa ao serviço."
               ]
             }
           ]
         },
         section2: {
           title: "2 - Sobre a Produção",
           list: [
             "Assim que o pagamento inicial (Leia 3.1a. Sobre o Slot) for realizado, o cliente será listado publicamente na fila de comissões.",
             "O período de entrega para a encomenda levará dependendo da complexidade do pedido, e caso aconteça algum imprevisto, o cliente será informado.",
             "Assim que iniciarmos seu produto, iremos informar ao cliente que o processo se iniciou e iremos solicitar confirmação de todos os detalhes do produto personalizado",
             "Finalização e arremate será feito após confirmação de satisfação do cliente.",
             "Após finalização, o produto será fotografado para fins de divulgação, documentado em todos os seus detalhes para fins de garantia de Envio e Defeito de Fabricação, e então sendo enviado pelo método de envio escolhido do cliente."
           ]
         },
         section3: {
           title: "3 - Informações Financeiras",
           subsections: [
             {
               title: "3.1 - Pagamento",
               content: "O pagamento será dividido em duas partes:",
               list: [
                 "a. Sobre o Slot: 50% do valor total do produto será pago antecipadamente para reservar sua vaga na fila de produção. Este valor não é reembolsável.",
                 "b. Finalização: Os outros 50% do valor total do produto será pago quando o produto estiver finalizado e pronto para envio."
               ],
               paymentMethodsTitle: "Formas de pagamento aceitas:",
               paymentMethods: [
                 "PIX",
                 "Transferência Bancária",
                 "PayPal (Taxa de conversão por conta do cliente)"
               ]
             }
           ]
         },
         section4: {
           title: "4 - Contato",
           content: "Para dúvidas, orçamentos ou suporte, entre em contato conosco através dos canais abaixo:",
           contacts: [
             { label: "Gerente de Produção (Telegram): ", value: "@MekhyW", link: "https://t.me/MekhyW" },
             { label: "Gerente de Produção (Discord): ", value: "mekhyw", link: "https://discord.com/users/306202256636641290" },
             { label: "Instagram:", value: "@dragonshore", link: "https://www.instagram.com/dragonshore/" },
             { label: "Canal do Telegram:", value: "@dragonshore", link: "https://t.me/dragonshore" },
             { label: "Email:", value: "dragonshorestudio@gmail.com", link: "mailto:dragonshorestudio@gmail.com" }
           ],
           signature: {
             title: "Dragon Shore Studios",
             subtitle: "We craft a wave of vibrant and creative products for every adventurer on board 🍹⚓️"
           }
         }
       }
     }
  };

  const currentContent = content[language as keyof typeof content];

  useEffect(() => {
    // Scroll to top functionality
    const scrollTopButton = document.querySelector('.scroll-top');
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        scrollTopButton?.classList.add('visible');
      } else {
        scrollTopButton?.classList.remove('visible');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    scrollTopButton?.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollTopButton?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div className={`${pinaColada.variable} ${quadratSerial.variable} ${waveNautical.variable}`}>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-quadrat-serial), 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .header {
          background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #42a5f5 100%);
          color: white;
          padding: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .language-toggle {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-family: var(--font-wave-nautical), sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .language-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="white" stop-opacity="0.1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><rect width="100" height="20" fill="url(%23a)"/></svg>');
          opacity: 0.3;
        }

        .header h1 {
          font-family: var(--font-pina-colada), serif;
          font-size: 3rem;
          font-weight: 400;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 1px;
        }

        .header p {
          font-family: var(--font-wave-nautical), sans-serif;
          font-size: 1.3rem;
          opacity: 0.95;
          position: relative;
          z-index: 1;
          letter-spacing: 0.5px;
        }

        .content {
          padding: 40px;
        }

        .intro {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          border-left: 5px solid #1565c0;
        }

        .definitions {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 10px;
          margin: 20px 0;
          border-left: 4px solid #1565c0;
        }

        .definitions h3 {
          font-family: var(--font-pina-colada), serif;
          color: #1565c0;
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .definition-item {
          margin-bottom: 15px;
          padding: 10px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .definition-term {
          font-family: var(--font-wave-nautical), sans-serif;
          font-weight: bold;
          color: #1565c0;
          margin-bottom: 5px;
          font-size: 1.1rem;
          letter-spacing: 0.3px;
        }

        .toc {
          background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
          padding: 25px;
          border-radius: 15px;
          margin: 25px 0;
        }

        .toc h3 {
          font-family: var(--font-pina-colada), serif;
          margin-bottom: 15px;
          color: #333;
          font-size: 1.4rem;
        }

        .toc ul {
          list-style: none;
        }

        .toc li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.3);
        }

        .toc a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .toc a:hover {
          color: #1565c0;
        }

        .section {
          margin: 40px 0;
          padding: 30px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-left: 5px solid #1565c0;
        }

        .section h2 {
          font-family: var(--font-pina-colada), serif;
          color: #1565c0;
          margin-bottom: 20px;
          font-size: 2rem;
          padding-bottom: 10px;
          border-bottom: 2px solid #e3f2fd;
        }

        .section h3 {
          font-family: var(--font-wave-nautical), sans-serif;
          color: #1976d2;
          margin: 20px 0 10px 0;
          font-size: 1.4rem;
          letter-spacing: 0.3px;
        }

        .section h4 {
          font-family: var(--font-wave-nautical), sans-serif;
          color: #1565c0;
          margin: 15px 0 8px 0;
          font-size: 1.2rem;
          letter-spacing: 0.2px;
        }

        .subsection {
          margin: 20px 0;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 3px solid #1976d2;
        }

        .important-note {
          background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
          border-left: 5px solid #ff9800;
        }

        .warning {
          background: linear-gradient(135deg, #ff7675 0%, #fd79a8 100%);
          color: white;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }

        .contact-info {
          background: linear-gradient(135deg, #1565c0 0%, #1976d2 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          margin-top: 30px;
        }

        .contact-info h2 {
          border-bottom: 2px solid rgba(255,255,255,0.3);
          color: white;
        }

        .contact-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .contact-item {
          background: rgba(255,255,255,0.1);
          padding: 15px;
          border-radius: 10px;
          backdrop-filter: blur(5px);
        }

        .contact-item a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .signature {
          text-align: center;
          margin-top: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }

        ul, ol {
          margin-left: 20px;
          margin-bottom: 15px;
        }

        li {
          margin-bottom: 8px;
        }

        .highlight {
          background: linear-gradient(120deg, #e8f5e8 0%, #c8e6c9 100%);
          padding: 15px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 3px solid #4caf50;
        }

        strong {
          color: #1565c0;
          font-weight: 600;
        }

        .signature p {
          font-family: var(--font-pina-colada), serif;
        }

        .signature p:first-child {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .signature p:nth-child(2) {
          font-family: var(--font-wave-nautical), sans-serif;
          font-style: italic;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .container {
            margin: 10px;
            border-radius: 15px;
          }

          .header {
            padding: 30px 20px;
          }

          .header h1 {
            font-size: 2rem;
          }

          .content {
            padding: 20px;
          }

          .section {
            padding: 20px;
          }

          .contact-links {
            grid-template-columns: 1fr;
          }
        }

        .scroll-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #1565c0;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-family: var(--font-wave-nautical), sans-serif;
          font-size: 1.2rem;
        }

        .scroll-top.visible {
          opacity: 1;
        }

        .scroll-top:hover {
          background: #1976d2;
          transform: translateY(-2px);
        }
      `}</style>
      
      <div className="container">
        <div className="header">
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'Português' : 'English'}
          </button>
          <h1>Dragon Shore Studios</h1>
          <p>{language === 'en' ? 'Terms of Service' : 'Termos de Serviço - (Pt/Br)'}</p>
        </div>

        <div className="content">
          <div className="intro">
            <p><strong>{currentContent.intro}</strong></p>
          </div>

          <div className="definitions">
            <h3>{currentContent.definitions.title}</h3>
            {currentContent.definitions.items.map((item, index) => (
              <div key={index} className="definition-item">
                <div className="definition-term">{item.term}</div>
                <div>{item.definition}</div>
              </div>
            ))}
          </div>

          <div className="important-note">
            <p><strong>{currentContent.importantNote}</strong></p>
          </div>

          <div className="toc">
            <h3>{currentContent.toc.title}</h3>
            <ul>
              {currentContent.toc.items.map((item, index) => (
                <li key={index}><a href={item.href}>{item.text}</a></li>
              ))}
            </ul>
          </div>

          <div className="section" id="secao1">
            <h2>{currentContent.sections.section1.title}</h2>
            
            <div className="important-note">
              <p>{currentContent.sections.section1.importantNote}</p>
            </div>

            {currentContent.sections.section1.subsections.map((subsection, index) => (
              <div key={index} className="subsection">
                <h3>{subsection.title}</h3>
                <p>{subsection.content}</p>
                {subsection.list && (
                  <ul>
                    {subsection.list.map((item, itemIndex) => (
                      <li key={itemIndex}><strong>{item}</strong></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="subsection">
              <h3>1.3 - Direitos e Deveres do Studio</h3>
              <p>O Studio "Dragon Shore" Possui o direito de postar fotos, vídeos e ilustrações do produto criado para o cliente, para fins promocionais e apenas promocionais. Nossa diretiva é produzir algo que agrade o cliente e possua qualidade e resistência, te entregando o que você merece!</p>
            </div>

            <div className="subsection">
              <h3>1.4 - Direitos e Deveres do Cliente</h3>
              
              <h4>1.4.a) Direito de Desistência</h4>
              <p>Caso o Cliente desista do seu pedido e o mesmo não iniciou suas etapas de produção e o material não foi adquirido, o cliente tem o direito de desistência e um reembolso total do valor-caução pago ao adquirir seu "slot".</p>
              <ul>
                <li><strong>I</strong> - Caso a produção tenha se iniciado, o valor a ser retornado ao cliente estará vinculado ao progresso da desistência e a quantidade financeira investida no produto até tal momento.</li>
                <li><strong>II</strong> - Devido à natureza de Produto Personalizado especificamente ao cliente, o Artigo 49 do Código de Defesa do Consumidor (Conhecido como Lei do Direito do Arrependimento) não se encaixa para fins de arrependimento. Esta cláusula é uma cortesia do estúdio para o cliente.</li>
              </ul>

              <h4>1.4.b) Atualização sobre o produto</h4>
              <p>O Cliente deverá ser atualizado a cada etapa pertinente do produto, não excedendo 30 dias da última atualização.</p>
              <ul>
                <li><strong>I</strong> - o Cliente NÃO DEVE insistir em atualizações diárias ou de forma frequente que atrapalhe a produção do produto, caracterizando desrespeito e podendo levar ao cancelamento do pedido.</li>
                <li><strong>II</strong> - O Cliente tem direito a atualização caso haja algum imprevisto pela equipe de produção, e poderá exigir atualização caso o prazo exceda os 30 dias.</li>
              </ul>

              <h4>1.4.c) Alterações</h4>
              <p>O Cliente tem o direito de solicitar alterações MENORES em detalhes do produto livre de cobrança extra, Caracterizam-se alterações menores como: Posicionamento de detalhes já acordados e outros pormenores. Caso o cliente queira alterações MAIORES por arrependimento ou mudança de planos, o valor em material e em hora/trabalho será cobrado extra.</p>
              <ul>
                <li><strong>I</strong> - O Cliente pode, por conta própria, alterar seu produto após ele ser entregue e finalizado.</li>
                <li><strong>II</strong> - O Cliente não deve alterar adicionando coisas que se caracterizariam problemáticas como símbolos de intolerância, racismo, homofobia.</li>
                <li><strong>III</strong> - Caso o cliente cause dano a seu produto, ele poderá entrar em contato conosco para solicitar reparo com custo extra, porém não faremos reparos em partes que não produzimos.</li>
              </ul>

              <h4>1.4.d) Envio</h4>
              <p>O custeio do frete e envio do produto personalizado ficará inteiramente sob responsabilidade do cliente e a embalagem e material de envio fica como responsabilidade do Estúdio.</p>
              <ul>
                <li><strong>I</strong> - Caso aconteça avaria do produto durante o envio, o estúdio não se responsabilizará se esta avaria foi causada pelo método de envio escolhido do cliente.</li>
                <li><strong>II</strong> - Não nos responsabilizamos por extravio de produto causado pelo método de envio do cliente</li>
                <li><strong>III</strong> - Prazo de entrega e tentativas de entrega são responsabilidades do cliente para com o método de envio escolhido do cliente.</li>
              </ul>

              <h4>1.4.e) Defeitos de Fabricação</h4>
              <p>Caso o cliente encontre defeitos de fabricação que passou despercebido pelo nosso Q.A., o estúdio se responsabiliza pelo conserto de tal defeito de forma gratuita, assim como o envio e reenvio ao cliente caso seja pertinente. O Cliente tem 3 Dias corridos de recebimento para nos informar do defeito de fabricação.</p>
              <ul>
                <li><strong>I</strong> - Não nos responsabilizamos por defeitos causados pelo cliente, ou defeitos encontrados após os 3 Dias Corridos determinados acima</li>
              </ul>

              <h4>1.4.f) Brindes</h4>
              <p>Caso o cliente esteja aplicável para receber um brinde do estúdio, este brinde não é reembolsável ou trocável. O brinde é uma bonificação do estúdio ao cliente, e não faz parte do produto comprado.</p>

              <h4>1.4.g) Créditos</h4>
              <p>O Estúdio deve ser creditado na produção do seu produto, mesmo que o mesmo for utilizado para fins pessoais, recreativos ou lucrativos, o estúdio deve ser creditado na produção do mesmo sempre que possível:</p>
              <ul>
                <li><strong>I</strong> - Um exemplo seria nos marcar nas redes sociais pela produção e realização do seu produto, seja deixando descrito no post feito ou na biografia.</li>
                <li><strong>II</strong> - Outro exemplo seria verbalmente confirmar nossa autoria e prestação de serviço em relação ao seu produto.</li>
                <li><strong>III</strong> - Mesmo que o Cliente altere o produto de forma que ele não esteja mais reconhecível como um produto nosso, ele ainda deve nos creditar como produtores da base de seu produto.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>1.5 - Medidas para a Produção</h3>
              <p>Iremos seguir EXATAMENTE as medidas que o cliente nos enviar. Nós iremos instruir corretamente como tirar essas medidas e nós iremos nos certificar que tudo seja produzido e documentado na produção que foi feito corretamente. Não nos responsabilizamos por medidas passadas erradas.</p>
            </div>
          </div>

          <div className="section" id="secao2">
            <h2>{currentContent.sections.section2.title}</h2>
            <ol>
              {currentContent.sections.section2.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="section" id="secao3">
            <h2>{currentContent.sections.section3.title}</h2>
            
            {currentContent.sections.section3.subsections.map((subsection, index) => (
              <div key={index} className="subsection">
                <h3>{subsection.title}</h3>
                <p>{subsection.content}</p>
                {subsection.list && (
                  <ul>
                    {subsection.list.map((item, itemIndex) => (
                      <li key={itemIndex}><strong>{item}</strong></li>
                    ))}
                  </ul>
                )}
                {subsection.paymentMethods && (
                  <>
                    <p>{subsection.paymentMethodsTitle}</p>
                    <ul>
                      {subsection.paymentMethods.map((method, methodIndex) => (
                        <li key={methodIndex}>{method}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="section contact-info" id="secao4">
            <h2>{currentContent.sections.section4.title}</h2>
            <p>{currentContent.sections.section4.content}</p>
            
            <div className="contact-links">
              {currentContent.sections.section4.contacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <strong>{contact.label}</strong><br/>
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.value}</a>
                </div>
              ))}
            </div>

            <div className="signature">
              <p><strong>{currentContent.sections.section4.signature.title}</strong></p>
              <p>{currentContent.sections.section4.signature.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-top" title={language === 'en' ? 'Back to top' : 'Voltar ao topo'}>
        ↑
      </button>
    </div>
  );
}