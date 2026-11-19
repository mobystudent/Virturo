const countries = [
  {
    county: 'Afghanistan',
    code: '93',
    isoCode: 'AF',
  },
  {
    county: 'Albania',
    code: '355',
    isoCode: 'AL',
  },
  {
    county: 'Algeria',
    code: '213',
    isoCode: 'DZ',
  },
  {
    county: 'American Samoa',
    code: '1-684',
    isoCode: 'AS',
  },
  {
    county: 'Andorra',
    code: '376',
    isoCode: 'AD',
  },
  {
    county: 'Angola',
    code: '244',
    isoCode: 'AO',
  },
  {
    county: 'Anguilla',
    code: '1-264',
    isoCode: 'AI',
  },
  {
    county: 'Antarctica',
    code: '672',
    isoCode: 'AQ',
  },
  {
    county: 'Antigua and Barbuda',
    code: '1-268',
    isoCode: 'AG',
  },
  {
    county: 'Argentina',
    code: '54',
    isoCode: 'AR',
  },
  {
    county: 'Armenia',
    code: '374',
    isoCode: 'AM',
  },
  {
    county: 'Aruba',
    code: '297',
    isoCode: 'AW',
  },
  {
    county: 'Australia',
    code: '61',
    isoCode: 'AU',
  },
  {
    county: 'Austria',
    code: '43',
    isoCode: 'AT',
  },
  {
    county: 'Azerbaijan',
    code: '994',
    isoCode: 'AZ',
  },
  {
    county: 'Bahamas',
    code: '1-242',
    isoCode: 'BS',
  },
  {
    county: 'Bahrain',
    code: '973',
    isoCode: 'BH',
  },
  {
    county: 'Bangladesh',
    code: '880',
    isoCode: 'BD',
  },
  {
    county: 'Barbados',
    code: '1-246',
    isoCode: 'BB',
  },
  {
    county: 'Belarus',
    code: '375',
    isoCode: 'BY',
  },
  {
    county: 'Belgium',
    code: '32',
    isoCode: 'BE',
  },
  {
    county: 'Belize',
    code: '501',
    isoCode: 'BZ',
  },
  {
    county: 'Benin',
    code: '229',
    isoCode: 'BJ',
  },
  {
    county: 'Bermuda',
    code: '1-441',
    isoCode: 'BM',
  },
  {
    county: 'Bhutan',
    code: '975',
    isoCode: 'BT',
  },
  {
    county: 'Bolivia',
    code: '591',
    isoCode: 'BO',
  },
  {
    county: 'Bosnia and Herzegovina',
    code: '387',
    isoCode: 'BA',
  },
  {
    county: 'Botswana',
    code: '267',
    isoCode: 'BW',
  },
  {
    county: 'Brazil',
    code: '55',
    isoCode: 'BR',
  },
  {
    county: 'British Indian Ocean Territory',
    code: '246',
    isoCode: 'IO',
  },
  {
    county: 'British Virgin Islands',
    code: '1-284',
    isoCode: 'VG',
  },
  {
    county: 'Brunei',
    code: '673',
    isoCode: 'BN',
  },
  {
    county: 'Bulgaria',
    code: '359',
    isoCode: 'BG',
  },
  {
    county: 'Burkina Faso',
    code: '226',
    isoCode: 'BF',
  },
  {
    county: 'Burundi',
    code: '257',
    isoCode: 'BI',
  },
  {
    county: 'Cambodia',
    code: '855',
    isoCode: 'KH',
  },
  {
    county: 'Cameroon',
    code: '237',
    isoCode: 'CM',
  },
  {
    county: 'Canada',
    code: '1',
    isoCode: 'CA',
  },
  {
    county: 'Cape Verde',
    code: '238',
    isoCode: 'CV',
  },
  {
    county: 'Cayman Islands',
    code: '1-345',
    isoCode: 'KY',
  },
  {
    county: 'Central African Republic',
    code: '236',
    isoCode: 'CF',
  },
  {
    county: 'Chad',
    code: '235',
    isoCode: 'TD',
  },
  {
    county: 'Chile',
    code: '56',
    isoCode: 'CL',
  },
  {
    county: 'China',
    code: '86',
    isoCode: 'CN',
  },
  {
    county: 'Christmas Island',
    code: '61',
    isoCode: 'CX',
  },
  {
    county: 'Cocos Islands',
    code: '61',
    isoCode: 'CC',
  },
  {
    county: 'Colombia',
    code: '57',
    isoCode: 'CO',
  },
  {
    county: 'Comoros',
    code: '269',
    isoCode: 'KM',
  },
  {
    county: 'Cook Islands',
    code: '682',
    isoCode: 'CK',
  },
  {
    county: 'Costa Rica',
    code: '506',
    isoCode: 'CR',
  },
  {
    county: 'Croatia',
    code: '385',
    isoCode: 'HR',
  },
  {
    county: 'Cuba',
    code: '53',
    isoCode: 'CU',
  },
  {
    county: 'Curacao',
    code: '599',
    isoCode: 'CW',
  },
  {
    county: 'Cyprus',
    code: '357',
    isoCode: 'CY',
  },
  {
    county: 'Czech Republic',
    code: '420',
    isoCode: 'CZ',
  },
  {
    county: 'Democratic Republic of the Congo',
    code: '243',
    isoCode: 'CD',
  },
  {
    county: 'Denmark',
    code: '45',
    isoCode: 'DK',
  },
  {
    county: 'Djibouti',
    code: '253',
    isoCode: 'DJ',
  },
  {
    county: 'Dominica',
    code: '1-767',
    isoCode: 'DM',
  },
  {
    county: 'Dominican Republic',
    code: '1-809, 1-829, 1-849',
    isoCode: 'DO',
  },
  {
    county: 'East Timor',
    code: '670',
    isoCode: 'TL',
  },
  {
    county: 'Ecuador',
    code: '593',
    isoCode: 'EC',
  },
  {
    county: 'Egypt',
    code: '20',
    isoCode: 'EG',
  },
  {
    county: 'El Salvador',
    code: '503',
    isoCode: 'SV',
  },
  {
    county: 'Equatorial Guinea',
    code: '240',
    isoCode: 'GQ',
  },
  {
    county: 'Eritrea',
    code: '291',
    isoCode: 'ER',
  },
  {
    county: 'Estonia',
    code: '372',
    isoCode: 'EE',
  },
  {
    county: 'Ethiopia',
    code: '251',
    isoCode: 'ET',
  },
  {
    county: 'Falkland Islands',
    code: '500',
    isoCode: 'FK',
  },
  {
    county: 'Faroe Islands',
    code: '298',
    isoCode: 'FO',
  },
  {
    county: 'Fiji',
    code: '679',
    isoCode: 'FJ',
  },
  {
    county: 'Finland',
    code: '358',
    isoCode: 'FI',
  },
  {
    county: 'France',
    code: '33',
    isoCode: 'FR',
  },
  {
    county: 'French Polynesia',
    code: '689',
    isoCode: 'PF',
  },
  {
    county: 'Gabon',
    code: '241',
    isoCode: 'GA',
  },
  {
    county: 'Gambia',
    code: '220',
    isoCode: 'GM',
  },
  {
    county: 'Georgia',
    code: '995',
    isoCode: 'GE',
  },
  {
    county: 'Germany',
    code: '49',
    isoCode: 'DE',
  },
  {
    county: 'Ghana',
    code: '233',
    isoCode: 'GH',
  },
  {
    county: 'Gibraltar',
    code: '350',
    isoCode: 'GI',
  },
  {
    county: 'Greece',
    code: '30',
    isoCode: 'GR',
  },
  {
    county: 'Greenland',
    code: '299',
    isoCode: 'GL',
  },
  {
    county: 'Grenada',
    code: '1-473',
    isoCode: 'GD',
  },
  {
    county: 'Guam',
    code: '1-671',
    isoCode: 'GU',
  },
  {
    county: 'Guatemala',
    code: '502',
    isoCode: 'GT',
  },
  {
    county: 'Guernsey',
    code: '44-1481',
    isoCode: 'GG',
  },
  {
    county: 'Guinea',
    code: '224',
    isoCode: 'GN',
  },
  {
    county: 'Guinea-Bissau',
    code: '245',
    isoCode: 'GW',
  },
  {
    county: 'Guyana',
    code: '592',
    isoCode: 'GY',
  },
  {
    county: 'Haiti',
    code: '509',
    isoCode: 'HT',
  },
  {
    county: 'Honduras',
    code: '504',
    isoCode: 'HN',
  },
  {
    county: 'Hong Kong',
    code: '852',
    isoCode: 'HK',
  },
  {
    county: 'Hungary',
    code: '36',
    isoCode: 'HU',
  },
  {
    county: 'Iceland',
    code: '354',
    isoCode: 'IS',
  },
  {
    county: 'India',
    code: '91',
    isoCode: 'IN',
  },
  {
    county: 'Indonesia',
    code: '62',
    isoCode: 'ID',
  },
  {
    county: 'Iran',
    code: '98',
    isoCode: 'IR',
  },
  {
    county: 'Iraq',
    code: '964',
    isoCode: 'IQ',
  },
  {
    county: 'Ireland',
    code: '353',
    isoCode: 'IE',
  },
  {
    county: 'Isle of Man',
    code: '44-1624',
    isoCode: 'IM',
  },
  {
    county: 'Israel',
    code: '972',
    isoCode: 'IL',
  },
  {
    county: 'Italy',
    code: '39',
    isoCode: 'IT',
  },
  {
    county: 'Ivory Coast',
    code: '225',
    isoCode: 'CI',
  },
  {
    county: 'Jamaica',
    code: '1-876',
    isoCode: 'JM',
  },
  {
    county: 'Japan',
    code: '81',
    isoCode: 'JP',
  },
  {
    county: 'Jersey',
    code: '44-1534',
    isoCode: 'JE',
  },
  {
    county: 'Jordan',
    code: '962',
    isoCode: 'JO',
  },
  {
    county: 'Kazakhstan',
    code: '7',
    isoCode: 'KZ',
  },
  {
    county: 'Kenya',
    code: '254',
    isoCode: 'KE',
  },
  {
    county: 'Kiribati',
    code: '686',
    isoCode: 'KI',
  },
  {
    county: 'Kosovo',
    code: '383',
    isoCode: 'XK',
  },
  {
    county: 'Kuwait',
    code: '965',
    isoCode: 'KW',
  },
  {
    county: 'Kyrgyzstan',
    code: '996',
    isoCode: 'KG',
  },
  {
    county: 'Laos',
    code: '856',
    isoCode: 'LA',
  },
  {
    county: 'Latvia',
    code: '371',
    isoCode: 'LV',
  },
  {
    county: 'Lebanon',
    code: '961',
    isoCode: 'LB',
  },
  {
    county: 'Lesotho',
    code: '266',
    isoCode: 'LS',
  },
  {
    county: 'Liberia',
    code: '231',
    isoCode: 'LR',
  },
  {
    county: 'Libya',
    code: '218',
    isoCode: 'LY',
  },
  {
    county: 'Liechtenstein',
    code: '423',
    isoCode: 'LI',
  },
  {
    county: 'Lithuania',
    code: '370',
    isoCode: 'LT',
  },
  {
    county: 'Luxembourg',
    code: '352',
    isoCode: 'LU',
  },
  {
    county: 'Macau',
    code: '853',
    isoCode: 'MO',
  },
  {
    county: 'Macedonia',
    code: '389',
    isoCode: 'MK',
  },
  {
    county: 'Madagascar',
    code: '261',
    isoCode: 'MG',
  },
  {
    county: 'Malawi',
    code: '265',
    isoCode: 'MW',
  },
  {
    county: 'Malaysia',
    code: '60',
    isoCode: 'MY',
  },
  {
    county: 'Maldives',
    code: '960',
    isoCode: 'MV',
  },
  {
    county: 'Mali',
    code: '223',
    isoCode: 'ML',
  },
  {
    county: 'Malta',
    code: '356',
    isoCode: 'MT',
  },
  {
    county: 'Marshall Islands',
    code: '692',
    isoCode: 'MH',
  },
  {
    county: 'Mauritania',
    code: '222',
    isoCode: 'MR',
  },
  {
    county: 'Mauritius',
    code: '230',
    isoCode: 'MU',
  },
  {
    county: 'Mayotte',
    code: '262',
    isoCode: 'YT',
  },
  {
    county: 'Mexico',
    code: '52',
    isoCode: 'MX',
  },
  {
    county: 'Micronesia',
    code: '691',
    isoCode: 'FM',
  },
  {
    county: 'Moldova',
    code: '373',
    isoCode: 'MD',
  },
  {
    county: 'Monaco',
    code: '377',
    isoCode: 'MC',
  },
  {
    county: 'Mongolia',
    code: '976',
    isoCode: 'MN',
  },
  {
    county: 'Montenegro',
    code: '382',
    isoCode: 'ME',
  },
  {
    county: 'Montserrat',
    code: '1-664',
    isoCode: 'MS',
  },
  {
    county: 'Morocco',
    code: '212',
    isoCode: 'MA',
  },
  {
    county: 'Mozambique',
    code: '258',
    isoCode: 'MZ',
  },
  {
    county: 'Myanmar',
    code: '95',
    isoCode: 'MM',
  },
  {
    county: 'Namibia',
    code: '264',
    isoCode: 'NA',
  },
  {
    county: 'Nauru',
    code: '674',
    isoCode: 'NR',
  },
  {
    county: 'Nepal',
    code: '977',
    isoCode: 'NP',
  },
  {
    county: 'Netherlands',
    code: '31',
    isoCode: 'NL',
  },
  {
    county: 'New Caledonia',
    code: '687',
    isoCode: 'NC',
  },
  {
    county: 'New Zealand',
    code: '64',
    isoCode: 'NZ',
  },
  {
    county: 'Nicaragua',
    code: '505',
    isoCode: 'NI',
  },
  {
    county: 'Niger',
    code: '227',
    isoCode: 'NE',
  },
  {
    county: 'Nigeria',
    code: '234',
    isoCode: 'NG',
  },
  {
    county: 'Niue',
    code: '683',
    isoCode: 'NU',
  },
  {
    county: 'North Korea',
    code: '850',
    isoCode: 'KP',
  },
  {
    county: 'Northern Mariana Islands',
    code: '1-670',
    isoCode: 'MP',
  },
  {
    county: 'Norway',
    code: '47',
    isoCode: 'NO',
  },
  {
    county: 'Oman',
    code: '968',
    isoCode: 'OM',
  },
  {
    county: 'Pakistan',
    code: '92',
    isoCode: 'PK',
  },
  {
    county: 'Palau',
    code: '680',
    isoCode: 'PW',
  },
  {
    county: 'Palestine',
    code: '970',
    isoCode: 'PS',
  },
  {
    county: 'Panama',
    code: '507',
    isoCode: 'PA',
  },
  {
    county: 'Papua New Guinea',
    code: '675',
    isoCode: 'PG',
  },
  {
    county: 'Paraguay',
    code: '595',
    isoCode: 'PY',
  },
  {
    county: 'Peru',
    code: '51',
    isoCode: 'PE',
  },
  {
    county: 'Philippines',
    code: '63',
    isoCode: 'PH',
  },
  {
    county: 'Pitcairn',
    code: '64',
    isoCode: 'PN',
  },
  {
    county: 'Poland',
    code: '48',
    isoCode: 'PL',
  },
  {
    county: 'Portugal',
    code: '351',
    isoCode: 'PT',
  },
  {
    county: 'Puerto Rico',
    code: '1-787, 1-939',
    isoCode: 'PR',
  },
  {
    county: 'Qatar',
    code: '974',
    isoCode: 'QA',
  },
  {
    county: 'Republic of the Congo',
    code: '242',
    isoCode: 'CG',
  },
  {
    county: 'Reunion',
    code: '262',
    isoCode: 'RE',
  },
  {
    county: 'Romania',
    code: '40',
    isoCode: 'RO',
  },
  {
    county: 'Russia',
    code: '7',
    isoCode: 'RU',
  },
  {
    county: 'Rwanda',
    code: '250',
    isoCode: 'RW',
  },
  {
    county: 'Saint Barthelemy',
    code: '590',
    isoCode: 'BL',
  },
  {
    county: 'Saint Helena',
    code: '290',
    isoCode: 'SH',
  },
  {
    county: 'Saint Kitts and Nevis',
    code: '1-869',
    isoCode: 'KN',
  },
  {
    county: 'Saint Lucia',
    code: '1-758',
    isoCode: 'LC',
  },
  {
    county: 'Saint Martin',
    code: '590',
    isoCode: 'MF',
  },
  {
    county: 'Saint Pierre and Miquelon',
    code: '508',
    isoCode: 'PM',
  },
  {
    county: 'Saint Vincent and the Grenadines',
    code: '1-784',
    isoCode: 'VC',
  },
  {
    county: 'Samoa',
    code: '685',
    isoCode: 'WS',
  },
  {
    county: 'San Marino',
    code: '378',
    isoCode: 'SM',
  },
  {
    county: 'Sao Tome and Principe',
    code: '239',
    isoCode: 'ST',
  },
  {
    county: 'Saudi Arabia',
    code: '966',
    isoCode: 'SA',
  },
  {
    county: 'Senegal',
    code: '221',
    isoCode: 'SN',
  },
  {
    county: 'Serbia',
    code: '381',
    isoCode: 'RS',
  },
  {
    county: 'Seychelles',
    code: '248',
    isoCode: 'SC',
  },
  {
    county: 'Sierra Leone',
    code: '232',
    isoCode: 'SL',
  },
  {
    county: 'Singapore',
    code: '65',
    isoCode: 'SG',
  },
  {
    county: 'Sint Maarten',
    code: '1-721',
    isoCode: 'SX',
  },
  {
    county: 'Slovakia',
    code: '421',
    isoCode: 'SK',
  },
  {
    county: 'Slovenia',
    code: '386',
    isoCode: 'SI',
  },
  {
    county: 'Solomon Islands',
    code: '677',
    isoCode: 'SB',
  },
  {
    county: 'Somalia',
    code: '252',
    isoCode: 'SO',
  },
  {
    county: 'South Africa',
    code: '27',
    isoCode: 'ZA',
  },
  {
    county: 'South Korea',
    code: '82',
    isoCode: 'KR',
  },
  {
    county: 'South Sudan',
    code: '211',
    isoCode: 'SS',
  },
  {
    county: 'Spain',
    code: '34',
    isoCode: 'ES',
  },
  {
    county: 'Sri Lanka',
    code: '94',
    isoCode: 'LK',
  },
  {
    county: 'Sudan',
    code: '249',
    isoCode: 'SD',
  },
  {
    county: 'Suriname',
    code: '597',
    isoCode: 'SR',
  },
  {
    county: 'Svalbard and Jan Mayen',
    code: '47',
    isoCode: 'SJ',
  },
  {
    county: 'Swaziland',
    code: '268',
    isoCode: 'SZ',
  },
  {
    county: 'Sweden',
    code: '46',
    isoCode: 'SE',
  },
  {
    county: 'Switzerland',
    code: '41',
    isoCode: 'CH',
  },
  {
    county: 'Syria',
    code: '963',
    isoCode: 'SY',
  },
  {
    county: 'Taiwan',
    code: '886',
    isoCode: 'TW',
  },
  {
    county: 'Tajikistan',
    code: '992',
    isoCode: 'TJ',
  },
  {
    county: 'Tanzania',
    code: '255',
    isoCode: 'TZ',
  },
  {
    county: 'Thailand',
    code: '66',
    isoCode: 'TH',
  },
  {
    county: 'Togo',
    code: '228',
    isoCode: 'TG',
  },
  {
    county: 'Tokelau',
    code: '690',
    isoCode: 'TK',
  },
  {
    county: 'Tonga',
    code: '676',
    isoCode: 'TO',
  },
  {
    county: 'Trinidad and Tobago',
    code: '1-868',
    isoCode: 'TT',
  },
  {
    county: 'Tunisia',
    code: '216',
    isoCode: 'TN',
  },
  {
    county: 'Turkey',
    code: '90',
    isoCode: 'TR',
  },
  {
    county: 'Turkmenistan',
    code: '993',
    isoCode: 'TM',
  },
  {
    county: 'Turks and Caicos Islands',
    code: '1-649',
    isoCode: 'TC',
  },
  {
    county: 'Tuvalu',
    code: '688',
    isoCode: 'TV',
  },
  {
    county: 'U.S. Virgin Islands',
    code: '1-340',
    isoCode: 'VI',
  },
  {
    county: 'Uganda',
    code: '256',
    isoCode: 'UG',
  },
  {
    county: 'Ukraine',
    code: '380',
    isoCode: 'UA',
  },
  {
    county: 'United Arab Emirates',
    code: '971',
    isoCode: 'AE',
  },
  {
    county: 'United Kingdom',
    code: '44',
    isoCode: 'GB',
  },
  {
    county: 'United States',
    code: '1',
    isoCode: 'US',
  },
  {
    county: 'Uruguay',
    code: '598',
    isoCode: 'UY',
  },
  {
    county: 'Uzbekistan',
    code: '998',
    isoCode: 'UZ',
  },
  {
    county: 'Vanuatu',
    code: '678',
    isoCode: 'VU',
  },
  {
    county: 'Vatican',
    code: '379',
    isoCode: 'VA',
  },
  {
    county: 'Venezuela',
    code: '58',
    isoCode: 'VE',
  },
  {
    county: 'Vietnam',
    code: '84',
    isoCode: 'VN',
  },
  {
    county: 'Wallis and Futuna',
    code: '681',
    isoCode: 'WF',
  },
  {
    county: 'Western Sahara',
    code: '212',
    isoCode: 'EH',
  },
  {
    county: 'Yemen',
    code: '967',
    isoCode: 'YE',
  },
  {
    county: 'Zambia',
    code: '260',
    isoCode: 'ZM',
  },
  {
    county: 'Zimbabwe',
    code: '263',
    isoCode: 'ZW',
  },
];
export default countries;
