<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Клиент</title>
	<link rel="stylesheet" href="./css/style.css">
	
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>
<body class="page">
	<!--search-->
	<div class="main-finder page__main-finder main-finder--style">
		<div class="mini-nav"></div>
		<div class="finder-input-wrapper">

			<form action="">
				<input type="search" class="main-finder__input main-finder__input--style" placeholder="Поиск">
			</form>
		</div>
	</div>

	<main class="clearfix">
		<!--leftwrapper-->
		<div class="scrollbar-wrapper">
			<nav class="main-nav main__main-nav">
				<ul class="menu-list main-nav__menu-list main-nav__menu-list--style">
					<li class="menu-item menu-list__menu-item menu-item--style">
						<a href="orders.php" class="menu-item__link menu-item__link--style menu-item__link--selected">
							<img src="img/orders.png" alt="заказы" class="menu-item__image">
							<span class="menu-item__image-description menu-item__image-description--style">заказы</span>
							<div class="selected-triangle--inserted"></div>
						</a>
					</li>
					<li class="menu-item menu-list__menu-item menu-item--style">
						<a href="message.php" class="menu-item__link menu-item__link--style">
							<img src="img/message.png" alt="производство" class="menu-item__image">
							<span class="menu-item__image-description menu-item__image-description--style">сообщения</span>
						</a>
					</li>
					<li class="menu-item menu-list__menu-item menu-item--style">
						<a href="notification.php" class="menu-item__link menu-item__link--style">
							<img src="img/notification.png" alt="производство" class="menu-item__image">
							<span class="menu-item__image-description menu-item__image-description--style">уведомления</span>
						</a>
					</li>
					<li class="menu-item menu-list__menu-item menu-item--style">
						<a href="settings.php" class="menu-item__link menu-item__link--style">
							<img src="img/settings.png" alt="Настройка" class="menu-item__image">
							<span class="menu-item__image-description menu-item__image-description--style">Настройка</span>
						</a>
					</li>
				</ul>	
			</nav>
		</div>
		<div id="content" class="main-content main__main-content">

		</div>
		<div id="loading" class="loading">Идет загрузка...</div>
		
		</main>
	<script src="http://code.jquery.com/jquery-3.2.1.min.js" ></script>
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="./js/main.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	
	<script type="text/javascript">
		$(document).ready(function() {
			if ($('#content').html().trim()) {
				} else {
					var load=$('#loading').css("display", "block")
					$('#content').html(load);
					$('#content').load('orders.php');
				}
	        $('.menu-item__link').click(function(){
	            var cont = $('#content');
	            var thisHref = $(this).attr('href');

	            	cont.html('Идет загрузка...');
	            	cont.load(''+thisHref+'');
	            	return false;      
	    	})
	    });
	    $('.mini-nav').on('click', function(){
	    	$('.scrollbar-wrapper').toggle('slow');
	    });
	</script>


</body>
</html>