export const API_ENDPOINT: any = [];

export const CURRENT_CLIENT_ID = 'currentClientId';
export const CURRENT_LOCATION_ID = 'currentLocationId';
export const CURRENT_PATIENT_ID = 'currentPatientId';
export const CURRENT_WORKFLOW = 'currentWorkFlow';
export const CURRENT_CLIENT = 'currentClient';
export const CURRENT_PW_SESSION = 'currentPWSession';
export const CURRENT_PRODUCT = 'currentProduct';
export const SYMPTOMS_LIST = 'symptomsList';
export const ROUND_0 = 'round_0';
export const REMOVE_KEYS_FROM_PAYLOAD: any = ['password', 'cPassword', 'oPassword', 'routingNumber', 'accountNumber', 'ssn'];
export const CURRENT_ENCOUNTERID = 'currentEncounterID';
export const CURRENT_PATIENTID = 'currentPatientID';
export const CURRENT_PW_PARAMS = 'patientWorkflowParams';
export const LAST_ROUND_LUMIATA_REQUEST = 'last_round_lumiata_request';

import { environment } from 'src/environments/environment';

export const USER_TYPES: any = {
  admin: 'admin',
  client: 'client',
  caregivers: 'caregivers',
  office: 'office'
};

export const WORKING_DAYS_IN_MONTH: any = 22
export const WORKING_DAYS_IN_WEEK: any = 5
export const WORKING_HOURS_IN_DAY: any = 8


export const USER_TYPES_ROUTES: any = {
  admin: '/admin',
  client: '/client',
  caregivers: '/caregivers',
  office: '/office'
};

export const CONSTANT = {
  credentialsKey: 'crm_credentials',
  deviceIdForNotification: 'notification'
}

export const ACTION_DOT_ICON =  `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="24" viewBox="0 0 4 24">
<g id="menu-dots-vertical" transform="translate(-10)">
  <circle id="Ellipse_15" data-name="Ellipse 15" cx="2" cy="2" r="2" transform="translate(10)" />
  <circle id="Ellipse_16" data-name="Ellipse 16" cx="2" cy="2" r="2" transform="translate(10 10)" />
  <circle id="Ellipse_17" data-name="Ellipse 17" cx="2" cy="2" r="2" transform="translate(10 20)" />
</g>
</svg>`

export const DELETE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="10.214"
height="14.37" viewBox="0 0 10.214 14.37">
<g id="Group_27" data-name="Group 27" transform="translate(0)">
  <g id="Group_26" data-name="Group 26"
      transform="translate(0)">
      <path id="Path_28" data-name="Path 28"
          d="M52.155,95.1a2.837,2.837,0,0,1,3.742-2.69l.236-2.835h-8.97l.7,8.429a1.763,1.763,0,0,0,1.747,1.607h4.071A1.763,1.763,0,0,0,55.431,98l.008-.1a2.838,2.838,0,0,1-3.284-2.8Z"
          transform="translate(-46.959 -85.237)"
          fill="#1ed760" />
      <path id="Path_29" data-name="Path 29"
          d="M166.132,158.714a2.18,2.18,0,1,0,2.18,2.18A2.182,2.182,0,0,0,166.132,158.714ZM167.2,161.5a.33.33,0,0,1-.466.466l-.6-.6-.6.6a.33.33,0,0,1-.466-.466l.6-.6-.6-.6a.33.33,0,1,1,.466-.466l.6.6.6-.6a.33.33,0,1,1,.466.466l-.6.6Z"
          transform="translate(-158.097 -151.035)"
          fill="#1ed760" />
      <path id="Path_30" data-name="Path 30"
          d="M99.136,1.263a.6.6,0,0,1,.6-.6h1.478a.6.6,0,0,1,.6.6v.412h.659V1.263A1.264,1.264,0,0,0,101.218,0H99.74a1.264,1.264,0,0,0-1.263,1.263v.412h.659Z"
          transform="translate(-95.79)" fill="#1ed760" />
      <path id="Path_31" data-name="Path 31"
          d="M52.33,48.974a.747.747,0,0,0-.746-.746H43.7a.747.747,0,0,0-.746.746v.6H52.33Z"
          transform="translate(-42.952 -45.894)"
          fill="#1ed760" />
  </g>
</g>
</svg>`

export const VIEW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="15.193" height="11.322" viewBox="0 0 15.193 11.322">
<g id="eye" transform="translate(-0.5 -3.5)">
    <path id="Path_1135" data-name="Path 1135"
        d="M1,9.161S3.581,4,8.1,4s7.1,5.161,7.1,5.161-2.581,5.161-7.1,5.161S1,9.161,1,9.161Z"
        fill="none" stroke="#1ed760" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="1" />
    <circle id="Ellipse_122" data-name="Ellipse 122" cx="2" cy="2" r="2"
        transform="translate(6.097 7.161)" fill="none" stroke="#1ed760" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="1" />
</g>
</svg>`

export const EDIT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="20.84" height="20.618" viewBox="0 0 20.84 20.618">
<path id="edit-2" d="M16.084,2.949A2.656,2.656,0,1,1,19.84,6.705L7.164,19.381,2,20.79l1.408-5.164Z" transform="translate(-1 -1.172)" fill="none" stroke="#1ed760" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`

export const COMPLETED_CHECK_ICON = `<svg id="check-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="21.254" height="15.465" viewBox="0 0 21.254 15.465">
<path id="Path_32" data-name="Path 32" d="M20.631,58.819,9.418,70.03a2.128,2.128,0,0,1-3.008,0L.622,64.242A2.127,2.127,0,0,1,3.63,61.234l4.284,4.285,9.707-9.708a2.127,2.127,0,0,1,3.008,3.008Z" transform="translate(0 -55.188)" fill="#1ed760"/>
</svg>`

export const LOG_ICON =`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="24" height="24"/><g><path d="M22.086 9.914L20 7.828V18c0 1.105-.895 2-2 2h-7v-2h7V7.828l-2.086 2.086L14.5 8.5 19 4l4.5 4.5-1.414 1.414zM6 16.172V6h7V4H6c-1.105 0-2 .895-2 2v10.172l-2.086-2.086L.5 15.5 5 20l4.5-4.5-1.414-1.414L6 16.172z"/></g></svg>`

export const QRCODE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="15.193"
height="11.322" viewBox="0 0 15.193 11.322">
<g id="eye" transform="translate(-0.5 -3.5)">
    <path id="Path_1135" data-name="Path 1135"
        d="M1,9.161S3.581,4,8.1,4s7.1,5.161,7.1,5.161-2.581,5.161-7.1,5.161S1,9.161,1,9.161Z"
        fill="none" stroke="#1ed760" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="1" />
    <circle id="Ellipse_122" data-name="Ellipse 122" cx="2"
        cy="2" r="2" transform="translate(6.097 7.161)"
        fill="none" stroke="#1ed760" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="1" />
</g>
</svg>`

export const PAYMENT_STATUS: any = [
  { name: 'Pending', value: 'PENDING' },
  { name: 'Done', value: 'DONE' },
  { name: 'Cancelled', value: 'CANCLLED' },
  { name: 'Overdue', value: 'OVERDUE ' }
]
export const REQUEST_TYPE: any = [
  { name: 'WFH', value: 'WFH' },
  { name: 'Leave', value: 'LEAVE' },
  { name: 'Overtime', value: 'OVERTIME' },
]

export const REQUEST_STATUS: any = [
  // { name: 'All', value: 'ALL' },
  { name: 'Applied', value: 'APPLIED' },
  { name: 'Rejected', value: 'REJECTED' },
  // { name: 'Accepted', value: 'ACCEPTED' }, 
]

export const TASK_TYPE: any = [
  { name: 'Assigned To Me', value: 'ASSIGNED_TO_ME' },
  { name: 'Assigned By Me', value: 'ASSIGNED_BY_ME' }
]

export const PROJECT_STATUS: any = [
  { name: 'New', value: 'NEW' },
  { name: 'In Progress', value: 'IN_PROGRESS' },
  { name: 'In Review', value: 'IN_REVIEW' },
  { name: 'On Hold', value: 'ON_HOLD' },
  { name: 'Completed', value: 'COMPLETED' }
]

export const TASK_STATUS: any = [
  { name: 'Pending', value: 'PENDING' },
  { name: 'Assigned', value: 'ASSIGNED' },
  { name: 'In Process', value: 'IN_PROCESS' },
  // { name: 'Completed ', value: 'COMPLETED' },
]

export const DATE_FORMATE: any = {
  DEFAULT: 'yyyy/MM/dd',
  APIKEY: 'MMM dd, yyyy',
};

export const ROLE: any = [
  { name: 'Developer', value: '1' },
  { name: 'Tester', value: '2' },
]

export const MONTHS: any = [
  { name: 'January', value: '1' },
  { name: 'February', value: '2' },
  { name: 'March', value: '3' },
  { name: 'April', value: '4' },
  { name: 'May', value: '5' },
  { name: 'June', value: '6' },
  { name: 'July', value: '7' },
  { name: 'August', value: '8' },
  { name: 'September', value: '9' },
  { name: 'October', value: '10' },
  { name: 'November', value: '11' },
  { name: 'December', value: '12' }
]

export const BROWSER = [
  { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
  { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
  { name: 'Safari', value: 'Safari', version: 'Version' },
  { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
  { name: 'Opera', value: 'Opera', version: 'Opera' },
  { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
  { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
]

export const OS = [
  { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
  { name: 'Windows', value: 'Win', version: 'NT' },
  { name: 'iPhone', value: 'iPhone', version: 'OS' },
  { name: 'iPad', value: 'iPad', version: 'OS' },
  { name: 'Kindle', value: 'Silk', version: 'Silk' },
  { name: 'Android', value: 'Android', version: 'Android' },
  { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
  { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
  { name: 'Macintosh', value: 'Mac', version: 'OS X' },
  { name: 'Linux', value: 'Linux', version: 'rv' },
  { name: 'Palm', value: 'Palm', version: 'PalmOS' }
]


export const valid_Moment_Time_Zones: string[] = [
  'Africa/Abidjan',
  'Africa/Accra',
  'Africa/Addis_Ababa',
  'Africa/Algiers',
  'Africa/Asmara',
  'Africa/Asmera',
  'Africa/Bamako',
  'Africa/Bangui',
  'Africa/Banjul',
  'Africa/Bissau',
  'Africa/Blantyre',
  'Africa/Brazzaville',
  'Africa/Bujumbura',
  'Africa/Cairo',
  'Africa/Casablanca',
  'Africa/Ceuta',
  'Africa/Conakry',
  'Africa/Dakar',
  'Africa/Dar_es_Salaam',
  'Africa/Djibouti',
  'Africa/Douala',
  'Africa/El_Aaiun',
  'Africa/Freetown',
  'Africa/Gaborone',
  'Africa/Harare',
  'Africa/Johannesburg',
  'Africa/Juba',
  'Africa/Kampala',
  'Africa/Khartoum',
  'Africa/Kigali',
  'Africa/Kinshasa',
  'Africa/Lagos',
  'Africa/Libreville',
  'Africa/Lome',
  'Africa/Luanda',
  'Africa/Lubumbashi',
  'Africa/Lusaka',
  'Africa/Malabo',
  'Africa/Maputo',
  'Africa/Maseru',
  'Africa/Mbabane',
  'Africa/Mogadishu',
  'Africa/Monrovia',
  'Africa/Nairobi',
  'Africa/Ndjamena',
  'Africa/Niamey',
  'Africa/Nouakchott',
  'Africa/Ouagadougou',
  'Africa/Porto-Novo',
  'Africa/Sao_Tome',
  'Africa/Timbuktu',
  'Africa/Tripoli',
  'Africa/Tunis',
  'Africa/Windhoek',
  'America/Adak',
  'America/Anchorage',
  'America/Anguilla',
  'America/Antigua',
  'America/Araguaina',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Catamarca',
  'America/Argentina/ComodRivadavia',
  'America/Argentina/Cordoba',
  'America/Argentina/Jujuy',
  'America/Argentina/La_Rioja',
  'America/Argentina/Mendoza',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Salta',
  'America/Argentina/San_Juan',
  'America/Argentina/San_Luis',
  'America/Argentina/Tucuman',
  'America/Argentina/Ushuaia',
  'America/Aruba',
  'America/Asuncion',
  'America/Atikokan',
  'America/Atka',
  'America/Bahia',
  'America/Bahia_Banderas',
  'America/Barbados',
  'America/Belem',
  'America/Belize',
  'America/Blanc-Sablon',
  'America/Boa_Vista',
  'America/Bogota',
  'America/Boise',
  'America/Buenos_Aires',
  'America/Cambridge_Bay',
  'America/Campo_Grande',
  'America/Cancun',
  'America/Caracas',
  'America/Catamarca',
  'America/Cayenne',
  'America/Cayman',
  'America/Chicago',
  'America/Chihuahua',
  'America/Coral_Harbour',
  'America/Cordoba',
  'America/Costa_Rica',
  'America/Creston',
  'America/Cuiaba',
  'America/Curacao',
  'America/Danmarkshavn',
  'America/Dawson',
  'America/Dawson_Creek',
  'America/Denver',
  'America/Detroit',
  'America/Dominica',
  'America/Edmonton',
  'America/Eirunepe',
  'America/El_Salvador',
  'America/Ensenada',
  'America/Fort_Nelson',
  'America/Fort_Wayne',
  'America/Fortaleza',
  'America/Glace_Bay',
  'America/Godthab',
  'America/Goose_Bay',
  'America/Grand_Turk',
  'America/Grenada',
  'America/Guadeloupe',
  'America/Guatemala',
  'America/Guayaquil',
  'America/Guyana',
  'America/Halifax',
  'America/Havana',
  'America/Hermosillo',
  'America/Indiana/Indianapolis',
  'America/Indiana/Knox',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Tell_City',
  'America/Indiana/Vevay',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indianapolis',
  'America/Inuvik',
  'America/Iqaluit',
  'America/Jamaica',
  'America/Jujuy',
  'America/Juneau',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  ' America/Knox_IN',
  ' America/Kralendijk',
  ' America/La_Paz',
  ' America/Lima',
  ' America/Los_Angeles',
  ' America/Louisville',
  ' America/Lower_Princes',
  ' America/Maceio',
  ' America/Managua',
  ' America/Manaus',
  ' America/Marigot',
  ' America/Martinique',
  ' America/Matamoros',
  ' America/Mazatlan',
  ' America/Mendoza',
  ' America/Menominee',
  ' America/Merida',
  ' America/Metlakatla',
  ' America/Mexico_City',
  ' America/Miquelon',
  ' America/Moncton',
  ' America/Monterrey',
  ' America/Montevideo',
  'America/Montreal',
  'America/Montserrat',
  'America/Nassau',
  'America/New_York',
  'America/Nipigon',
  'America/Nome',
  'America/Noronha',
  'America/North_Dakota/Beulah',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/Ojinaga',
  'America/Panama',
  'America/Pangnirtung',
  'America/Paramaribo',
  'America/Phoenix',
  'America/Port-au-Prince',
  'America/Port_of_Spain',
  'America/Porto_Acre',
  'America/Porto_Velho',
  'America/Puerto_Rico',
  'America/Punta_Arenas',
  'America/Rainy_River',
  'America/Rankin_Inlet',
  'America/Recife',
  'America/Regina',
  'America/Resolute',
  'America/Rio_Branco',
  'America/Rosario',
  'America/Santa_Isabel',
  'America/Santarem',
  'America/Santiago',
  'America/Santo_Domingo',
  'America/Sao_Paulo',
  'America/Scoresbysund',
  'America/Shiprock',
  'America/Sitka',
  'America/St_Barthelemy',
  'America/St_Johns',
  'America/St_Kitts',
  'America/St_Lucia',
  'America/St_Thomas',
  'America/St_Vincent',
  'America/Swift_Current',
  'America/Tegucigalpa',
  'America/Thule',
  'America/Thunder_Bay',
  'America/Tijuana',
  'America/Toronto',
  'America/Tortola',
  'America/Vancouver',
  'America/Virgin',
  'America/Whitehorse',
  'America/Winnipeg',
  'America/Yakutat',
  'America/Yellowknife',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville',
  'Antarctica/Macquarie',
  'Antarctica/Mawson',
  'Antarctica/McMurdo',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/South_Pole',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'Arctic/Longyearbyen',
  'Asia/Aden',
  'Asia/Almaty',
  'Asia/Amman',
  'Asia/Anadyr',
  'Asia/Aqtau',
  'Asia/Aqtobe',
  'Asia/Ashgabat',
  'Asia/Ashkhabad',
  'Asia/Atyrau',
  'Asia/Baghdad',
  'Asia/Bahrain',
  'Asia/Baku',
  'Asia/Bangkok',
  'Asia/Barnaul',
  'Asia/Beirut',
  'Asia/Bishkek',
  'Asia/Brunei',
  'Asia/Calcutta',
  'Asia/Chita',
  'Asia/Choibalsan',
  'Asia/Chongqing',
  'Asia/Chungking',
  'Asia/Colombo',
  'Asia/Dacca',
  'Asia/Damascus',
  'Asia/Dhaka',
  'Asia/Dili',
  'Asia/Dubai',
  'Asia/Dushanbe',
  'Asia/Famagusta',
  'Asia/Gaza',
  'Asia/Harbin',
  'Asia/Hebron',
  'Asia/Ho_Chi_Minh',
  'Asia/Hong_Kong',
  'Asia/Hovd',
  'Asia/Irkutsk',
  'Asia/Istanbul',
  'Asia/Jakarta',
  'Asia/Jayapura',
  'Asia/Jerusalem',
  'Asia/Kabul',
  'Asia/Kamchatka',
  'Asia/Karachi',
  'Asia/Kashgar',
  'Asia/Kathmandu',
  'Asia/Katmandu',
  'Asia/Khandyga',
  'Asia/Kolkata',
  'Asia/Krasnoyarsk',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Asia/Kuwait',
  'Asia/Macao',
  'Asia/Macau',
  'Asia/Magadan',
  'Asia/Makassar',
  'Asia/Manila',
  'Asia/Muscat',
  'Asia/Nicosia',
  'Asia/Novokuznetsk',
  'Asia/Novosibirsk',
  'Asia/Omsk',
  'Asia/Oral',
  'Asia/Phnom_Penh',
  'Asia/Pontianak',
  'Asia/Pyongyang',
  'Asia/Qatar',
  'Asia/Qyzylorda',
  'Asia/Rangoon',
  'Asia/Riyadh',
  'Asia/Saigon',
  'Asia/Sakhalin',
  'Asia/Samarkand',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Singapore',
  'Asia/Srednekolymsk',
  'Asia/Taipei',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Tehran',
  'Asia/Tel_Aviv',
  'Asia/Thimbu',
  'Asia/Thimphu',
  'Asia/Tokyo',
  'Asia/Tomsk',
  'Asia/Ujung_Pandang',
  'Asia/Ulaanbaatar',
  'Asia/Ulan_Bator',
  'Asia/Urumqi',
  'Asia/Ust-Nera',
  'Asia/Vientiane',
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yangon',
  'Asia/Yekaterinburg',
  'Asia/Yerevan',
  'Atlantic/Azores',
  'Atlantic/Bermuda',
  'Atlantic/Canary',
  'Atlantic/Cape_Verde',
  'Atlantic/Faeroe',
  'Atlantic/Faroe',
  'Atlantic/Jan_Mayen',
  'Atlantic/Madeira',
  'Atlantic/Reykjavik',
  'Atlantic/South_Georgia',
  'Atlantic/St_Helena',
  'Atlantic/Stanley',
  'Australia/ACT',
  'Australia/Adelaide',
  'Australia/Brisbane',
  'Australia/Broken_Hill',
  'Australia/Canberra',
  'Australia/Currie',
  'Australia/Darwin',
  'Australia/Eucla',
  'Australia/Hobart',
  'Australia/LHI',
  'Australia/Lindeman',
  'Australia/Lord_Howe',
  'Australia/Melbourne',
  'Australia/NSW',
  'Australia/North',
  'Australia/Perth',
  'Australia/Queensland',
  'Australia/South',
  'Australia/Sydney',
  'Australia/Tasmania',
  'Australia/Victoria',
  'Australia/West',
  'Australia/Yancowinna',
  'Brazil/Acre',
  'Brazil/DeNoronha',
  'Brazil/East',
  'Brazil/West',
  'CET',
  'CST6CDT',
  'Canada/Atlantic',
  'Canada/Central',
  'Canada/Eastern',
  'Canada/Mountain',
  'Canada/Newfoundland',
  'Canada/Pacific',
  'Canada/Saskatchewan',
  'Canada/Yukon',
  'Chile/Continental',
  'Chile/EasterIsland',
  'Cuba',
  'EET',
  'EST',
  'EST5EDT',
  'Egypt',
  'Eire',
  'Etc/GMT',
  'Etc/GMT+0',
  'Etc/GMT+1',
  'Etc/GMT+10',
  'Etc/GMT+11',
  'Etc/GMT+12',
  'Etc/GMT+2',
  'Etc/GMT+3',
  'Etc/GMT+4',
  'Etc/GMT+5',
  'Etc/GMT+6',
  'Etc/GMT+7',
  'Etc/GMT+8',
  'Etc/GMT+9',
  'Etc/GMT-0',
  'Etc/GMT-1',
  'Etc/GMT-10',
  'Etc/GMT-11',
  'Etc/GMT-12',
  'Etc/GMT-13',
  'Etc/GMT-14',
  'Etc/GMT-2',
  'Etc/GMT-3',
  'Etc/GMT-4',
  'Etc/GMT-5',
  'Etc/GMT-6',
  'Etc/GMT-7',
  'Etc/GMT-8',
  'Etc/GMT-9',
  'Etc/GMT0',
  'Etc/Greenwich',
  'Etc/UCT',
  'Etc/UTC',
  'Etc/Universal',
  'Etc/Zulu',
  'Europe/Amsterdam',
  'Europe/Andorra',
  'Europe/Astrakhan',
  'Europe/Athens',
  'Europe/Belfast',
  'Europe/Belgrade',
  'Europe/Berlin',
  'Europe/Bratislava',
  'Europe/Brussels',
  'Europe/Bucharest',
  'Europe/Budapest',
  'Europe/Busingen',
  'Europe/Chisinau',
  'Europe/Copenhagen',
  'Europe/Dublin',
  'Europe/Gibraltar',
  'Europe/Guernsey',
  'Europe/Helsinki',
  'Europe/Isle_of_Man',
  'Europe/Istanbul',
  'Europe/Jersey',
  'Europe/Kaliningrad',
  'Europe/Kiev',
  'Europe/Kirov',
  'Europe/Lisbon',
  'Europe/Ljubljana',
  'Europe/London',
  'Europe/Luxembourg',
  'Europe/Madrid',
  'Europe/Malta',
  'Europe/Mariehamn',
  'Europe/Minsk',
  'Europe/Monaco',
  'Europe/Moscow',
  'Europe/Nicosia',
  'Europe/Oslo',
  'Europe/Paris',
  'Europe/Podgorica',
  'Europe/Prague',
  'Europe/Riga',
  'Europe/Rome',
  'Europe/Samara',
  'Europe/San_Marino',
  'Europe/Sarajevo',
  'Europe/Saratov',
  'Europe/Simferopol',
  'Europe/Skopje',
  'Europe/Sofia',
  'Europe/Stockholm',
  'Europe/Tallinn',
  'Europe/Tirane',
  'Europe/Tiraspol',
  'Europe/Ulyanovsk',
  'Europe/Uzhgorod',
  'Europe/Vaduz',
  'Europe/Vatican',
  'Europe/Vienna',
  'Europe/Vilnius',
  'Europe/Volgograd',
  'Europe/Warsaw',
  'Europe/Zagreb',
  'Europe/Zaporozhye',
  'Europe/Zurich',
  'GB',
  'GB-Eire',
  'GMT',
  'GMT+0',
  'GMT-0',
  'GMT0',
  'Greenwich',
  'HST',
  'Hongkong',
  'Iceland',
  'Indian/Antananarivo',
  'Indian/Chagos',
  'Indian/Christmas',
  'Indian/Cocos',
  'Indian/Comoro',
  'Indian/Kerguelen',
  'Indian/Mahe',
  'Indian/Maldives',
  'Indian/Mauritius',
  'Indian/Mayotte',
  'Indian/Reunion',
  'Iran',
  'Israel',
  'Jamaica',
  'Japan',
  'Kwajalein',
  'Libya',
  'MET',
  'MST',
  'MST7MDT',
  'Mexico/BajaNorte',
  'Mexico/BajaSur',
  'Mexico/General',
  'NZ',
  'NZ-CHAT',
  'Navajo',
  'PRC',
  'PST8PDT',
  'Pacific/Apia',
  'Pacific/Auckland',
  'Pacific/Bougainville',
  'Pacific/Chatham',
  'Pacific/Chuuk',
  'Pacific/Easter',
  'Pacific/Efate',
  'Pacific/Enderbury',
  'Pacific/Fakaofo',
  'Pacific/Fiji',
  'Pacific/Funafuti',
  'Pacific/Galapagos',
  'Pacific/Gambier',
  'Pacific/Guadalcanal',
  'Pacific/Guam',
  'Pacific/Honolulu',
  'Pacific/Johnston',
  'Pacific/Kiritimati',
  'Pacific/Kosrae',
  'Pacific/Kwajalein',
  'Pacific/Majuro',
  'Pacific/Marquesas',
  'Pacific/Midway',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Norfolk',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Palau',
  'Pacific/Pitcairn',
  'Pacific/Pohnpei',
  'Pacific/Ponape',
  'Pacific/Port_Moresby',
  'Pacific/Rarotonga',
  'Pacific/Saipan',
  'Pacific/Samoa',
  'Pacific/Tahiti',
  'Pacific/Tarawa',
  'Pacific/Tongatapu',
  'Pacific/Truk',
  'Pacific/Wake',
  'Pacific/Wallis',
  'Pacific/Yap',
  'Poland',
  'Portugal',
  'ROC',
  'ROK',
  'Singapore',
  'Turkey',
  'UCT',
  'US/Alaska',
  'US/Aleutian',
  'US/Arizona',
  'US/Central',
  'US/East-Indiana',
  'US/Eastern',
  'US/Hawaii',
  'US/Indiana-Starke',
  'US/Michigan',
  'US/Mountain',
  'US/Pacific',
  'US/Pacific-New',
  'US/Samoa',
  'UTC',
  'Universal',
  'W-SU',
  'WET',
  'Zulu',
];

export const COUNTRIES: any = [
  { code: "AFG", name: "Afghanistan", number: "004" },
  { code: "ALB", name: "Albania", number: "008" },
  { code: "DZA", name: "Algeria", number: "012" },
  { code: "ASM", name: "American Samoa", number: "016" },
  { code: "AND", name: "Andorra", number: "020" },
  { code: "AGO", name: "Angola", number: "024" },
  { code: "AIA", name: "Anguilla", number: "660" },
  { code: "ATA", name: "Antarctica", number: "010" },
  { code: "ATG", name: "Antigua and Barbuda", number: "028" },
  { code: "ARG", name: "Argentina", number: "032" },
  { code: "ARM", name: "Armenia", number: "051" },
  { code: "ABW", name: "Aruba", number: "533" },
  { code: "AUS", name: "Australia", number: "036" },
  { code: "AUT", name: "Austria", number: "040" },
  { code: "AZE", name: "Azerbaijan", number: "031" },
  { code: "BHS", name: "Bahamas (the)", number: "044" },
  { code: "BHR", name: "Bahrain", number: "048" },
  { code: "BGD", name: "Bangladesh", number: "050" },
  { code: "BRB", name: "Barbados", number: "052" },
  { code: "BLR", name: "Belarus", number: "112" },
  { code: "BEL", name: "Belgium", number: "056" },
  { code: "BLZ", name: "Belize", number: "084" },
  { code: "BEN", name: "Benin", number: "204" },
  { code: "BMU", name: "Bermuda", number: "060" },
  { code: "BTN", name: "Bhutan", number: "064" },
  { code: "BOL", name: "Bolivia (Plurinational State of)", number: "068" },
  { code: "BES", name: "Bonaire, Sint Eustatius and Saba", number: "535" },
  { code: "BIH", name: "Bosnia and Herzegovina", number: "070" },
  { code: "BWA", name: "Botswana", number: "072" },
  { code: "BVT", name: "Bouvet Island", number: "074" },
  { code: "BRA", name: "Brazil", number: "076" },
  { code: "IOT", name: "British Indian Ocean Territory (the)", number: "086" },
  { code: "BRN", name: "Brunei Darussalam", number: "096" },
  { code: "BGR", name: "Bulgaria", number: "100" },
  { code: "BFA", name: "Burkina Faso", number: "854" },
  { code: "BDI", name: "Burundi", number: "108" },
  { code: "CPV", name: "Cabo Verde", number: "132" },
  { code: "KHM", name: "Cambodia", number: "116" },
  { code: "CMR", name: "Cameroon", number: "120" },
  { code: "CAN", name: "Canada", number: "124" },
  { code: "CYM", name: "Cayman Islands (the)", number: "136" },
  { code: "CAF", name: "Central African Republic (the)", number: "140" },
  { code: "TCD", name: "Chad", number: "148" },
  { code: "CHL", name: "Chile", number: "152" },
  { code: "CHN", name: "China", number: "156" },
  { code: "CXR", name: "Christmas Island", number: "162" },
  { code: "CCK", name: "Cocos (Keeling) Islands (the)", number: "166" },
  { code: "COL", name: "Colombia", number: "170" },
  { code: "COM", name: "Comoros (the)", number: "174" },
  { code: "COD", name: "Congo (the Democratic Republic of the)", number: "180" },
  { code: "COG", name: "Congo (the)", number: "178" },
  { code: "COK", name: "Cook Islands (the)", number: "184" },
  { code: "CRI", name: "Costa Rica", number: "188" },
  { code: "HRV", name: "Croatia", number: "191" },
  { code: "CUB", name: "Cuba", number: "192" },
  { code: "CUW", name: "Curaçao", number: "531" },
  { code: "CYP", name: "Cyprus", number: "196" },
  { code: "CZE", name: "Czechia", number: "203" },
  { code: "CIV", name: "Côte d'Ivoire", number: "384" },
  { code: "DNK", name: "Denmark", number: "208" },
  { code: "DJI", name: "Djibouti", number: "262" },
  { code: "DMA", name: "Dominica", number: "212" },
  { code: "DOM", name: "Dominican Republic (the)", number: "214" },
  { code: "ECU", name: "Ecuador", number: "218" },
  { code: "EGY", name: "Egypt", number: "818" },
  { code: "SLV", name: "El Salvador", number: "222" },
  { code: "GNQ", name: "Equatorial Guinea", number: "226" },
  { code: "ERI", name: "Eritrea", number: "232" },
  { code: "EST", name: "Estonia", number: "233" },
  { code: "SWZ", name: "Eswatini", number: "748" },
  { code: "ETH", name: "Ethiopia", number: "231" },
  { code: "FLK", name: "Falkland Islands (the) [Malvinas]", number: "238" },
  { code: "FRO", name: "Faroe Islands (the)", number: "234" },
  { code: "FJI", name: "Fiji", number: "242" },
  { code: "FIN", name: "Finland", number: "246" },
  { code: "FRA", name: "France", number: "250" },
  { code: "GUF", name: "French Guiana", number: "254" },
  { code: "PYF", name: "French Polynesia", number: "258" },
  { code: "ATF", name: "French Southern Territories (the)", number: "260" },
  { code: "GAB", name: "Gabon", number: "266" },
  { code: "GMB", name: "Gambia (the)", number: "270" },
  { code: "GEO", name: "Georgia", number: "268" },
  { code: "DEU", name: "Germany", number: "276" },
  { code: "GHA", name: "Ghana", number: "288" },
  { code: "GIB", name: "Gibraltar", number: "292" },
  { code: "GRC", name: "Greece", number: "300" },
  { code: "GRL", name: "Greenland", number: "304" },
  { code: "GRD", name: "Grenada", number: "308" },
  { code: "GLP", name: "Guadeloupe", number: "312" },
  { code: "GUM", name: "Guam", number: "316" },
  { code: "GTM", name: "Guatemala", number: "320" },
  { code: "GGY", name: "Guernsey", number: "831" },
  { code: "GIN", name: "Guinea", number: "324" },
  { code: "GNB", name: "Guinea-Bissau", number: "624" },
  { code: "GUY", name: "Guyana", number: "328" },
  { code: "HTI", name: "Haiti", number: "332" },
  { code: "HMD", name: "Heard Island and McDonald Islands", number: "334" },
  { code: "VAT", name: "Holy See (the)", number: "336" },
  { code: "HND", name: "Honduras", number: "340" },
  { code: "HKG", name: "Hong Kong", number: "344" },
  { code: "HUN", name: "Hungary", number: "348" },
  { code: "ISL", name: "Iceland", number: "352" },
  { code: "IND", name: "India", number: "356" },
  { code: "IDN", name: "Indonesia", number: "360" },
  { code: "IRN", name: "Iran (Islamic Republic of)", number: "364" },
  { code: "IRQ", name: "Iraq", number: "368" },
  { code: "IRL", name: "Ireland", number: "372" },
  { code: "IMN", name: "Isle of Man", number: "833" },
  { code: "ISR", name: "Israel", number: "376" },
  { code: "ITA", name: "Italy", number: "380" },
  { code: "JAM", name: "Jamaica", number: "388" },
  { code: "JPN", name: "Japan", number: "392" },
  { code: "JEY", name: "Jersey", number: "832" },
  { code: "JOR", name: "Jordan", number: "400" },
  { code: "KAZ", name: "Kazakhstan", number: "398" },
  { code: "KEN", name: "Kenya", number: "404" },
  { code: "KIR", name: "Kiribati", number: "296" },
  { code: "PRK", name: "Korea (the Democratic People's Republic of)", number: "408" },
  { code: "KOR", name: "Korea (the Republic of)", number: "410" },
  { code: "KWT", name: "Kuwait", number: "414" },
  { code: "KGZ", name: "Kyrgyzstan", number: "417" },
  { code: "LAO", name: "Lao People's Democratic Republic (the)", number: "418" },
  { code: "LVA", name: "Latvia", number: "428" },
  { code: "LBN", name: "Lebanon", number: "422" },
  { code: "LSO", name: "Lesotho", number: "426" },
  { code: "LBR", name: "Liberia", number: "430" },
  { code: "LBY", name: "Libya", number: "434" },
  { code: "LIE", name: "Liechtenstein", number: "438" },
  { code: "LTU", name: "Lithuania", number: "440" },
  { code: "LUX", name: "Luxembourg", number: "442" },
  { code: "MAC", name: "Macao", number: "446" },
  { code: "MDG", name: "Madagascar", number: "450" },
  { code: "MWI", name: "Malawi", number: "454" },
  { code: "MYS", name: "Malaysia", number: "458" },
  { code: "MDV", name: "Maldives", number: "462" },
  { code: "MLI", name: "Mali", number: "466" },
  { code: "MLT", name: "Malta", number: "470" },
  { code: "MHL", name: "Marshall Islands (the)", number: "584" },
  { code: "MTQ", name: "Martinique", number: "474" },
  { code: "MRT", name: "Mauritania", number: "478" },
  { code: "MUS", name: "Mauritius", number: "480" },
  { code: "MYT", name: "Mayotte", number: "175" },
  { code: "MEX", name: "Mexico", number: "484" },
  { code: "FSM", name: "Micronesia (Federated States of)", number: "583" },
  { code: "MDA", name: "Moldova (the Republic of)", number: "498" },
  { code: "MCO", name: "Monaco", number: "492" },
  { code: "MNG", name: "Mongolia", number: "496" },
  { code: "MNE", name: "Montenegro", number: "499" },
  { code: "MSR", name: "Montserrat", number: "500" },
  { code: "MAR", name: "Morocco", number: "504" },
  { code: "MOZ", name: "Mozambique", number: "508" },
  { code: "MMR", name: "Myanmar", number: "104" },
  { code: "NAM", name: "Namibia", number: "516" },
  { code: "NRU", name: "Nauru", number: "520" },
  { code: "NPL", name: "Nepal", number: "524" },
  { code: "NLD", name: "Netherlands (the)", number: "528" },
  { code: "NCL", name: "New Caledonia", number: "540" },
  { code: "NZL", name: "New Zealand", number: "554" },
  { code: "NIC", name: "Nicaragua", number: "558" },
  { code: "NER", name: "Niger (the)", number: "562" },
  { code: "NGA", name: "Nigeria", number: "566" },
  { code: "NIU", name: "Niue", number: "570" },
  { code: "NFK", name: "Norfolk Island", number: "574" },
  { code: "MNP", name: "Northern Mariana Islands (the)", number: "580" },
  { code: "NOR", name: "Norway", number: "578" },
  { code: "OMN", name: "Oman", number: "512" },
  { code: "PAK", name: "Pakistan", number: "586" },
  { code: "PLW", name: "Palau", number: "585" },
  { code: "PSE", name: "Palestine, State of", number: "275" },
  { code: "PAN", name: "Panama", number: "591" },
  { code: "PNG", name: "Papua New Guinea", number: "598" },
  { code: "PRY", name: "Paraguay", number: "600" },
  { code: "PER", name: "Peru", number: "604" },
  { code: "PHL", name: "Philippines (the)", number: "608" },
  { code: "PCN", name: "Pitcairn", number: "612" },
  { code: "POL", name: "Poland", number: "616" },
  { code: "PRT", name: "Portugal", number: "620" },
  { code: "PRI", name: "Puerto Rico", number: "630" },
  { code: "QAT", name: "Qatar", number: "634" },
  { code: "MKD", name: "Republic of North Macedonia", number: "807" },
  { code: "ROU", name: "Romania", number: "642" },
  { code: "RUS", name: "Russian Federation (the)", number: "643" },
  { code: "RWA", name: "Rwanda", number: "646" },
  { code: "REU", name: "Réunion", number: "638" },
  { code: "BLM", name: "Saint Barthélemy", number: "652" },
  { code: "SHN", name: "Saint Helena, Ascension and Tristan da Cunha", number: "654" },
  { code: "KNA", name: "Saint Kitts and Nevis", number: "659" },
  { code: "LCA", name: "Saint Lucia", number: "662" },
  { code: "MAF", name: "Saint Martin (French part)", number: "663" },
  { code: "SPM", name: "Saint Pierre and Miquelon", number: "666" },
  { code: "VCT", name: "Saint Vincent and the Grenadines", number: "670" },
  { code: "WSM", name: "Samoa", number: "882" },
  { code: "SMR", name: "San Marino", number: "674" },
  { code: "STP", name: "Sao Tome and Principe", number: "678" },
  { code: "SAU", name: "Saudi Arabia", number: "682" },
  { code: "SEN", name: "Senegal", number: "686" },
  { code: "SRB", name: "Serbia", number: "688" },
  { code: "SYC", name: "Seychelles", number: "690" },
  { code: "SLE", name: "Sierra Leone", number: "694" },
  { code: "SGP", name: "Singapore", number: "702" },
  { code: "SXM", name: "Sint Maarten (Dutch part)", number: "534" },
  { code: "SVK", name: "Slovakia", number: "703" },
  { code: "SVN", name: "Slovenia", number: "705" },
  { code: "SLB", name: "Solomon Islands", number: "090" },
  { code: "SOM", name: "Somalia", number: "706" },
  { code: "ZAF", name: "South Africa", number: "710" },
  { code: "SGS", name: "South Georgia and the South Sandwich Islands", number: "239" },
  { code: "SSD", name: "South Sudan", number: "728" },
  { code: "ESP", name: "Spain", number: "724" },
  { code: "LKA", name: "Sri Lanka", number: "144" },
  { code: "SDN", name: "Sudan (the)", number: "729" },
  { code: "SUR", name: "Suriname", number: "740" },
  { code: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
  { code: "SWE", name: "Sweden", number: "752" },
  { code: "CHE", name: "Switzerland", number: "756" },
  { code: "SYR", name: "Syrian Arab Republic", number: "760" },
  { code: "TWN", name: "Taiwan", number: "158" },
  { code: "TJK", name: "Tajikistan", number: "762" },
  { code: "TZA", name: "Tanzania, United Republic of", number: "834" },
  { code: "THA", name: "Thailand", number: "764" },
  { code: "TLS", name: "Timor-Leste", number: "626" },
  { code: "TGO", name: "Togo", number: "768" },
  { code: "TKL", name: "Tokelau", number: "772" },
  { code: "TON", name: "Tonga", number: "776" },
  { code: "TTO", name: "Trinidad and Tobago", number: "780" },
  { code: "TUN", name: "Tunisia", number: "788" },
  { code: "TUR", name: "Turkey", number: "792" },
  { code: "TKM", name: "Turkmenistan", number: "795" },
  { code: "TCA", name: "Turks and Caicos Islands (the)", number: "796" },
  { code: "TUV", name: "Tuvalu", number: "798" },
  { code: "UGA", name: "Uganda", number: "800" },
  { code: "UKR", name: "Ukraine", number: "804" },
  { code: "ARE", name: "United Arab Emirates (the)", number: "784" },
  { code: "GBR", name: "United Kingdom of Great Britain and Northern Ireland (the)", number: "826" },
  { code: "UMI", name: "United States Minor Outlying Islands (the)", number: "581" },
  { code: "USA", name: "United States of America (the)", number: "840" },
  { code: "URY", name: "Uruguay", number: "858" },
  { code: "UZB", name: "Uzbekistan", number: "860" },
  { code: "VUT", name: "Vanuatu", number: "548" },
  { code: "VEN", name: "Venezuela (Bolivarian Republic of)", number: "862" },
  { code: "VNM", name: "Viet Nam", number: "704" },
  { code: "VGB", name: "Virgin Islands (British)", number: "092" },
  { code: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
  { code: "WLF", name: "Wallis and Futuna", number: "876" },
  { code: "ESH", name: "Western Sahara", number: "732" },
  { code: "YEM", name: "Yemen", number: "887" },
  { code: "ZMB", name: "Zambia", number: "894" },
  { code: "ZWE", name: "Zimbabwe", number: "716" },
  { code: "ALA", name: "Åland Islands", number: "248" }
];
export const STATES: any = [
  { name: 'Andhra Pradesh', value: 'ANDHRA_PRADESH' },
  { name: 'Arunachal Pradesh', value: 'ARUNACHAL_PRADESH' },
  { name: 'Assam', value: 'ASSAM' },
  { name: 'Bihar', value: 'BIHAR' },
  { name: 'Chhattisgarh', value: 'CHATTISGARH' },
  { name: 'Goa', value: 'GOA' },
  { name: 'Gujarat', value: 'GUJRAT' },
  { name: 'Haryana', value: 'HARYANA' },
  { name: 'Himachal Pradesh', value: 'HIMACHAL_PRADESH' },
  { name: 'Jharkhand', value: 'JHARKHAND' },
  { name: 'Karnataka', value: 'KARNATAKA' },
  { name: 'Kerala', value: 'KERALA' },
  { name: 'Madhya  Pradesh', value: 'MADHYA_PRADESH' },
  { name: 'Maharashtra', value: 'MAHARASHTRA' },
  { name: 'Manipur', value: 'MANIPUR' },
  { name: 'Meghalaya', value: 'MEGHALAYA' },
  { name: 'Mizoram', value: 'MIZORAM' },
  { name: 'Nagaland', value: 'NAGALAND' },
  { name: 'Odisha', value: 'ODISHA' },
  { name: 'Punjab', value: 'PANJAB' },
  { name: 'Rajasthan', value: 'RAJASTHAN' },
  { name: 'Sikkim', value: 'SIKKIM' },
  { name: 'Tamil Nadu', value: 'TAMIL_NADU' },
  { name: 'Telangana', value: 'TELANGANA' },
  { name: 'Tripura', value: 'TRIPURA' },
  { name: 'Uttar Pradesh', value: 'UTTAR_PRADESH' },
  { name: 'Uttarakhand', value: 'UTTARAKHAND' },
  { name: 'West Bengal', value: 'WEST_BENGAL' },

]
export const CURRENCY_LIST: any =
  [{
    name: "؋ Afghan Afghani (AFA)",
    sortName: "Afghan Afghani",
    symbol: "؋",
    value: "AFA"
  }, {
    name: "Lek Albanian Lek (ALL)",
    sortName: "Albanian Lek",
    symbol: "Lek",
    value: "ALL"
  }, {
    name: "دج Algerian Dinar (DZD)",
    sortName: "Algerian Dinar",
    symbol: "دج",
    value: "DZD"
  }, {
    name: "Kz Angolan Kwanza (AOA)",
    sortName: "Angolan Kwanza",
    symbol: "Kz",
    value: "AOA"
  }, {
    name: "$ Argentine Peso (ARS)",
    sortName: "Argentine Peso",
    symbol: "$",
    value: "ARS"
  }, {
    name: "֏ Armenian Dram (AMD)",
    sortName: "Armenian Dram",
    symbol: "֏",
    value: "AMD"
  }, {
    name: "ƒ Aruban Florin (AWG)",
    sortName: "Aruban Florin",
    symbol: "ƒ",
    value: "AWG"
  }, {
    name: "$ Australian Dollar (AUD)",
    sortName: "Australian Dollar",
    symbol: "$",
    value: "AUD"
  }, {
    name: "m Azerbaijani Manat (AZN)",
    sortName: "Azerbaijani Manat",
    symbol: "m",
    value: "AZN"
  }, {
    name: "B$ Bahamian Dollar (BSD)",
    sortName: "Bahamian Dollar",
    symbol: "B$",
    value: "BSD"
  }, {
    name: ".د.ب Bahraini Dinar (BHD)",
    sortName: "Bahraini Dinar",
    symbol: ".د.ب",
    value: "BHD"
  }, {
    name: "৳ Bangladeshi Taka (BDT)",
    sortName: "Bangladeshi Taka",
    symbol: "৳",
    value: "BDT"
  }, {
    name: "Bds$ Barbadian Dollar (BBD)",
    sortName: "Barbadian Dollar",
    symbol: "Bds$",
    value: "BBD"
  }, {
    name: "Br Belarusian Ruble (BYR)",
    sortName: "Belarusian Ruble",
    symbol: "Br",
    value: "BYR"
  }, {
    name: "fr Belgian Franc (BEF)",
    sortName: "Belgian Franc",
    symbol: "fr",
    value: "BEF"
  }, {
    name: "$ Belize Dollar (BZD)",
    sortName: "Belize Dollar",
    symbol: "$",
    value: "BZD"
  }, {
    name: "$ Bermudan Dollar (BMD)",
    sortName: "Bermudan Dollar",
    symbol: "$",
    value: "BMD"
  }, {
    name: "Nu. Bhutanese Ngultrum (BTN)",
    sortName: "Bhutanese Ngultrum",
    symbol: "Nu.",
    value: "BTN"
  }, {
    name: "฿ Bitcoin (BTC)",
    sortName: "Bitcoin",
    symbol: "฿",
    value: "BTC"
  }, {
    name: "Bs. Bolivian Boliviano (BOB)",
    sortName: "Bolivian Boliviano",
    symbol: "Bs.",
    value: "BOB"
  }, {
    name: "KM Bosnia-Herzegovina Convertible Mark (BAM)",
    sortName: "Bosnia-Herzegovina Convertible Mark",
    symbol: "KM",
    value: "BAM"
  }, {
    name: "P Botswanan Pula (BWP)",
    sortName: "Botswanan Pula",
    symbol: "P",
    value: "BWP"
  }, {
    name: "R$ Brazilian Real (BRL)",
    sortName: "Brazilian Real",
    symbol: "R$",
    value: "BRL"
  }, {
    name: "£ British Pound Sterling (GBP)",
    sortName: "British Pound Sterling",
    symbol: "£",
    value: "GBP"
  }, {
    name: "B$ Brunei Dollar (BND)",
    sortName: "Brunei Dollar",
    symbol: "B$",
    value: "BND"
  }, {
    name: "Лв. Bulgarian Lev (BGN)",
    sortName: "Bulgarian Lev",
    symbol: "Лв.",
    value: "BGN"
  }, {
    name: "FBu Burundian Franc (BIF)",
    sortName: "Burundian Franc",
    symbol: "FBu",
    value: "BIF"
  }, {
    name: "KHR Cambodian Riel (KHR)",
    sortName: "Cambodian Riel",
    symbol: "KHR",
    value: "KHR"
  }, {
    name: "$ Canadian Dollar (CAD)",
    sortName: "Canadian Dollar",
    symbol: "$",
    value: "CAD"
  }, {
    name: "$ Cape Verdean Escudo (CVE)",
    sortName: "Cape Verdean Escudo",
    symbol: "$",
    value: "CVE"
  }, {
    name: "$ Cayman Islands Dollar (KYD)",
    sortName: "Cayman Islands Dollar",
    symbol: "$",
    value: "KYD"
  }, {
    name: "CFA CFA Franc BCEAO (XOF)",
    sortName: "CFA Franc BCEAO",
    symbol: "CFA",
    value: "XOF"
  }, {
    name: "FCFA CFA Franc BEAC (XAF)",
    sortName: "CFA Franc BEAC",
    symbol: "FCFA",
    value: "XAF"
  }, {
    name: "₣ CFP Franc (XPF)",
    sortName: "CFP Franc",
    symbol: "₣",
    value: "XPF"
  }, {
    name: "$ Chilean Peso (CLP)",
    sortName: "Chilean Peso",
    symbol: "$",
    value: "CLP"
  }, {
    name: "¥ Chinese Yuan (CNY)",
    sortName: "Chinese Yuan",
    symbol: "¥",
    value: "CNY"
  }, {
    name: "$ Colombian Peso (COP)",
    sortName: "Colombian Peso",
    symbol: "$",
    value: "COP"
  }, {
    name: "CF Comorian Franc (KMF)",
    sortName: "Comorian Franc",
    symbol: "CF",
    value: "KMF"
  }, {
    name: "FC Congolese Franc (CDF)",
    sortName: "Congolese Franc",
    symbol: "FC",
    value: "CDF"
  }, {
    name: "₡ Costa Rican ColÃ³n (CRC)",
    sortName: "Costa Rican ColÃ³n",
    symbol: "₡",
    value: "CRC"
  }, {
    name: "kn Croatian Kuna (HRK)",
    sortName: "Croatian Kuna",
    symbol: "kn",
    value: "HRK"
  }, {
    name: "$, CUC Cuban Convertible Peso (CUC)",
    sortName: "Cuban Convertible Peso",
    symbol: "$, CUC",
    value: "CUC"
  }, {
    name: "Kč Czech Republic Koruna (CZK)",
    sortName: "Czech Republic Koruna",
    symbol: "Kč",
    value: "CZK"
  }, {
    name: "Kr. Danish Krone (DKK)",
    sortName: "Danish Krone",
    symbol: "Kr.",
    value: "DKK"
  }, {
    name: "Fdj Djiboutian Franc (DJF)",
    sortName: "Djiboutian Franc",
    symbol: "Fdj",
    value: "DJF"
  }, {
    name: "$ Dominican Peso (DOP)",
    sortName: "Dominican Peso",
    symbol: "$",
    value: "DOP"
  }, {
    name: "$ East Caribbean Dollar (XCD)",
    sortName: "East Caribbean Dollar",
    symbol: "$",
    value: "XCD"
  }, {
    name: "ج.م Egyptian Pound (EGP)",
    sortName: "Egyptian Pound",
    symbol: "ج.م",
    value: "EGP"
  }, {
    name: "Nfk Eritrean Nakfa (ERN)",
    sortName: "Eritrean Nakfa",
    symbol: "Nfk",
    value: "ERN"
  }, {
    name: "kr Estonian Kroon (EEK)",
    sortName: "Estonian Kroon",
    symbol: "kr",
    value: "EEK"
  }, {
    name: "Nkf Ethiopian Birr (ETB)",
    sortName: "Ethiopian Birr",
    symbol: "Nkf",
    value: "ETB"
  }, {
    name: "€ Euro (EUR)",
    sortName: "Euro",
    symbol: "€",
    value: "EUR"
  }, {
    name: "£ Falkland Islands Pound (FKP)",
    sortName: "Falkland Islands Pound",
    symbol: "£",
    value: "FKP"
  }, {
    name: "FJ$ Fijian Dollar (FJD)",
    sortName: "Fijian Dollar",
    symbol: "FJ$",
    value: "FJD"
  }, {
    name: "D Gambian Dalasi (GMD)",
    sortName: "Gambian Dalasi",
    symbol: "D",
    value: "GMD"
  }, {
    name: "ლ Georgian Lari (GEL)",
    sortName: "Georgian Lari",
    symbol: "ლ",
    value: "GEL"
  }, {
    name: "DM German Mark (DEM)",
    sortName: "German Mark",
    symbol: "DM",
    value: "DEM"
  }, {
    name: "GH₵ Ghanaian Cedi (GHS)",
    sortName: "Ghanaian Cedi",
    symbol: "GH₵",
    value: "GHS"
  }, {
    name: "£ Gibraltar Pound (GIP)",
    sortName: "Gibraltar Pound",
    symbol: "£",
    value: "GIP"
  }, {
    name: "₯, Δρχ, Δρ Greek Drachma (GRD)",
    sortName: "Greek Drachma",
    symbol: "₯, Δρχ, Δρ",
    value: "GRD"
  }, {
    name: "Q Guatemalan Quetzal (GTQ)",
    sortName: "Guatemalan Quetzal",
    symbol: "Q",
    value: "GTQ"
  }, {
    name: "FG Guinean Franc (GNF)",
    sortName: "Guinean Franc",
    symbol: "FG",
    value: "GNF"
  }, {
    name: "$ Guyanaese Dollar (GYD)",
    sortName: "Guyanaese Dollar",
    symbol: "$",
    value: "GYD"
  }, {
    name: "G Haitian Gourde (HTG)",
    sortName: "Haitian Gourde",
    symbol: "G",
    value: "HTG"
  }, {
    name: "L Honduran Lempira (HNL)",
    sortName: "Honduran Lempira",
    symbol: "L",
    value: "HNL"
  }, {
    name: "$ Hong Kong Dollar (HKD)",
    sortName: "Hong Kong Dollar",
    symbol: "$",
    value: "HKD"
  }, {
    name: "Ft Hungarian Forint (HUF)",
    sortName: "Hungarian Forint",
    symbol: "Ft",
    value: "HUF"
  }, {
    name: "kr Icelandic KrÃ³na (ISK)",
    sortName: "Icelandic KrÃ³na",
    symbol: "kr",
    value: "ISK"
  }, {
    name: "₹ Indian Rupee (INR)",
    sortName: "Indian Rupee",
    symbol: "₹",
    value: "INR"
  }, {
    name: "Rp Indonesian Rupiah (IDR)",
    sortName: "Indonesian Rupiah",
    symbol: "Rp",
    value: "IDR"
  }, {
    name: "﷼ Iranian Rial (IRR)",
    sortName: "Iranian Rial",
    symbol: "﷼",
    value: "IRR"
  }, {
    name: "د.ع Iraqi Dinar (IQD)",
    sortName: "Iraqi Dinar",
    symbol: "د.ع",
    value: "IQD"
  }, {
    name: "₪ Israeli New Sheqel (ILS)",
    sortName: "Israeli New Sheqel",
    symbol: "₪",
    value: "ILS"
  }, {
    name: "L,£ Italian Lira (ITL)",
    sortName: "Italian Lira",
    symbol: "L,£",
    value: "ITL"
  }, {
    name: "J$ Jamaican Dollar (JMD)",
    sortName: "Jamaican Dollar",
    symbol: "J$",
    value: "JMD"
  }, {
    name: "¥ Japanese Yen (JPY)",
    sortName: "Japanese Yen",
    symbol: "¥",
    value: "JPY"
  }, {
    name: "ا.د Jordanian Dinar (JOD)",
    sortName: "Jordanian Dinar",
    symbol: "ا.د",
    value: "JOD"
  }, {
    name: "лв Kazakhstani Tenge (KZT)",
    sortName: "Kazakhstani Tenge",
    symbol: "лв",
    value: "KZT"
  }, {
    name: "KSh Kenyan Shilling (KES)",
    sortName: "Kenyan Shilling",
    symbol: "KSh",
    value: "KES"
  }, {
    name: "ك.د Kuwaiti Dinar (KWD)",
    sortName: "Kuwaiti Dinar",
    symbol: "ك.د",
    value: "KWD"
  }, {
    name: "лв Kyrgystani Som (KGS)",
    sortName: "Kyrgystani Som",
    symbol: "лв",
    value: "KGS"
  }, {
    name: "₭ Laotian Kip (LAK)",
    sortName: "Laotian Kip",
    symbol: "₭",
    value: "LAK"
  }, {
    name: "Ls Latvian Lats (LVL)",
    sortName: "Latvian Lats",
    symbol: "Ls",
    value: "LVL"
  }, {
    name: "£ Lebanese Pound (LBP)",
    sortName: "Lebanese Pound",
    symbol: "£",
    value: "LBP"
  }, {
    name: "L Lesotho Loti (LSL)",
    sortName: "Lesotho Loti",
    symbol: "L",
    value: "LSL"
  }, {
    name: "$ Liberian Dollar (LRD)",
    sortName: "Liberian Dollar",
    symbol: "$",
    value: "LRD"
  }, {
    name: "د.ل Libyan Dinar (LYD)",
    sortName: "Libyan Dinar",
    symbol: "د.ل",
    value: "LYD"
  }, {
    name: "Lt Lithuanian Litas (LTL)",
    sortName: "Lithuanian Litas",
    symbol: "Lt",
    value: "LTL"
  }, {
    name: "$ Macanese Pataca (MOP)",
    sortName: "Macanese Pataca",
    symbol: "$",
    value: "MOP"
  }, {
    name: "ден Macedonian Denar (MKD)",
    sortName: "Macedonian Denar",
    symbol: "ден",
    value: "MKD"
  }, {
    name: "Ar Malagasy Ariary (MGA)",
    sortName: "Malagasy Ariary",
    symbol: "Ar",
    value: "MGA"
  }, {
    name: "MK Malawian Kwacha (MWK)",
    sortName: "Malawian Kwacha",
    symbol: "MK",
    value: "MWK"
  }, {
    name: "RM Malaysian Ringgit (MYR)",
    sortName: "Malaysian Ringgit",
    symbol: "RM",
    value: "MYR"
  }, {
    name: "Rf Maldivian Rufiyaa (MVR)",
    sortName: "Maldivian Rufiyaa",
    symbol: "Rf",
    value: "MVR"
  }, {
    name: "MRU Mauritanian Ouguiya (MRO)",
    sortName: "Mauritanian Ouguiya",
    symbol: "MRU",
    value: "MRO"
  }, {
    name: "₨ Mauritian Rupee (MUR)",
    sortName: "Mauritian Rupee",
    symbol: "₨",
    value: "MUR"
  }, {
    name: "$ Mexican Peso (MXN)",
    sortName: "Mexican Peso",
    symbol: "$",
    value: "MXN"
  }, {
    name: "L Moldovan Leu (MDL)",
    sortName: "Moldovan Leu",
    symbol: "L",
    value: "MDL"
  }, {
    name: "₮ Mongolian Tugrik (MNT)",
    sortName: "Mongolian Tugrik",
    symbol: "₮",
    value: "MNT"
  }, {
    name: "MAD Moroccan Dirham (MAD)",
    sortName: "Moroccan Dirham",
    symbol: "MAD",
    value: "MAD"
  }, {
    name: "MT Mozambican Metical (MZM)",
    sortName: "Mozambican Metical",
    symbol: "MT",
    value: "MZM"
  }, {
    name: "K Myanmar Kyat (MMK)",
    sortName: "Myanmar Kyat",
    symbol: "K",
    value: "MMK"
  }, {
    name: "$ Namibian Dollar (NAD)",
    sortName: "Namibian Dollar",
    symbol: "$",
    value: "NAD"
  }, {
    name: "₨ Nepalese Rupee (NPR)",
    sortName: "Nepalese Rupee",
    symbol: "₨",
    value: "NPR"
  }, {
    name: "ƒ Netherlands Antillean Guilder (ANG)",
    sortName: "Netherlands Antillean Guilder",
    symbol: "ƒ",
    value: "ANG"
  }, {
    name: "$ New Taiwan Dollar (TWD)",
    sortName: "New Taiwan Dollar",
    symbol: "$",
    value: "TWD"
  }, {
    name: "$ New Zealand Dollar (NZD)",
    sortName: "New Zealand Dollar",
    symbol: "$",
    value: "NZD"
  }, {
    name: "C$ Nicaraguan CÃ³rdoba (NIO)",
    sortName: "Nicaraguan CÃ³rdoba",
    symbol: "C$",
    value: "NIO"
  }, {
    name: "₦ Nigerian Naira (NGN)",
    sortName: "Nigerian Naira",
    symbol: "₦",
    value: "NGN"
  }, {
    name: "₩ North Korean Won (KPW)",
    sortName: "North Korean Won",
    symbol: "₩",
    value: "KPW"
  }, {
    name: "kr Norwegian Krone (NOK)",
    sortName: "Norwegian Krone",
    symbol: "kr",
    value: "NOK"
  }, {
    name: ".ع.ر Omani Rial (OMR)",
    sortName: "Omani Rial",
    symbol: ".ع.ر",
    value: "OMR"
  }, {
    name: "₨ Pakistani Rupee (PKR)",
    sortName: "Pakistani Rupee",
    symbol: "₨",
    value: "PKR"
  }, {
    name: "B/. Panamanian Balboa (PAB)",
    sortName: "Panamanian Balboa",
    symbol: "B/.",
    value: "PAB"
  }, {
    name: "K Papua New Guinean Kina (PGK)",
    sortName: "Papua New Guinean Kina",
    symbol: "K",
    value: "PGK"
  }, {
    name: "₲ Paraguayan Guarani (PYG)",
    sortName: "Paraguayan Guarani",
    symbol: "₲",
    value: "PYG"
  }, {
    name: "S/. Peruvian Nuevo Sol (PEN)",
    sortName: "Peruvian Nuevo Sol",
    symbol: "S/.",
    value: "PEN"
  }, {
    name: "₱ Philippine Peso (PHP)",
    sortName: "Philippine Peso",
    symbol: "₱",
    value: "PHP"
  }, {
    name: "zł Polish Zloty (PLN)",
    sortName: "Polish Zloty",
    symbol: "zł",
    value: "PLN"
  }, {
    name: "ق.ر Qatari Rial (QAR)",
    sortName: "Qatari Rial",
    symbol: "ق.ر",
    value: "QAR"
  }, {
    name: "lei Romanian Leu (RON)",
    sortName: "Romanian Leu",
    symbol: "lei",
    value: "RON"
  }, {
    name: "₽ Russian Ruble (RUB)",
    sortName: "Russian Ruble",
    symbol: "₽",
    value: "RUB"
  }, {
    name: "FRw Rwandan Franc (RWF)",
    sortName: "Rwandan Franc",
    symbol: "FRw",
    value: "RWF"
  }, {
    name: "₡ Salvadoran ColÃ³n (SVC)",
    sortName: "Salvadoran ColÃ³n",
    symbol: "₡",
    value: "SVC"
  }, {
    name: "SAT Samoan Tala (WST)",
    sortName: "Samoan Tala",
    symbol: "SAT",
    value: "WST"
  }, {
    name: "﷼ Saudi Riyal (SAR)",
    sortName: "Saudi Riyal",
    symbol: "﷼",
    value: "SAR"
  }, {
    name: "din Serbian Dinar (RSD)",
    sortName: "Serbian Dinar",
    symbol: "din",
    value: "RSD"
  }, {
    name: "SRe Seychellois Rupee (SCR)",
    sortName: "Seychellois Rupee",
    symbol: "SRe",
    value: "SCR"
  }, {
    name: "Le Sierra Leonean Leone (SLL)",
    sortName: "Sierra Leonean Leone",
    symbol: "Le",
    value: "SLL"
  }, {
    name: "$ Singapore Dollar (SGD)",
    sortName: "Singapore Dollar",
    symbol: "$",
    value: "SGD"
  }, {
    name: "Sk Slovak Koruna (SKK)",
    sortName: "Slovak Koruna",
    symbol: "Sk",
    value: "SKK"
  }, {
    name: "Si$ Solomon Islands Dollar (SBD)",
    sortName: "Solomon Islands Dollar",
    symbol: "Si$",
    value: "SBD"
  }, {
    name: "Sh.so. Somali Shilling (SOS)",
    sortName: "Somali Shilling",
    symbol: "Sh.so.",
    value: "SOS"
  }, {
    name: "R South African Rand (ZAR)",
    sortName: "South African Rand",
    symbol: "R",
    value: "ZAR"
  }, {
    name: "₩ South Korean Won (KRW)",
    sortName: "South Korean Won",
    symbol: "₩",
    value: "KRW"
  }, {
    name: "SDR Special Drawing Rights (XDR)",
    sortName: "Special Drawing Rights",
    symbol: "SDR",
    value: "XDR"
  }, {
    name: "Rs Sri Lankan Rupee (LKR)",
    sortName: "Sri Lankan Rupee",
    symbol: "Rs",
    value: "LKR"
  }, {
    name: "£ St. Helena Pound (SHP)",
    sortName: "St. Helena Pound",
    symbol: "£",
    value: "SHP"
  }, {
    name: ".س.ج Sudanese Pound (SDG)",
    sortName: "Sudanese Pound",
    symbol: ".س.ج",
    value: "SDG"
  }, {
    name: "$ Surinamese Dollar (SRD)",
    sortName: "Surinamese Dollar",
    symbol: "$",
    value: "SRD"
  }, {
    name: "E Swazi Lilangeni (SZL)",
    sortName: "Swazi Lilangeni",
    symbol: "E",
    value: "SZL"
  }, {
    name: "kr Swedish Krona (SEK)",
    sortName: "Swedish Krona",
    symbol: "kr",
    value: "SEK"
  }, {
    name: "CHf Swiss Franc (CHF)",
    sortName: "Swiss Franc",
    symbol: "CHf",
    value: "CHF"
  }, {
    name: "LS Syrian Pound (SYP)",
    sortName: "Syrian Pound",
    symbol: "LS",
    value: "SYP"
  }, {
    name: "Db São Tomé and Príncipe Dobra (STD)",
    sortName: "São Tomé and Príncipe Dobra",
    symbol: "Db",
    value: "STD"
  }, {
    name: "SM Tajikistani Somoni (TJS)",
    sortName: "Tajikistani Somoni",
    symbol: "SM",
    value: "TJS"
  }, {
    name: "TSh Tanzanian Shilling (TZS)",
    sortName: "Tanzanian Shilling",
    symbol: "TSh",
    value: "TZS"
  }, {
    name: "฿ Thai Baht (THB)",
    sortName: "Thai Baht",
    symbol: "฿",
    value: "THB"
  }, {
    name: "$ Tongan Pa'anga (TOP)",
    sortName: "Tongan Pa'anga",
    symbol: "$",
    value: "TOP"
  }, {
    name: "$ Trinidad &amp; Tobago Dollar (TTD)",
    sortName: "Trinidad &amp; Tobago Dollar",
    symbol: "$",
    value: "TTD"
  }, {
    name: "ت.د Tunisian Dinar (TND)",
    sortName: "Tunisian Dinar",
    symbol: "ت.د",
    value: "TND"
  }, {
    name: "₺ Turkish Lira (TRY)",
    sortName: "Turkish Lira",
    symbol: "₺",
    value: "TRY"
  }, {
    name: "T Turkmenistani Manat (TMT)",
    sortName: "Turkmenistani Manat",
    symbol: "T",
    value: "TMT"
  }, {
    name: "USh Ugandan Shilling (UGX)",
    sortName: "Ugandan Shilling",
    symbol: "USh",
    value: "UGX"
  }, {
    name: "₴ Ukrainian Hryvnia (UAH)",
    sortName: "Ukrainian Hryvnia",
    symbol: "₴",
    value: "UAH"
  }, {
    name: "إ.د United Arab Emirates Dirham (AED)",
    sortName: "United Arab Emirates Dirham",
    symbol: "إ.د",
    value: "AED"
  }, {
    name: "$ Uruguayan Peso (UYU)",
    sortName: "Uruguayan Peso",
    symbol: "$",
    value: "UYU"
  }, {
    name: "$ US Dollar (USD)",
    sortName: "US Dollar",
    symbol: "$",
    value: "USD"
  }, {
    name: "лв Uzbekistan Som (UZS)",
    sortName: "Uzbekistan Som",
    symbol: "лв",
    value: "UZS"
  }, {
    name: "VT Vanuatu Vatu (VUV)",
    sortName: "Vanuatu Vatu",
    symbol: "VT",
    value: "VUV"
  }, {
    name: "Bs Venezuelan BolÃvar (VEF)",
    sortName: "Venezuelan BolÃvar",
    symbol: "Bs",
    value: "VEF"
  }, {
    name: "₫ Vietnamese Dong (VND)",
    sortName: "Vietnamese Dong",
    symbol: "₫",
    value: "VND"
  }, {
    name: "﷼ Yemeni Rial (YER)",
    sortName: "Yemeni Rial",
    symbol: "﷼",
    value: "YER"
  }, {
    name: "ZK Zambian Kwacha (ZMK)",
    sortName: "Zambian Kwacha",
    symbol: "ZK",
    value: "ZMK"
  }
  ]

export const ERROR_OBJECTS: Object = {
  required: '{{field}} is required',
  email: 'Please enter a valid email',
  notEquivalent: 'New password and confirm password does not match.',
  min: 'Please enter value more than {{value}}',
  max: 'Please enter value less than {{value}}',
  minlength: 'Please enter value with min length {{value}}',
  maxlength: 'Please enter value with max length {{value}}',
  pattern: 'Please enter valid value',
  totalHundred: 'The sum of Advance, Withhold, PR Fee must be equals to 100%',
  totalPrice: 'The sum of the split amounts must be equal to the price.',
  // website: 'Please enter a valid website URL',
  website: 'Website must be a valid URL including protocol identifier (i.e., http:// or https://)',
  ccNumber: 'Please enter valid card number',
  notZero: 'Please enter value greater than 0',
  dateDiff: 'Please select correct date range',
  isValidDate: 'Please select correct date',
  validPassword: 'Password must contain 8 characters min, 1 upper, 1 number and 1 special character',
  zipCode: 'Please enter a valid 5-digit zip code',
  taxIdError: 'Tax ID must be a numeric value',
  onlyNumber: '{{value}} must be a numeric value',
  phoneError: 'Please enter a valid 10-digit phone number',
  correctDate: 'Please select correct date',
};

export const CUSTOM_ERRORS = {
  timeDiff: 'Please select correct time range',
  forgotPasswordError: 'We can\'t find your email.'
}

export const validations: any = {
  // uri: '^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?$',
  uri: '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$',
  password: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")  //One Uppercase,One Lowercase,One Numeric,One Special Character,Minimum 8 Character
};
