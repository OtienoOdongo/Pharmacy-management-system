export const sidebarMenu = [
    {
      id: 1,
      title: "PHARMACY DASHBOARD",
      listItems: [
        {
          id: 1,
          title: "Dashboard",
          url: "/",
          icon: "Dashboard.png",
        },
        {
          id: 2,
          title: "User Profile",
          url: "/users/1",
          icon: "userProfile.png",
        },
      ],
    },
    {
      id: 2,
      title: "INVENTORY",
      listItems: [
        {
          id: 1,
          title: "Drugs",
          url: "/drugs",
          icon: "drugs.png",
        },
        {
          id: 2,
          title: "Suppliers",
          url: "/suppliers",
          icon: "suppliers.png",
        },
        
      ],
    },
    {
      id: 3,
      title: "PRESCRIPTIONS",
      listItems: [
        {
          id: 1,
          title: "Patients",
          url: "/patients",
          icon: "patient.png",
        },
        {
          id: 2,
          title: "Calendar",
          url: "/calendar",
          icon: "calendar.png",
        },
        
      ],
    },
    {
      id: 4,
      title: "Sales",
      listItems: [
        {
          id: 1,
          title: "Point of Sale",
          url: "/pos",
          icon: "point-of-sale.png",
        },
        {
          id: 2,
          title: "Invoices",
          url: "/invoices",
          icon: "invoices.png",
        },
      ],
    },
    {
      id: 5,
      title: "Report",
      listItems: [
        {
          id: 1,
          title: "Sales Report",
          url: "/salesreport",
          icon: "sales-report.png",
        },
        {
          id: 2,
          title: "Inventory Report",
          url: "/inventoryreport",
          icon: "inventory-report.png",
        },
      ],
    },
    {
      id: 5,
      title: "GENERAL ANALYTICS",
      listItems: [
        {
          id: 1,
          title: "Sales Chart",
          url: "/saleschart",
          icon: "sales-chart.png",
        },
        {
          id: 2,
          title: "Purchase Chart",
          url: "/purchasechart",
          icon: "purchase-chart.png",
        },
      ],
    },
  ];
  


  export const mostPopularDrugs = [
    {
      id: 1,
      img: "https://dawalifesciences.com/wp-content/uploads/2022/08/Empaflo-25mg.png",
      Manufacturer: "dawa life sciences",
      ProductName: "Empaflo 25mg Tablets",
      GenericName: "Empagliflozin",
      amount: "270",
    },
    {
      id: 2,
      img: "https://ucl.co.ke/wp-content/uploads/2015/01/Clith-500.jpg",
      Manufacturer: "Universal Corporation Limited",
      ProductName: "Clith 500",
      GenericName: "Clarithromycin",
      amount: "389",
    },
    {
      id: 3,
      img: "https://assets.roche.com/f/176343/740x416/c7159309b8/enspryng.jpg/m/768x432/filters:format(webp):quality(90)/",
      Manufacturer: "Roche",
      ProductName: "Enspryng 120 mg/mL",
      GenericName: "satralizumab injection",
      amount: "1600",
    },
    {
      id: 4,
      img: "https://assets.roche.com/f/176343/740x416/bd3a7d8213/xeloda-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      Manufacturer: "Merck & Co.",
      ProductName: "Xeloda 150 mg",
      GenericName: "capecitabine",
      amount: "8920",
    },
    {
      id: 5,
      img: "https://assets.roche.com/f/176343/740x416/56027ccd25/zelboraf-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      Manufacturer: "Quantum Pharmaceutical",
      ProductName: "Zelboraf 240 mg",
      GenericName: "vemurafenib tablet",
      amount: "430",
    },
    {
      id: 6,
      img: "https://assets.roche.com/f/176343/1480x832/fb50535bf3/tarceva.jpg/m/768x432/filters:format(webp):quality(90)/",
      Manufacturer: "Moderna",
      ProductName: "Tarceva 150 mg",
      GenericName: "erlotinib",
      amount: "780",
    },
    {
      id: 7,
      img: "https://assets.roche.com/f/176343/740x416/49b1f81dc2/herceptin-sc-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      Manufacturer: "Ceragenix Pharmaceuticals",
      ProductName: "Herceptin Injection 600 mg/mL ",
      GenericName: "trastuzumab hyaluronidase",
      amount: "1020",
    },
  ];
  
  
  export const ChartBoxGridSales = {
    color: "#8884d8",
    icon: "sales.png",
    title: "Total Sales",
    number: "24 000",
    dataKey: "sales",
    percentage: 32,
    chartdata: [
      { name: "Sun", sales: 400 },
      { name: "Mon", sales: 600 },
      { name: "Tue", sales: 500 },
      { name: "Wed", sales: 700 },
      { name: "Thu", sales: 400 },
      { name: "Fri", sales: 500 },
      { name: "Sat", sales: 450 },
    ],
    imageSrc: "acquisition.png",
  };
  
  export const ChartBoxGridInventory = {
    color: "brown",
    icon: "primary-inventory.png",
    title: "Total Inventory Stock",
    number: "109",
    dataKey: "inventory",
    percentage: 54,
    chartdata: [
      { name: "Sun", inventory: 400 },
      { name: "Mon", inventory: 600 },
      { name: "Tue", inventory: 500 },
      { name: "Wed", inventory: 700 },
      { name: "Thu", inventory: 400 },
      { name: "Fri", inventory: 500 },
      { name: "Sat", inventory: 450 },
    ],
    imageSrc: "inventory.png",
  };
  
  export const ChartBoxGridRevenue = {
    color: "teal",
    icon: "primary-revenue.png",
    title: "Total Revenue",
    number: "120 000",
    dataKey: "revenue",
    percentage: -13,
    chartdata: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
    imageSrc: "secondary-revenue.png",
  };
  
  export const ChartBoxGridConversion = {
    color: "gold",
    icon: "primary-conversionrate.png",
    title: "Total Conversion Ratio",
    number: "67 000",
    dataKey: "ratio",
    percentage: 17,
    chartdata: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
    imageSrc: "conversionrate-1.png",
  };
  
  export const BarChartBoxProfit = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartdata: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };