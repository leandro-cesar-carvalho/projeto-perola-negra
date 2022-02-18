<template>
    <div>
        <header>
            <div id="titulo">
                <img :src="require('@/assets/images/logo.png')" alt="LogoPN">
                <ul>
                    <li id="menu-button">Menu</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Agende seu horario</a></li>
                    <li><a href="/local">Local</a></li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>

#titulo {
	text-align:center;
	font-family: cambria;
	/*background: radial-gradient(white, darkgrey);*/
	background: url('../assets/images/home/background3.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	overflow:hidden;
	margin-left:0px;
	margin-right:-5px;
	width:100%; 
}

#titulo img {
	margin: auto;
}

#titulo ul{
	height:38px;
	width: 100%;
	border-top:solid 3px tan;
	border-bottom:solid 3px tan;
	background-color: #1d2327;
	margin: auto;
	text-align:center;
}

#titulo li {
    width: 33.12%;
    padding: 1% 0 1% 0;
    display: inline-block;
    list-style: none;
    text-align: center;
	margin-top: -4px;
}



#titulo a{
	color:tan;
	padding: 0 28% 0 28%;
	text-align:center;
	text-decoration:none;
	font-size:20px;
}

#titulo a:hover {
	transition: ease 0.5s;
	text-align:center;
}

#titulo li:hover {
	background-color:tan;
    transform: scale(1.1);
    cursor: pointer;
    transition: ease 1s;
}

#titulo li:hover a {
	color:black;
}

header ul #menu-button {
	display: none;
}


@media (max-width: 800px) {

	header ul  li #menu-button {
		display: block;
	}

	#links, #titulo {
		width: 100%;
	}

	#links {
		height: auto;
	}

	#links ul {
		width: 100%;
		margin: 10px 0px;
		padding: 0;
	}
	
	#links li {
		width: 40%;
		height: 30px;
		font-size:12px;
		display: inline-block;
		padding-right: 10px;
	}
	
	#links a {
		text-decoration:none;
		color:tan;
	}
	
	#links .fb {
		width: 100%;
		margin-left: 25%;
	}

	#links img {
		width:20px;
		height:20px;
		margin-right:5px;
		margin-top:5px;
	}
	
	
	#titulo {
		margin-top: -18px;
		overflow: visible;
		padding: 0;
	}
	
	#titulo img {
		margin: auto
	}
	
	#titulo ul{
		height: auto;
		margin:-20px 0 0 0;
		padding: 0;
	}
	
	#titulo li{
		width: 100%;
		height: 30px;
		display: block;
		margin: 0;
		padding: 4px 0 0 0;
		z-index: 9;
	}

	#titulo li a {
		padding: 0 25% 0 25%;
	}
	
	#titulo a{
		height: auto;
		text-align: center;
		z-index: 10;
	}
	
	#titulo a:hover{
		padding: 0;
	}
	
	header{
		padding-bottom: 50px;
	}
	
	header ul #menu-button {
		display: none;
	}
}
</style>