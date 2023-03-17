var menuContent = {
   "logo":"assets\/img\/logo.svg",
   "menu":[
      {
         "title":"About Us",
         "slug":"about-us"
      },
      {
         "title":"Services",
         "slug":"#",
         "subMenu":[
            {
               "title":"Logistic Transformation",
               "slug":"\/services\/logistic-transformation",
               "subMenu":[
                  {
                     "title":"SAP TM",
                     "slug":"?tab=sap-tm"
                  },
                  {
                     "title":"SAP GTS",
                     "slug":"?tab=sap-gts"
                  },
                  {
                     "title":"SAP EM",
                     "slug":"?tab=sap-em"
                  },
                  {
                     "title":"SAP EWM",
                     "slug":"?tab=sap-ewm"
                  },
                  {
                     "title":"SAP YL",
                     "slug":"?tab=sap-yl"
                  }
               ]
            },
            {
               "title":"Custom Development",
               "slug":"\/services\/custom-development"
            },
            {
               "title":"Application Management Services (AMS)",
               "slug":"\/services\/application-management-services"
            },
            {
               "title":"Architectural Review",
               "slug":"\/services\/architectural-review"
            }
         ],
         "subMenuLayout":"",
         "subMenuChildLayout":""
      },
      {
         "title":"Products",
         "slug":"#",
         "subMenu":[
            {
               "title":"SAP Transportation Management",
               "slug":"\/products\/sap-transportation-management"
            },
            {
               "title":"SAP Event Management",
               "slug":"\/products\/sap-event-management"
            },
            {
               "title":"SAP Extended Warehouse Management",
               "slug":"\/products\/sap-extended-warehouse-management"
            },
            {
               "title":"SAP Business Network Logistics",
               "slug":"\/products\/sap-business-network-logistics"
            },
            {
               "title":"SAP Yard Logistics",
               "slug":"\/products\/sap-yard-logistics",
               "subMenu":[
                  {
                     "title":"Architectural Review",
                     "slug":"\/services\/architectural-review\/",
                     "individual":true
                  },
                  {
                     "title":"Expert Consulting",
                     "slug":"\/services\/architectural-review\/",
                     "individual":true
                  },
                  {
                     "title":"Trainings",
                     "slug":"\/services\/architectural-review\/",
                     "individual":true
                  }
               ]
            }
         ],
         "subMenuLayout":"min-27",
         "subMenuChildLayout":"special-child"
      },
      {
         "title":"References",
         "slug":"#",
         "subMenu":[
            {
               "title":"Ar\u00e7elik",
               "slug":"\/references\/arcelik"
            },
            {
               "title":"Vestel",
               "slug":"\/references\/vestel"
            },
            {
               "title":"\u00c7al\u0131k",
               "slug":"\/references\/calik"
            },
            {
               "title":"Netlog",
               "slug":"\/references\/netlog"
            },
            {
               "title":"HELM",
               "slug":"\/references\/helm"
            },
            {
               "title":"\u015ei\u015fecam",
               "slug":"\/references\/sisecam"
            },
            {
               "title":"\u015e\u00f6len",
               "slug":"\/references\/solen"
            }
         ],
         "subMenuLayout":"grid-3"
      },
      {
         "title":"Careers",
         "slug":"careers"
      },
      {
         "title":"Contact Us",
         "slug":"contact-us"
      }
   ]
};
$(document).ready(function(){

// var menuItem = $(".menu-item");
  var menuItem = $('.menu-item');
  // console.log(menuItem.html())
  var menu = $(".menu");
  for(var i in menuContent["menu"]){
   var li = document.createElement('li');
   var a = document.createElement('a');
   a.href = menuContent["menu"][i]['slug'];
   a.innerHTML = menuContent["menu"][i]['title'];
   li.setAttribute('class', 'menu-item')
   li.appendChild(a);
   menu.append(li);
  }
})
