<script>
    import Page from "$lib/flowbite/Page.svelte";
    import { getStores, navigating, page, session, updated } from '$app/stores';
    $: console.log($page.url.pathname);
</script>




{#key $page.url.pathname}

<Page>
<header slot="topbar">
 <nav class="flex items-center justify-center space-x-4">
  <a href="/jedit">Start</a>
  <a href="/jedit/list">List</a>
</nav>   
</header>
<slot></slot>
</Page>

{/key}