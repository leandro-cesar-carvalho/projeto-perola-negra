<template>
    <footer>
        <div id="links">
                <ul>
                <li id="contatos"><img :src="require('@/assets/images/header/wpp.png')">(19)98338-5702</li>
                <li id="contatos"><img :src="require('@/assets/images/header/ig.png')"><a href="https://instagram.com/barbeariaperola.negra?igshid=477n9gjunhdo">@barbeariaperola.negra</a></li>
                <li id="contatos" class="fb"><img :src="require('@/assets/images/header/fb.png')"><a href="https://www.facebook.com/pages/category/Barber-Shop/P%C3%A9rola-Negra-Vintage-Club-102668554925848/">Pérola Negra Vintage Club</a></li>
                </ul>
        </div>
    </footer>        

</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    display: block;
    background-color:#1d2327;
	color:tan;
	border-top:solid 2px tan;
    padding: 5px;
}

li {
	font-size: 18px;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 1.5% 1%;
	display:inline-block;
    width: 30%;
}

a {
	text-decoration:none;
	color:tan;
}

img {
	width:20px;
	height:20px;
	margin-right:5px;
}

@media (max-width: 800px) {
    footer {
        justify-items: center;
    }

    li {
        display: block;
        text-align: center;
        width: 100%;
        margin: auto;
    }
}

</style>