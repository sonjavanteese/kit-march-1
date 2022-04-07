<script>
  import Page from "$lib/flowbite/Page.svelte";
  import {user, profil} from "$lib/stores";
  import {logOut} from "$lib/db";
  // import {goto} from '$app/navigation';
  // $: console.log($profil)
</script>

<Page>
  <section class="text-gray-600 body-font py-6">
    <div class="w-full max-w-xl px-4 py-6 space-y-6 mx-auto shadow">
    <article class="h-full flex sm:flex-row flex-col items-center justify-center">
      <img alt="team" class="flex-shrink-0 rounded-lg w-30 h-30 object-cover object-center sm:mb-0 mb-4" 
      src={$profil.img_url ? $profil.img_url : 'https://dummyimage.com/200x200'}>
      <div class="flex-grow text-center sm:text-left sm:pl-8">
        <h2 class="title-font font-medium text-sm text-gray-400 truncate">{$user.id}</h2>
        <h3 class="text-gray-500 mb-1">{$profil.username}</h3>
        <p class="mb-4">{$user.email}</p>
        <span class="inline-flex">
          <span class="ml-2 text-gray-500" title={$profil.website ? $profil.website : ''}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </span>
          <span class="ml-2 text-gray-500" title={$user.email ? $user.email : ''}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </span>
        </span>
      </div>
    </article>
    <hr>
    <article class="text-center">
      <button class="btn btn-red" on:click={logOut}>Logout</button>
    </article>
    </div>
  </section>
</Page>


<!--
{ type: 'supabase' table: 'profiles', keys: 'id,username,avatar_url,website,updated_at,img_url,step1' }
-->