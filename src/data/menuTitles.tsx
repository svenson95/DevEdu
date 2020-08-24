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
}

export const subjects: appPage[] = [
    {
        title: 'Lernfeld 1',
        url: '/lf-1',
        iosIcon: earthOutline,
        mdIcon: earthSharp
    },
    {
        title: 'Lernfeld 2',
        url: '/lf-2',
        iosIcon: businessOutline,
        mdIcon: businessSharp
    },
    {
        title: 'Lernfeld 3',
        url: '/lf-3',
        iosIcon: pieChartOutline,
        mdIcon: pieChartSharp
    },
    {
        title: 'Lernfeld 4-1',
        url: '/lf-4-1',
        iosIcon: flashOutline,
        mdIcon: flashSharp
    },
    {
        title: 'Lernfeld 4-2',
        url: '/lf-4-2',
        iosIcon: hardwareChipOutline,
        mdIcon: hardwareChipSharp
    },
    {
        title: 'Lernfeld 5',
        url: '/lf-5',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 6',
        url: '/lf-6',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Lernfeld 7',
        url: '/lf-7',
        iosIcon: gitNetworkOutline,
        mdIcon: gitNetworkSharp
    },
    {
        title: 'Lernfeld 8',
        url: '/lf-8',
        iosIcon: swapHorizontalOutline,
        mdIcon: swapHorizontalSharp
    },
    {
        title: 'Lernfeld 9',
        url: '/lf-9',
        iosIcon: globeOutline,
        mdIcon: globeSharp
    },
    {
        title: 'Wahlpflicht',
        url: '/wp',
        iosIcon: serverOutline,
        mdIcon: serverSharp
    },
    {
        title: 'WiSo',
        url: '/wiso',
        iosIcon: bodyOutline,
        mdIcon: bodySharp
    },
    {
        title: 'Englisch',
        url: '/englisch',
        iosIcon: languageOutline,
        mdIcon: languageSharp
    },
    {
        title: 'Deutsch',
        url: '/deutsch',
        iosIcon: pencilOutline,
        mdIcon: pencilSharp
    },
];

export const areas: appPage[] = [
    {
        title: 'Syntax',
        url: '/syntax',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
    },
    {
        title: 'Angewandte Informatik',
        url: '/angewandte-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Technische Informatik',
        url: '/technische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Praktische Informatik',
        url: '/praktische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    },
    {
        title: 'Theoretische Informatik',
        url: '/theoretische-informatik',
        iosIcon: libraryOutline,
        mdIcon: librarySharp
    }
];

export const internal: appPage[] = [
    {
        title: 'Lehrmaterial',
        url: '/lehrmaterial',
        iosIcon: folderOutline,
        mdIcon: folderSharp
    },
    {
        title: 'Mitteilungen',
        url: '/mitteilungen',
        iosIcon: mailOutline,
        mdIcon: mailSharp
    },
    {
        title: 'Schuljahresplan',
        url: '/schuljahresplan',
        iosIcon: schoolOutline,
        mdIcon: schoolSharp
    },
    {
        title: 'Vertretungsplan',
        url: '/vertretungsplan',
        iosIcon: calendarOutline,
        mdIcon: calendarSharp
    },
    {
        title: 'Lehrer',
        url: '/lehrer',
        iosIcon: peopleOutline,
        mdIcon: peopleSharp
    },
    {
        title: 'Feedback',
        url: '/feedback',
        iosIcon: megaphoneOutline,
        mdIcon: megaphoneSharp
    },
    {
        title: 'Klausuren',
        url: '/klausuren',
        iosIcon: todayOutline,
        mdIcon: todaySharp
    },
];

export const pages = [...subjects, ...areas, ...internal];
