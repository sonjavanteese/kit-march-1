<script>
  import Modal from '$lib/flowbite/Modal.svelte';
  import { fetchClassicDetail } from '$lib/data/api/fetchSessionData.js';
  import FetchClassic from '$lib/data/FetchClassic.svelte';
  import Page from "$lib/flowbite/Page.svelte";
  

  let cid = 0;
  let dObj = null; 
  let showModal = false;
  let close;

  const classDetails = async (cid) => {
      dObj = null;
      dObj = await fetchClassicDetail(cid);
      showModal = true;
  };

  $: classDetails(cid);
  
</script>


    <div class="container mx-auto px-4">
        <FetchClassic let:payload>
           
            <section class="grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
                {#each payload as {titel,info,tags,screen,fileurl,thumb,id}}
                    <label for="option-{id}" class="shadow rounded cursor-pointer">
                        <div class="flex items-center px-2 my-2">
                            <input 
                            bind:group={cid} 
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
                    {:else}
                    <div>Press The Refresh Button</div>
                {/each}
            </section>
            <div class="py-4">
                {#if dObj}
                    <pre class="rounded">{JSON.stringify(dObj)}</pre>
                {/if}
            </div>
        </FetchClassic>
    </div>
    


<Modal bind:open={showModal} bind:close>
     <!-- Modal header -->
     <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
            Info
        </h3>
        <button on:click={close} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
        </button>
    </div>
    <!-- Modal body -->
    <div class="p-6 space-y-2 text-gray-600">
    {#if dObj}
    <h4>{dObj.titel}</h4>
    <p>{dObj.info}</p>
    <p><span class="italic text-sm">{dObj.tags}</span></p>
        <!-- titel,info,tags,screen,fileurl,thumb,id -->
    {/if}
    </div>
    <!-- Modal footer -->
    <div class="flex items-center p-4 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button on:click={close} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Okay
        </button>
    </div>
</Modal>

<!--
{ type: 'supabase' table: 'json_editor', keys: 'id,titel,info,created_at,startval,group,option,schema' }
-->