# ODS 6 — Água Potável e Saneamento

Site desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas (Unijorge), com o tema do Objetivo de Desenvolvimento Sustentável 6 (ODS 6) da Agenda 2030 da ONU: água potável e saneamento.

## 🎯 Objetivo

Apresentar de forma clara e interativa informações sobre o ODS 6, permitindo que o usuário entenda o problema, visualize dados reais, simule seu próprio consumo de água e teste seus conhecimentos através de um quiz.

## 🛠️ Tecnologias

- HTML5
- CSS3 (sem frameworks)
- JavaScript puro (sem bibliotecas)

## ✨ Funcionalidades

- **Início**: hero com chamada de impacto sobre o ODS 6
- **Medidor**: representação visual do percentual global de acesso à água potável segura
- **Sobre**: contexto sobre o ODS 6, suas metas e a situação da água/saneamento no mundo
- **Dados**: cartões com estatísticas sobre água potável e saneamento no Brasil e no mundo
- **Simulador de consumo**: calcula o consumo de água com base em hábitos diários (banho, descargas, escovação)
- **Quiz interativo**: testa o conhecimento do usuário sobre o tema, com pontuação
- **Dicas**: cartões com boas práticas de consumo consciente de água
- **Modo escuro**: alternância entre tema claro e escuro
- **Design responsivo**: adaptado para desktop, tablet e celular

## 📁 Estrutura de pastas

```
ods6/
│
├── index.html
├── README.md
│
├── css/
│   ├── style.css
│   └── animacoes.css
│
├── js/
│   ├── main.js
│   ├── quiz.js
│   └── simulador.js
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

## ▶️ Como executar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` diretamente no navegador, **ou**
3. Use a extensão **Live Server** no VS Code para rodar com recarregamento automático

Não é necessário instalar dependências — o projeto não usa frameworks nem bibliotecas externas.

## 🔄 Como clonar e enviar alterações (Git)

### Clonar o repositório (primeira vez)

```bash
git clone https://github.com/usuario/ods6.git
cd ods6
```

### Antes de começar a mexer (sempre)

Puxe as últimas atualizações pra não trabalhar em cima de uma versão desatualizada:

```bash
git pull origin main
```

### Enviar suas alterações

```bash
git add .
git commit -m "descrição do que foi feito"
git pull origin main
git push origin main
```

> **Sempre dê `git pull` antes do `push`** — assim você traz o que os outros já enviaram antes de mandar o seu, evitando conflitos.

### Mensagens de commit — padrão do grupo

Escrever em português, no imperativo, descrevendo o que foi feito:
- `adiciona lógica do quiz`
- `corrige responsividade do header`
- `ajusta cores da seção sobre`

## 👥 Integrantes do grupo

| Nome | Função |
|---|---|
| Felipe Oliveira | Liderança técnica e HTML |
| Thiago Fontan | HTML |
| Breno Carvalho | CSS — header e metade da main |
| Kauã Alves | CSS — restante do site |
| Cauã Brasileiro | JavaScript |
| Murilo Lima | — |

## 📚 Fontes dos dados

- ONU Portugal / UNRIC — [unric.org](https://unric.org/pt/objetivo-6-agua-potavel-e-saneamento-2/)
- Agência Nacional de Águas e Saneamento Básico (ANA) — [gov.br/ana](https://www.gov.br/ana)
- Instituto Trata Brasil / Portal Neo Mondo
- Sistema Nacional de Informações sobre Saneamento (SNIS)

> Os dados numéricos usados no site devem ser conferidos e atualizados junto às fontes oficiais antes da entrega final do trabalho.

## 📄 Licença

Projeto acadêmico sem fins comerciais, desenvolvido para fins educacionais.
