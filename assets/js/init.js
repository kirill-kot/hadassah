	$(document).ready(function () {
		//инициализация параллакса
		$('.parallax').parallax();
		//		прописываем правило для кнопки, чтобы открывала модальное окно с правилами
		$('label a.modal-trigger').on('click', function () {
			$('#eula_modal').openModal();
		});
		//		скроллы по якорям
		$('a').on('click', function () {
			var targetSection = $(this).attr("href");
			$(targetSection).velocity('scroll', {
				queue: false,
				duration: '1400',
				offset: -100
			});

			//			закрытие модального окна
			if ($(this).hasClass('modal-close')) {
				(function () {
					$(this).closeModal();
				});
			}
		});
			//			боковое меню мобильной версии
			$('.button-collapse').sideNav({
				//menuWidth: 300, // Default is 240
				edge: 'right', // Choose the horizontal origin
				closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
			});
	});
