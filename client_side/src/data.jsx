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
        title: "Users",
        url: "/users",
        icon: "users.png",
      },
      // {
      //   id: 3,
      //   title: "Profile",
      //   url: "/profile",
      //   icon: "profile.png",
      // },
    ],
  },
  {
    id: 2,
    title: "INVENTORY",
    listItems: [
      {
        id: 1,
        title: "Pharmaceuticals",
        url: "/pharmaceuticals",
        icon: "drugs.png",
      },
      {
        id: 2,
        title: "Manufacturers",
        url: "/manufacturers",
        icon: "manufacturer.png",
      },
    ],
  },
  {
    id: 3,
    title: "PATIENT CARE",
    listItems: [
      {
        id: 1,
        title: "Patients",
        url: "/patients",
        icon: "patient.png",
      },
      {
        id: 2,
        title: "Kanban",
        url: "/kanban",
        icon: "kanban.png",
      },
    ],
  },
  {
    id: 4,
    title: "Sales",
    listItems: [
      {
        id: 1,
        title: "Invoices",
        url: "/invoices",
        icon: "invoices.png",
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
    id: 6,
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


  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];
  



  export const productRows = [
    {
      id: 1,
      img: "https://dawalifesciences.com/wp-content/uploads/2022/08/Empaflo-25mg.png",
      productName: "Empaflo",
      genericName: "Empagliflozin",
      weight: "25mg",
      category: "Tablet",
      manufacturer: "dawa life sciences",
      price: "670",
      manufacturerPrice: "430",
      stock: "167",
      expirerDate: "23/10/2025"
    },
    {
      id: 2,
      img: "https://ucl.co.ke/wp-content/uploads/2015/01/Clith-500.jpg",
      productName: "Clith",
      genericName: "Clarithromycin",
      weight: "500mg",
      category: "Tablet",
      manufacturer: "Universal Corporation Limited",
      price: "249",
      manufacturerPrice: "120",
      stock: "2",
      expirerDate: "01/15/2024",
    },
    {
      id: 3,
      img: "https://assets.roche.com/f/176343/740x416/c7159309b8/enspryng.jpg/m/768x432/filters:format(webp):quality(90)/",
      productName: "Enspryng",
      genericName: "satralizumab injection",
      weight: "500mg",
      category: "Injection",
      manufacturer: "Roche",
      price: "470",
      manufacturerPrice: "350",
      stock: "0",
      expirerDate: "07/12/2026",
    },
    {
      id: 4,
      img: "https://assets.roche.com/f/176343/740x416/bd3a7d8213/xeloda-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      productName: "Xeloda",
      genericName: "capecitabine",
      weight: "150mg",
      category: "Syrup",
      manufacturer: "Merck & Co.",
      price: "1159",
      manufacturerPrice: "980",
      stock: "4",
      expirerDate: "27/01/2025",
    },
    {
      id: 5,
      img: "https://assets.roche.com/f/176343/740x416/56027ccd25/zelboraf-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      productName: "Zelboraf",
      genericName: "vemurafenib",
      weight: "240mg",
      category: "Tablet",
      manufacturer: "Quantum Pharmaceutical",
      price: "1159",
      manufacturerPrice: "980",
      stock: "4",
      expirerDate: "27/01/2025",
    },
    {
      id: 6,
      img: "https://assets.roche.com/f/176343/1480x832/fb50535bf3/tarceva.jpg/m/768x432/filters:format(webp):quality(90)/",
      productName: "Tarceva",
      genericName: "erlotinib",
      weight: "150mg",
      category: "Tablet",
      manufacturer: "Moderna",
      price: "680",
      manufacturerPrice: "489",
      stock: "30",
      expirerDate: "21/11/2027",
    },
    {
      id: 7,
      img: "https://assets.roche.com/f/176343/740x416/49b1f81dc2/herceptin-sc-740.jpg/m/768x432/filters:format(webp):quality(90)/",
      productName: "Herceptin",
      genericName: "trastuzumab hyaluronidase",
      weight: "600mg/mL",
      category: "Injection",
      manufacturer: "Ceragenix Pharmaceuticals",
      price: "1400",
      manufacturerPrice: "1240",
      stock: "30",
      expirerDate: "13/09/2026",
    },
  ];
  

  export const supplierRows = [
    {
      id: 1,
      img: "https://www.getreskilled.com/wp-content/uploads/2019/06/gsk-logo.svg",
      companyName: "GlaxoSmithKline plc",
      phone: "0297-7638-82989",
      email: "glaxosmith@yahoo.com",
      active: "true",
    },
    {
      id: 2,
      img: "https://www.getreskilled.com/wp-content/uploads/2019/06/amgen-logo.svg",
      companyName: "Amgen Inc",
      phone: "0467-9003-9829-0773",
      email: "amgenh@outlook.com",
      
    },
    {
      id: 3,
      img: "https://www.getreskilled.com/wp-content/uploads/2019/10/novo-nordisk-logo.svg",
      companyName: "Novo Nordisk ",
      phone: "0598-86246-82563",
      email: "nvo@gmail.com",
      
    },
    {
      id: 4,
      img: "https://www.getreskilled.com/wp-content/uploads/2019/08/takeda-logo.svg",
      companyName: "Taked",
      phone: "0612-0345-027738",
      email: "taked@gmail.com",
      active: "true",
    },
    {
      id: 5,
      img: "https://www.getreskilled.com/wp-content/uploads/2019/06/sanofi-logo-new.svg",
      companyName: "Sanofi S.A",
      phone: "07123-7635-9937",
      email: "snofi@yahoo.com",
      
    },
  ];

  export const patientRows = [
    
  ];

























  
  export const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: true },
  ];


  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29007',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 9',
      Title: 'Task - 29011',
      Status: 'Validate',
      Summary: 'Validate the issues reported by the customer.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Validation,Fix',
      Estimate: 1,
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
      Id: 'Task 10',
      Title: 'Task - 29015',
      Status: 'Open',
      Summary: 'Show the retrieved data from the server in grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Database,SQL',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 11',
      Title: 'Task - 29016',
      Status: 'InProgress',
      Summary: 'Fix cannot open user’s default database SQL error.',
      Priority: 'Critical',
      Type: 'Bug',
      Tags: 'Database,Sql2008',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 12',
      Title: 'Task - 29017',
      Status: 'Review',
      Summary: 'Fix the issues reported in data binding.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Databinding',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
      Id: 'Task 13',
      Title: 'Task - 29018',
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Grid,Sql',
      Estimate: 2,
      Assignee: 'Andrew Fuller',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
      Id: 'Task 14',
      Title: 'Task - 29019',
      Status: 'Validate',
      Summary: 'Validate databinding issues.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Margaret hamilt',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29020',
      Status: 'Close',
      Summary: 'Analyze grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Analyze',
      Estimate: 2.5,
      Assignee: 'Margaret hamilt',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 16',
      Title: 'Task - 29021',
      Status: 'Close',
      Summary: 'Stored procedure for initial data binding of the grid.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Databinding',
      Estimate: 1.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-release, e-steven-walker',
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29022',
      Status: 'Close',
      Summary: 'Analyze stored procedures.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Procedures',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 7,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 18',
      Title: 'Task - 29023',
      Status: 'Validate',
      Summary: 'Validate editing issues.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Editing',
      Estimate: 1,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-critical, e-nancy-davloio',
    },
    {
      Id: 'Task 19',
      Title: 'Task - 29024',
      Status: 'Review',
      Summary: 'Test editing functionality.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Editing,Test',
      Estimate: 0.5,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-nancy-davloio',
    },
    {
      Id: 'Task 20',
      Title: 'Task - 29025',
      Status: 'Open',
      Summary: 'Enhance editing functionality.',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Editing',
      Estimate: 3.5,
      Assignee: 'Andrew Fuller',
      RankId: 5,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-andrew-fuller',
    },
    {
      Id: 'Task 21',
      Title: 'Task - 29026',
      Status: 'InProgress',
      Summary: 'Improve the performance of the editing functionality.',
      Type: 'Epic',
      Priority: 'High',
      Tags: 'Performance',
      Estimate: 6,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#e91e64',
      ClassName: 'e-epic, e-high, e-nancy-davloio',
    },
    {
      Id: 'Task 22',
      Title: 'Task - 29027',
      Status: 'Open',
      Summary: 'Arrange web meeting with the customer to show editing demo.',
      Type: 'Others',
      Priority: 'High',
      Tags: 'Meeting,Editing',
      Estimate: 5.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-high, e-steven-walker',
    },
    {
      Id: 'Task 23',
      Title: 'Task - 29029',
      Status: 'Review',
      Summary: 'Fix the editing issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Editing,Fix',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 6,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-janet-leverling',
    },
    {
      Id: 'Task 24',
      Title: 'Task - 29030',
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-steven-walker',
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29031',
      Status: 'Testing',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
  ];


  export const calendarData = [
    {
      Id: 1,
      Subject: 'Pharmacy Opening',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-10T07:00:00.000Z', 
      EndTime: '2021-01-10T08:30:00.000Z',   
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: 'Medicine Stock Update',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-11T09:30:00.000Z', 
      EndTime: '2021-01-11T11:30:00.000Z',   
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Customer Consultation',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-12T07:00:00.000Z', 
      EndTime: '2021-01-12T08:30:00.000Z',  
      CategoryColor: '#7fa900',
    },
    {
      Id: 4,
      Subject: 'Prescription Review',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-13T10:30:00.000Z', 
      CategoryColor: '#ea7a57',
    },
    {
      Id: 5,
      Subject: 'Health and Wellness Seminar',
      Location: 'Nairobi, Kenya',
      EndTime: '2021-01-14T11:30:00.000Z',   
      StartTime: '2021-01-14T09:30:00.000Z', 
      CategoryColor: '#00bdae',
    },
    {
      Id: 6,
      Subject: 'Medical Conference',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-14T07:00:00.000Z', 
      EndTime: '2021-01-14T08:30:00.000Z',   
      CategoryColor: '#f57f17',
    },
    {
      Id: 7,
      Subject: 'Health Education Program',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-15T08:30:00.000Z', 
      EndTime: '2021-01-15T10:00:00.000Z',   
      CategoryColor: '#1aaa55',
    },
    {
      Id: 8,
      Subject: 'Medical Research Presentation',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-16T06:30:00.000Z', 
      EndTime: '2021-01-16T07:30:00.000Z',   
      CategoryColor: '#357cd2',
    },
    {
      Id: 9,
      Subject: 'Community Health Checkup',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-18T08:30:00.000Z', 
      EndTime: '2021-01-18T10:30:00.000Z',   
      CategoryColor: '#7fa900',
    },
    {
      Id: 10,
      Subject: 'First Aid Training',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-20T08:30:00.000Z', 
      EndTime: '2021-01-20T10:30:00.000Z',   
      CategoryColor: '#ea7a57',
    },
    {
      Id: 11,
      Subject: 'Pharmacy Photography Contest',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-21T07:00:00.000Z', 
      EndTime: '2021-01-21T08:30:00.000Z',   
      CategoryColor: '#00bdae',
    },
    {
      Id: 12,
      Subject: 'Stocl Taking',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-08T07:30:00.000Z',
      EndTime: '2021-01-08T09:00:00.000Z',   
      CategoryColor: '#f57f17',
    },
    {
      Id: 13,
      Subject: 'Health Myths Discussion',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-06T08:00:00.000Z', 
      EndTime: '2021-01-06T10:00:00.000Z',   
      CategoryColor: '#1aaa55',
    },
    {
      Id: 14,
      Subject: 'Healthy Living Symposium',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-05T07:30:00.000Z', 
      EndTime: '2021-01-05T09:00:00.000Z',   
      CategoryColor: '#357cd2',
    },
    {
      Id: 15,
      Subject: 'Bird Watching Event',
      Location: 'Nairobi, Kenya',
      StartTime: '2021-01-19T07:00:00.000Z', 
      EndTime: '2021-01-19T08:30:00.000Z',   
      CategoryColor: '#7fa900',
    },
    
  ];


  export const invoiceRows = [
    {
      id: 23,
      amount: 'KES 35 678',
      email: 'teroqi@leg.com',
      status: 'complete'
    },
  ];
  