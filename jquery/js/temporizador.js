(function ($) {
	$.fn.temporizador = function (opcoes) {
		const opcoesFinais = $.extend({
			mensagem: 'Em breve!',
			horario: '23:59:59'
		}, opcoes);

		function criaSpan(classe) {
			return $(`<span class=${classe}>`);
		};

		const horaDezena = criaSpan('digito').html('0');
		const horaUnidade = criaSpan('digito').html('0');
		const minutoDezena = criaSpan('digito').html('0');
		const minutoUnidade = criaSpan('digito').html('0');
		const segundoDezena = criaSpan('digito').html('0');
		const segundoUnidade = criaSpan('digito').html('0');
		
		const separadorHora = criaSpan('separador').html(':');
		const separadorMinuto = criaSpan('separador').html(':');
		const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem);

		$(this).addClass('temporizador');
		$(this).append(horaDezena, horaUnidade, separadorHora,
			minutoDezena, minutoUnidade, separadorMinuto,
			segundoDezena, segundoUnidade, mensagem);

		const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
		const horarioAlvo = regex.exec(opcoesFinais.horario);

		let temporizador = setInterval(() => {
			const agora = new Date();
			const alvo = new Date();
			alvo.setHours(horarioAlvo[1]);
			alvo.setMinutes(horarioAlvo[2]);
			alvo.setSeconds(horarioAlvo[3]);

			const diferencaEmMili = alvo.getTime() - agora.getTime();
			if (diferencaEmMili >= 0) {
				const diferenca = regex.exec(new Date(diferencaEmMili).toISOString());
				// console.log(diferenca);
				
				horaDezena.html(diferenca[1][0]);
				horaUnidade.html(diferenca[1][1]);
				minutoDezena.html(diferenca[2][0]);
				minutoUnidade.html(diferenca[2][1]);
				segundoDezena.html(diferenca[3][0]);
				segundoUnidade.html(diferenca[3][1]);
			} else {
				clearInterval(temporizador);
			}
		}, 1000);

		return this;
	}
})(jQuery);