<script lang="ts">
  import meru_avif from '~/assets/images/meru.avif';
  import meru_webp from '~/assets/images/meru.webp';
  import meru_jpg from '~/assets/images/meru.jpg';
  import crip_camp_avif from '~/assets/images/crip_camp.avif';
  import crip_camp_webp from '~/assets/images/crip_camp.webp';
  import crip_camp_jpg from '~/assets/images/crip_camp.jpg';
  import Picture from './Picture.svelte';
</script>

<section id="market-analysis" class="h-[40rem] flex justify-start bg-black text-white pt-8 px-20">
  <!-- <div class="flex flex-col items-center justify-center bg-black text-white"> -->
  <div class=" flex flex-col w-2/3">
    <h2 class="text-8xl font-sans font-extrabold self-start">Market Analysis</h2>
    <div class="pr-20 pt-4 space-y-4">
      <p>
        The outdoor adventure film industry grosses $110,000,000 annually, and the success of adventure films (and
        specifically climbing films) is on the rise.
      </p>
      <p>
        We will ensure the accessibility of this film, offering subtitled screenings, audio descriptions, and accessible
        venues. We'd love to throw screenings in partnership with organizations that support athletes with disabilities,
        By prioritizing the community we have embedded with, we hope to authentically inspire others — abled or
        disabled-bodied — to take on big goals and pursue adventure.
      </p>
    </div>
  </div>
  <div class="flex items-start gap-8 w-1/3">
    <div class="w-1/2 flex flex-col items-start place-content-start">
      <Picture
        class="max-w-fit h-80 object-contain object-center"
        avif={meru_avif}
        webp={meru_webp}
        jpg={meru_jpg}
        alt="Meru Film Poster"
      />
      <p>Budget: $100,000</p>
      <p>Gross Revenue: $3,500,000</p>
    </div>
    <div class="w-1/2 flex flex-col items-start place-content-start">
      <Picture
        class="max-w-fit h-80 object-contain object-center"
        avif={crip_camp_avif}
        webp={crip_camp_webp}
        jpg={crip_camp_jpg}
        alt="Crip Camp Film Poster"
      />
      <p>Budget: $120,000</p>
      <p>Gross Revenue: $1,250,000</p>
    </div>
  </div>
  <!-- <div class="flex content-start">
    <div>
      <Picture
        class="w-2/3 h-1/2 object-contain object-center"
        avif={meru_avif}
        webp={meru_webp}
        jpg={meru_jpg}
        alt="Meru Film Poster"
      />
      <p>Budget: $100,000</p>
      <p>Gross Revenue: $3,500,000</p>
    </div>
    <div>
      <Picture
        class="w-2/3 h-1/2 object-contain object-center"
        avif={crip_camp_avif}
        webp={crip_camp_webp}
        jpg={crip_camp_jpg}
        alt="Crip Camp Film Poster"
      />
      <p>Budget: $120,000</p>
      <p>Gross Revenue: $1,250,000</p>
    </div>
  </div> -->
</section>

<div>
  <blockquote>
    "By any metric, the stories of people with disabilities are among the least represented in film and television. Last
    year, USC Annenberg's annual inequality report found that, of the 4,445 characters in the most popular movies of
    2018, just 1.6% were shown with a disability. U.S. census figures estimate 27.2% of Americans have some form of
    disability.
    <br />
    A 2019 study by the Ruderman Family Foundation found that about half of U.S. households favor authentic portrayals of
    actors with disabilities. Yet Hollywood, where villains are still regularly signaled by deformity, has a long history
    of unfavorable, stereotyped or inauthentic depictions of disability." - Seattle Times
  </blockquote>
</div>

<style></style>
