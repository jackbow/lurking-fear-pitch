<script lang="ts">
  fetch(`/api/v1/campaigns/${import.meta.env.VITE_GIVE_BUTTER_CAMPAIGN_ID}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${import.meta.env.VITE_GIVE_BUTTER_API_KEY}`, accept: 'application/json' },
  })
    .then((response) => response.json())
    .then((response) => console.log('response', response))
    .catch((err) => console.error(err));
  // fetch(`https://api.givebutter.com/v1/campaigns/${import.meta.env.VITE_GIVE_BUTTER_CAMPAIGN_ID}`, { method: 'GET', headers: { accept: 'application/json' } })
  //   .then((response) => response.json())
  //   .then((response) => console.log('response', response))
  //   .catch((err) => console.error(err));
</script>

<svelte:head>
  <script
    async
    src="https://widgets.givebutter.com/latest.umd.cjs?acct={import.meta.env.VITE_GIVE_BUTTER_ACCOUNT_ID}&p=other"
  ></script>
</svelte:head>
<section id="donate" class="flex flex-col flex-wrap justify-center items-center bg-white px-20 pt-20">
  <!-- <section id="donate" class="flex flex-col flex-wrap justify-center items-center bg-black text-white px-20 py-28"> -->
  <h2 class="text-8xl">Thank You</h2>
  <div class="pt-4 space-y-2 text-center font-normal text-xl">
    <p>
      We want to see a different kind of hero in the world of adventure storytelling. It's time for a cultural shift.
    </p>
    <p>Let's create it.</p>
  </div>
  <div id="hmm" class="">
    <givebutter-widget id={import.meta.env.VITE_GIVE_BUTTER_WIDGET_ID}></givebutter-widget>
  </div>
</section>

<style lang="stylus">

</style>
