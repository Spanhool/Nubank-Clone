# Nubank Clone

Landing page de redesign conceitual inspirada no Nubank, desenvolvida para estudo e portfólio. O projeto combina um layout responsivo com animações de entrada e efeitos acionados pela rolagem.

> Projeto independente, sem vínculo oficial com o Nubank. Não oferece serviços financeiros.

## Sobre o projeto

A página apresenta uma experiência visual com as cores e a identidade da marca, organizada em seções:

- **Hero:** apresentação inicial com animação sequencial de textos e imagem.
- **Nosso impacto:** números e indicadores em cards que aparecem em sequência.
- **Nossos cartões:** apresentação dos cartões e seus benefícios.
- **Aplicativo:** destaque para a experiência de uso do app.
- **Seção final e rodapé:** chamada para ação e links institucionais.

## Tecnologias

- **HTML5** para a estrutura da página.
- **CSS3** com variáveis, Flexbox, Grid e media queries.
- **JavaScript** para o menu mobile e as animações.
- **GSAP 3.15.0** e **ScrollTrigger** para animações e gatilhos de rolagem.
- **Google Fonts** para a tipografia Poppins.

## Funcionalidades

- Layout adaptado para desktop, notebook e dispositivos móveis.
- Menu hambúrguer em telas de até 900px, com indicação de abertura para leitores de tela.
- Fechamento do menu ao pressionar `Esc`, clicar fora ou selecionar uma opção.
- Animações de movimento e opacidade nos textos, imagens e cards.
- Atualização das posições dos gatilhos após o carregamento de imagens e fontes.

## Como executar

O projeto usa arquivos estáticos: não precisa de instalação de dependências ou etapa de build.

1. Clone o repositório:

   ```bash
   git clone https://github.com/Spanhool/Nubank-Clone.git
   cd Nubank-Clone
   ```

2. Abra a pasta no Visual Studio Code.
3. Com a extensão **Live Server** instalada, clique com o botão direito em `index.html` e selecione **Open with Live Server**.

Também é possível abrir o `index.html` diretamente no navegador. Uma conexão com a internet é necessária para carregar a fonte Poppins; o GSAP e o ScrollTrigger estão incluídos localmente.

## Estrutura de arquivos

```text
Nubank-Clone/
├── index.html
├── README.md
└── src/
    ├── assets/
    │   ├── icon/              # Ícones dos benefícios
    │   └── img/               # Logos, cartões e imagens das seções
    ├── css/
    │   └── style.css          # Estilos e responsividade
    └── js/
        ├── navbar.js          # Comportamento do menu mobile
        ├── script.js          # Animações da página
        └── vendor/
            ├── gsap.min.js
            └── ScrollTrigger.min.js
```

## Personalização

- **Conteúdo e imagens:** edite o `index.html` e os arquivos em `src/assets/`.
- **Cores:** altere as variáveis declaradas em `:root`, no início de `src/css/style.css`.
- **Responsividade:** ajuste as media queries no mesmo arquivo CSS.
- **Animações:** edite `src/js/script.js`. Cada seção tem seu próprio bloco de código, com duração, movimento, suavização e gatilhos de rolagem.
- **Menu mobile:** o comportamento fica em `src/js/navbar.js`.

No HTML, mantenha a ordem de carregamento: GSAP, ScrollTrigger e, depois, os scripts do projeto.

## Escopo atual

A página é uma demonstração visual. Os botões de login e cadastro não têm integração com serviços, e os links ainda não possuem destinos definidos.

## Créditos

- Identidade e marca: **Nubank**, utilizadas como referência para este estudo.
- Biblioteca de animação: **GSAP / GreenSock**.
- Tipografia: **Poppins**, disponibilizada pelo Google Fonts.

As marcas e os recursos de terceiros pertencem aos respectivos titulares. A licença de uso do GSAP consta nos arquivos distribuídos da biblioteca.
