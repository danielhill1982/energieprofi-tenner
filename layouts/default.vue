<template>
  <div class="bg-black container mx-auto">
    <header>
      <div class="flex boxy blur-xl justify-center">
      <img src="/img/logo.png" alt="" title="">
    </div>
    <div class="flex justify-center text-white">
      <div class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-4 dark:bg-gray-800">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <NuxtLink class="p-2" to="/">Startseite</NuxtLink>
      <NuxtLink class="p-2" to="/photovoltaikanlagen">Photovoltaikanlagen</NuxtLink>
      <NuxtLink class="p-2" to="/blockheizkraftwerke">Blockheizkraftwerke</NuxtLink>
      <NuxtLink class="p-2" to="/sicherheitssysteme">Sicherheitssysteme</NuxtLink>
      <NuxtLink class="p-2" to="/service">Service</NuxtLink>
      <NuxtLink class="p-2" to="/kontakt">Kontakt</NuxtLink>
     </div>
    </div>
  </nav>
</div>
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

<script setup lang="ts">
import { gsap } from 'gsap';

onMounted(() => {

    gsap.to(".boxy", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power4.out"
    });

  });
</script>