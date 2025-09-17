# Participantes
 * Otávio Magno RM 566149
 * Mikael de Albuquerque Santana RM 566507
 * Murilo Henrique Vieira Cruz RM  563743
 * Vitor Pucci  RM 561736
 * Guilherme de Medeiros RM 561699



# Dashboard Futebol Feminino

Um dashboard interativo que exibe os **top 5 times femininos** e **top 5 jogadoras** utilizando dados de uma API Spring Boot baseada no StatsBomb Open Data.

O frontend foi desenvolvido em **React + TypeScript** com **Tailwind CSS** e componentes de UI personalizados.

---

## Funcionalidades

* Visualização dos **Top 5 Times Femininos**, ordenados por pontos.
* Visualização das **Top 5 Jogadoras**, mostrando nome e time.
* Layout responsivo com cards estatísticos.
* Indicadores de posição e variação de ranking (ex: +1, -2).
* Mensagem de boas-vindas personalizada para o usuário.
* Alternância de abas entre ranking de times e jogadoras.
* Logout simples simulando navegação para a página inicial.

---

## Tecnologias Utilizadas

**Frontend:**

* React 18
* TypeScript
* Tailwind CSS
* Lucide Icons
* React Router DOM
* Componentes de UI customizados (`Card`, `Badge`, `Button`)

**Backend (API Spring Boot):**

* Java 17+
* Spring Boot
* API REST simulando dados do StatsBomb Open Data (em memória)
* Endpoints:

  * `GET /statsbomb/games/top5` → Top 5 jogos femininos
  * `GET /statsbomb/players/top5` → Top 5 jogadoras

---

## Estrutura do Projeto

```
src/
├─ components/        # Componentes reutilizáveis (Card, Badge, Button)
├─ pages/
│  └─ Dashboard.tsx   # Página principal com ranking de times e jogadoras
├─ App.tsx            # Configuração de rotas
├─ index.tsx          # Entry point do React
```

---

## Executando o Frontend

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O dashboard estará disponível em `http://localhost:3000`.

---

## Executando o Backend (Spring Boot)

1. Navegue até o diretório do backend:

```bash
cd backend
```

2. Rode a aplicação:

```bash
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:`.

---

## Consumo da API no Frontend

No `Dashboard.tsx`, os dados são buscados usando `fetch`:

```ts
useEffect(() => {
  fetch('http://localhost:8080/stats/games/top5')
    .then(res => res.json())
    .then(data => setTeamsRanking(data));

  fetch('http://localhost:8080/stats/players/top5')
    .then(res => res.json())
    .then(data => setPlayersRanking(data));
}, []);
```

O estado `teamsRanking` e `playersRanking` é atualizado dinamicamente para renderizar os cards.

---

## Layout e Estilo

* Layout baseado em **cards** para exibir estatísticas.
* Ícones indicando posição (coroa para 1º, medalha para 2º/3º).
* Mudança de cores indicando evolução ou queda no ranking (`+` verde, `-` vermelho, `0` cinza).
* Responsividade garantida pelo Tailwind CSS.

---

## Observações

* A API backend está em memória, ou seja, os dados são estáticos e reiniciam a cada deploy.
* Para dados reais, é possível integrar com o [StatsBomb Open Data](https://github.com/statsbomb/open-data)


---

## License

MIT License
