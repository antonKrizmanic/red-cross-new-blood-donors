export type NavigationItem = {
    label: string;
    href: string;
    featured?: boolean;
};

export type IconName =
    | 'heart'
    | 'clock'
    | 'shield'
    | 'gift'
    | 'bell'
    | 'calendar'
    | 'check'
    | 'user-check'
    | 'droplets'
    | 'coffee';

export type Benefit = {
    icon: IconName;
    title: string;
    description: string;
    link?: {
        label: string;
        href: string;
    };
};

export type CommunityValue = {
    icon: IconName;
    title: string;
    description: string;
};

export type ChannelIcon =
    | 'application'
    | 'whatsapp'
    | 'viber'
    | 'facebook'
    | 'instagram'
    | 'website';

export type ChannelAccent = 'red' | 'green' | 'purple' | 'blue' | 'instagram';

export type CommunityChannel = {
    href: string;
    ctaText: string;
    icon: ChannelIcon;
    accent: ChannelAccent;
};

export type ProcessStep = {
    icon: IconName;
    title: string;
    description: string;
    time: string;
};

export type DonationAction = {
    date: Date;
    title: string;
    description: string;
    time?: string | null;
    location?: string | null;
    address: string | null;
};

export type FAQItem = {
    id: number;
    question: string;
    answer: string;
};

export const navigationItems: NavigationItem[] = [
    { label: 'Naslovnica', href: '#pocetna' },
    { label: 'Zašto darivati', href: '#zasto-dariti-krv' },
    { label: 'Pridruži se', href: '#pridruzi' },
    { label: 'Proces', href: '#proces' },
    {
        label: 'Sljedeće akcije',
        href: '#sljedece-akcije',
        featured: true,
    },
    { label: 'Pitanja', href: '#pitanja' },
    { label: 'Kontakt', href: '#kontakt' },
];

export const heroContent = {
    title: 'Daruj krv, spasi život',
    description:
        'Pridružite se našoj zajednici darivatelja krvi i pomozite spasiti živote',
    primaryCta: {
        label: 'Zašto darivati krv',
        href: '#zasto-dariti-krv',
    },
    secondaryCta: {
        label: 'Već daruješ krv',
        href: '#pridruzi',
    },
};

export const whyDonateContent = {
    title: 'Zašto darivati krv?',
    description:
        'Otkrijte kako vaše darivanje krvi može napraviti veliku razliku',
};

export const benefits: Benefit[] = [
    {
        icon: 'heart',
        title: 'Jedna doza spašava 3 života',
        description: 'Vaša donacija dovoljna je za 3 doze krvi',
    },
    {
        icon: 'clock',
        title: 'Traje samo 10 minuta',
        description:
            'Brzo i jednostavno - manje vremena nego što trebate za kavu',
    },
    {
        icon: 'shield',
        title: 'Sigurno i bezbolno',
        description: 'Profesionalni tim osigurava vašu sigurnost i udobnost',
    },
    {
        icon: 'gift',
        title: 'Pogodnosti za darivatelje',
        description:
            'Besplatno dopunsko zdravstveno osiguranje i posebne povlastice',
        link: {
            label: 'Više o pogodnostima',
            href: 'https://www.hck.hr/pogodnosti-za-clanove/12021',
        },
    },
];

export const communityContent = {
    title: 'Pridruži se zajednici',
    description:
        'Budi dio naše zajednice darivatelja krvi i primi obavijesti o nadolazećim akcijama darivanja krvi. Otvoreno je za sve - i za one koji već daruju i za one koji se tek planiraju pridružiti.',
    badges: ['Besplatno', 'Na vrijeme', 'Možete se odjaviti u svakom trenutku'],
};

export const communityValues: CommunityValue[] = [
    {
        icon: 'bell',
        title: 'Pozivnice za akcije',
        description:
            'Prvi saznajte termin i lokaciju sljedeće akcije darivanja u vašem gradu.',
    },
    {
        icon: 'calendar',
        title: 'Podsjetnici',
        description: 'Obavijesti da ne propustite priliku za darivanje krvi.',
    },
    {
        icon: 'check',
        title: 'Jednostavno odjavljivanje',
        description:
            'U svakom trenutku možete prestati primati obavijesti — bez obveza.',
    },
];

export const communityChannels: CommunityChannel[] = [
    {
        href: 'https://www.darivatelj.gdckapp.com',
        ctaText: 'Pogledajte svoj profil darivatelja',
        icon: 'application',
        accent: 'red',
    },
    {
        href: 'https://chat.whatsapp.com/DoaoxRlipvV7A0IXkndyIF?mode=wwc',
        ctaText: 'Pridružite nam se na WhatsApp-u',
        icon: 'whatsapp',
        accent: 'green',
    },
    {
        href: 'https://invite.viber.com/?g2=AQBwX6qBJ9VnL1WBfTnK6ZhDXlxnOPtLHoCSuxxVj089tyaNP34cpCzMZceI0dPu',
        ctaText: 'Pridružite nam se na Viber-u',
        icon: 'viber',
        accent: 'purple',
    },
    {
        href: 'https://www.facebook.com/CrvenikrizBuje',
        ctaText: 'Pridružite nam se na Facebooku',
        icon: 'facebook',
        accent: 'blue',
    },
    {
        href: 'https://www.instagram.com/crvenikrizbuje',
        ctaText: 'Pridružite nam se na Instagramu',
        icon: 'instagram',
        accent: 'instagram',
    },
    {
        href: 'https://www.crvenikrizbuje.hr',
        ctaText: 'Pogledajte našu web stranicu',
        icon: 'website',
        accent: 'red',
    },
];

export const processContent = {
    title: 'Proces darivanja',
    description:
        'Proces donacije je jednostavan, siguran i traje manje od sat vremena od početka do kraja.',
    preparationTitle: 'Prije Dolaska',
    preparationItems: [
        'Pojedite zdrav obrok i ostanite hidrirani',
        'Dobro se naspavajte',
        'Ponesite valjanu osobnu iskaznicu s fotografijom',
        'Izbjegavajte alkohol 24 sata prije donacije',
    ],
};

export const processSteps: ProcessStep[] = [
    {
        icon: 'user-check',
        title: 'Registracija',
        description: 'Registracija, popunjavanje ankete i zdravstveni pregled',
        time: '10-15 min',
    },
    {
        icon: 'droplets',
        title: 'Donacija krvi',
        description: 'Stvarni proces donacije krvi',
        time: '8-12 min',
    },
    {
        icon: 'coffee',
        title: 'Odmor i osvježenje',
        description: 'Opustite se uz grickalice i piće dok se oporavljate',
        time: '10-15 min',
    },
];

export const eventsContent = {
    title: 'Sljedeće akcije darivanja',
    description: 'Planirajte svoj doprinos i pridružite nam se',
};

export const donationActions: DonationAction[] = [
    {
        date: new Date('2026-01-16'),
        title: '16.01.2026. – Grad Novigrad',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Sportska dvorana',
        address: 'Marketi 2, 52466 Novigrad',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-02-13'),
        title: '13.02.2026. – Grad Buje',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Buje',
        address: 'Trg Josipa Broza Tita 17, 52460 Buje',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-03-24'),
        title: '24.03.2026. – Grad Umag',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Umag',
        address: 'Brolo 1, 52470 Umag',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-04-10'),
        title: '10.04.2026. – Grad Novigrad',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Sportska dvorana',
        address: 'Marketi 2, 52466 Novigrad',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-04-27'),
        title: '27.04.2026. – Grad Umag',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Umag',
        address: 'Brolo 1, 52470 Umag',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-05-13'),
        title: '13.05.2026. – Grad Buje',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Buje',
        address: 'Trg Josipa Broza Tita 17, 52460 Buje',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-06-23'),
        title: '23.06.2026. – Grad Umag',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Umag',
        address: 'Brolo 1, 52470 Umag',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-07-13'),
        title: '13.07.2026. – Grad Novigrad',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Sportska dvorana',
        address: 'Marketi 2, 52466 Novigrad',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-08-12'),
        title: '12.08.2026. – Grad Buje',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Buje',
        address: 'Trg Josipa Broza Tita 17, 52460 Buje',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-09-21'),
        title: '21.09.2026. – Grad Umag',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Umag',
        address: 'Brolo 1, 52470 Umag',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-10-12'),
        title: '12.10.2026. – Grad Novigrad',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Sportska dvorana',
        address: 'Marketi 2, 52466 Novigrad',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-11-09'),
        title: '09.11.2026. – Grad Buje',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Buje',
        address: 'Trg Josipa Broza Tita 17, 52460 Buje',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
        date: new Date('2026-12-22'),
        title: '22.12.2026. – Grad Umag',
        time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
        location: 'Zajednica Talijana Umag',
        address: 'Brolo 1, 52470 Umag',
        description:
            'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
];

export const faqContent = {
    title: 'Često postavljena pitanja',
    description:
        'Pronađite odgovore na najčešća pitanja o darivanju krvi i pomozite nam spasiti živote',
    ctaTitle: 'Još uvijek imate pitanja?',
    ctaDescription:
        'Naš tim je tu da vam pomogne. Kontaktirajte nas i dobit ćete odgovor u najkraćem mogućem roku.',
    ctaLabel: 'Kontaktirajte nas',
};

export const faqItems: FAQItem[] = [
    {
        id: 1,
        question: 'Zašto darivati krv?',
        answer: 'Krv nije moguće proizvesti, jedini izvor tog lijeka je čovjek – darivatelj krvi. Svakodnevno brojni bolesnici trebaju liječenje krvnim pripravcima, stoga, kako bi se osigurao dovoljan broj krvnih pripravaka, potrebno je uvijek imati dovoljan broj darivatelja. Darivati možete punu krv i/ili krvne sastojke na staničnom separatoru. Krvne sastojke možete darivati samo u HZTM-u, nakon što se više puta darivali punu krv.',
    },
    {
        id: 2,
        question: 'Tko može darivati krv?',
        answer: 'Krv može darivati svaka osoba: dobrog općeg zdravstvenog stanja, u dobi od 18 do 65 godina, tjelesne težine iznad 55 kilograma, koja zadovoljava kriterije za odabir darivatelja krvi.',
    },
    {
        id: 3,
        question: 'Kada darivati krv?',
        answer: 'Stanje zaliha doza krvi Vaše krvne grupe možete saznati na stranici Hrvatskog zavoda za transfuzijski medicinu. Ako su trenutačne zalihe krvi Vaše krvne grupe ispod oznake premale zalihe, molimo Vas darujte krv. Ako su trenutačne količine krvi Vaše krvne grupe iznad oznake prevelike zalihe, molimo Vas privremeno odgodite darivanje dok se zalihe Vaše krvne grupe ne smanje. Muškarci mogu darivati krv svaka 3 mjeseca (do 7 dana ranije), a žene svaka 4 mjeseca (do 7 dana ranije). Podatak o datumu prethodnog darivanja nalazi se u Vašoj Iskaznici darivatelja. Ako nemate Iskaznicu darivatelja taj podatak možete dobiti na broj telefona 01/4600-337.',
    },
    {
        id: 4,
        question: 'Što se preopruča prije darivanja krvi?',
        answer: 'Pojedite lagani obrok i uzmite dovoljno bezalkoholne tekućine. Pripremite osobnu iskaznicu ili putovnicu i zdravstvenu iskaznicu. Ponesite i Iskaznicu darivatelja krvi, kako bi Vam mogli upisati darivanje.',
    },
    {
        id: 5,
        question: 'Mora li se prije darivanja biti "na tašte"?',
        answer: 'Prije davanja krvi nije potrebno biti natašte. Davanje krvi je sastavni dio svakodnevnog ljudskog načina života i čovjek na taj dan treba uobičajeno jesti i piti. Osjećati ćete se bolje ako nekoliko sati prije davanja krvi pojedete lagani obrok. Jedino Vas molimo da unutar 8 sati prije davanja krvi ne jedete izrazito masnu hranu i ne pijete alkohol jer njihovi sastojci mogu transfuzijom krvi biti uneseni u bolesnika i nanijeti mu štetu.',
    },
    {
        id: 6,
        question: 'Smiju li tetovirane osobe darivati krv?',
        answer: 'Smiju, ukoliko nisu tetovirani zadnja 4 mjeseca.',
    },
    {
        id: 7,
        question: 'Zašto se daruje 450ml krvi?',
        answer: 'Organizam odrasle osobe, tjelesne težine iznad 55 kg ima više od 4,5 L krvi. Prosječno, krv čini 12% tjelesne težine čovjeka. Gubitak krvi do 15% organizam podnosi bez ikakvih popratnih pojava. Darivanjem 450mL krvi organizam gubi manje od 10% ukupne količine krvi.',
    },
    {
        id: 8,
        question: 'Zašto strani državljani ne mogu darivati krv?',
        answer: 'Transfuzijska služba svake zemlje prati epidemiološko stanje u zemlji, prati uvijete života darivatelja i prema tim pokazateljima određuje kako i kojim testovima ispitivati krv darivatelja na prisutnost uzročnika zaraznih bolesti. Zbog toga svaka zemlja može biti sigurna samo u krv i krvne pripravke dobivene od darivatelja krvi u toj zemlji. Pravilnikom o krvi i krvnim sastojcima od 16. prosinca 1998. (NN 14/99) u čl. 9, u stavku 2 je propisano da darivatelj krvi mora biti državljanin Republike Hrvatske.',
    },
];

export const contactContent = {
    title: 'Kontakt',
    description: 'Javite nam se za sve informacije o darivanju krvi',
    phoneLabel: 'Telefon',
    phone: '+385 (0)52 772 446',
    phoneHref: 'tel:+38552772446',
    emailLabel: 'Email',
    email: 'info@crvenikrizbuje.hr',
    emailHref: 'mailto:info@crvenikrizbuje.hr',
};

export const footerContent = {
    organization: 'Hrvatski Crveni Križ - Gradsko društvo Crvenog križa Buje',
    tagline: 'Spašavamo živote zajedno - gradimo sigurnije društvo',
    copyright:
        '© 2025 Hrvatski Crveni križ - Gradsko društvo Crvenog križa Buje. Sva prava pridržana.',
};
