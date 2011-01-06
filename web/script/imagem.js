function muda_imagem(id, caminho) {
	$(id).click(function(){
		$("#produto_imagem > img").first().attr("src", caminho);

		$(this).hover(
			function() {
				$(this).css("opacity", "1");
			},

			function() {
				$(this).css("opacity", "0.5");
			}
		);
	});
}

$(document).ready(function() {
	muda_imagem("#preto", "images/produto_foto_grande_1.jpg");
	muda_imagem("#azul", "images/produto_foto_grande_2.jpg");
	muda_imagem("#cinza", "images/produto_foto_grande_3.jpg");
});
