<template>
  <div class="bg-black container mx-auto">
    <header>
      <div class="flex justify-center">
      <img src="/img/logo.png" alt="" title="">
    </div>
    <div class="flex justify-center text-white">
      <NuxtLink class="p-6" to="/">Startseite</NuxtLink>
      <NuxtLink class="p-6" to="/photovoltaikanlagen">Photovoltaikanlagen</NuxtLink>
      <NuxtLink class="p-6" to="/blockheizkraftwerke">Blockheizkraftwerke</NuxtLink>
      <NuxtLink class="p-6" to="/sicherheitssysteme">Sicherheitssysteme</NuxtLink>
      <NuxtLink class="p-6" to="/service">Service</NuxtLink>
      <NuxtLink class="p-6" to="/kontakt">Kontakt</NuxtLink>
    </div>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <div class="p-9 bg-yellow-600">
        <h2 class="text-4xl">Impressum</h2>
      </div>
    </footer>

  </div>
</template>

<style>
body {
  font-family: Prompt;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>