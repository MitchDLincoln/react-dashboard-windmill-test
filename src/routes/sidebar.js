/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 * 
 * TODO: Cambiare le Icons <= `icons/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  {
    icon: 'PagesIcon',
    name: 'Vitals',
    routes: [
      // submenu
      {
        path: '/app/uptime',
        name: 'Uptime',
      },
      {
        path: '/app/tempo-caricamento',
        name: 'Tempi di Caricamento',
      },
      {
        path: '/app/lighthouse-score',
        name: 'Lighthouse score',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'E-commerce',
    routes: [
      // submenu
      {
        path: '#!', // '/app/fatturato',
        name: 'Fatturato',
/* 
* FIXME: Da aggiornare\aggiungere in `routes/index.js`
*
        routes: [
            // sub-submenu
            {
              path: '/app/uptime',
              name: 'Anno',
            },
            {
              path: '/app/uptime',
              name: 'Mese',
            },
            {
              path: '/app/uptime',
              name: 'Giorno',
            }
        ] */
      },
      {
        path: '#!', // '/app/analytics',
        name: 'Analytics',
/* 
* FIXME: Da aggiornare\aggiungere in `routes/index.js`
*
        routes: [
            // sub-submenu
            {
              path: '/app/uptime',
              name: 'Utenti live sul sito',
            },
            {
              path: '/app/uptime',
              name: 'Storico visite',
            },
            {
              path: '/app/uptime',
              name: 'Sorgenti di traffico',
            },
            {
              path: '/app/uptime',
              name: 'Origine visite',
            },
            {
              path: '/app/uptime',
              name: 'Funnel checkout',
            }
        ] */
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Marketing',
    routes: [
      // submenu
      {
        path: '#!', // /campagne-attive',
        name: 'Campagne attive',
      },
      {
        path: '#!', // /metriche-ads',
        name: 'Metriche ADS',
      }
    ],
  },
]

export default routes
