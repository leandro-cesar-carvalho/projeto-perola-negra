<template>
    <section id="local">
        <h1>Localização</h1>
        <div class="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6936540604406!2d-47.62515228554374!3d-22.739625137643227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631aec74c7375%3A0xdb64f11e5d3594c8!2sBarbearia%20Perola%20Negra!5e0!3m2!1spt-BR!2sbr!4v1642218630117!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <section id="principal">

            <video controls class="local-video" loop>
                <source :src="require('@/assets/videos/local.mp4')" type="video/mp4">
            </video>
            <div id="texto">
                <h1>Nosso Local</h1>
                <p>Nosso espaço foi montado para proporcionar a melhor experiência para
                   nossos clientes.
                </p>
            </div>
        </section>
    </section>
    
</template>

<script>
export default {
    name: 'Localizacao'
}
</script>

<style scoped>
    #local {
        background: white;
        width: 90%;
        margin: 50px auto 50px;
        border-radius: 10px;

    }

    #local h1 {
        font-size: 40px;
        margin: auto;
        text-align: center;
    }

    .mapa iframe {
        width: 800px;
        height: 450px;
    }

    .mapa {
        margin: 20px auto;
        width: fit-content;
        box-shadow: 0px 0px 10px black;
        text-align: center;
        border-radius: 15px;
    }

    #principal video {
		width:fit-content;
        height: 650px;
		margin: 2% 8% 2% 5%;
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
        text-align: center;
	}

    @media(max-width:800px) {
        #local {
            width: 90%;
            margin: 20px auto 20px;
        }
        .mapa iframe {
            width: 90%;
            height: fit-content;
        }

        #principal video {
            width:93%;
            height: auto;
            display: block;
            margin: 2% auto 2% auto;
        }

        #texto {
            width: 90%;
            display: block;
            position: inherit;
            margin: auto;
            text-align: center;
            padding-top: 20px;
        }

        #texto h1 {
            font-size: 30px;
        }

        #texto p {
            font-size: 20px;
            margin-top: 20px;
            padding-bottom: 15px;
            text-align: center;
        }
    }

</style>