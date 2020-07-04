/**selecionando a classe 'modal-overlay' */
const modalOverlay = document.querySelector(".modal-overlay");/**o 'querySelector' seleciona qualquer elemento baseado em CSS, ex: 'class', 'id', tag, etc*/

/**selecionando cada cartão ao clicar */
const cards = document.querySelectorAll(".card"); /*seleciona uma coleção de valores iguais, no caso, cada 'card' e armazenando na variável 'cards'*/

/**obs: Colocar variável, somente se for usar*/
for ( let card of cards ) {
    card.addEventListener("click", function(){ /**'addEventListener' é um ouvidor de eventos, ex: click, mouse mexer, digitação, etc*/
        const videoId = card.getAttribute("id");/**pegando o 'id' do vídeo do HTML*/
        modalOverlay.classList.add("active") /**adiciona na lista de classes do 'modalOverlay'*/
        modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`; /**busca o 'iframe' dentro do 'modalOverlay' e mudar o conteúdo do vídeo, conforme o 'click' no 'card'*/
    })
}

/**fechar o player ao clicar no 'x' */
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src=""; /**ao fechar o player de vídeo, fecha também o áudio*/
})


