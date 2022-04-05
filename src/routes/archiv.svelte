<script>
  import Page from "$lib/flowbite/Page.svelte";
  import FetchJe from "$lib/data/FetchJe.svelte";
  import {fetchJsonEditorDetail} from "$lib/data/api/fetchJsonEditor";
  let jid = 0;
  let dObj = null; 

  const fetchDetails = async (id) => {
    dObj = null;  
    dObj = await fetchJsonEditorDetail(id);
  }
  $: fetchDetails(jid);

// $: console.log(jid, dObj)
  
</script>

<Page>
    <div class="container mx-auto px-4">
        <FetchJe let:payload>
            <section class="grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
                {#each payload as {id,titel,info,created_at,startval,group,option,schema}}
                    <label for="option-{id}" class="shadow rounded cursor-pointer">
                        <div class="flex items-center px-2 my-2">
                            <input 
                            bind:group={jid} 
                            id="option-{id}" 
                            type="radio" 
                            name={titel} 
                            value={id} 
                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                            >
                            <span class="block ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                            {titel}
                            </span>
                        </div>
                    </label>
                {/each}
            </section>
            <div class="py-4">
                {#if dObj}
                    <pre class="rounded">{JSON.stringify(dObj)}</pre>
                {/if}
            </div>
        </FetchJe>
    </div>
    
</Page>


<!--
{ type: 'supabase' table: 'json_editor', keys: 'id,titel,info,created_at,startval,group,option,schema' }
-->