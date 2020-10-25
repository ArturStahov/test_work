1)что-бы спрятать splash-screen(стартовое окно) после авторизации добавить ему
класс visually-hidden , найти елемент по [data-type="splash-screen"]

2)что-бы вывести на экран main-screen после авторизации удалить у него класс
visually-hidden, найти елемент по [data-type="main-screen"]

3. После регистрации или авторизации Найти елемент с [data-type="page-main"] и
   добавить класс main-screen-bg а класс splash-screen-bg удалить

4)при выходе с приложения удалить с елемента [data-type="page-main"] класс
main-screen-bg а класс splash-screen-bg добавить

5)Кнопка отправки формы в зависимости от типа формы signin или login меняет свой
атрибут [data-type="login-btn"] или [data-type="registration-btn"] ты можеш
найти кнопку по id='modal-form-button' и в зависимости какое значение атрибута
data-type при клике на кнопку либо регестрировать либо логинить

6)кнопку выхода с main-screen можно найти по data-type="button-logout"
