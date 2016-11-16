$(function () {
  var english = `
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
      23 1240 3813 1111 0000 4375 5868
    </p>
    <p>
    For the third time, we want to repeat the “Christmas Bag full of Surprises” movement. Big thing for the past two years, has been the individual giving of the packages in person to families or single parents raising their kids. Last year, 5 amazing individuals gave away Christmas packages in person to families in need. Every present and package was delivered to children and their families on the 23rd &24th of December, 2015. 
    </p>
    <p>
    All you have to do is get in touch with the staff at ZO PKPS in Szczecin, running the organization who will set up the families in need with the people willing to help them.
    </p>
  `
  $('#english').click(function () {
    $('#lang').fadeOut(function () {
      $(this).empty()
      $(this).html(english).fadeIn()
    }
    )
})
})