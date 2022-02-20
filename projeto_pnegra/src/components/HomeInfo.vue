<template>
    <section id="principal" data-aos="fade-left">

        <video controls class="home-video" loop>
            <source :src="require('@/assets/videos/main.mp4')" type="video/mp4">
        </video>
        <div id="texto">
            <h1>O corte ideal para o seu estilo de vida</h1>
            <p>Trabalhamos atendendo as preferência dos clientes, acomodando-os no melhor espaço e com os melhores equipamentos</p>
        </div>
    </section>
</template>

<style scoped>
	#principal {
		background: white;
		width: 90%;
		display: block;
		border-radius: 10px;
		margin: 50px auto 50px;
	}

	#principal video {
		width:fit-content;
		margin: 2% 8% 2% 2%;
		border-radius: 15px;
		box-shadow: 3px 3px 3px black;
	}

	#texto {
		width: 40%;
		display: inline-block;
		position: absolute;
		padding-top: 60px;
	}

	#texto h1 {
		font-size: 50px;
	}

	#texto p {
		font-size: 25px;
		margin-top: 40px;
	}

	@media(max-width: 800px) {
		#principal {
			margin: 20px auto 20px;
			padding: 20px 0 20px;
			width: 90%;
			height: fit-content;
		}

		#principal video, #texto {
			display: block;
			width: 90%;
		}

		#principal video {
			width: 95%;
			height: fit-content;
			margin: 10px auto;
			box-shadow: 3px 3px 3px black;
		}

		#texto {
			padding-top: 20px;
			position: inherit;
			text-align: center;
			margin: auto;
		}

		#texto h1 {
			font-size: 30px;
		}

		#texto p {
			font-size: 20px;
			margin-top: 15px;
			text-align: center;
		}
	}
</style>