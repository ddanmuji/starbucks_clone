const searchEl = document.querySelector('.header__search');
const searchInputEl = searchEl?.querySelector('input');

searchEl?.addEventListener('click', function () {
  searchInputEl?.focus();
});

searchInputEl?.addEventListener('focus', function () {
  searchEl?.classList.add('header__search--focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl?.addEventListener('blur', function () {
  searchEl?.classList.remove('header__search--focused');
  searchInputEl.setAttribute('placeholder', '');
  searchInputEl.value = '';
});
