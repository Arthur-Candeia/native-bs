export const dataPosts = [
  {
    id: 1,
    photo: 'https://source.unsplash.com/1080x1080/?person',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 2,
    photo: 'https://source.unsplash.com/1080x1080/?person-happy',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 3,
    photo: 'https://source.unsplash.com/1080x1080/?person-smile',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 4,
    photo: 'https://source.unsplash.com/1080x1080/?person-great',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 5,
    photo: 'https://source.unsplash.com/1080x1080/?person-beautiful',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 6,
    photo: 'https://source.unsplash.com/1080x1080/?people',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 7,
    photo: 'https://source.unsplash.com/1080x1080/?people-happy',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 8,
    photo: 'https://source.unsplash.com/1080x1080/?people-smile',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 9,
    photo: 'https://source.unsplash.com/1080x1080/?people-great',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 10,
    photo: 'https://source.unsplash.com/1080x1080/?people-beautiful',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 11,
    photo: 'https://source.unsplash.com/1080x1080/?persons',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 12,
    photo: 'https://source.unsplash.com/1080x1080/?persons-happy',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 13,
    photo: 'https://source.unsplash.com/1080x1080/?persons-smile',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 14,
    photo: 'https://source.unsplash.com/1080x1080/?persons-great',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 15,
    photo: 'https://source.unsplash.com/1080x1080/?persons-beautiful',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 16,
    photo: 'https://source.unsplash.com/1080x1080/?peoples',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 17,
    photo: 'https://source.unsplash.com/1080x1080/?peoples-happy',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 18,
    photo: 'https://source.unsplash.com/1080x1080/?peoples-smile',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 19,
    photo: 'https://source.unsplash.com/1080x1080/?peoples-great',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  },
  {
    id: 20,
    photo: 'https://source.unsplash.com/1080x1080/?peoples-beautiful',
    name: getRandomName(),
    description: getRandomPhrase(),
    likes: getRandomLikes()
  }
]

function getRandomName() {
  const nomes = [
    'Ana', 'João', 'Maria', 'Pedro', 'Carla', 'Lucas', 'Julia', 'Marcos', 'Fernanda', 'Rafael', 'Gustavo', 'Isabela', 'Renato', 'Camila', 'Henrique', 'Laura', 'Vinícius', 'Beatriz', 'Thiago', 'Amanda', 'Leonardo', 'Gabriela', 'Felipe', 'Mariana', 'Mateus', 'Raquel', 'Guilherme', 'Caroline', 'Daniel', 'Juliana', 'Rodrigo', 'Patrícia', 'Luciana', 'Bruno', 'Vanessa', 'Ricardo', 'Helena', 'Larissa', 'Eduardo', 'Natália', 'Fábio', 'Priscila', 'Diego', 'Tatiane', 'Alexandre', 'Silvia', 'Wagner', 'Talita'
  ];

  const sobrenomes = [
    'Silva', 'Santos', 'Oliveira', 'Pereira', 'Lima', 'Costa', 'Rocha', 'Martins', 'Almeida', 'Ferreira', 'Araújo', 'Cardoso', 'Cavalcanti', 'Correia', 'Dias', 'Gomes', 'Mendes', 'Nunes', 'Pinto', 'Ribeiro', 'Ramos', 'Vieira', 'Monteiro', 'Moreira', 'Castro', 'Soares', 'Fernandes', 'Lopes', 'Moura', 'Azevedo', 'Dantas', 'Barbosa', 'Andrade', 'Campos', 'Cunha', 'Leal', 'Cruz', 'Sousa', 'Melo', 'Freitas', 'Batista', 'Mota', 'Nascimento', 'Bezerra', 'Teixeira', 'Cavalcante', 'Figueiredo', 'Lira'
  ];

  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

  return `${nomeAleatorio} ${sobrenomeAleatorio}`;
}

function getRandomLikes() {return Math.floor(Math.random() * 10000)}

function getRandomPhrase() {
  const phrases = [
    "A incrível jornada da vida, repleta de experiências únicas, é uma fascinante composição em que apenas 10% é moldada pelos eventos externos, enquanto extraordinários 90% são plenamente controlados pela maneira como optamos reagir diante de cada desafio que ousa cruzar nosso caminho.",
    "O trajeto em direção ao sucesso é pavimentado pela dedicada soma de pequenos esforços, repetidos dia após dia, uma fórmula imortalizada nas palavras sábias de Robert Collier, que ressoam como um lembrete constante em nossa busca pela excelência.",
    "A essência de realizar um trabalho grandioso reside no profundo amor pelo que se faz, uma sabedoria compartilhada por Steve Jobs, que nos convida a mergulhar de coração na busca de nossos objetivos e paixões mais profundas.",
    "Em meio aos nossos intricados planos e expectativas, a vida se desenrola, lembrando-nos de que o verdadeiro significado reside nos momentos inesperados e nas reviravoltas, como expressou poeticamente John Lennon.",
    "Acreditar em si mesmo é metade da batalha vencida, e ao fazê-lo, já se encontra no meio do caminho para alcançar o que almeja, como afirmou sabiamente Theodore Roosevelt, um lembrete poderoso de que a confiança é uma ferramenta valiosa na busca do sucesso.",
    "A persistência, essa qualidade mágica, é o ingrediente secreto que transforma o impossível em realizável, como afirmado em um provérbio chinês atemporal, nos encorajando a seguir em frente, independentemente dos desafios que possam surgir.",
    "A verdadeira medida de um ser humano não é apenas revelada em momentos de conforto e conveniência, mas, acima de tudo, na forma como se mantém firme nos tempos de desafio e controvérsia, uma reflexão profunda que transcende gerações.",
    "Henry Drummond, ao afirmar que a felicidade não está simplesmente em possuir, mas sim em dar, nos convida a explorar a alegria que emana do ato generoso de compartilhar nossas bênçãos e recursos com o mundo ao nosso redor.",
    "Em meio às inúmeras encruzilhadas que a vida nos apresenta, opte, com discernimento, por aquelas que genuinamente contribuem para sua felicidade e bem-estar, pois, afinal, a vida é uma tapeçaria tecida pelas escolhas que fazemos.",
    "O otimismo, essa fé em ação, é a força motriz que impulsiona as realizações, conforme Helen Keller tão eloquentemente expressou, destacando a importância de manter a esperança e a confiança no caminho para alcançar nossos sonhos.",
    "Walter Bagehot nos desafia a buscar o maior prazer na vida ao realizar o que as pessoas insistem ser impossível, encorajando-nos a ultrapassar limites preestabelecidos e redefinir constantemente nossos próprios horizontes.",
    "Em face da efemeridade da vida, sorria com autenticidade enquanto ainda possui dentes, lembrando-se de que cada momento é uma oportunidade única e preciosa para celebrar a dádiva da existência.",
    "Charles Chaplin proclama que a persistência é o trajeto que conduz ao êxito, uma lembrança vívida de que a perseverança, aliada à determinação, é uma aliada poderosa em nossa jornada em busca de realizações grandiosas.",
    "Cada escolha que fazemos molda o tecido complexo da vida. Portanto, escolha, com sabedoria e discernimento, a trilha que o conduzirá à felicidade e ao florescimento pessoal, pois, afinal, a vida é feita de escolhas conscientes.",
    "Vidal Sassoon nos recorda que o sucesso genuíno é construído sobre alicerces sólidos de esforço contínuo, onde cada vitória excepcional é precedida por um trabalho árduo e dedicado, revelando a verdadeira natureza do triunfo.",
    "A melhoria da vida não é uma casualidade, mas sim uma consequência natural de mudanças deliberadas e positivas que escolhemos incorporar, um lembrete impactante de que a transformação pessoal é um processo contínuo.",
    "Rhonda Byrne revela o segredo fundamental para alcançar tudo o que se deseja: acreditar sinceramente que já se possui o que almeja, emanando uma aura de gratidão que atrai as bênçãos do universo para sua vida.",
    "Louis Pasteur destaca que a sorte favorece aqueles que, com uma mente preparada, enfrentam os desafios da vida com resiliência e determinação, ressaltando a importância de cultivar uma mentalidade preparada para o sucesso.",
    "Helen Keller nos convida a encarar a vida como uma aventura ousada, onde cada desafio é uma oportunidade de crescimento e autoconhecimento, instigando-nos a abraçar a jornada com coragem e curiosidade.",
    "George Eliot assegura que nunca é tarde para trilhar o caminho que nos levará a ser quem sempre desejamos ser, renovando nossas possibilidades a cada dia e desafiando-nos a abraçar a evolução constante.",
    "Peter Drucker nos encoraja a criar nosso próprio futuro, lembrando-nos de que a melhor maneira de prever o futuro é participar ativamente de sua construção, assumindo o papel de arquitetos de nossos destinos individuais.",
    "Em vez de colocar um ponto final em momentos desafiadores, Gracie Allen sugere que reconheçamos as vírgulas na vida, enxergando oportunidades contínuas de crescimento e aprendizado em meio às complexidades e reviravoltas que ela nos reserva."
  ];

  return phrases[Math.floor(Math.random() * phrases.length)]
}