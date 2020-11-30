const QUESTIONS = [
  {
    id: 1,
    image: "fifa.png",
    question:
      "There have been two World Cup trophies. What was the name of the first?",
    options: ["Charles William Miller", "Jules Rimet", "Silvio Gazzaniga"],
    answer: "Jules Rimet",
    explanation:
      "The Jules Rimet Trophy was the original prize for winning the FIFA World Cup. Originally called Victory, but generally known simply as the World Cup or Coupe du Monde, it was renamed in 1946 to honour the FIFA President Jules Rimet who in 1929 passed a vote to initiate the competition.",
  },
  {
    id: 2,
    image: "1998_FIFA_World_Cup.svg",
    question:
      "The World Cup in 1998 was held in France, where the host nation beat Brazil in the final. In third place was a country that made its first appearance in the World Cup and in fact didn't exist a decade earlier. Who finished third?",
    options: ["Belarus", "Russia", "Croatia"],
    answer: "Croatia",
    explanation:
      "Formerly a part of Yugoslavia, Croatia became a recognized independent country in 1992. Their biggest star in the 1998 world cup was Davor Suker who was also the tournament's top scorer with six goals in seven games.",
  },
  {
    id: 3,
    image: "champion_1978_argentina.jpg",
    question:
      "In 1978 Argentina Which team lost to host nation in the final match after extra time?",
    options: ["Germany", "Brazil", "Netherlands"],
    answer: "Netherlands",
    explanation:
      "If Dutch forward Rob Resenbrink's shot in the final minute of regulation time did not hit the upright, the Netherlands would have won their first-ever World Cup.",
  },
  {
    id: 4,
    image: "first_wold_cup.jpg",
    question:
      "The first FIFA World Cup took place in 1930 in Uruguay. There were only 13 teams. World Cup Final score was 4-2. Who won?",
    options: ["Uruguay", "Italy", "Spain"],
    answer: "Uruguay",
    explanation:
      "Two years before, at the 1928 Olympic Games in Amsterdam, Uruguay beat Argentina 2-1 (in a replay as the teams had played out a 1-1 draw). The same teams contested the first World Cup Final, and the same team won.",
  },
  {
    id: 5,
    image: "penalty_missed.jpg",
    question:
      "Who was the first player to miss a penalty kick at the world cup?",
    options: [
      "Valdemar de Brito (Brazil, 1934 in Italy)",
      "Dragomir Tošić, (Yugoslavia, 1934 in Uruguay)",
      "Ramón Muttis, (Argentina, 1930 in Uruguay)",
    ],
    answer: "Valdemar de Brito (Brazil, 1934 in Italy)",
    explanation:
      "Valdemar de Brito will remain in football history for two things: he was the first player to ever miss a penalty at the World Cup (in the game lost against Spain 1-3) and he was the one who discovered and mentored the great Pele.",
  },
  {
    id: 6,
    image: "1958_FIFA_World_Cup.jpg",
    question:
      "10 Sweden hosted the 1958 World Cup. In what position did they finish?",
    options: ["2nd place", "3rd place", "1st place"],
    answer: "2nd place",
    explanation:
      "Sweden lost 5-2 to Brazil in the final. The legend Pele scored twice in the second half to clinch the final, despite going a goal down in the 4th minute. This final set Pele's reputation.",
  },
  {
    id: 7,
    image: "Logo_Mundial_78.png",
    question: "Who was the top scorer of the 1978 World Cup?",
    options: ["Rob Rensenbrink", "Mario Kempes", "Paolo Rossi"],
    answer: "Mario Kempes",
    explanation: "He scored six goals in total, including one in the final.",
  },
  {
    id: 8,
    image: "map-question.jpg",
    question: "Where was the first-ever World Cup held?",
    options: ["Uruguay", "Brazil", "Germany"],
    answer: "Uruguay",
    explanation:
      "The first World Cup was held in Uruguay in 1930; it was chosen because it had been Olympic football champion in 1924.",
  },
  {
    id: 9,
    image: "france_celebration.jpg",
    question:
      "The 1998 World Cup marked only the second time that a European nation defeated a South American nation in a World Cup final. When was the first?",
    options: ["1990", "1986", "1994"],
    answer: "1990",
    explanation:
      "West Germany in 1990 became the first European team to beat a South American team (Argentina) in a WC final.",
  },
  {
    id: 10,
    image: "ball_in_the_net.jpeg",
    question:
      "Who scored the highest number of goals in World Cups 2002 and 2006 combined?",
    options: ["Zinedine Zidane", "Miloslav Klose", "Ronaldo Nazario"],
    answer: "Ronaldo Nazario",
    explanation:
      "Ronaldo scored 8 goals in 2002 and 3 goals in 2006. Klose scored 5 each in 2002 and 2006.",
  },
  {
    id: 11,
    image: "brazil_scot.jpg",
    question:
      "What was the score in the opening match of France '98 between Brazil and Scotland?",
    options: ["3-1", "2-1", "0-0"],
    answer: "2-1",
    explanation:
      "A desperately unlucky own-goal by Tom Boyd gave Brazil a 2-1 victory.",
  },
  {
    id: 12,
    image: "map-question.jpg",
    question: "Which country hosted the 1966 World Cup?",
    options: ["England", "Mexico", "Italy"],
    answer: "England",
    explanation: "England went on to win the 1966 World Cup.",
  },
  {
    id: 13,
    image: "map-question.jpg",
    question: "Which country hosted the 1938 World Cup?",
    options: ["Spain", "France", "Italy"],
    answer: "France",
    explanation:
      "Despite the threat of war in Europe, France was chosen to host the third World Cup.",
  },
  {
    id: 14,
    image: "brazil_italy_1970.jpeg",
    question: "What was the score between Brazil and Italy in the 1970 Final?",
    options: ["4 - 1", "0 - 1", "1 - 0"],
    answer: "4 - 1",
    explanation:
      "It was 4-1 to Brazil with Carlos Alberto scoring the winner and one of the greatest goals.",
  },
  {
    id: 15,
    image: "fifa.png",
    question: "Which team has won the most World Cup games from 1930 to 2002?",
    options: ["Germany", "Brazil", "Argentina"],
    answer: "Brazil",
    explanation: "Brazil won 60 World Cup games during those years.",
  },
  {
    id: 16,
    image: "fifa.png",
    question: "What country won the 1998 World Cup?",
    options: ["Italy", "Brazil", "France"],
    answer: "France",
    explanation:
      "France, playing in its first World Cup final, defeated Brazil 3-0 for the title.",
  },
  {
    id: 17,
    image: "italy_2006.jpg",
    question:
      "Who was the manager of the successful Italian team of 2006, who beat France in the final on penalties after the now 'infamous' Zinedine Zidane headbutt?",
    options: ["Marcelo Lippi", "Roberto Baggio", "Gatuso"],
    answer: "Marcelo Lippi",
    explanation: "Italy won their 4th World Cup in 2006.",
  },
  {
    id: 18,
    image: "fifa.png",
    question: "Which country made the 1974 and 1978 World Cup Final?",
    options: ["Brazil", "Germany", "Netherlands"],
    answer: "Netherlands",
    explanation: "Holland were runners up in both Finals.",
  },
  {
    id: 19,
    image: "baggio.jpeg",
    question: "How many goals did Roberto Baggio score?",
    options: ["5", "11", "9"],
    answer: "9",
    explanation: "Baggio scored in 1990, 1994, and 1998.",
  },
  {
    id: 20,
    image: "julius.jpg",
    question: "Which country won the 1962 World Cup?",
    options: ["Uruguay", "Brazil", "Sweden"],
    answer: "Brazil",
    explanation: "Brazil won the World Cup defeating Czechoslovakia 3-1.",
  },
  {
    id: 21,
    image: "penalties.jpeg",
    question: "Which was the first final to be decided on penalties?",
    options: ["2006", "1990", "1994"],
    answer: "1994",
    explanation: "Brazil beat Italy 3-2 after a 0-0 draw.",
  },
  {
    id: 22,
    image: "map-question.jpg",
    question: "Where was the 1982 World Cup hosted?",
    options: ["Mexico", "Spain", "Italy"],
    answer: "Spain",
    explanation: "World Cup took place in Spain in that year.",
  },
  {
    id: 23,
    image: "england_won.jpeg",
    question: "In what year did England become world Champion?",
    options: ["1966", "1962", "1970"],
    answer: "1966",
    explanation:
      "In the final, they beat West-Germany 4-2 after extra-time. Hurst scoring a memorable hat-trick.",
  },
  {
    id: 24,
    image: "fifa.png",
    question:
      "What player, in the World Cup of Mexico 1986, scored a goal 'with his head and the hand of God'?",
    options: ["Pele", "Maradona", "Matthaus"],
    answer: "Maradona",
    explanation:
      "Maradona, possibly the best soccer player in the world after Pele, was the star of Argentina in the conquest of their second World Cup, defeating Germany in the last match.",
  },
  {
    id: 25,
    image: "ball_in_the_net.jpeg",
    question:
      "Which French footballer scored twice in the 1998 World Cup final?",
    options: ["Zidane", "Ronaldo", "Thuram"],
    answer: "Zidane",
    explanation:
      "France beat Brazil 3-0 in the final. Zinedine Zidane scored twice, and the other goal scorer was Emmanuel Petit.",
  },
  {
    id: 26,
    image: "fifa.png",
    question: "Who won the most World Cups in the 20th century?",
    options: ["Brazil", "Germany", "France"],
    answer: "Brazil",
    explanation: "An amazing 4 times! In 1958, 1962, 1970 and 1994.",
  },
  {
    id: 27,
    image: "map-question.jpg",
    question: "Where was the 1986 World Cup hosted?",
    options: ["Mexico", "Spain", "Italy"],
    answer: "Mexico",
    explanation:
      "World Cup took place in Mexico in that year as Colombia gave up to host the tournament.",
  },
  {
    id: 28,
    image: "map-question.jpg",
    question: "Where was the 1990 World Cup hosted?",
    options: ["England", "Spain", "Italy"],
    answer: "Italy",
    explanation: "1990 World Cup took place in Italy.",
  },
  {
    id: 29,
    image: "map-question.jpg",
    question: "Where was the 1994 World Cup hosted?",
    options: ["France", "Argentina", "USA"],
    answer: "USA",
    explanation: "1994 World Cup took place in USA.",
  },
  {
    id: 30,
    image: "map-question.jpg",
    question: "Where was the 2002 World Cup hosted?",
    options: ["Russia", "South Korea and Japan", "Germany"],
    answer: "South Korea and Japan",
    explanation: "2002 World Cup took place in South Korea and Japan.",
  },
];
