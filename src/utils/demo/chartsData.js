/**
 * Leggenda
 */
export const uptimeLegends = [
  { title: 'Africa', color: 'bg-red-600' },
  { title: 'America', color: 'bg-yellow-600' },
  { title: 'Asia', color: 'bg-green-600' },
  { title: 'Europa', color: 'bg-blue-600' },
  { title: 'Oceania', color: 'bg-purple-600' },
]

export const lineLegends = [
  { title: 'Organic', color: 'bg-teal-600' },
  { title: 'Paid', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'Mobile', color: 'bg-teal-600' },
  { title: 'Desktop', color: 'bg-purple-600' },
]

/**
 * Dati
 */

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [30, 2, 12, 5, 3],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#dc2626', '#ca8a04', '#38a169', '#3182ce', '#805ad5' ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}

export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Africa',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#dc2626',
        borderColor: '#dc2626',
        data: [99, 92, 92, 85, 88, 95, 90],
        fill: false,
      },
      {
        label: 'America',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#ca8a04',
        borderColor: '#ca8a04',
        data: [85, 93, 92, 95, 100, 90, 87],
      },
      {
        label: 'Asia',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#38a169',
        borderColor: '#38a169',
        data: [90, 88, 96, 89, 97, 100, 85],
      },
      {
        label: 'Europa',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#3182ce',
        borderColor: '#3182ce',
        data: [97, 99, 95, 90, 89, 87, 94],
      },
      {
        label: 'Oceania',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#805ad5',
        borderColor: '#805ad5',
        data: [96, 86, 98, 87, 99, 94, 91],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Mobile',
        backgroundColor: '#0694a2',
        // borderColor: '#7f1d1d',
        borderWidth: 1,
        data: [ 50, 60, 70, 50, 40, 70, 60],
      },
      {
        label: 'Desktop',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [55, 60, 77, 55, 39, 75, 65],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}
