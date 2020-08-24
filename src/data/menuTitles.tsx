import {
    bodyOutline, bodySharp,
    businessOutline, businessSharp,
    calendarOutline, calendarSharp,
    codeSlashOutline, codeSlashSharp,
    earthOutline, earthSharp,
    flashOutline, flashSharp,
    folderOutline, folderSharp,
    gitNetworkOutline, gitNetworkSharp,
    globeOutline, globeSharp,
    hardwareChipOutline, hardwareChipSharp,
    languageOutline, languageSharp,
    libraryOutline, librarySharp,
    mailOutline, mailSharp,
    megaphoneOutline, megaphoneSharp,
    pencilOutline, pencilSharp,
    peopleOutline, peopleSharp,
    pieChartOutline, pieChartSharp,
    schoolOutline, schoolSharp,
    serverOutline, serverSharp,
    swapHorizontalOutline, swapHorizontalSharp,
    todayOutline, todaySharp
} from "ionicons/icons";

interface appPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    shortTitle: string;
}

export const subjects: appPage[] = [
    {
        title: 'Lernfeld 1',
        shortTitle: 'LF 1',
        url: '/lf-1',
        iosIcon: earthOutline,
        mdIcon: earthSharp
    },
    {
        title: 'Lernfeld 2',
        shortTitle: 'LF 2',
        url: '/lf-2',
        iosIcon: businessOutline,
        mdIcon: businessSharp
    },
    {
        title: 'Lernfeld 3',
        shortTitle: 'LF 3',
        url: '/lf-3',
        iosIcon: pieChartOutline,
        mdIcon: pieChartSharp
    },
    {
        title: 'Lernfeld 4-1',
        shortTitle: 'LF 4-1',
        url: '/lf-4-1',
        iosIcon: flashOutline,
        mdIcon: flashSharp
    },
    {
        title: 'Lernfeld 4-2',
        shortTitle: 'LF 4-2',
        url: '/lf-4-2',
        iosIcon: hardwareChipOutline,
        mdIcon: hardwareChipSharp
    },
    {
        title: 'Lernfeld 5',
        shortTitle: 'LF 5',
        url: '/lf-5',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 6',
        shortTitle: 'LF 6',
        url: '/lf-6',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 7',
        shortTitle: 'LF 7',
        url: '/lf-7',
        iosIcon: gitNetworkOutline,
        mdIcon: gitNetworkSharp
    },
    {
        title: 'Lernfeld 8',
        shortTitle: 'LF 8',
        url: '/lf-8',
        iosIcon: swapHorizontalOutline,
        mdIcon: swapHorizontalSharp
    },
    {
        title: 'Lernfeld 9',
        shortTitle: 'LF 9',
        url: '/lf-9',
        iosIcon: globeOutline,
        mdIcon: globeSharp
    },
    {
        title: 'Wahlpflicht',
        shortTitle: 'WP',
        url: '/wp',
        iosIcon: serverOutline,
        mdIcon: serverSharp
    },
    {
        title: 'WiSo',
        shortTitle: 'WiSo',
        url: '/wiso',
        iosIcon: bodyOutline,
        mdIcon: bodySharp
    },
    {
        title: 'Englisch',
        shortTitle: 'Eng',
        url: '/englisch',
        iosIcon: languageOutline,
        mdIcon: languageSharp
    },
    {
        title: 'Deutsch',
        shortTitle: 'Deu',
        url: '/deutsch',
        iosIcon: pencilOutline,
        mdIcon: pencilSharp
    },
];

export const areas: appPage[] = [
    {
        title: 'Syntax',
        shortTitle: 'Syntax',
        url: '/syntax',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Angewandte Informatik',
        shortTitle: 'Ang. Inf.',
        url: '/angewandte-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Technische Informatik',
        shortTitle: 'Tech. Inf.',
        url: '/technische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Praktische Informatik',
        shortTitle: 'Prak. Inf.',
        url: '/praktische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Theoretische Informatik',
        shortTitle: 'Theo. Inf.',
        url: '/theoretische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    }
];

export const internal: appPage[] = [
    {
        title: 'Lehrmaterial',
        shortTitle: 'Lehrmaterial',
        url: '/lehrmaterial',
        iosIcon: folderOutline,
        mdIcon: folderSharp
    },
    {
        title: 'Mitteilungen',
        shortTitle: 'Mitteilungen',
        url: '/mitteilungen',
        iosIcon: mailOutline,
        mdIcon: mailSharp
    },
    {
        title: 'Schuljahresplan',
        shortTitle: 'Schuljahresplan',
        url: '/schuljahresplan',
        iosIcon: schoolOutline,
        mdIcon: schoolSharp
    },
    {
        title: 'Vertretungsplan',
        shortTitle: 'Vertretungsplan',
        url: '/vertretungsplan',
        iosIcon: calendarOutline,
        mdIcon: calendarSharp
    },
    {
        title: 'Lehrer',
        shortTitle: 'Lehrer',
        url: '/lehrer',
        iosIcon: peopleOutline,
        mdIcon: peopleSharp
    },
    {
        title: 'Feedback',
        shortTitle: 'Feedback',
        url: '/feedback',
        iosIcon: megaphoneOutline,
        mdIcon: megaphoneSharp
    },
    {
        title: 'Klausuren',
        shortTitle: 'Klausuren',
        url: '/klausuren',
        iosIcon: todayOutline,
        mdIcon: todaySharp
    },
];

export const pages = [...subjects, ...areas, ...internal];
