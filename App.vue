<template>
  <div class="app">
    <header class="header">
      <div class="container header__inner">
        <RouterLink to="/" class="logo" aria-label="Главная страница Чистота">
          <img :src="logo" alt="Логотип клининговой компании Чистота" class="logo__image" />
          <div class="logo__text">
            <span class="logo__title">Чистота</span>
            <span class="logo__subtitle"> клининговая компания</span>
          </div>
        </RouterLink>

        <nav class="nav" aria-label="Главная навигация">
          <RouterLink to="/" class="nav__link">Главная</RouterLink>
          <RouterLink to="/about" class="nav__link">О компании</RouterLink>
          <RouterLink to="/pricing" class="nav__link">Стоимость услуг</RouterLink>
          <RouterLink to="/employees" class="nav__link">Сотрудники</RouterLink>
          <RouterLink to="/faq" class="nav__link">FAQ</RouterLink>
        </nav>

        <div class="header__auth">
          <RouterLink to="/login" class="btn btn--ghost">Вход</RouterLink>
          <RouterLink to="/register" class="btn btn--primary">Регистрация</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="footercol footerbrand">
          <RouterLink to="/" class="logo logo--footer" aria-label="Главная страница Чистота">
            <img :src="logo" alt="Логотип Чистота" class="logo__image" />
            <div class="logo__text">
              <span class="logo__title">Чистота</span>
              <span class="logo__subtitle"> клининговая компания</span>
            </div>
          </RouterLink>
          <p class="footer__desc">
            Безупречная чистота — визитная карточка вашего пространства.
          </p>
          <p class="footer__contact">
            Телефон: <a href="tel:+79147000777">+7 914 7000 777</a><br />
            Email: <a href="mailto:Gmail@chistota.ru">Gmail@chistota.ru</a>
          </p>
        </div>

        <div class="footercol footernav">
          <h4 class="footer__title">Навигация</h4>
          <RouterLink to="/" class="footer__link">Главная</RouterLink>
          <RouterLink to="/pricing" class="footer__link">Рассчитать стоимость</RouterLink>
          <RouterLink to="/employees" class="footer__link">Наши сотрудники</RouterLink>
          <RouterLink to="/faq" class="footer__link">FAQ</RouterLink>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="container footer__bottom-inner">
          <span>© 2025 Чистота</span>
          <span>
            Условия использования ·
            <RouterLink to="/privacy-policy">Политика конфиденциальности</RouterLink>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from './assets/logo.png'
import { useHead } from '@vueuse/head'

// SEO-метаданные
useHead({
  title: 'Чистота — профессиональные клининговые услуги',
  meta: [
    { name: 'description', content: 'Клининговая компания "Чистота" предлагает профессиональные услуги уборки квартир, домов и офисов. Качество, надёжность, доступные цены.' },
    { name: 'keywords', content: 'уборка, клининг, чистота, клининговая компания, услуги уборки' },
    { property: 'og:title', content: 'Чистота — клининговая компания' },
    { property: 'og:description', content: 'Безупречная чистота — визитная карточка вашего пространства.' },
    { property: 'og:image', content: '/assets/logo.png' },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Чистота",
        "image": "/assets/logo.png",
        "description": "Профессиональные клининговые услуги в вашем городе.",
        "telephone": "+79147000777",
        "email": "Gmail@chistota.ru",
        "url": "https://chistota.ru",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RU"
        }
      })
    }
  ]
})
</script>
