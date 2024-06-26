<script lang="ts">
  import meru_avif from '~/assets/images/meru.avif';
  import meru_webp from '~/assets/images/meru.webp';
  import meru_jpg from '~/assets/images/meru.jpg';
  import crip_camp_avif from '~/assets/images/crip_camp.avif';
  import crip_camp_webp from '~/assets/images/crip_camp.webp';
  import crip_camp_jpg from '~/assets/images/crip_camp.jpg';
  import Picture from './Picture.svelte';
  import Icon from './Icon.svelte';
</script>

<section id="market-analysis" class=" bg-black text-white">
  <div
    class="w-full sm:w-3/4 md:w-2/3 lg:w-full px-4 md:px-8 lg:px-20 mx-auto flex flex-col xl:grid gap-4 justify-start pt-20"
  >
    <h2 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl h-fit font-sans font-extrabold self-start col-span-2">
      Market Analysis
    </h2>
    <div class="row-start-2 space-y-4 font-normal">
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
    <div class="row-start-3 space-y-4 font-normal">
      <blockquote class="relative pl-8 pt-4">
        <svg
          class="absolute -top-4 -start-2 size-16 text-gray-500"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          ></path>
        </svg>

        <div class="relative z-10 font-bold space-y-4">
          <p class="text-white text-xl">
            <em>
              By any metric, the stories of people with disabilities <a
                href="https://apnews.com/910abfe1b02c416eb60c76cbb897bdc1"
                >are among the least represented in film and television. <Icon
                  name="external-link"
                  class="inline-block"
                /></a
              >
              Last year, USC Annenberg's
              <a href="assets.uscannenberg.org/docs/aii-inequality-report-2019-09-03.pdf"
                >annual inequality report <Icon name="external-link" class="inline-block" /></a
              > found that, of the 4,445 characters in the most popular movies of 2018, just 1.6% were shown with a disability.
              U.S. census figures estimate 27.2% of Americans have some form of disability.
            </em>
          </p>
          <p class="text-white text-xl">
            <em>
              A <a
                href="https://rudermanfoundation.org/white_papers/disability-inclusion-in-movies-and-television-market-research-2019/"
                >2019 study by the Ruderman Family Foundation <Icon name="external-link" class="inline-block" /></a
              > found that about half of U.S. households favor authentic portrayals of actors with disabilities. Yet Hollywood,
              where villains are still regularly signaled by deformity, has a long history of unfavorable, stereotyped or
              inauthentic depictions of disability.
            </em>
          </p>
        </div>
        <svg
          class="absolute bottom-2 -end-4 size-16 text-gray-500"
          style="transform: rotate(180deg);"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          ></path>
        </svg>
        <p class="text-xl italic">— Seattle Times</p>
      </blockquote>
    </div>
    <div
      class="mt-8 lg:mt-0 lg:pl-12 items-center lg:items-start row-start-2 row-span-2 flex flex-col sm:flex-row justify-evenly gap-8 font-normal"
    >
      <div class="flex flex-col items-start place-content-start">
        <Picture
          class="max-w-fit h-80 object-contain object-center"
          avif={meru_avif}
          webp={meru_webp}
          jpg={meru_jpg}
          alt="Meru Film Poster"
        />
        <p><strong>Budget:</strong> $100,000</p>
        <p><strong>Gross Revenue:</strong> $3,500,000</p>
      </div>
      <div class="flex flex-col items-start place-content-start">
        <Picture
          class="max-w-fit h-80 object-contain object-center"
          avif={crip_camp_avif}
          webp={crip_camp_webp}
          jpg={crip_camp_jpg}
          alt="Crip Camp Film Poster"
        />
        <p><strong>Budget:</strong> $120,000</p>
        <p><strong>Gross Revenue:</strong> $1,250,000</p>
      </div>
    </div>
  </div>
</section>

<style lang="stylus">
  #market-analysis {
    grid-template-columns: 66% 33%;
    grid-template-rows: 8rem 1fr;
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
</style>
