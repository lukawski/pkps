$(function () {
  var templates = {
    english: `
    <p class="text-right"><strong>Szczecin 08.11.2016r.</strong></p>
    <h2 class="text-center underline"><strong>APPEAL</strong></h2>
    <p>
      I want to make 100 Christmas packages for Szczecin families in need. Polski  Komitet Pomocy Spolecznej – Zarzad  Okregowy in Szczecin- Organization registered in the country's court with the number KRS 0000041349. Called “Small Gift-Lots of Joy”, for the 49th time, has a long history of helping families in need. PKPS is counting on the help and good hearts of the people. We are extending the invitation to schools, daycares, businesses, governments and individuals who are willing to help.
    </p> 
    <p>
      Even the smallest bit counts. From December 1-16,2016 at the PKPS on Robotniczej 9U/2,mon-fri from 10am-2pm, you can start bringing in things for the little ones such as candy, new toys, games, school supplies, clothing, etc. That way, you have a part in giving back. 
    </p>
    <p>
      If you would like more information, contact the organization at 91-433-45-04 or 514-161-064. 
    </p>
    <p>
      You may also donate money for the cause to the bank under PKPS 
    </p>
    <p class="text-center">
      Bank Pekao SA Szczecin
    </p>
    <p class="text-center">
      PL 23 1240 3813 1111 0000 4375 5868   lub  SWIFT PEKAO SA - PKOPPLPW
    </p>
    <p>
    For the third time, we want to repeat the “Christmas Bag full of Surprises” movement. Big thing for the past two years, has been the individual giving of the packages in person to families or single parents raising their kids. Last year, 5 amazing individuals gave away Christmas packages in person to families in need. Every present and package was delivered to children and their families on the 23rd &24th of December, 2015. 
    </p>
    <p>
    All you have to do is get in touch with the staff at ZO PKPS in Szczecin, running the organization who will set up the families in need with the people willing to help them.
    </p>
    <p class="text-right">Yours faithfully</p>
    <p class="text-right">dr Aleksandra Sander</p>
    `,
    polish: `
    <p class="text-right"><strong>Szczecin 08.11.2016r.</strong></p>
    <h2 class="text-center underline"><strong>APEL</strong></h2>
    <div class="col-md-12">
    <p> <strong>Sto paczek świątecznych dla dzieci z najuboższych szczecińskich rodzin chce  przygotować  Polski Komitet Pomocy Społecznej – Zarząd Okręgowy w Szczecinie - organizacja pożytku publicznego wpisana w Krajowym Rejestrze Sądowym o numerze KRS 0000041349.</strong></p>
    <p>Przedświąteczna akcja <strong>„Mały podarek - dużo radości"  </strong>prowadzona już po raz 49 i ma swoją bardzo długą historię. Darczyńcy nigdy nie zawiedli. PKPS liczy na pomoc i otwarte serca ludzi wrażliwych.</p>
    <p>Apelujemy  więc do szkół, przedszkoli, firm, urzędów i osób indywidualnych - liczy się każdy gest, każdy nawet najmniejszy upominek.</p>
    <p class="underline"><strong>Darowizny rzeczowe dla najmłodszych będzie  można przekazywać  od 01 do 16 grudnia 2016 r. w Punkcie Pomocy PKPS przy ul. Robotniczej 9U/2 od poniedziałku do piątku w godz. od 10 -14. </strong></p>
    <p>Można przynosić słodycze, nowe maskotki, gry, zabawki, przybory szkolne, odzież itp. W ten sposób każdy może mieć swój udział w „Małym podarku".</p>
    <p>Kontakt do organizatorów akcji – 91-433-45-04 lub 514-161-064.</p>
    <p class="underline">Na ten cel można również  dokonać dobrowolnych  wpłat  darowizn na  numer konta bankowego PKPS</p>
    <p>BANK PEKAO SA I ODDZIAŁ SZCZECIN</p>
    <p class="underline"><strong>PL 23 1240 3813 1111 0000 4375 5868   lub  SWIFT PEKAO SA - PKOPPLPW</strong></p>
    <p class="underline">Na wniosek darczyńcy jest możliwość zawarcia umowy darowizny finansowej.</p>
    <p class="text-center underline"> <strong>Po raz trzeci pragniemy powtórzyć akcję pod nazwą  </strong></p>
    <p class="text-center underline"> <strong>„Świąteczny  worek pełen niespodzianek”</strong></p>
    <p>Dużym powodzeniem od dwóch lat  cieszy się akcja indywidualnego przekazania paczki  dla  konkretnej  wielodzietnej rodziny lub dla matki (ojca) samotnie wychowujących dzieci.</p>
    <p>W roku ubiegłym 5 darczyńców przekazało osobiście pięciu rodzinom (rodziny wielodzietne, matki samotnie wychowujące dzieci) świąteczne prezenty. Wszystkie prezenty i paczki zostały przekazane dzieciom 23 i 24 grudnia 2015r.  </p>
    <p>Wystarczy skontaktować się z pracownikami biura  ZO PKPS w Szczecinie  – organizatorem tej  akcji  –  (tel. 91-433-45-04 lub 514-161-064),  którzy wskażą potrzeby swoich podopiecznych oraz za ich zgodą skontaktują z darczyńcami.</p>
    <p class="text-right">Z poważaniem</p>
    <p class="text-right">dr Aleksandra Sander</p>
    `
  }
  $('#english').click(function () {
    $('#lang').fadeOut(function () {
      if ($('#english').html() === 'ENGLISH') {
        $(this).html(templates.english).fadeIn()
        $('#english').html('POLISH')
      } else {
        $(this).html(templates.polish).fadeIn()
        $('#english').html('ENGLISH')
      }
    })
  })
})
