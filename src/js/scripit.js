// scripit.js
// Objeto que armazena as histórias dos personagens
const historiasPersonagens = {
  "Naruto Uzumaki": "Naruto Uzumaki é o protagonista da série, um jovem ninja da Vila Oculta da Folha. Desde bebê, ele teve a Raposa de Nove Caudas (Kyuubi) selada em seu corpo, o que o levou a ser ostracizado e negligenciado pelos aldeões durante sua infância. Apesar disso, Naruto sonha em se tornar o Hokage, o líder de sua vila, e busca o reconhecimento e o respeito de todos. Sua jornada é marcada por desafios, amizades, aprendizado de novas técnicas ninjas e batalhas épicas para proteger seus entes queridos e o mundo ninja. ",
  "Sasuke Uchiha": "Sasuke Uchiha, marcado por um passado trágico, trilhou um caminho de vingança após a perda de sua família pelas mãos de seu irmão, Itachi. Impulsionado por esse trauma, Sasuke busca poder a qualquer custo, aliando-se a Orochimaru e desafiando seus laços com a Vila da Folha. Sua jornada é uma constante luta interna entre a sede de vingança e a busca por redenção, culminando em um confronto com Itachi e uma eventual aceitação de seu papel na proteção do mundo ninja, mesmo que pelas sombras.",
  "Sakura Haruno": "Sakura Haruno é uma ninja médica da Vila Oculta da Folha e uma das personagens principais da série Naruto. Inicialmente, ela é retratada como uma garota insegura e obcecada por Sasuke Uchiha, mas ao longo da série, ela demonstra um grande potencial como ninja e médica. Sua determinação em se tornar mais forte para proteger seus amigos e sua dedicação ao aprendizado a levam a se tornar uma das kunoichis mais poderosas e uma médica de renome, capaz de curar ferimentos graves e até mesmo de auxiliar em batalhas cruciais.",
  "Kakashi Hatake": "Kakashi Hatake, um ninja lendário da Vila da Folha, conhecido por seu Sharingan e apelidado de \"Ninja Copiador\", é um mestre de habilidades excepcionais. Mentor do Time 7, ele guia Naruto, Sasuke e Sakura, transmitindo não só técnicas de combate, mas também lições valiosas sobre amizade e responsabilidade. Marcado por perdas e conflitos internos, Kakashi encontra redenção ao liderar e proteger seus alunos, culminando em sua ascensão como o Sexto Hokage, um símbolo de sabedoria e esperança para Konoha.",
  "Itachi Uchiha": "Itachi Uchiha, um prodígio do clã Uchiha, é um ninja lendário conhecido por seu Sharingan e por ter massacrado seu próprio clã. Agindo como um ninja renegado e membro da Akatsuki, Itachi tinha como objetivo oculto proteger seu irmão, Sasuke, e a Vila da Folha. Sua vida foi marcada por sacrifícios e conflitos internos, culminando em sua morte para revelar a verdade a Sasuke e garantir a paz, deixando um legado de amor fraternal e dever.",
  "Hinata Hyuga": "Hinata Hyuga, uma kunoichi da Vila da Folha, inicialmente se mostrava tímida e insegura, mas possuía um coração gentil e uma determinação crescente. Membro do clã Hyuga, ela herdou o Byakugan, um poderoso dōjutsu. Ao longo da série, Hinata evolui, encontrando força no amor por Naruto Uzumaki e se tornando uma ninja corajosa e habilidosa, pronta para proteger seus amigos e lutar por seus ideais. Hinata Hyuga, uma kunoichi da Vila da Folha, começou sua jornada como uma personagem tímida e insegura, mas com um coração gentil e uma crescente determinação. Como membro do clã Hyuga, ela herdou o Byakugan, um poderoso dōjutsu. Ao longo da série, Hinata evolui, encontrando força no amor por Naruto Uzumaki e se tornando uma ninja corajosa e habilidosa, pronta para proteger seus amigos e lutar por seus ideais.",
  "Gaara": "Gaara é um poderoso shinobi de Sunagakure, conhecido como \"Gaara do Deserto\", devido ao seu controle sobre a areia e ao Shukaku, a Besta de Uma Cauda, selada em seu corpo no nascimento. Inicialmente um vilão solitário e amargurado, ele evolui para o Quinto Kazekage, inspirando-se na amizade e determinação de Naruto Uzumaki. Sua inteligência, astúcia e as habilidades únicas de manipulação de areia o tornam um dos personagens mais influentes e amados do anime Naruto. ",
  "Jiraiya": "Jiraiya foi um dos Três Sannin Lendários de Konoha, um mestre ninja conhecido como o \"Sábio Sapo\" ou \"Sábio Tarado\", famoso por sua genialidade e força, mas também por seu lado mulherengo e por escrever a série de livros para adultos Icha Icha. Ele foi mentor de Minato Namikaze e, posteriormente, de Naruto Uzumaki, moldando o caráter de ambos os ninjas de grande importância para a Vila da Folha. Treinado pelo Terceiro Hokage, Jiraiya dominava o Senjutsu, técnicas baseadas na invocação de sapos, sendo uma figura crucial na história de Konoha. ",
  "Orochimaru": "Orochimaru foi um prodígio de Konoha, um dos Três Sannin Lendários e um dos principais vilões de Naruto, que se dedicou a buscar a imortalidade e todo o conhecimento do mundo através de jutsus proibidos e experimentos cruéis. Após desertar da Vila da Folha, fundou a Vila do Som, treinou Sasuke Uchiha, participou da organização Akatsuki e, após diversas falhas, tentou controlar o corpo de Sasuke. Na Quarta Guerra Mundial Shinobi, ele ressurge para ajudar, mas sua mudança de atitude é mais um interesse na continuidade de seus experimentos do que um arrependimento genuíno.",
  "Tsunade":"Tsunade Senju é uma lendária kunoichi e a Quinta Hokage de Konoha, neta do Primeiro Hokage, que se tornou a maior ninja médica do mundo e uma dos Sannin Lendários. Após a morte do seu irmão e amado, abandonou a vila, mas foi convencida a retornar para aceitar o cargo de Hokage e treinar Sakura. Ela é conhecida pela sua força física, habilidades de cura, e o uso do Selo da Centena, que lhe concede uma regeneração poderosa, mas que também a consome.",
  "Madara Uchiha":"Madara Uchiha foi um lendário líder Uchiha que, após crescer em tempos de guerra e ver seu irmão morrer, aliou-se ao seu rival Hashirama Senju para fundar Konohagakure. Quando não concordaram com o método para alcançar a paz, Madara traiu a aldeia e foi dado como morto por Hashirama. No entanto, ele sobreviveu, aprimorou seu poder despertando o Rinnegan, e orquestrou um plano para manipular o mundo sob um \"Tsukuyomi Infinito\". Revivido pela Quarta Guerra Mundial Shinobi, ele foi derrotado, mas seu legado e plano tiveram um impacto duradouro nos acontecimentos da série, sendo manipulado por Zetsu Negro para se tornar o verdadeiro marionete do plano. ",
  "Minato Namikaze":"Minato Namikaze foi o Quarto Hokage de Konoha, conhecido como o \"Relâmpago Amarelo de Konoha\" por sua velocidade e inteligência, que o levaram a se tornar Hokage aos 24 anos após se tornar um lendário prodígio. Ele criou técnicas como o Rasengan e o Hiraishin no Jutsu, que permitia o teletransporte. Minato sacrificou sua vida para selar o Nove-Caudas em seu filho, Naruto, durante o ataque à vila, deixando um selo de chakra para que Naruto pudesse controlá-lo no futuro.",
  "Hashirama Senju":"Hashirama Senju, o Deus Shinobi, foi o fundador de Konoha e o Primeiro Hokage, conhecido pelo seu desejo de paz e pela sua Kekkei Genkai do Estilo Madeira. Após crescer durante um período de guerra brutal, ele fez amizade com Madara Uchiha, e juntos sonhavam em criar uma vila pacífica. Após a formação de Konoha, a primeira vila-escola, Hashirama distribuiu as Bestas com Cauda para outras nações, garantindo o equilíbrio do poder, o que levou ao surgimento das Cinco Grandes Nações Shinobi. Madara o traiu, resultando numa batalha final onde Hashirama matou o seu amigo para salvar a vila. Hashirama morreu, mas o seu legado e a sua \"Vontade do Fogo\" continuam a moldar o mundo ninja. ",
  "Tobirama Senju":"Tobirama Senju foi o Segundo Hokage de Konoha e irmão do Primeiro Hokage, Hashirama Senju. Ele foi um dos ninjas mais poderosos e inteligentes da história, famoso pela criação de jutsus importantes como o Edo Tensei e as Técnicas de Clone das Sombras. Embora tenha sido um líder pragmático e rígido, com decisões controversas, Tobirama também foi fundamental para a criação de instituições vitais para Konoha, como a Academia Ninja e a Polícia Militar. ",
  "Hagoromo Ōtsutsuki": "Hagoromo Ōtsutsuki, o \"Sábio dos Seis Caminhos\", foi o primeiro a nascer com chakra e filho da princesa Kaguya. Ele e seu irmão, Hamura, derrotaram a Mãe Monstruosa e o Dez Caudas, selando-a. Hagoromo criou o Ninshū e espalhou o chakra, mas dividiu-o entre seus filhos, Indra e Asura. A rivalidade entre eles, instigada pelo Zetsu Negro, deu origem à história do mundo ninja, com Hagoromo, num estado espiritual, a guiar os descendentes até ao momento em que ele pôde transmitir o seu poder a Naruto e Sasuke para derrotarem a sua mãe.",
  "Shisui Uchiha":"Shisui Uchiha foi um membro talentoso do clã Uchiha, conhecido pela sua velocidade (\"Shisui da Cintilação Corporal\") e pelo seu Mangekyou Sharingan com o poderoso Genjutsu Kotoamatsukami, capaz de controlar mentes sem que a vítima perceba. Ele se tornou espião do Terceiro Hokage para impedir o golpe de estado do clã Uchiha, mas Danzō roubou um olho e Shisui confiou o outro a Itachi, pedindo que protegesse a vila. Ele então se jogou de um penhasco para despertar o Mangekyou de Itachi e proteger o segredo do seu olho.",
  "Shikamaru Nara":"Shikamaru Nara é um ninja preguiçoso, mas genial e estratégico, do Clã Nara em Konohagakure, conhecido por sua inteligência e pela técnica Kage Mane (Sombra do Inimigo). Após a morte de seu mestre Asuma, ele amadurece e assume responsabilidades, tornando-se crucial em batalhas e estratégias, liderando missões e sendo promovido a Jōnin. Ele derrota o imortal Hidan e mais tarde se torna o braço direito do Hokage Naruto Uzumaki e, posteriormente, o oitavo Hokage.",
  "Obito Uchiha":"Obito Uchiha era um membro do Clã Uchiha e do Time Minato, que, após supostamente morrer, foi resgatado por Madara Uchiha e manipulado para se tornar o \"Tobi\", líder da Akatsuki. Ele orquestrou a Quarta Guerra Ninja com o objetivo de criar um mundo perfeito para se reunir com sua amada, Rin, mas se arrependeu e se sacrificou no final da guerra para salvar os outros, morrendo ao lado de Kakashi. ",
  "Rin Nohara":"Rin Nohara foi uma ninja médica do Time Minato que, após ser sequestrada e forçada a se tornar a jinchūriki do Isobu (Três Caudas), sacrificou-se para proteger sua vila. Ela se jogou na frente do ataque de Chidori de Kakashi, que a atingiu fatalmente, numa ação que ela tomou para impedir que a besta selada em seu corpo fosse liberada sobre Konoha e causasse destruição. A morte de Rin, orquestrada por Madara, foi crucial para a transformação de Obito em um vilão, influenciado por essa tragédia e seu erro em pensar que Kakashi a tinha traído.",
  "Hiruzen Sarutobi":"Hiruzen Sarutobi, o Terceiro Hokage, foi um dos ninjas mais poderosos do mundo, conhecido como o \"Deus Shinobi\". Aluno do Segundo Hokage e mentor dos Três Sannin Lendários (Jiraya, Tsunade e Orochimaru), ele dominava todos os jutsus da Vila da Folha e tinha grande habilidade em todos os elementos da natureza. Sua longevidade no cargo e sua força, mesmo na velhice, foram notáveis, culminando em sua morte ao enfrentar Orochimaru, o Primeiro e Segundo Hokage reencarnados para selar um ataque na vila.",
  "Mizuki":"Mizuki foi um Chūnin e ex-instrutor da Academia Ninja de Konoha que, motivado por ciúmes e ambição de poder, manipulou Naruto para roubar o Pergaminho dos Selos, a fim de entregá-lo a Orochimaru. Ele revelou a Naruto que ele era o Jinchūriki da Raposa de Nove Caudas e foi derrotado pelo garoto, que usou o Jutsu Clones das Sombras. Mizuki escapou da prisão e procurou Orochimaru, mas foi novamente derrotado e enviado de volta ao cativeiro."
};

async function buscarPersonagem(nome) {
    const nomePersonagem = nome || document.getElementById("inputPersonagem").value.trim();
    const resultadoDiv = document.getElementById("resultado");
    const galleryDiv = document.getElementById("character-gallery");
    const spinner = document.getElementById("loading-spinner");
    
    if (!nomePersonagem) {
        resultadoDiv.innerHTML = "<p>Por favor, digite o nome de um personagem. 😅</p>";
        return;
    }

    galleryDiv.style.display = 'none';
    spinner.style.display = "inline-block";
    resultadoDiv.innerHTML = "";

    try {
        const apiUrl = `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(nomePersonagem)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Erro na busca. Tente novamente mais tarde.');
        }

        const data = await res.json();
        
        const personagem = data.characters && data.characters.length > 0 ? data.characters[0] : null;

        if (!personagem) {
            resultadoDiv.innerHTML = `<p>O personagem "${nomePersonagem}" não foi encontrado. 😟</p>`;
            return;
        }

        const imageUrl = personagem.images && personagem.images.length > 0 ? personagem.images[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';

        // Pega a história do objeto 'historiasPersonagens' em vez de usar a API
        const historiaDoHTML = historiasPersonagens[personagem.name] || 'História não disponível.';

        resultadoDiv.innerHTML = `
            <div class="card">
                <h2>${personagem.name}</h2>
                <img src="${imageUrl}" alt="${personagem.name}">
                <h3>História:</h3>
                <div class="historia-container">
                    <p>${historiaDoHTML}</p>
                </div>
            </div>
        `;
    } catch (error) {
        resultadoDiv.innerHTML = "<p>Erro na busca. Tente novamente mais tarde. 😢</p>";
        console.error("Erro na busca:", error);
    } finally {
        spinner.style.display = "none";
    }
}

function buscarPersonagemComNome(nome) {
    document.getElementById("inputPersonagem").value = nome;
    buscarPersonagem(nome);
}
