<script lang="ts">
  const budgets = [
    { category: 'Project Development', price: 1550 },
    { category: 'Staff & Crew', price: 45000 },
    { category: 'Production Expenses & Equipment Rental', price: 20000 },
    { category: 'Post Production & Composition', price: 30000 },
    { category: 'Insurance (Crew & Equipment)', price: 10000 },
    { category: 'Office & Administration ', price: 10000 },
    { category: 'Accessibility', desc: 'Screenings, outreach, viewing options', price: 5000 },
  ];
  const total_budget = budgets.reduce((total, budget) => total + budget.price, 0);
  const amount_raised = 21000; // TODO: update this from givebutter
  const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;
</script>

<section id="crew" class="bg-black text-white pt-20">
  <div class="flex flex-col flex-wrap itesm-justify-center px-4 md:px-8 lg:px-20 mx-auto pb-20">
    <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-sans font-extrabold self-start">Budget</h2>
    <div class="px-4 sm:px-6 lg:px-8 self-start w-full xl:w-2/3">
      <div class="-mx-4 mt-8 flow-root sm:mx-0">
        <table class="min-w-full">
          <colgroup>
            <col class="w-full sm:w-1/2" />
            <col class="sm:w-1/6" />
          </colgroup>
          <tbody>
            {#each budgets as { category, price, desc }}
              <tr class="border-b border-gray-200">
                <td class="max-w-0 py-5 pl-4 pr-3 text-sm xl:text-xl sm:pl-0">
                  <div class="font-bold text-gray-100">{category}</div>
                  {#if desc}
                    <div class="mt-1 truncate text-gray-400 font-normal">{desc}</div>
                  {/if}
                </td>
                <td class="font-normal px-3 py-5 text-right text-sm xl:text-lg text-gray-400 sm:table-cell"
                  >{usd(price)}</td
                >
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <!-- <tr>
              <th
                scope="row"
                colspan="1"
                class="hidden pl-4 pr-3 pt-4 text-right text-xl font-normal text-gray-300 sm:table-cell sm:pl-0"
                >Total</th
              >
              <th scope="row" class="pl-4 pr-3 pt-4 text-left text-xl font-normal text-gray-300 sm:hidden">Total</th>
              <td class="pl-3 pr-4 pt-4 text-right text-xl text-gray-300 sm:pr-0">{usd(total_budget)}</td>
            </tr>
            <tr>
              <th
                scope="row"
                colspan="1"
                class="hidden pl-4 pr-3 pt-6 text-right text-xl font-normal text-gray-300 sm:table-cell sm:pl-0"
                ><div>Amount Raised</div>
                <div class="mt-1 truncate text-gray-400 font-normal text-xs">
                  Contributors: Private donors, Reel Rock, Adaptive Climbing Group
                </div></th
              >
              <th scope="row" class="pl-4 pr-3 pt-6 text-left text-xl font-normal text-gray-300 sm:hidden"
                >Amount Raised</th
              >
              <td class="pl-3 pr-4 pt-6 text-right text-xl text-gray-300 sm:pr-0">{usd(amount_raised)}</td>
            </tr> -->
            <tr>
              <th
                scope="row"
                colspan="1"
                class="hidden pl-4 pr-3 pt-4 text-right text-2xl font-semibold text-gray-100 sm:table-cell sm:pl-0"
                >Funding Needed</th
              >
              <th scope="row" class="pl-4 pr-3 pt-4 text-left text-2xl font-semibold text-gray-100 sm:hidden"
                >Funding Needed</th
              >
              <td class="pl-3 pr-4 pt-4 text-right text-2xl font-semibold text-gray-100 sm:pr-0"
                >{usd(total_budget - amount_raised)}</td
              >
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</section>

<style lang="stylus">

</style>
