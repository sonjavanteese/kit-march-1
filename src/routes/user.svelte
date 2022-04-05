<script>
    import Page from "$lib/flowbite/Page.svelte";
    import FetchJe from "$lib/data/FetchJe.svelte";
  </script>
  
  <Page>
      <div class="container mx-auto px-4">
      <FetchJe let:payload>
      <section class="grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
          {#each payload as {id,titel,info,created_at,startval,group,option,schema}}
              <div class="shadow">
                  <header class="px-4 py-4">
                      <div>
                          <h5 class="text-gray-600 truncate">{titel}</h5>
                          <p class="text-sm text-gray-400">{info}</p>
                      </div>
                  </header>
              </div>
          {/each}
      </section>
      </FetchJe>
      </div>
  
  </Page>
  