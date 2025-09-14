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
  "Jiraiya": "Jiraiya foi um dos Três Sannin Lendários de Konoha, um mestre ninja conhecido como o \"Sábio Sapo\" ou \"Sábio Tarado\", famoso por sua genialidade e força, mas também por seu lado mulherengo e por escrever a série de livros para adultos Icha Icha. Ele foi mentor de Minato Namikaze e, posteriormente, de Naruto Uzumaki, moldando o caráter de ambos os ninjas de grande importância para a Vila da Folha. Treinado pelo Terceiro Hokage, Jiraiya dominava o Senjutsu, técnicas baseadas na invocação de sapos, sendo uma figura crucial na história de Konoha. "
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