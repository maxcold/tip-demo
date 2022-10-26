/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const indicators = [
  {
    '@timestamp': '2017-08-28T14:24:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"- Xchecked via VT: a683494fc0d017fd3b4638f8b84caaaac145cc28bc211bd7361723368b4bb21e","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"5","first_seen":null,"id":"351","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1503930272","to_ids":true,"type":"md5","uuid":"59a427a0-f6f8-4178-9e7d-dfd702de0b81","value":"f2679bdabe46e10edc6352fff3c829bc"},"EventReport":[],"Galaxy":[{"GalaxyCluster":[{"authors":["https://docs.google.com/spreadsheets/d/1TWS238xacAto-fLKh1n5uTsdijWdCEsGIM0Y0Hvmc5g/pubhtml","http://pastebin.com/raw/GHgpWjar","MISP Project"],"collection_uuid":"10cf658b-5d32-4c4b-bb32-61760a640372","description":"It’s directed to English speaking users, therefore is able to infect worldwide.  It is spread using email spam, fake updates, attachments and so on.  It encrypts all your files, including: music, MS Office, Open Office, pictures, videos, shared online files etc.. CrySiS  \\\\u003e Dharma Note: ATTENTION! At the moment, your system is not protected. We can fix it and restore files. To restore the system write to this address: bitcoin143@india.com. CrySiS variant","galaxy_id":"43","id":"6619","local":false,"meta":{"date":["November 2016"],"encryption":["AES + RSA-512"],"extensions":[".dharma",".wallet",".zzzzz",".cmb",".id-BCBEF350.[paymentbtc@firemail.cc].cmb",".bip",".id-BCBEF350.[Beamsell@qq.com].bip",".boost",".[Darknes@420blaze.it].waifu",".brrr",".adobe",".tron",".AUDIT",".cccmn",".fire",".myjob",".[cyberwars@qq.com].war",".risk",".RISK",".bkpx",".[newsantaclaus@aol.com].santa"],"payment-method":["Bitcoin - Email"],"ransomnotes":["all your data has been locked us\\\\nYou want to return?\\\\nwrite email paymentbtc@firemail.cc","All your files have been encrypted!\\\\nAll your files have been encrypted due to a security problem with your PC. If you want to restore them, write us to the e-mail paymentbtc@firemail.cc\\\\nWrite this ID in the title of your message ACBFF130\\\\nIn case of no answer in 24 hours write us to theese e-mails:paymentbtc@firemail.cc\\\\nYou have to pay for decryption in Bitcoins. The price depends on how fast you write to us. After payment we will send you the decryption tool that will decrypt all your files.\\\\nFree decryption as guarantee\\\\nBefore paying you can send us up to 1 file for free decryption. The total size of files must be less than 1Mb (non archived), and files should not contain valuable information. (databases,backups, large excel sheets, etc.)\\\\nHow to obtain Bitcoins\\\\nThe easiest way to buy bitcoins is LocalBitcoins site. You have to register, click \'Buy bitcoins\', and select the seller by payment method and price.\\\\nhttps://localbitcoins.com/buy_bitcoins\\\\nAlso you can find other places to buy Bitcoins and beginners guide here:\\\\nhttp://www.coindesk.com/information/how-can-i-buy-bitcoins/\\\\nAttention!\\\\nDo not rename encrypted files.\\\\nDo not try to decrypt your data using third party software, it may cause permanent data loss.\\\\nDecryption of your files with the help of third parties may cause increased price (they add their fee to our) or you can become a victim of a scam.","All your files have been encrypted!\\\\nAll your files have been encrypted due to a security problem with your PC. If you want to restore them, write us to the e-mail Beamsell@qq.com\\\\nWrite this ID in the title of your message BCBEF350\\\\nIn case of no answer in 24 hours write us to theese e-mails:Beamsell@qq.com\\\\nYou have to pay for decryption in Bitcoins. The price depends on how fast you write to us. After payment we will send you the decryption tool that will decrypt all your files. \\\\nFree decryption as guarantee\\\\nBefore paying you can send us up to 1 file for free decryption. The total size of files must be less than 1Mb (non archived), and files should not contain valuable information. (databases,backups, large excel sheets, etc.) \\\\nHow to obtain Bitcoins\\\\nThe easiest way to buy bitcoins is LocalBitcoins site. You have to register, click \'Buy bitcoins\', and select the seller by payment method and price. \\\\nhttps://localbitcoins.com/buy_bitcoins \\\\nAlso you can find other places to buy Bitcoins and beginners guide here: \\\\nhttp://www.coindesk.com/information/how-can-i-buy-bitcoins/ \\\\nAttention!\\\\nDo not rename encrypted files. \\\\nDo not try to decrypt your data using third party software, it may cause permanent data loss.\\\\nDecryption of your files with the help of third parties may cause increased price (they add their fee to our) or you can become a victim of a scam.","all your data has been locked us\\\\nYou want to return?\\\\nwrite email Beamsell@qq.com"],"ransomnotes-filenames":["README.txt","README.jpg","Info.hta","FILES ENCRYPTED.txt","INFO.hta"],"ransomnotes-refs":["https://www.bleepstatic.com/images/news/ransomware/d/dharma/cmb/hta-ransom-note.jpg","https://pbs.twimg.com/media/Dmof_FiXsAAAvTN.jpg","https://pbs.twimg.com/media/Dmof_FyXsAEJmgQ.jpg","https://pbs.twimg.com/media/DrWqLWzXgAc4SlG.jpg","https://pbs.twimg.com/media/DuEBIMBW0AANnGW.jpg"],"refs":["https://id-ransomware.blogspot.co.il/2016/11/dharma-ransomware.html","https://www.bleepingcomputer.com/news/security/kaspersky-releases-decryptor-for-the-dharma-ransomware/","https://www.bleepingcomputer.com/news/security/new-cmb-dharma-ransomware-variant-released/","https://www.bleepingcomputer.com/news/security/new-bip-dharma-ransomware-variant-released/","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-october-12th-2018-notpetya-gandcrab-and-more/","https://twitter.com/demonslay335/status/1049313390097813504","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-september-14th-2018-kraken-dharma-and-matrix/","https://twitter.com/JakubKroustek/status/1038680437508501504","https://twitter.com/demonslay335/status/1059521042383814657","https://twitter.com/demonslay335/status/1059940414147489792","https://twitter.com/JakubKroustek/status/1060825783197933568","https://twitter.com/JakubKroustek/status/1064061275863425025","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-november-23rd-2018-stop-dharma-and-more/","https://www.youtube.com/watch?v=qjoYtwLx2TI","https://twitter.com/GrujaRS/status/1072139616910757888"]},"source":"Various","tag_id":"23","tag_name":"misp-galaxy:ransomware=\\"Dharma Ransomware\\"","type":"ransomware","uuid":"2b365b2c-4a9a-4b66-804d-3b2d2814fe7b","value":"Dharma Ransomware","version":"86"}],"description":"Ransomware galaxy based on https://docs.google.com/spreadsheets/d/1TWS238xacAto-fLKh1n5uTsdijWdCEsGIM0Y0Hvmc5g/pubhtml","icon":"btc","id":"43","name":"Ransomware","namespace":"misp","type":"ransomware","uuid":"3f44af2e-1480-4b6b-9aa8-f9bb21341078","version":"4"}],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"982f7c55-684d-4eb9-8736-fb5f668b899d"},"Orgc":{"id":"2","local":false,"name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"RelatedEvent":[],"ShadowAttribute":[],"Tag":[{"colour":"#0088cc","exportable":true,"hide_tag":false,"id":"23","local":0,"name":"misp-galaxy:ransomware=\\"Dharma Ransomware\\"","numerical_value":null,"user_id":"0"},{"colour":"#004646","exportable":true,"hide_tag":false,"id":"21","local":0,"name":"type:OSINT","numerical_value":null,"user_id":"0"},{"colour":"#ffffff","exportable":true,"hide_tag":false,"id":"2","local":0,"name":"tlp:white","numerical_value":null,"user_id":"0"},{"colour":"#2c4f00","exportable":true,"hide_tag":false,"id":"24","local":0,"name":"malware_classification:malware-category=\\"Ransomware\\"","numerical_value":null,"user_id":"0"},{"colour":"#00223b","exportable":true,"hide_tag":false,"id":"3","local":0,"name":"osint:source-type=\\"blog - post\\"","numerical_value":null,"user_id":"0"}],"analysis":"2","attribute_count":"7","date":"2017-08-25","disable_correlation":false,"distribution":"3","extends_uuid":"","id":"5","info":"OSINT - New Arena Crysis Ransomware Variant Released","locked":false,"org_id":"1","orgc_id":"2","proposal_email_lock":false,"publish_timestamp":"1603226331","published":true,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1503930276","uuid":"59a3d08d-5dc8-4153-bc7c-456d950d210f"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment:
          '- Xchecked via VT: a683494fc0d017fd3b4638f8b84caaaac145cc28bc211bd7361723368b4bb21e',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '5',
        id: '351',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1503930272',
        to_ids: true,
        type: 'md5',
        uuid: '59a427a0-f6f8-4178-9e7d-dfd702de0b81',
      },
      attribute_count: 7,
      date: '2017-08-25',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '5',
      info: 'OSINT - New Arena Crysis Ransomware Variant Released',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CIRCL',
        uuid: '55f6ea5e-2c60-40e5-964f-47a8950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1603226331',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '59a3d08d-5dc8-4153-bc7c-456d950d210f',
    },
    tags: [
      'misp-galaxy:ransomware=Dharma Ransomware',
      'type:OSINT',
      'tlp:white',
      'malware_classification:malware-category=Ransomware',
      'osint:source-type=blog - post',
    ],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'f2679bdabe46e10edc6352fff3c829bc',
        file: {
          hash: {
            md5: 'f2679bdabe46e10edc6352fff3c829bc',
          },
        },
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2017-08-28T14:24:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"id":"10794","type":"domain|ip","category":"Network activity","to_ids":false,"uuid":"5bf30242-8ef4-4c52-a2d7-0b7b0a016219","event_id":"14","distribution":"5","timestamp":"1542652482","comment":"1st stage","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"your-ip.getmyip.com|89.160.20.156","Galaxy":[],"ShadowAttribute":[]},"EventReport":[],"Galaxy":[{"GalaxyCluster":[{"authors":["https://docs.google.com/spreadsheets/d/1TWS238xacAto-fLKh1n5uTsdijWdCEsGIM0Y0Hvmc5g/pubhtml","http://pastebin.com/raw/GHgpWjar","MISP Project"],"collection_uuid":"10cf658b-5d32-4c4b-bb32-61760a640372","description":"It’s directed to English speaking users, therefore is able to infect worldwide.  It is spread using email spam, fake updates, attachments and so on.  It encrypts all your files, including: music, MS Office, Open Office, pictures, videos, shared online files etc.. CrySiS  \\\\u003e Dharma Note: ATTENTION! At the moment, your system is not protected. We can fix it and restore files. To restore the system write to this address: bitcoin143@india.com. CrySiS variant","galaxy_id":"43","id":"6619","local":false,"meta":{"date":["November 2016"],"encryption":["AES + RSA-512"],"extensions":[".dharma",".wallet",".zzzzz",".cmb",".id-BCBEF350.[paymentbtc@firemail.cc].cmb",".bip",".id-BCBEF350.[Beamsell@qq.com].bip",".boost",".[Darknes@420blaze.it].waifu",".brrr",".adobe",".tron",".AUDIT",".cccmn",".fire",".myjob",".[cyberwars@qq.com].war",".risk",".RISK",".bkpx",".[newsantaclaus@aol.com].santa"],"payment-method":["Bitcoin - Email"],"ransomnotes":["all your data has been locked us\\\\nYou want to return?\\\\nwrite email paymentbtc@firemail.cc","All your files have been encrypted!\\\\nAll your files have been encrypted due to a security problem with your PC. If you want to restore them, write us to the e-mail paymentbtc@firemail.cc\\\\nWrite this ID in the title of your message ACBFF130\\\\nIn case of no answer in 24 hours write us to theese e-mails:paymentbtc@firemail.cc\\\\nYou have to pay for decryption in Bitcoins. The price depends on how fast you write to us. After payment we will send you the decryption tool that will decrypt all your files.\\\\nFree decryption as guarantee\\\\nBefore paying you can send us up to 1 file for free decryption. The total size of files must be less than 1Mb (non archived), and files should not contain valuable information. (databases,backups, large excel sheets, etc.)\\\\nHow to obtain Bitcoins\\\\nThe easiest way to buy bitcoins is LocalBitcoins site. You have to register, click \'Buy bitcoins\', and select the seller by payment method and price.\\\\nhttps://localbitcoins.com/buy_bitcoins\\\\nAlso you can find other places to buy Bitcoins and beginners guide here:\\\\nhttp://www.coindesk.com/information/how-can-i-buy-bitcoins/\\\\nAttention!\\\\nDo not rename encrypted files.\\\\nDo not try to decrypt your data using third party software, it may cause permanent data loss.\\\\nDecryption of your files with the help of third parties may cause increased price (they add their fee to our) or you can become a victim of a scam.","All your files have been encrypted!\\\\nAll your files have been encrypted due to a security problem with your PC. If you want to restore them, write us to the e-mail Beamsell@qq.com\\\\nWrite this ID in the title of your message BCBEF350\\\\nIn case of no answer in 24 hours write us to theese e-mails:Beamsell@qq.com\\\\nYou have to pay for decryption in Bitcoins. The price depends on how fast you write to us. After payment we will send you the decryption tool that will decrypt all your files. \\\\nFree decryption as guarantee\\\\nBefore paying you can send us up to 1 file for free decryption. The total size of files must be less than 1Mb (non archived), and files should not contain valuable information. (databases,backups, large excel sheets, etc.) \\\\nHow to obtain Bitcoins\\\\nThe easiest way to buy bitcoins is LocalBitcoins site. You have to register, click \'Buy bitcoins\', and select the seller by payment method and price. \\\\nhttps://localbitcoins.com/buy_bitcoins \\\\nAlso you can find other places to buy Bitcoins and beginners guide here: \\\\nhttp://www.coindesk.com/information/how-can-i-buy-bitcoins/ \\\\nAttention!\\\\nDo not rename encrypted files. \\\\nDo not try to decrypt your data using third party software, it may cause permanent data loss.\\\\nDecryption of your files with the help of third parties may cause increased price (they add their fee to our) or you can become a victim of a scam.","all your data has been locked us\\\\nYou want to return?\\\\nwrite email Beamsell@qq.com"],"ransomnotes-filenames":["README.txt","README.jpg","Info.hta","FILES ENCRYPTED.txt","INFO.hta"],"ransomnotes-refs":["https://www.bleepstatic.com/images/news/ransomware/d/dharma/cmb/hta-ransom-note.jpg","https://pbs.twimg.com/media/Dmof_FiXsAAAvTN.jpg","https://pbs.twimg.com/media/Dmof_FyXsAEJmgQ.jpg","https://pbs.twimg.com/media/DrWqLWzXgAc4SlG.jpg","https://pbs.twimg.com/media/DuEBIMBW0AANnGW.jpg"],"refs":["https://id-ransomware.blogspot.co.il/2016/11/dharma-ransomware.html","https://www.bleepingcomputer.com/news/security/kaspersky-releases-decryptor-for-the-dharma-ransomware/","https://www.bleepingcomputer.com/news/security/new-cmb-dharma-ransomware-variant-released/","https://www.bleepingcomputer.com/news/security/new-bip-dharma-ransomware-variant-released/","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-october-12th-2018-notpetya-gandcrab-and-more/","https://twitter.com/demonslay335/status/1049313390097813504","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-september-14th-2018-kraken-dharma-and-matrix/","https://twitter.com/JakubKroustek/status/1038680437508501504","https://twitter.com/demonslay335/status/1059521042383814657","https://twitter.com/demonslay335/status/1059940414147489792","https://twitter.com/JakubKroustek/status/1060825783197933568","https://twitter.com/JakubKroustek/status/1064061275863425025","https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-november-23rd-2018-stop-dharma-and-more/","https://www.youtube.com/watch?v=qjoYtwLx2TI","https://twitter.com/GrujaRS/status/1072139616910757888"]},"source":"Various","tag_id":"23","tag_name":"misp-galaxy:ransomware=\\"Dharma Ransomware\\"","type":"ransomware","uuid":"2b365b2c-4a9a-4b66-804d-3b2d2814fe7b","value":"Dharma Ransomware","version":"86"}],"description":"Ransomware galaxy based on https://docs.google.com/spreadsheets/d/1TWS238xacAto-fLKh1n5uTsdijWdCEsGIM0Y0Hvmc5g/pubhtml","icon":"btc","id":"43","name":"Ransomware","namespace":"misp","type":"ransomware","uuid":"3f44af2e-1480-4b6b-9aa8-f9bb21341078","version":"4"}],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"982f7c55-684d-4eb9-8736-fb5f668b899d"},"Orgc":{"id":"2","local":false,"name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"RelatedEvent":[],"ShadowAttribute":[],"Tag":[{"colour":"#0088cc","exportable":true,"hide_tag":false,"id":"23","local":0,"name":"misp-galaxy:ransomware=\\"Dharma Ransomware\\"","numerical_value":null,"user_id":"0"},{"colour":"#004646","exportable":true,"hide_tag":false,"id":"21","local":0,"name":"type:OSINT","numerical_value":null,"user_id":"0"},{"colour":"#ffffff","exportable":true,"hide_tag":false,"id":"2","local":0,"name":"tlp:white","numerical_value":null,"user_id":"0"},{"colour":"#2c4f00","exportable":true,"hide_tag":false,"id":"24","local":0,"name":"malware_classification:malware-category=\\"Ransomware\\"","numerical_value":null,"user_id":"0"},{"colour":"#00223b","exportable":true,"hide_tag":false,"id":"3","local":0,"name":"osint:source-type=\\"blog - post\\"","numerical_value":null,"user_id":"0"}],"analysis":"2","attribute_count":"7","date":"2017-08-25","disable_correlation":false,"distribution":"3","extends_uuid":"","id":"5","info":"OSINT - New Arena Crysis Ransomware Variant Released","locked":false,"org_id":"1","orgc_id":"2","proposal_email_lock":false,"publish_timestamp":"1603226331","published":true,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1503930276","uuid":"59a3d08d-5dc8-4153-bc7c-456d950d210f"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: '1st stage',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '14',
        id: '10794',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1542652482',
        to_ids: false,
        type: 'domain|ip',
        uuid: '5bf30242-8ef4-4c52-a2d7-0b7b0a016219',
      },
      attribute_count: 7,
      date: '2017-08-25',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '5',
      info: 'OSINT - New Arena Crysis Ransomware Variant Released',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CIRCL',
        uuid: '55f6ea5e-2c60-40e5-964f-47a8950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1603226331',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '59a3d08d-5dc8-4153-bc7c-456d950d210f',
    },
    tags: [
      'misp-galaxy:ransomware=Dharma Ransomware',
      'type:OSINT',
      'tlp:white',
      'malware_classification:malware-category=Ransomware',
      'osint:source-type=blog - post',
    ],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '89.160.20.156',
        ip: '89.160.20.156',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'domain-name',
        url: {
          domain: 'your-ip.getmyip.com',
        },
      },
    },
  },
  {
    '@timestamp': '2017-04-28T18:23:44.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"External analysis","comment":"Carbon sample - Xchecked via VT: a08b8371ead1919500a4759c2f46553620d5a9d9","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"4","first_seen":null,"id":"342","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1490878550","to_ids":false,"type":"link","uuid":"58dd0056-6e74-43d5-b58b-494802de0b81","value":"https://www.virustotal.com/file/7fa4482bfbca550ce296d8e791b1091d60d733ea8042167fd0eb853530584452/analysis/1486030116/"},"EventReport":[],"Galaxy":[{"GalaxyCluster":[{"authors":["Alexandre Dulaunoy","Florian Roth","Timo Steffens","Christophe Vandeplas","Dennis Rand","raw-data"],"collection_uuid":"0d821b68-9d82-4c6d-86a6-1071a9e0f79f","description":"Family of related sophisticated backdoor software - Name comes from Microsoft detection signature – anagram of Ultra (Ultra3) was a name of the fake driver). A macOS version exists but appears incomplete and lacking features...for now!","galaxy_id":"36","id":"5828","local":false,"meta":{"refs":["https://www.first.org/resources/papers/tbilisi2014/turla-operations_and_development.pdf","https://objective-see.com/blog/blog_0x25.html#Snake"],"synonyms":["Snake","Uroburos","Urouros"],"type":["Backdoor","Rootkit"]},"source":"MISP Project","tag_id":"22","tag_name":"misp-galaxy:tool=\\"Turla\\"","type":"tool","uuid":"22332d52-c0c2-443c-9ffb-f08c0d23722c","value":"Turla","version":"138"}],"description":"Threat actors tools is an enumeration of tools used by adversaries. The list includes malware but also common software regularly used by the adversaries.","icon":"optin-monster","id":"36","name":"Tool","namespace":"misp","type":"tool","uuid":"9b8037f7-bc8f-4de1-a797-37266619bc0b","version":"3"}],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"982f7c55-684d-4eb9-8736-fb5f668b899d"},"Orgc":{"id":"2","local":false,"name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"982f7c55-684d-4eb9-8736-fb5f668b899d"},"Orgc":{"id":"4","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f"},"analysis":"2","date":"2015-01-20","distribution":"3","id":"369","info":"OSINT  Analysis of Project Cobra Another extensible framework used by the Uroburos’ actors from Gdata","org_id":"1","orgc_id":"4","published":true,"threat_level_id":"1","timestamp":"1498163317","uuid":"54bf5a6f-ac50-4f71-9cd3-7080950d210b"}},{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"982f7c55-684d-4eb9-8736-fb5f668b899d"},"Orgc":{"id":"4","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f"},"analysis":"2","date":"2014-11-20","distribution":"3","id":"621","info":"Turla digging using TotalHash","org_id":"1","orgc_id":"4","published":true,"threat_level_id":"2","timestamp":"1498163604","uuid":"546daad5-425c-4ac4-82c7-e07f950d210b"}}],"ShadowAttribute":[],"Tag":[{"colour":"#065100","exportable":true,"hide_tag":false,"id":"22","local":0,"name":"misp-galaxy:tool=\\"Turla\\"","numerical_value":null,"user_id":"0"},{"colour":"#ffffff","exportable":true,"hide_tag":false,"id":"2","local":0,"name":"tlp:white","numerical_value":null,"user_id":"0"}],"analysis":"2","attribute_count":"100","date":"2017-03-30","disable_correlation":false,"distribution":"3","extends_uuid":"","id":"4","info":"OSINT - Carbon Paper: Peering into Turla’s second stage backdoor","locked":false,"org_id":"1","orgc_id":"2","proposal_email_lock":false,"publish_timestamp":"1603226330","published":true,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1493403824","uuid":"58dcfe62-ed84-4e5e-b293-4991950d210f"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'External analysis',
        comment:
          'Carbon sample - Xchecked via VT: a08b8371ead1919500a4759c2f46553620d5a9d9',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '4',
        id: '342',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1490878550',
        to_ids: false,
        type: 'link',
        uuid: '58dd0056-6e74-43d5-b58b-494802de0b81',
      },
      attribute_count: 100,
      date: '2017-03-30',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '4',
      info: 'OSINT - Carbon Paper: Peering into Turla’s second stage backdoor',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CIRCL',
        uuid: '55f6ea5e-2c60-40e5-964f-47a8950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1603226330',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '58dcfe62-ed84-4e5e-b293-4991950d210f',
    },
    tags: ['misp-galaxy:tool=Turla', 'tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'https://www.virustotal.com/file/7fa4482bfbca550ce296d8e791b1091d60d733ea8042167fd0eb853530584452/analysis/1486030116/',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'url',
        url: {
          domain: 'www.virustotal.com',
          full: 'https://www.virustotal.com/file/7fa4482bfbca550ce296d8e791b1091d60d733ea8042167fd0eb853530584452/analysis/1486030116/',
          original:
            'https://www.virustotal.com/file/7fa4482bfbca550ce296d8e791b1091d60d733ea8042167fd0eb853530584452/analysis/1486030116/',
          path: '/file/7fa4482bfbca550ce296d8e791b1091d60d733ea8042167fd0eb853530584452/analysis/1486030116/',
          scheme: 'https',
        },
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"1077","type":"sha256","category":"External analysis","to_ids":true,"uuid":"54324042-49fc-4628-a95e-44da950d210b","event_id":"2","distribution":"5","timestamp":"1412579394","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"0a1103bc90725d4665b932f88e81d39eafa5823b0de3ab146e2d4548b7da79a0","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'External analysis',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '2',
        id: '1077',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1412579394',
        to_ids: true,
        type: 'sha256',
        uuid: '54324042-49fc-4628-a95e-44da950d210b',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '0a1103bc90725d4665b932f88e81d39eafa5823b0de3ab146e2d4548b7da79a0',
        file: {
          hash: {
            sha256:
              '0a1103bc90725d4665b932f88e81d39eafa5823b0de3ab146e2d4548b7da79a0',
          },
        },
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"1084","type":"ip-dst","category":"Network activity","to_ids":true,"uuid":"54324081-3308-4f1f-8674-4953950d210b","event_id":"2","distribution":"5","timestamp":"1412579457","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"89.160.20.156","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '2',
        id: '1084',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1412579457',
        to_ids: true,
        type: 'ip-dst',
        uuid: '54324081-3308-4f1f-8674-4953950d210b',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '89.160.20.156',
        ip: '89.160.20.156',
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"1086","type":"hostname","category":"Network activity","to_ids":true,"uuid":"543240dc-f068-437a-baa9-48f2950d210b","event_id":"2","distribution":"5","timestamp":"1412579548","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"xenserver.ddns.net","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '2',
        id: '1086',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1412579548',
        to_ids: true,
        type: 'hostname',
        uuid: '543240dc-f068-437a-baa9-48f2950d210b',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'xenserver.ddns.net',
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'domain-name',
        url: {
          domain: 'xenserver.ddns.net',
        },
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"1089","type":"text","category":"External analysis","to_ids":false,"uuid":"543240f9-64e8-41f2-958f-4e21950d210b","event_id":"2","distribution":"5","timestamp":"1412579577","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"Nitro","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'External analysis',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '2',
        id: '1089',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1412579577',
        to_ids: false,
        type: 'text',
        uuid: '543240f9-64e8-41f2-958f-4e21950d210b',
        value: 'Nitro',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"1090","type":"sha1","category":"External analysis","to_ids":true,"uuid":"56c625a7-f31c-460c-9ea1-c652950d210f","event_id":"2","distribution":"5","timestamp":"1455826343","comment":"Automatically added (via 7915aabb2e66ff14841e4ef0fbff7486)","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"0ea76f1586c008932d90c991dfdd5042f3aac8ea","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'External analysis',
        comment: 'Automatically added (via 7915aabb2e66ff14841e4ef0fbff7486)',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '2',
        id: '1090',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1455826343',
        to_ids: true,
        type: 'sha1',
        uuid: '56c625a7-f31c-460c-9ea1-c652950d210f',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '0ea76f1586c008932d90c991dfdd5042f3aac8ea',
        file: {
          hash: {
            sha1: '0ea76f1586c008932d90c991dfdd5042f3aac8ea',
          },
        },
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2014-10-06T07:12:57.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"2","orgc_id":"2","org_id":"1","date":"2014-10-03","threat_level_id":"2","info":"OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks","published":true,"uuid":"54323f2c-e50c-4268-896c-4867950d210b","attribute_count":"29","analysis":"2","timestamp":"1412579577","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610622316","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"2","name":"CthulhuSPRL.be","uuid":"55f6ea5f-fd34-43b8-ac1d-40cb950d210f","local":false},"Attribute":{"id":"12394","type":"domain","category":"Network activity","to_ids":false,"uuid":"572b4ab3-1af0-4d91-9cd5-07a1c0a8ab16","event_id":"22","distribution":"5","timestamp":"1462454963","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"whatsapp.com","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"1","name":"type:OSINT","colour":"#004646","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"2","name":"tlp:green","colour":"#339900","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '22',
        id: '12394',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1462454963',
        to_ids: false,
        type: 'domain',
        uuid: '572b4ab3-1af0-4d91-9cd5-07a1c0a8ab16',
      },
      attribute_count: 29,
      date: '2014-10-03',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '2',
      info: 'OSINT New Indicators of Compromise for APT Group Nitro Uncovered blog post by Palo Alto Networks',
      locked: false,
      org_id: '1',
      orgc: {
        id: '2',
        local: false,
        name: 'CthulhuSPRL.be',
        uuid: '55f6ea5f-fd34-43b8-ac1d-40cb950d210f',
      },
      orgc_id: '2',
      proposal_email_lock: false,
      publish_timestamp: '1610622316',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: '54323f2c-e50c-4268-896c-4867950d210b',
    },
    tags: ['type:OSINT', 'tlp:green'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'whatsapp.com',
        marking: {
          tlp: ['GREEN'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'domain-name',
        url: {
          domain: 'whatsapp.com',
        },
      },
    },
  },
  {
    '@timestamp': '2018-08-28T13:20:17.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"158","orgc_id":"5","org_id":"1","date":"2018-01-08","threat_level_id":"1","info":"Turla: Mosquito Whitepaper","published":true,"uuid":"5a5395d1-40a0-45fc-b692-334a0a016219","attribute_count":"61","analysis":"0","timestamp":"1535462417","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637953","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f","local":false},"Attribute":{"id":"17299","type":"url","category":"Network activity","to_ids":false,"uuid":"5a53976c-e7c8-480d-a68a-2fc50a016219","event_id":"158","distribution":"5","timestamp":"1515427692","comment":"Fake adobe URL","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"http://get.adobe.com/stats/AbfFcBebD/?q=","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[{"Event":{"id":"58","date":"2018-08-17","threat_level_id":"1","info":"Turla Outlook White Paper","published":true,"uuid":"5b773e07-e694-458b-b99c-27f30a016219","analysis":"0","timestamp":"1535462383","distribution":"3","org_id":"1","orgc_id":"5","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5"},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f"}}}],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"7","name":"misp-galaxy:threat-actor=\\"Turla Group\\"","colour":"#0088cc","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":true,"is_custom_galaxy":false,"local":0},{"id":"70","name":"Turla","colour":"#f20f53","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'Fake adobe URL',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '158',
        id: '17299',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1515427692',
        to_ids: false,
        type: 'url',
        uuid: '5a53976c-e7c8-480d-a68a-2fc50a016219',
      },
      attribute_count: 61,
      date: '2018-01-08',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '158',
      info: 'Turla: Mosquito Whitepaper',
      locked: false,
      org_id: '1',
      orgc: {
        id: '5',
        local: false,
        name: 'ESET',
        uuid: '55f6ea5e-51ac-4344-bc8c-4170950d210f',
      },
      orgc_id: '5',
      proposal_email_lock: false,
      publish_timestamp: '1610637953',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '5a5395d1-40a0-45fc-b692-334a0a016219',
    },
    tags: ['misp-galaxy:threat-actor=Turla Group', 'Turla', 'tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'http://get.adobe.com/stats/AbfFcBebD/?q=',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'url',
        url: {
          domain: 'get.adobe.com',
          full: 'http://get.adobe.com/stats/AbfFcBebD/?q=',
          original: 'http://get.adobe.com/stats/AbfFcBebD/?q=',
          path: '/stats/AbfFcBebD/',
          query: 'q=',
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2018-08-28T13:20:17.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"158","orgc_id":"5","org_id":"1","date":"2018-01-08","threat_level_id":"1","info":"Turla: Mosquito Whitepaper","published":true,"uuid":"5a5395d1-40a0-45fc-b692-334a0a016219","attribute_count":"61","analysis":"0","timestamp":"1535462417","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637953","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f","local":false},"Attribute":{"id":"17330","type":"uri","category":"Network activity","to_ids":false,"uuid":"5a539ce1-3de0-4e34-8fc4-2fc50a016219","event_id":"158","distribution":"5","timestamp":"1515429089","comment":"Win32 backdoor C\u0026C URI","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"/scripts/m/query.php?id=","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[{"Event":{"id":"58","date":"2018-08-17","threat_level_id":"1","info":"Turla Outlook White Paper","published":true,"uuid":"5b773e07-e694-458b-b99c-27f30a016219","analysis":"0","timestamp":"1535462383","distribution":"3","org_id":"1","orgc_id":"5","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5"},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f"}}}],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"7","name":"misp-galaxy:threat-actor=\\"Turla Group\\"","colour":"#0088cc","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":true,"is_custom_galaxy":false,"local":0},{"id":"70","name":"Turla","colour":"#f20f53","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'Win32 backdoor C\u0026C URI',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '158',
        id: '17330',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1515429089',
        to_ids: false,
        type: 'uri',
        uuid: '5a539ce1-3de0-4e34-8fc4-2fc50a016219',
      },
      attribute_count: 61,
      date: '2018-01-08',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '158',
      info: 'Turla: Mosquito Whitepaper',
      locked: false,
      org_id: '1',
      orgc: {
        id: '5',
        local: false,
        name: 'ESET',
        uuid: '55f6ea5e-51ac-4344-bc8c-4170950d210f',
      },
      orgc_id: '5',
      proposal_email_lock: false,
      publish_timestamp: '1610637953',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '5a5395d1-40a0-45fc-b692-334a0a016219',
    },
    tags: ['misp-galaxy:threat-actor=Turla Group', 'Turla', 'tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'url',
      },
    },
  },
  {
    '@timestamp': '2018-08-28T13:20:17.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"158","orgc_id":"5","org_id":"1","date":"2018-01-08","threat_level_id":"1","info":"Turla: Mosquito Whitepaper","published":true,"uuid":"5a5395d1-40a0-45fc-b692-334a0a016219","attribute_count":"61","analysis":"0","timestamp":"1535462417","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637953","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f","local":false},"Attribute":{"id":"17322","type":"filename|sha1","category":"Artifacts dropped","to_ids":false,"uuid":"5a539ce1-e6a0-426a-942c-2fc50a016219","event_id":"158","distribution":"5","timestamp":"1515429089","comment":"JavaScript backdoor","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"google_update_checker.js|c51d288469df9f25e2fb7ac491918b3e579282ea","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[{"Event":{"id":"58","date":"2018-08-17","threat_level_id":"1","info":"Turla Outlook White Paper","published":true,"uuid":"5b773e07-e694-458b-b99c-27f30a016219","analysis":"0","timestamp":"1535462383","distribution":"3","org_id":"1","orgc_id":"5","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5"},"Orgc":{"id":"5","name":"ESET","uuid":"55f6ea5e-51ac-4344-bc8c-4170950d210f"}}}],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"7","name":"misp-galaxy:threat-actor=\\"Turla Group\\"","colour":"#0088cc","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":true,"is_custom_galaxy":false,"local":0},{"id":"70","name":"Turla","colour":"#f20f53","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Artifacts dropped',
        comment: 'JavaScript backdoor',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '158',
        id: '17322',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1515429089',
        to_ids: false,
        type: 'filename|sha1',
        uuid: '5a539ce1-e6a0-426a-942c-2fc50a016219',
      },
      attribute_count: 61,
      date: '2018-01-08',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '158',
      info: 'Turla: Mosquito Whitepaper',
      locked: false,
      org_id: '1',
      orgc: {
        id: '5',
        local: false,
        name: 'ESET',
        uuid: '55f6ea5e-51ac-4344-bc8c-4170950d210f',
      },
      orgc_id: '5',
      proposal_email_lock: false,
      publish_timestamp: '1610637953',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '5a5395d1-40a0-45fc-b692-334a0a016219',
    },
    tags: ['misp-galaxy:threat-actor=Turla Group', 'Turla', 'tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'c51d288469df9f25e2fb7ac491918b3e579282ea',
        file: {
          hash: {
            sha1: 'c51d288469df9f25e2fb7ac491918b3e579282ea',
          },
          name: 'google_update_checker.js',
        },
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2018-01-23T16:09:56.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"22","orgc_id":"4","org_id":"1","date":"2015-12-08","threat_level_id":"3","info":"Packrat: Seven Years of a South American Threat Actor","published":true,"uuid":"56ccdcaf-f7e4-40d8-bca1-51299062e56a","attribute_count":"133","analysis":"2","timestamp":"1516723796","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637901","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"4","name":"CUDESO","uuid":"56c42374-fdb8-4544-a218-41ffc0a8ab16","local":false},"Attribute":{"id":"12268","type":"email-src","category":"Payload delivery","to_ids":true,"uuid":"56ccdcb6-4d6c-4e48-b955-52849062e56a","event_id":"22","distribution":"5","timestamp":"1456266422","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"claudiobonadio88@gmail.com","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '22',
        id: '12268',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1456266422',
        to_ids: true,
        type: 'email-src',
        uuid: '56ccdcb6-4d6c-4e48-b955-52849062e56a',
      },
      attribute_count: 133,
      date: '2015-12-08',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '22',
      info: 'Packrat: Seven Years of a South American Threat Actor',
      locked: false,
      org_id: '1',
      orgc: {
        id: '4',
        local: false,
        name: 'CUDESO',
        uuid: '56c42374-fdb8-4544-a218-41ffc0a8ab16',
      },
      orgc_id: '4',
      proposal_email_lock: false,
      publish_timestamp: '1610637901',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '56ccdcaf-f7e4-40d8-bca1-51299062e56a',
    },
    tags: ['tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'claudiobonadio88@gmail.com',
        email: {
          address: 'claudiobonadio88@gmail.com',
        },
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        scanner_stats: 2,
        type: 'email-addr',
      },
    },
  },
  {
    '@timestamp': '2018-01-23T16:09:56.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"22","orgc_id":"4","org_id":"1","date":"2015-12-08","threat_level_id":"3","info":"Packrat: Seven Years of a South American Threat Actor","published":true,"uuid":"56ccdcaf-f7e4-40d8-bca1-51299062e56a","attribute_count":"133","analysis":"2","timestamp":"1516723796","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637901","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"4","name":"CUDESO","uuid":"56c42374-fdb8-4544-a218-41ffc0a8ab16","local":false},"Attribute":{"id":"12298","type":"regkey","category":"Artifacts dropped","to_ids":true,"uuid":"56ccdcd6-f4b8-4383-9624-52849062e56a","event_id":"22","distribution":"5","timestamp":"1456266454","comment":"","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"HKLM\\\\SOFTWARE\\\\Microsoft\\\\Active","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Artifacts dropped',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '22',
        id: '12298',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1456266454',
        to_ids: true,
        type: 'regkey',
        uuid: '56ccdcd6-f4b8-4383-9624-52849062e56a',
      },
      attribute_count: 133,
      date: '2015-12-08',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '22',
      info: 'Packrat: Seven Years of a South American Threat Actor',
      locked: false,
      org_id: '1',
      orgc: {
        id: '4',
        local: false,
        name: 'CUDESO',
        uuid: '56c42374-fdb8-4544-a218-41ffc0a8ab16',
      },
      orgc_id: '4',
      proposal_email_lock: false,
      publish_timestamp: '1610637901',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '56ccdcaf-f7e4-40d8-bca1-51299062e56a',
    },
    tags: ['tlp:white'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'HKLM\\SOFTWARE\\Microsoft\\Active',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'misp',
        registry: {
          key: 'HKLM\\SOFTWARE\\Microsoft\\Active',
        },
        scanner_stats: 2,
        type: 'windows-registry-key',
      },
    },
  },
  {
    '@timestamp': '2020-12-13T14:03:16.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"id":"10","orgc_id":"4","org_id":"1","date":"2020-12-09","threat_level_id":"3","info":"Recent Qakbot (Qbot) activity","published":true,"uuid":"5fd0c599-ab6c-4ba1-a69a-df9ec0a8ab16","attribute_count":"15","analysis":"2","timestamp":"1607868196","distribution":"3","proposal_email_lock":false,"locked":false,"publish_timestamp":"1610637888","sharing_group_id":"0","disable_correlation":false,"extends_uuid":"","Org":{"id":"1","name":"ORGNAME","uuid":"5877549f-ea76-4b91-91fb-c72ad682b4a5","local":true},"Orgc":{"id":"4","name":"CUDESO","uuid":"56c42374-fdb8-4544-a218-41ffc0a8ab16","local":false},"Attribute":{"id":"10686","type":"ip-dst|port","category":"Network activity","to_ids":true,"uuid":"5fd0c620-a844-4ace-9710-a37bc0a8ab16","event_id":"10","distribution":"5","timestamp":"1607517728","comment":"On port 2222","sharing_group_id":"0","deleted":false,"disable_correlation":false,"object_id":"0","object_relation":null,"first_seen":null,"last_seen":null,"value":"89.160.20.156|2222","Galaxy":[],"ShadowAttribute":[]},"ShadowAttribute":[],"RelatedEvent":[],"Galaxy":[],"Object":[],"EventReport":[],"Tag":[{"id":"3","name":"tlp:white","colour":"#ffffff","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":false,"is_custom_galaxy":false,"local":0},{"id":"6","name":"misp-galaxy:banker=\\"Qakbot\\"","colour":"#0088cc","exportable":true,"user_id":"0","hide_tag":false,"numerical_value":null,"is_galaxy":true,"is_custom_galaxy":false,"local":0}]}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'On port 2222',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '10',
        id: '10686',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1607517728',
        to_ids: true,
        type: 'ip-dst|port',
        uuid: '5fd0c620-a844-4ace-9710-a37bc0a8ab16',
      },
      attribute_count: 15,
      date: '2020-12-09',
      disable_correlation: false,
      distribution: '3',
      extends_uuid: '',
      id: '10',
      info: 'Recent Qakbot (Qbot) activity',
      locked: false,
      org_id: '1',
      orgc: {
        id: '4',
        local: false,
        name: 'CUDESO',
        uuid: '56c42374-fdb8-4544-a218-41ffc0a8ab16',
      },
      orgc_id: '4',
      proposal_email_lock: false,
      publish_timestamp: '1610637888',
      published: true,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: '5fd0c599-ab6c-4ba1-a69a-df9ec0a8ab16',
    },
    tags: ['tlp:white', 'misp-galaxy:banker=Qakbot'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '89.160.20.156',
        ip: '89.160.20.156',
        marking: {
          tlp: ['WHITE'],
        },
        port: 2222,
        provider: 'misp',
        scanner_stats: 2,
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-05-21T09:09:22.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload installation","comment":"Contextual comment for the file md5 attribute","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3631","first_seen":null,"id":"266258","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621588162","to_ids":false,"type":"md5","uuid":"34c59b06-d35d-4808-919c-4b452f185c52","value":"70461da8b94c6ca5d2fda3260c5a8c3b"},"EventReport":[],"Galaxy":[],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3633","info":"Test event 3 objects and attributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"1","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3631","info":"Test event 1 just atrributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload installation',
        comment: 'Contextual comment for the file md5 attribute',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3631',
        id: '266258',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1621588162',
        to_ids: false,
        type: 'md5',
        uuid: '34c59b06-d35d-4808-919c-4b452f185c52',
      },
      attribute_count: 1,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3631',
      info: 'Test event 1 just atrributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8ca56ae9-3747-4172-93d2-808da1a4eaf3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '70461da8b94c6ca5d2fda3260c5a8c3b',
        file: {
          hash: {
            md5: '70461da8b94c6ca5d2fda3260c5a8c3b',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T09:20:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"Artefact dropped for test 2","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3632","first_seen":null,"id":"266259","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621588675","to_ids":true,"type":"md5","uuid":"73102a1c-7432-47b7-9644-6f9d46b6887c","value":"60461da8b94c6ca5d2fda3260c5a8c3b"},"EventReport":[],"Galaxy":[],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"2","name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"analysis":"2","date":"2018-03-26","distribution":"3","id":"684","info":"OSINT - Forgot About Default Accounts? No Worries, GoScanSSH Didn’t","org_id":"1","orgc_id":"2","published":true,"threat_level_id":"3","timestamp":"1523865236","uuid":"5acdb4d0-b534-4713-9612-4a1d950d210f"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"4","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3632","info":"Test event 2 just more atrributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"2","timestamp":"1621588836","uuid":"efbca287-edb5-4ad7-b8e4-fe9da514a763"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Artifacts dropped',
        comment: 'Artefact dropped for test 2',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3632',
        id: '266259',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1621588675',
        to_ids: true,
        type: 'md5',
        uuid: '73102a1c-7432-47b7-9644-6f9d46b6887c',
      },
      attribute_count: 4,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3632',
      info: 'Test event 2 just more atrributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: 'efbca287-edb5-4ad7-b8e4-fe9da514a763',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '60461da8b94c6ca5d2fda3260c5a8c3b',
        file: {
          hash: {
            md5: '60461da8b94c6ca5d2fda3260c5a8c3b',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T09:20:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Network activity","comment":"Conext for domain type attribute event 2","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3632","first_seen":null,"id":"266260","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621588744","to_ids":true,"type":"domain","uuid":"a52a1b47-a580-4f33-96ba-939cf9146c9b","value":"baddom.madeup.local"},"EventReport":[],"Galaxy":[],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"2","name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"analysis":"2","date":"2018-03-26","distribution":"3","id":"684","info":"OSINT - Forgot About Default Accounts? No Worries, GoScanSSH Didn’t","org_id":"1","orgc_id":"2","published":true,"threat_level_id":"3","timestamp":"1523865236","uuid":"5acdb4d0-b534-4713-9612-4a1d950d210f"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"4","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3632","info":"Test event 2 just more atrributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"2","timestamp":"1621588836","uuid":"efbca287-edb5-4ad7-b8e4-fe9da514a763"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'Conext for domain type attribute event 2',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3632',
        id: '266260',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1621588744',
        to_ids: true,
        type: 'domain',
        uuid: 'a52a1b47-a580-4f33-96ba-939cf9146c9b',
      },
      attribute_count: 4,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3632',
      info: 'Test event 2 just more atrributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: 'efbca287-edb5-4ad7-b8e4-fe9da514a763',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'baddom.madeup.local',
        provider: 'misp',
        scanner_stats: 0,
        type: 'domain-name',
        url: {
          domain: 'baddom.madeup.local',
        },
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T09:20:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Network activity","comment":"Ip-src attribute context for event2","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3632","first_seen":null,"id":"266261","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621588800","to_ids":false,"type":"ip-src","uuid":"3dbf224b-7c84-4c4b-9f95-80f28954bd10","value":"10.0.0.1"},"EventReport":[],"Galaxy":[],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"2","name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"analysis":"2","date":"2018-03-26","distribution":"3","id":"684","info":"OSINT - Forgot About Default Accounts? No Worries, GoScanSSH Didn’t","org_id":"1","orgc_id":"2","published":true,"threat_level_id":"3","timestamp":"1523865236","uuid":"5acdb4d0-b534-4713-9612-4a1d950d210f"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"4","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3632","info":"Test event 2 just more atrributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"2","timestamp":"1621588836","uuid":"efbca287-edb5-4ad7-b8e4-fe9da514a763"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'Ip-src attribute context for event2',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3632',
        id: '266261',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1621588800',
        to_ids: false,
        type: 'ip-src',
        uuid: '3dbf224b-7c84-4c4b-9f95-80f28954bd10',
      },
      attribute_count: 4,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3632',
      info: 'Test event 2 just more atrributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: 'efbca287-edb5-4ad7-b8e4-fe9da514a763',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '10.0.0.1',
        ip: '10.0.0.1',
        provider: 'misp',
        scanner_stats: 0,
        type: 'ipv4-addr',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T09:20:36.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Network activity","comment":"ip-dst context for event id 2","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3632","first_seen":null,"id":"266262","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621588836","to_ids":true,"type":"ip-dst","uuid":"db4bfd36-7374-4f8c-9031-60e56d4bba30","value":"192.168.1.50"},"EventReport":[],"Galaxy":[],"Object":[],"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"2","name":"CIRCL","uuid":"55f6ea5e-2c60-40e5-964f-47a8950d210f"},"analysis":"2","date":"2018-03-26","distribution":"3","id":"684","info":"OSINT - Forgot About Default Accounts? No Worries, GoScanSSH Didn’t","org_id":"1","orgc_id":"2","published":true,"threat_level_id":"3","timestamp":"1523865236","uuid":"5acdb4d0-b534-4713-9612-4a1d950d210f"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"4","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3632","info":"Test event 2 just more atrributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"2","timestamp":"1621588836","uuid":"efbca287-edb5-4ad7-b8e4-fe9da514a763"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Network activity',
        comment: 'ip-dst context for event id 2',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3632',
        id: '266262',
        object_id: '0',
        sharing_group_id: '0',
        timestamp: '1621588836',
        to_ids: true,
        type: 'ip-dst',
        uuid: 'db4bfd36-7374-4f8c-9031-60e56d4bba30',
      },
      attribute_count: 4,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3632',
      info: 'Test event 2 just more atrributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 2,
      uuid: 'efbca287-edb5-4ad7-b8e4-fe9da514a763',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '192.168.1.50',
        ip: '192.168.1.50',
        provider: 'misp',
        scanner_stats: 0,
        type: 'ipv4-addr',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:22:12.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"filename contect for test event 3","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266263","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621589229","to_ids":false,"type":"filename","uuid":"3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3","value":"thetestfile.txt"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266267","last_seen":null,"object_id":"18207","object_relation":"fullpath","sharing_group_id":"0","timestamp":"1621589548","to_ids":false,"type":"text","uuid":"ff97cc32-815e-4fc9-9d4b-cab9822027a6","value":"\\\\the\\\\fullpath\\\\to the file\\\\filenameofobject.txt"},"ObjectReference":[],"comment":"File object for event 3","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3633","first_seen":null,"id":"18207","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621589548","uuid":"42a88ad4-6834-46a9-a18b-aff9e078a4ea"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3631","info":"Test event 1 just atrributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"6","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3633","info":"Test event 3 objects and attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3633',
        id: '266267',
        object_id: '18207',
        object_relation: 'fullpath',
        sharing_group_id: '0',
        timestamp: '1621589548',
        to_ids: false,
        type: 'text',
        uuid: 'ff97cc32-815e-4fc9-9d4b-cab9822027a6',
        value: '\\the\\fullpath\\to the file\\filenameofobject.txt',
      },
      attribute_count: 6,
      context: {
        attribute: {
          category: 'Payload delivery',
          comment: 'filename contect for test event 3',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3633',
          id: '266263',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1621589229',
          to_ids: false,
          type: 'filename',
          uuid: '3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3',
          value: 'thetestfile.txt',
        },
      },
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3633',
      info: 'Test event 3 objects and attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '4edb20c7-8175-484d-bdcd-fce6872c1ef3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:22:12.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"filename contect for test event 3","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266263","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621589229","to_ids":false,"type":"filename","uuid":"3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3","value":"thetestfile.txt"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3633","first_seen":null,"id":"266268","last_seen":null,"object_id":"18207","object_relation":"size-in-bytes","sharing_group_id":"0","timestamp":"1621589548","to_ids":false,"type":"size-in-bytes","uuid":"e378b4d9-43e1-4c64-bd4e-70fce2b4e581","value":"505050"},"ObjectReference":[],"comment":"File object for event 3","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3633","first_seen":null,"id":"18207","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621589548","uuid":"42a88ad4-6834-46a9-a18b-aff9e078a4ea"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3631","info":"Test event 1 just atrributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"6","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3633","info":"Test event 3 objects and attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3633',
        id: '266268',
        object_id: '18207',
        object_relation: 'size-in-bytes',
        sharing_group_id: '0',
        timestamp: '1621589548',
        to_ids: false,
        type: 'size-in-bytes',
        uuid: 'e378b4d9-43e1-4c64-bd4e-70fce2b4e581',
        value: '505050',
      },
      attribute_count: 6,
      context: {
        attribute: {
          category: 'Payload delivery',
          comment: 'filename contect for test event 3',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3633',
          id: '266263',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1621589229',
          to_ids: false,
          type: 'filename',
          uuid: '3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3',
          value: 'thetestfile.txt',
        },
      },
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3633',
      info: 'Test event 3 objects and attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '4edb20c7-8175-484d-bdcd-fce6872c1ef3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:22:12.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"filename contect for test event 3","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266263","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621589229","to_ids":false,"type":"filename","uuid":"3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3","value":"thetestfile.txt"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266264","last_seen":null,"object_id":"18207","object_relation":"md5","sharing_group_id":"0","timestamp":"1621589548","to_ids":true,"type":"md5","uuid":"787b3822-0bec-4278-b34a-5d649e7bce05","value":"70461da8b94c6ca5d2fda3260c5a8c3b"},"ObjectReference":[],"comment":"File object for event 3","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3633","first_seen":null,"id":"18207","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621589548","uuid":"42a88ad4-6834-46a9-a18b-aff9e078a4ea"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3631","info":"Test event 1 just atrributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"6","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3633","info":"Test event 3 objects and attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3633',
        id: '266264',
        object_id: '18207',
        object_relation: 'md5',
        sharing_group_id: '0',
        timestamp: '1621589548',
        to_ids: true,
        type: 'md5',
        uuid: '787b3822-0bec-4278-b34a-5d649e7bce05',
      },
      attribute_count: 6,
      context: {
        attribute: {
          category: 'Payload delivery',
          comment: 'filename contect for test event 3',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3633',
          id: '266263',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1621589229',
          to_ids: false,
          type: 'filename',
          uuid: '3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3',
          value: 'thetestfile.txt',
        },
      },
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3633',
      info: 'Test event 3 objects and attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '4edb20c7-8175-484d-bdcd-fce6872c1ef3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '70461da8b94c6ca5d2fda3260c5a8c3b',
        file: {
          hash: {
            md5: '70461da8b94c6ca5d2fda3260c5a8c3b',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:22:12.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"filename contect for test event 3","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266263","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621589229","to_ids":false,"type":"filename","uuid":"3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3","value":"thetestfile.txt"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266265","last_seen":null,"object_id":"18207","object_relation":"sha256","sharing_group_id":"0","timestamp":"1621589548","to_ids":true,"type":"sha256","uuid":"657c5f2b-9d68-4ff7-a9ad-ab9e6a6c953e","value":"f33c27745f2bd87344be790465ef984a972fd539dc83bd4f61d4242c607ef1ee"},"ObjectReference":[],"comment":"File object for event 3","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3633","first_seen":null,"id":"18207","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621589548","uuid":"42a88ad4-6834-46a9-a18b-aff9e078a4ea"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3631","info":"Test event 1 just atrributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"6","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3633","info":"Test event 3 objects and attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3633',
        id: '266265',
        object_id: '18207',
        object_relation: 'sha256',
        sharing_group_id: '0',
        timestamp: '1621589548',
        to_ids: true,
        type: 'sha256',
        uuid: '657c5f2b-9d68-4ff7-a9ad-ab9e6a6c953e',
      },
      attribute_count: 6,
      context: {
        attribute: {
          category: 'Payload delivery',
          comment: 'filename contect for test event 3',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3633',
          id: '266263',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1621589229',
          to_ids: false,
          type: 'filename',
          uuid: '3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3',
          value: 'thetestfile.txt',
        },
      },
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3633',
      info: 'Test event 3 objects and attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '4edb20c7-8175-484d-bdcd-fce6872c1ef3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: 'f33c27745f2bd87344be790465ef984a972fd539dc83bd4f61d4242c607ef1ee',
        file: {
          hash: {
            sha256:
              'f33c27745f2bd87344be790465ef984a972fd539dc83bd4f61d4242c607ef1ee',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:22:12.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"filename contect for test event 3","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3633","first_seen":null,"id":"266263","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1621589229","to_ids":false,"type":"filename","uuid":"3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3","value":"thetestfile.txt"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3633","first_seen":null,"id":"266266","last_seen":null,"object_id":"18207","object_relation":"filename","sharing_group_id":"0","timestamp":"1621589548","to_ids":true,"type":"filename","uuid":"6648d129-9200-431b-9b41-263a84f7c9d2","value":"filenameofobject.txt"},"ObjectReference":[],"comment":"File object for event 3","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3633","first_seen":null,"id":"18207","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621589548","uuid":"42a88ad4-6834-46a9-a18b-aff9e078a4ea"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[{"Event":{"Org":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"analysis":"0","date":"2021-05-21","distribution":"1","id":"3631","info":"Test event 1 just atrributes","org_id":"1","orgc_id":"1","published":false,"threat_level_id":"1","timestamp":"1621588162","uuid":"8ca56ae9-3747-4172-93d2-808da1a4eaf3"}}],"ShadowAttribute":[],"analysis":"0","attribute_count":"6","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3633","info":"Test event 3 objects and attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592532","uuid":"4edb20c7-8175-484d-bdcd-fce6872c1ef3"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3633',
        id: '266266',
        object_id: '18207',
        object_relation: 'filename',
        sharing_group_id: '0',
        timestamp: '1621589548',
        to_ids: true,
        type: 'filename',
        uuid: '6648d129-9200-431b-9b41-263a84f7c9d2',
      },
      attribute_count: 6,
      context: {
        attribute: {
          category: 'Payload delivery',
          comment: 'filename contect for test event 3',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3633',
          id: '266263',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1621589229',
          to_ids: false,
          type: 'filename',
          uuid: '3b322e1a-1dd8-490c-ab96-12e1bc3ee6a3',
          value: 'thetestfile.txt',
        },
      },
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3633',
      info: 'Test event 3 objects and attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '4edb20c7-8175-484d-bdcd-fce6872c1ef3',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        file: {
          name: 'filenameofobject.txt',
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:09:30.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3634","first_seen":null,"id":"266269","last_seen":null,"object_id":"18208","object_relation":"text","sharing_group_id":"0","timestamp":"1621591770","to_ids":false,"type":"text","uuid":"25d2f181-26ae-4d6f-b4fd-85b9d1f82e67","value":"Free text in the file object"},"ObjectReference":[],"comment":"File object for test event 4 ","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3634","first_seen":null,"id":"18208","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621591770","uuid":"190c762c-a389-4ecc-8f6e-68f92d42adef"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"3","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3634","info":"Test event 4 with object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1621591770","uuid":"d98a8418-9f90-4b50-a623-6921ca5b356d"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3634',
        id: '266269',
        object_id: '18208',
        object_relation: 'text',
        sharing_group_id: '0',
        timestamp: '1621591770',
        to_ids: false,
        type: 'text',
        uuid: '25d2f181-26ae-4d6f-b4fd-85b9d1f82e67',
        value: 'Free text in the file object',
      },
      attribute_count: 3,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3634',
      info: 'Test event 4 with object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: 'd98a8418-9f90-4b50-a623-6921ca5b356d',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:09:30.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3634","first_seen":null,"id":"266270","last_seen":null,"object_id":"18208","object_relation":"sha256","sharing_group_id":"0","timestamp":"1621591770","to_ids":true,"type":"sha256","uuid":"4e579782-346b-44b3-b72c-1cae8d87cb25","value":"567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc666"},"ObjectReference":[],"comment":"File object for test event 4 ","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3634","first_seen":null,"id":"18208","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621591770","uuid":"190c762c-a389-4ecc-8f6e-68f92d42adef"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"3","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3634","info":"Test event 4 with object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1621591770","uuid":"d98a8418-9f90-4b50-a623-6921ca5b356d"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3634',
        id: '266270',
        object_id: '18208',
        object_relation: 'sha256',
        sharing_group_id: '0',
        timestamp: '1621591770',
        to_ids: true,
        type: 'sha256',
        uuid: '4e579782-346b-44b3-b72c-1cae8d87cb25',
      },
      attribute_count: 3,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3634',
      info: 'Test event 4 with object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: 'd98a8418-9f90-4b50-a623-6921ca5b356d',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc666',
        file: {
          hash: {
            sha256:
              '567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc666',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:09:30.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3634","first_seen":null,"id":"266271","last_seen":null,"object_id":"18208","object_relation":"filename","sharing_group_id":"0","timestamp":"1621591770","to_ids":true,"type":"filename","uuid":"a40343b5-a480-4288-9b0c-7ae074a77140","value":"filenameinmispobject.txt"},"ObjectReference":[],"comment":"File object for test event 4 ","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3634","first_seen":null,"id":"18208","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621591770","uuid":"190c762c-a389-4ecc-8f6e-68f92d42adef"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"3","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3634","info":"Test event 4 with object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"3","timestamp":"1621591770","uuid":"d98a8418-9f90-4b50-a623-6921ca5b356d"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3634',
        id: '266271',
        object_id: '18208',
        object_relation: 'filename',
        sharing_group_id: '0',
        timestamp: '1621591770',
        to_ids: true,
        type: 'filename',
        uuid: 'a40343b5-a480-4288-9b0c-7ae074a77140',
      },
      attribute_count: 3,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3634',
      info: 'Test event 4 with object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 3,
      uuid: 'd98a8418-9f90-4b50-a623-6921ca5b356d',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        file: {
          name: 'filenameinmispobject.txt',
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:19:39.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3635","first_seen":null,"id":"266272","last_seen":null,"object_id":"18209","object_relation":"text","sharing_group_id":"0","timestamp":"1621592379","to_ids":false,"type":"text","uuid":"188a6a15-5704-4e4f-acba-22c55ab08fe8","value":"Object 5 free text attribute in object"},"ObjectReference":[],"comment":"event 5 object comment","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3635","first_seen":null,"id":"18209","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621592379","uuid":"a62cb6fb-fa1c-45ce-abb8-b46da23631d5"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"5","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3635","info":"Test event 5 with an object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592379","uuid":"8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3635',
        id: '266272',
        object_id: '18209',
        object_relation: 'text',
        sharing_group_id: '0',
        timestamp: '1621592379',
        to_ids: false,
        type: 'text',
        uuid: '188a6a15-5704-4e4f-acba-22c55ab08fe8',
        value: 'Object 5 free text attribute in object',
      },
      attribute_count: 5,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3635',
      info: 'Test event 5 with an object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:19:39.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3635","first_seen":null,"id":"266275","last_seen":null,"object_id":"18209","object_relation":"entropy","sharing_group_id":"0","timestamp":"1621592379","to_ids":false,"type":"float","uuid":"2400b103-4a33-4f92-ac04-a558b6c6e252","value":"0.53535445"},"ObjectReference":[],"comment":"event 5 object comment","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3635","first_seen":null,"id":"18209","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621592379","uuid":"a62cb6fb-fa1c-45ce-abb8-b46da23631d5"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"5","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3635","info":"Test event 5 with an object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592379","uuid":"8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3635',
        id: '266275',
        object_id: '18209',
        object_relation: 'entropy',
        sharing_group_id: '0',
        timestamp: '1621592379',
        to_ids: false,
        type: 'float',
        uuid: '2400b103-4a33-4f92-ac04-a558b6c6e252',
        value: '0.53535445',
      },
      attribute_count: 5,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3635',
      info: 'Test event 5 with an object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:19:39.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3635","first_seen":null,"id":"266276","last_seen":null,"object_id":"18209","object_relation":"size-in-bytes","sharing_group_id":"0","timestamp":"1621592379","to_ids":false,"type":"size-in-bytes","uuid":"e5ea3ec0-cdf4-4d3e-bd66-a7bf384fd3d7","value":"55555"},"ObjectReference":[],"comment":"event 5 object comment","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3635","first_seen":null,"id":"18209","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621592379","uuid":"a62cb6fb-fa1c-45ce-abb8-b46da23631d5"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"5","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3635","info":"Test event 5 with an object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592379","uuid":"8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3635',
        id: '266276',
        object_id: '18209',
        object_relation: 'size-in-bytes',
        sharing_group_id: '0',
        timestamp: '1621592379',
        to_ids: false,
        type: 'size-in-bytes',
        uuid: 'e5ea3ec0-cdf4-4d3e-bd66-a7bf384fd3d7',
        value: '55555',
      },
      attribute_count: 5,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3635',
      info: 'Test event 5 with an object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:19:39.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3635","first_seen":null,"id":"266273","last_seen":null,"object_id":"18209","object_relation":"sha256","sharing_group_id":"0","timestamp":"1621592379","to_ids":true,"type":"sha256","uuid":"803f10bd-9087-4169-8699-277579a92693","value":"567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc665"},"ObjectReference":[],"comment":"event 5 object comment","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3635","first_seen":null,"id":"18209","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621592379","uuid":"a62cb6fb-fa1c-45ce-abb8-b46da23631d5"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"5","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3635","info":"Test event 5 with an object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592379","uuid":"8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3635',
        id: '266273',
        object_id: '18209',
        object_relation: 'sha256',
        sharing_group_id: '0',
        timestamp: '1621592379',
        to_ids: true,
        type: 'sha256',
        uuid: '803f10bd-9087-4169-8699-277579a92693',
      },
      attribute_count: 5,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3635',
      info: 'Test event 5 with an object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc665',
        file: {
          hash: {
            sha256:
              '567caa7653723f8818ec9eb6f2e27f6d9d8c0aca0c96fc457659340e7bbdc665',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-21T10:19:39.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":[],"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3635","first_seen":null,"id":"266274","last_seen":null,"object_id":"18209","object_relation":"filename","sharing_group_id":"0","timestamp":"1621592379","to_ids":true,"type":"filename","uuid":"e5c7a9f0-c0e1-4024-9ab8-de8a1b403e4f","value":"object5.txt"},"ObjectReference":[],"comment":"event 5 object comment","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3635","first_seen":null,"id":"18209","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1621592379","uuid":"a62cb6fb-fa1c-45ce-abb8-b46da23631d5"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"5","date":"2021-05-21","disable_correlation":false,"distribution":"1","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3635","info":"Test event 5 with an object","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1621592379","uuid":"8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3635',
        id: '266274',
        object_id: '18209',
        object_relation: 'filename',
        sharing_group_id: '0',
        timestamp: '1621592379',
        to_ids: true,
        type: 'filename',
        uuid: 'e5c7a9f0-c0e1-4024-9ab8-de8a1b403e4f',
      },
      attribute_count: 5,
      date: '2021-05-21',
      disable_correlation: false,
      distribution: '1',
      extends_uuid: '',
      id: '3635',
      info: 'Test event 5 with an object',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '8b8786f1-07f2-4bfc-a3f0-e63c22fcc25e',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        file: {
          name: 'object5.txt',
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266278","last_seen":null,"object_id":"18210","object_relation":"text","sharing_group_id":"0","timestamp":"1622200348","to_ids":false,"type":"text","uuid":"955e34a5-a630-42c9-868d-6e3dcb575987","value":"Excutable create bad pipe"},"ObjectReference":[],"comment":"","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3636","first_seen":null,"id":"18210","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1622200348","uuid":"afe43d99-d8b6-47fa-8e7b-3d3ece2f8366"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266278',
        object_id: '18210',
        object_relation: 'text',
        sharing_group_id: '0',
        timestamp: '1622200348',
        to_ids: false,
        type: 'text',
        uuid: '955e34a5-a630-42c9-868d-6e3dcb575987',
        value: 'Excutable create bad pipe',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266281","last_seen":null,"object_id":"18211","object_relation":"size-in-bytes","sharing_group_id":"0","timestamp":"1622200780","to_ids":false,"type":"size-in-bytes","uuid":"2fa7721b-ad73-4914-b082-8d44233ced98","value":"3892"},"ObjectReference":[],"comment":"","deleted":false,"description":"Object describing a section of a Portable Executable","distribution":"5","event_id":"3636","first_seen":null,"id":"18211","last_seen":null,"meta-category":"file","name":"pe-section","sharing_group_id":"0","template_uuid":"198a17d2-a135-4b25-9a32-5aa4e632014a","template_version":"3","timestamp":"1622200780","uuid":"023be568-34d6-4df4-ae88-f4de0dbfcd9d"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266281',
        object_id: '18211',
        object_relation: 'size-in-bytes',
        sharing_group_id: '0',
        timestamp: '1622200780',
        to_ids: false,
        type: 'size-in-bytes',
        uuid: '2fa7721b-ad73-4914-b082-8d44233ced98',
        value: '3892',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266283","last_seen":null,"object_id":"18211","object_relation":"name","sharing_group_id":"0","timestamp":"1622200780","to_ids":false,"type":"text","uuid":"d35c1ff8-a69c-482b-8fb0-1182988d9468","value":".data"},"ObjectReference":[],"comment":"","deleted":false,"description":"Object describing a section of a Portable Executable","distribution":"5","event_id":"3636","first_seen":null,"id":"18211","last_seen":null,"meta-category":"file","name":"pe-section","sharing_group_id":"0","template_uuid":"198a17d2-a135-4b25-9a32-5aa4e632014a","template_version":"3","timestamp":"1622200780","uuid":"023be568-34d6-4df4-ae88-f4de0dbfcd9d"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266283',
        object_id: '18211',
        object_relation: 'name',
        sharing_group_id: '0',
        timestamp: '1622200780',
        to_ids: false,
        type: 'text',
        uuid: 'd35c1ff8-a69c-482b-8fb0-1182988d9468',
        value: '.data',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266284","last_seen":null,"object_id":"18211","object_relation":"text","sharing_group_id":"0","timestamp":"1622200780","to_ids":false,"type":"text","uuid":"dc11971a-a676-4676-b24c-a45a8791e0b0","value":"Extracted zip archive data"},"ObjectReference":[],"comment":"","deleted":false,"description":"Object describing a section of a Portable Executable","distribution":"5","event_id":"3636","first_seen":null,"id":"18211","last_seen":null,"meta-category":"file","name":"pe-section","sharing_group_id":"0","template_uuid":"198a17d2-a135-4b25-9a32-5aa4e632014a","template_version":"3","timestamp":"1622200780","uuid":"023be568-34d6-4df4-ae88-f4de0dbfcd9d"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266284',
        object_id: '18211',
        object_relation: 'text',
        sharing_group_id: '0',
        timestamp: '1622200780',
        to_ids: false,
        type: 'text',
        uuid: 'dc11971a-a676-4676-b24c-a45a8791e0b0',
        value: 'Extracted zip archive data',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Other","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266285","last_seen":null,"object_id":"18211","object_relation":"entropy","sharing_group_id":"0","timestamp":"1622200780","to_ids":false,"type":"float","uuid":"a85c0cbb-25a8-4bc9-b146-3cba1020e5bb","value":"7.93280431051"},"ObjectReference":[],"comment":"","deleted":false,"description":"Object describing a section of a Portable Executable","distribution":"5","event_id":"3636","first_seen":null,"id":"18211","last_seen":null,"meta-category":"file","name":"pe-section","sharing_group_id":"0","template_uuid":"198a17d2-a135-4b25-9a32-5aa4e632014a","template_version":"3","timestamp":"1622200780","uuid":"023be568-34d6-4df4-ae88-f4de0dbfcd9d"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Other',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266285',
        object_id: '18211',
        object_relation: 'entropy',
        sharing_group_id: '0',
        timestamp: '1622200780',
        to_ids: false,
        type: 'float',
        uuid: 'a85c0cbb-25a8-4bc9-b146-3cba1020e5bb',
        value: '7.93280431051',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        provider: 'misp',
        scanner_stats: 0,
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266279","last_seen":null,"object_id":"18210","object_relation":"md5","sharing_group_id":"0","timestamp":"1622200348","to_ids":true,"type":"md5","uuid":"1c97c043-5de2-41a1-b591-3237174cd290","value":"7392463caf95534d56460bc9f360adc1"},"ObjectReference":[],"comment":"","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3636","first_seen":null,"id":"18210","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1622200348","uuid":"afe43d99-d8b6-47fa-8e7b-3d3ece2f8366"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3636',
        id: '266279',
        object_id: '18210',
        object_relation: 'md5',
        sharing_group_id: '0',
        timestamp: '1622200348',
        to_ids: true,
        type: 'md5',
        uuid: '1c97c043-5de2-41a1-b591-3237174cd290',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '7392463caf95534d56460bc9f360adc1',
        file: {
          hash: {
            md5: '7392463caf95534d56460bc9f360adc1',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266282","last_seen":null,"object_id":"18211","object_relation":"md5","sharing_group_id":"0","timestamp":"1622200780","to_ids":true,"type":"md5","uuid":"f3b8696e-5390-4383-ace2-6e06bfae497d","value":"7295463caf95534d56460bc9f360adc1"},"ObjectReference":[],"comment":"","deleted":false,"description":"Object describing a section of a Portable Executable","distribution":"5","event_id":"3636","first_seen":null,"id":"18211","last_seen":null,"meta-category":"file","name":"pe-section","sharing_group_id":"0","template_uuid":"198a17d2-a135-4b25-9a32-5aa4e632014a","template_version":"3","timestamp":"1622200780","uuid":"023be568-34d6-4df4-ae88-f4de0dbfcd9d"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: false,
        distribution: 5,
        event_id: '3636',
        id: '266282',
        object_id: '18211',
        object_relation: 'md5',
        sharing_group_id: '0',
        timestamp: '1622200780',
        to_ids: true,
        type: 'md5',
        uuid: 'f3b8696e-5390-4383-ace2-6e06bfae497d',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        name: '7295463caf95534d56460bc9f360adc1',
        file: {
          hash: {
            md5: '7295463caf95534d56460bc9f360adc1',
          },
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"Event":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Artifacts dropped","comment":"","deleted":false,"disable_correlation":false,"distribution":"5","event_id":"3636","first_seen":null,"id":"266277","last_seen":null,"object_id":"0","object_relation":null,"sharing_group_id":"0","timestamp":"1622200249","to_ids":false,"type":"windows-service-name","uuid":"3bd56a61-77f0-4885-8d1c-8bd2e39b65fb","value":"badmojopipe"},"EventReport":[],"Galaxy":[],"Object":{"Attribute":{"Galaxy":[],"ShadowAttribute":[],"category":"Payload delivery","comment":"","deleted":false,"disable_correlation":true,"distribution":"5","event_id":"3636","first_seen":null,"id":"266280","last_seen":null,"object_id":"18210","object_relation":"filename","sharing_group_id":"0","timestamp":"1622200348","to_ids":true,"type":"filename","uuid":"2dfcb937-e6af-4b5d-ad50-f8eb975990f3","value":"badmojopipe.exe"},"ObjectReference":[],"comment":"","deleted":false,"description":"File object describing a file with meta-information","distribution":"5","event_id":"3636","first_seen":null,"id":"18210","last_seen":null,"meta-category":"file","name":"file","sharing_group_id":"0","template_uuid":"688c46fb-5edb-40a3-8273-1af7923e2215","template_version":"22","timestamp":"1622200348","uuid":"afe43d99-d8b6-47fa-8e7b-3d3ece2f8366"},"Org":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"Orgc":{"id":"1","local":true,"name":"ORGNAME","uuid":"78acad2d-cc2d-4785-94d6-b428a0070488"},"RelatedEvent":[],"ShadowAttribute":[],"analysis":"0","attribute_count":"9","date":"2021-05-28","disable_correlation":false,"distribution":"0","event_creator_email":"admin@admin.test","extends_uuid":"","id":"3636","info":"Test event 6 with multiple objects and multiple attributes","locked":false,"org_id":"1","orgc_id":"1","proposal_email_lock":false,"publish_timestamp":"0","published":false,"sharing_group_id":"0","threat_level_id":"1","timestamp":"1622200781","uuid":"81aea1d1-bb23-4bcd-9b0c-496e9ce028df"}}',
      type: 'indicator',
    },
    misp: {
      attribute: {
        category: 'Payload delivery',
        comment: '',
        deleted: false,
        disable_correlation: true,
        distribution: 5,
        event_id: '3636',
        id: '266280',
        object_id: '18210',
        object_relation: 'filename',
        sharing_group_id: '0',
        timestamp: '1622200348',
        to_ids: true,
        type: 'filename',
        uuid: '2dfcb937-e6af-4b5d-ad50-f8eb975990f3',
      },
      attribute_count: 9,
      context: {
        attribute: {
          category: 'Artifacts dropped',
          comment: '',
          deleted: false,
          disable_correlation: false,
          distribution: 5,
          event_id: '3636',
          id: '266277',
          object_id: '0',
          sharing_group_id: '0',
          timestamp: '1622200249',
          to_ids: false,
          type: 'windows-service-name',
          uuid: '3bd56a61-77f0-4885-8d1c-8bd2e39b65fb',
          value: 'badmojopipe',
        },
      },
      date: '2021-05-28',
      disable_correlation: false,
      distribution: '0',
      extends_uuid: '',
      id: '3636',
      info: 'Test event 6 with multiple objects and multiple attributes',
      locked: false,
      org_id: '1',
      orgc: {
        id: '1',
        local: true,
        name: 'ORGNAME',
        uuid: '78acad2d-cc2d-4785-94d6-b428a0070488',
      },
      orgc_id: '1',
      proposal_email_lock: false,
      publish_timestamp: '0',
      published: false,
      sharing_group_id: '0',
      threat_level_id: 1,
      uuid: '81aea1d1-bb23-4bcd-9b0c-496e9ce028df',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'MISP',
      },
      indicator: {
        file: {
          name: 'badmojopipe.exe',
        },
        provider: 'misp',
        scanner_stats: 0,
        type: 'file',
      },
    },
    user: {
      email: 'admin@admin.test',
      roles: ['reporting_user'],
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"7871286a8f1f68a14b18ae475683f724","sha256_hash":"48a6aee18bcfe9058b35b1018832aef1c9efd8f50ac822f49abb484a5e2a4b1f","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:14:05","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/48a6aee18bcfe9058b35b1018832aef1c9efd8f50ac822f49abb484a5e2a4b1f/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG5:X5DpBw/KViMTB1MnEWk0115JW","tlsh":"1344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '7871286a8f1f68a14b18ae475683f724',
        '48a6aee18bcfe9058b35b1018832aef1c9efd8f50ac822f49abb484a5e2a4b1f',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG5:X5DpBw/KViMTB1MnEWk0115JW',
        '68aea345b134d576ccdef7f06db86088',
        '1344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '48a6aee18bcfe9058b35b1018832aef1c9efd8f50ac822f49abb484a5e2a4b1f',
        file: {
          hash: {
            md5: '7871286a8f1f68a14b18ae475683f724',
            sha256:
              '48a6aee18bcfe9058b35b1018832aef1c9efd8f50ac822f49abb484a5e2a4b1f',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG5:X5DpBw/KViMTB1MnEWk0115JW',
            tlsh: '1344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:14:05.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"7b4c77dc293347b467fb860e34515163","sha256_hash":"ec59538e8de8525b1674b3b8fe0c180ac822145350bcce054ad3fc6b95b1b5a4","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:11:41","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/ec59538e8de8525b1674b3b8fe0c180ac822145350bcce054ad3fc6b95b1b5a4/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGY:X5DpBw/KViMTB1MnEWk0115Jr","tlsh":"4E44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '7b4c77dc293347b467fb860e34515163',
        'ec59538e8de8525b1674b3b8fe0c180ac822145350bcce054ad3fc6b95b1b5a4',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGY:X5DpBw/KViMTB1MnEWk0115Jr',
        '68aea345b134d576ccdef7f06db86088',
        '4E44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'ec59538e8de8525b1674b3b8fe0c180ac822145350bcce054ad3fc6b95b1b5a4',
        file: {
          hash: {
            md5: '7b4c77dc293347b467fb860e34515163',
            sha256:
              'ec59538e8de8525b1674b3b8fe0c180ac822145350bcce054ad3fc6b95b1b5a4',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGY:X5DpBw/KViMTB1MnEWk0115Jr',
            tlsh: '4E44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:11:41.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        virustotal: {
          link: 'https://www.virustotal.com/gui/file/b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7/detection/f-b0e914d',
          percent: 37.88,
          result: '25 / 66',
        },
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"373d34874d7bc89fd4cefa6272ee80bf","sha256_hash":"b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:11:22","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7/","virustotal":{"result":"25 / 66","percent":"37.88","link":"https://www.virustotal.com/gui/file/b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7/detection/f-b0e914d"},"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGG:X5DpBw/KViMTB1MnEWk0115Jd","tlsh":"7544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '373d34874d7bc89fd4cefa6272ee80bf',
        'b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGG:X5DpBw/KViMTB1MnEWk0115Jd',
        '68aea345b134d576ccdef7f06db86088',
        '7544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7',
        file: {
          hash: {
            md5: '373d34874d7bc89fd4cefa6272ee80bf',
            sha256:
              'b0e914d1bbe19433cc9df64ea1ca07fe77f7b150b511b786e46e007941a62bd7',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGG:X5DpBw/KViMTB1MnEWk0115Jd',
            tlsh: '7544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:11:22.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"e2e02aae857488dbdbe6631c29abf3f8","sha256_hash":"7483e834a73fb6817769596fe4c0fa01d28639f52bbbdc2b8a56c36d466dd7f8","file_type":"dll","file_size":"284672","signature":null,"firstseen":"2021-01-14 06:11:21","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/7483e834a73fb6817769596fe4c0fa01d28639f52bbbdc2b8a56c36d466dd7f8/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ9:0h3eZgRQCcw+MN54dEq7kqRtoLZH","tlsh":"5554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'e2e02aae857488dbdbe6631c29abf3f8',
        '7483e834a73fb6817769596fe4c0fa01d28639f52bbbdc2b8a56c36d466dd7f8',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ9:0h3eZgRQCcw+MN54dEq7kqRtoLZH',
        '68aea345b134d576ccdef7f06db86088',
        '5554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '7483e834a73fb6817769596fe4c0fa01d28639f52bbbdc2b8a56c36d466dd7f8',
        file: {
          hash: {
            md5: 'e2e02aae857488dbdbe6631c29abf3f8',
            sha256:
              '7483e834a73fb6817769596fe4c0fa01d28639f52bbbdc2b8a56c36d466dd7f8',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ9:0h3eZgRQCcw+MN54dEq7kqRtoLZH',
            tlsh: '5554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:11:21.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"3e988e32b0c3c230d534e286665b89a5","sha256_hash":"760e729426fb115b967a41e5a6f2f42d7a52a5cee74ed99065a6dc39bf89f59b","file_type":"unknown","file_size":"352","signature":null,"firstseen":"2021-01-14 06:08:02","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/760e729426fb115b967a41e5a6f2f42d7a52a5cee74ed99065a6dc39bf89f59b/","virustotal":null,"imphash":null,"ssdeep":"6:TE6ll8uXi0jIAv6BHvPuA7RKTmOQamsQMGvMQgTYbtsWsQ72hCqPZG/:TTll8uTo5uA7RKtQamsS0QJfsQ7mCR","tlsh":"3CE0C002AB26C036500D154C221655B3B871911503CA14E6A6824BEA765D4A3290D190"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '3e988e32b0c3c230d534e286665b89a5',
        '760e729426fb115b967a41e5a6f2f42d7a52a5cee74ed99065a6dc39bf89f59b',
        '6:TE6ll8uXi0jIAv6BHvPuA7RKTmOQamsQMGvMQgTYbtsWsQ72hCqPZG/:TTll8uTo5uA7RKtQamsS0QJfsQ7mCR',
        '3CE0C002AB26C036500D154C221655B3B871911503CA14E6A6824BEA765D4A3290D190',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '760e729426fb115b967a41e5a6f2f42d7a52a5cee74ed99065a6dc39bf89f59b',
        file: {
          hash: {
            md5: '3e988e32b0c3c230d534e286665b89a5',
            sha256:
              '760e729426fb115b967a41e5a6f2f42d7a52a5cee74ed99065a6dc39bf89f59b',
            ssdeep:
              '6:TE6ll8uXi0jIAv6BHvPuA7RKTmOQamsQMGvMQgTYbtsWsQ72hCqPZG/:TTll8uTo5uA7RKtQamsS0QJfsQ7mCR',
            tlsh: '3CE0C002AB26C036500D154C221655B3B871911503CA14E6A6824BEA765D4A3290D190',
          },
          pe: {},
          size: 352,
          type: 'unknown',
        },
        first_seen: '2021-01-14T06:08:02.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        virustotal: {
          link: 'https://www.virustotal.com/gui/file/86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac/detection/f-86655c0',
          percent: 39.13,
          result: '27 / 69',
        },
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"dcc20d534cdf29eab03d8148bf728857","sha256_hash":"86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:08:02","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac/","virustotal":{"result":"27 / 69","percent":"39.13","link":"https://www.virustotal.com/gui/file/86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac/detection/f-86655c0"},"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGI:X5DpBw/KViMTB1MnEWk0115JH","tlsh":"0D44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'dcc20d534cdf29eab03d8148bf728857',
        '86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGI:X5DpBw/KViMTB1MnEWk0115JH',
        '68aea345b134d576ccdef7f06db86088',
        '0D44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        file: {
          name: '86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac',
          hash: {
            md5: 'dcc20d534cdf29eab03d8148bf728857',
            sha256:
              '86655c0bcf9b21b5efc682f58eb80f42811042ba152358e1bfbbb867315a60ac',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGI:X5DpBw/KViMTB1MnEWk0115JH',
            tlsh: '0D44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:08:02.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"f6facbf7a90b9e67a6de9f6634eb40ba","sha256_hash":"e91c9e11d3ce4f55fabd7196279367482d2fabfa32df81e614b15fc53b4e26be","file_type":"dll","file_size":"284672","signature":null,"firstseen":"2021-01-14 06:07:53","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/e91c9e11d3ce4f55fabd7196279367482d2fabfa32df81e614b15fc53b4e26be/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ1:0h3eZgRQCcw+MN54dEq7kqRtoLZL","tlsh":"2554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'f6facbf7a90b9e67a6de9f6634eb40ba',
        'e91c9e11d3ce4f55fabd7196279367482d2fabfa32df81e614b15fc53b4e26be',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ1:0h3eZgRQCcw+MN54dEq7kqRtoLZL',
        '68aea345b134d576ccdef7f06db86088',
        '2554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        file: {
          name: 'e91c9e11d3ce4f55fabd7196279367482d2fabfa32df81e614b15fc53b4e26be',
          hash: {
            md5: 'f6facbf7a90b9e67a6de9f6634eb40ba',
            sha256:
              'e91c9e11d3ce4f55fabd7196279367482d2fabfa32df81e614b15fc53b4e26be',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJ1:0h3eZgRQCcw+MN54dEq7kqRtoLZL',
            tlsh: '2554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:53.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"44325fd5bdda2e2cdea07c3a39953bb1","sha256_hash":"beedbbcacfc34b5edd8c68e3e4acf364992ebbcd989548e09e38fa03c5659bac","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:07:41","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/beedbbcacfc34b5edd8c68e3e4acf364992ebbcd989548e09e38fa03c5659bac/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Jg","tlsh":"A044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '44325fd5bdda2e2cdea07c3a39953bb1',
        'beedbbcacfc34b5edd8c68e3e4acf364992ebbcd989548e09e38fa03c5659bac',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Jg',
        '68aea345b134d576ccdef7f06db86088',
        'A044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'beedbbcacfc34b5edd8c68e3e4acf364992ebbcd989548e09e38fa03c5659bac',
        file: {
          hash: {
            md5: '44325fd5bdda2e2cdea07c3a39953bb1',
            sha256:
              'beedbbcacfc34b5edd8c68e3e4acf364992ebbcd989548e09e38fa03c5659bac',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Jg',
            tlsh: 'A044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:41.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        signature: 'Heodo',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"4c549051950522a3f1b0814aa9b1f6d1","sha256_hash":"7cba55da723c0e020267a02e6ffc83e03a83701757fc4ec65ea398618ad881cf","file_type":"dll","file_size":"277504","signature":"Heodo","firstseen":"2021-01-14 06:07:31","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/7cba55da723c0e020267a02e6ffc83e03a83701757fc4ec65ea398618ad881cf/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG4:X5DpBw/KViMTB1MnEWk0115Jv","tlsh":"4544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '4c549051950522a3f1b0814aa9b1f6d1',
        '7cba55da723c0e020267a02e6ffc83e03a83701757fc4ec65ea398618ad881cf',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG4:X5DpBw/KViMTB1MnEWk0115Jv',
        '68aea345b134d576ccdef7f06db86088',
        '4544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '7cba55da723c0e020267a02e6ffc83e03a83701757fc4ec65ea398618ad881cf',
        file: {
          hash: {
            md5: '4c549051950522a3f1b0814aa9b1f6d1',
            sha256:
              '7cba55da723c0e020267a02e6ffc83e03a83701757fc4ec65ea398618ad881cf',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG4:X5DpBw/KViMTB1MnEWk0115Jv',
            tlsh: '4544D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:31.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"d7333113098d88b6a5dd5b8eb24f9b87","sha256_hash":"426be5e085e6bbad8430223dc89d8d3ced497133f8d478fd00005bcbb73399d4","file_type":"dll","file_size":"284672","signature":null,"firstseen":"2021-01-14 06:07:07","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/426be5e085e6bbad8430223dc89d8d3ced497133f8d478fd00005bcbb73399d4/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJw:0h3eZgRQCcw+MN54dEq7kqRtoLZW","tlsh":"9454CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'd7333113098d88b6a5dd5b8eb24f9b87',
        '426be5e085e6bbad8430223dc89d8d3ced497133f8d478fd00005bcbb73399d4',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJw:0h3eZgRQCcw+MN54dEq7kqRtoLZW',
        '68aea345b134d576ccdef7f06db86088',
        '9454CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '426be5e085e6bbad8430223dc89d8d3ced497133f8d478fd00005bcbb73399d4',
        file: {
          hash: {
            md5: 'd7333113098d88b6a5dd5b8eb24f9b87',
            sha256:
              '426be5e085e6bbad8430223dc89d8d3ced497133f8d478fd00005bcbb73399d4',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJw:0h3eZgRQCcw+MN54dEq7kqRtoLZW',
            tlsh: '9454CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:07.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"c8dbb261c1f450534c3693da2f4b479f","sha256_hash":"25093afdaeb3ea000743ab843360a6b64f58c0a1ab950072ba6528056735deb9","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:07:07","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/25093afdaeb3ea000743ab843360a6b64f58c0a1ab950072ba6528056735deb9/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGe:X5DpBw/KViMTB1MnEWk0115JR","tlsh":"F344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'c8dbb261c1f450534c3693da2f4b479f',
        '25093afdaeb3ea000743ab843360a6b64f58c0a1ab950072ba6528056735deb9',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGe:X5DpBw/KViMTB1MnEWk0115JR',
        '68aea345b134d576ccdef7f06db86088',
        'F344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '25093afdaeb3ea000743ab843360a6b64f58c0a1ab950072ba6528056735deb9',
        file: {
          hash: {
            md5: 'c8dbb261c1f450534c3693da2f4b479f',
            sha256:
              '25093afdaeb3ea000743ab843360a6b64f58c0a1ab950072ba6528056735deb9',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGe:X5DpBw/KViMTB1MnEWk0115JR',
            tlsh: 'F344D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:07.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"714953f1d0031a4bb2f0c44afd015931","sha256_hash":"b3327a96280365e441057f490df6261c9a2400fd63719eb9a7a0c9db95beecc5","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:07:06","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/b3327a96280365e441057f490df6261c9a2400fd63719eb9a7a0c9db95beecc5/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115J7","tlsh":"F644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '714953f1d0031a4bb2f0c44afd015931',
        'b3327a96280365e441057f490df6261c9a2400fd63719eb9a7a0c9db95beecc5',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115J7',
        '68aea345b134d576ccdef7f06db86088',
        'F644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'b3327a96280365e441057f490df6261c9a2400fd63719eb9a7a0c9db95beecc5',
        file: {
          hash: {
            md5: '714953f1d0031a4bb2f0c44afd015931',
            sha256:
              'b3327a96280365e441057f490df6261c9a2400fd63719eb9a7a0c9db95beecc5',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115J7',
            tlsh: 'F644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:06.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"20fd22742500d4cec123398afc3d3672","sha256_hash":"e92b54904391c171238863b584355197ba4508f73320a8e89afbb5425fc2dc4b","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:07:00","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/e92b54904391c171238863b584355197ba4508f73320a8e89afbb5425fc2dc4b/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115JP","tlsh":"BE44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '20fd22742500d4cec123398afc3d3672',
        'e92b54904391c171238863b584355197ba4508f73320a8e89afbb5425fc2dc4b',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115JP',
        '68aea345b134d576ccdef7f06db86088',
        'BE44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'e92b54904391c171238863b584355197ba4508f73320a8e89afbb5425fc2dc4b',
        file: {
          hash: {
            md5: '20fd22742500d4cec123398afc3d3672',
            sha256:
              'e92b54904391c171238863b584355197ba4508f73320a8e89afbb5425fc2dc4b',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGc:X5DpBw/KViMTB1MnEWk0115JP',
            tlsh: 'BE44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:07:00.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"aa81ceea053797a6f8c38a0f2f9b80b0","sha256_hash":"dd15e74b3cd3a4fdb5f47adefd6f90e27d5a20e01316cc791711f6dce7c0f52e","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:06:36","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/dd15e74b3cd3a4fdb5f47adefd6f90e27d5a20e01316cc791711f6dce7c0f52e/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGf:X5DpBw/KViMTB1MnEWk0115Jo","tlsh":"CC44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'aa81ceea053797a6f8c38a0f2f9b80b0',
        'dd15e74b3cd3a4fdb5f47adefd6f90e27d5a20e01316cc791711f6dce7c0f52e',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGf:X5DpBw/KViMTB1MnEWk0115Jo',
        '68aea345b134d576ccdef7f06db86088',
        'CC44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'dd15e74b3cd3a4fdb5f47adefd6f90e27d5a20e01316cc791711f6dce7c0f52e',
        file: {
          hash: {
            md5: 'aa81ceea053797a6f8c38a0f2f9b80b0',
            sha256:
              'dd15e74b3cd3a4fdb5f47adefd6f90e27d5a20e01316cc791711f6dce7c0f52e',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGf:X5DpBw/KViMTB1MnEWk0115Jo',
            tlsh: 'CC44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:06:36.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        signature: 'Heodo',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"a2ce6795664c0fa93b07fa54ba868991","sha256_hash":"0fae1eeabc4f5e07bd16f7851aec5ab6032d407c7ff0270f2b6e85c2a3efebd1","file_type":"dll","file_size":"277504","signature":"Heodo","firstseen":"2021-01-14 06:06:13","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/0fae1eeabc4f5e07bd16f7851aec5ab6032d407c7ff0270f2b6e85c2a3efebd1/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGD:X5DpBw/KViMTB1MnEWk0115JY","tlsh":"8C44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'a2ce6795664c0fa93b07fa54ba868991',
        '0fae1eeabc4f5e07bd16f7851aec5ab6032d407c7ff0270f2b6e85c2a3efebd1',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGD:X5DpBw/KViMTB1MnEWk0115JY',
        '68aea345b134d576ccdef7f06db86088',
        '8C44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '0fae1eeabc4f5e07bd16f7851aec5ab6032d407c7ff0270f2b6e85c2a3efebd1',
        file: {
          hash: {
            md5: 'a2ce6795664c0fa93b07fa54ba868991',
            sha256:
              '0fae1eeabc4f5e07bd16f7851aec5ab6032d407c7ff0270f2b6e85c2a3efebd1',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGD:X5DpBw/KViMTB1MnEWk0115JY',
            tlsh: '8C44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:06:13.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"9b9bac158dacb9c2f5511e9c464a7de4","sha256_hash":"07a9d84c0b2c8cf1fd90ab409b9399d06920ab4b6efb647b5a3b9bef1045ee7e","file_type":"dll","file_size":"280064","signature":null,"firstseen":"2021-01-14 06:05:52","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/07a9d84c0b2c8cf1fd90ab409b9399d06920ab4b6efb647b5a3b9bef1045ee7e/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKk:W5MT4WNaHy9P1FjbrjlKk","tlsh":"6B54CF217A53C826F5E800FCA6E9878914167F346F44A4C773D40F6AA8759E2EF2B317"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '9b9bac158dacb9c2f5511e9c464a7de4',
        '07a9d84c0b2c8cf1fd90ab409b9399d06920ab4b6efb647b5a3b9bef1045ee7e',
        '6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKk:W5MT4WNaHy9P1FjbrjlKk',
        '68aea345b134d576ccdef7f06db86088',
        '6B54CF217A53C826F5E800FCA6E9878914167F346F44A4C773D40F6AA8759E2EF2B317',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '07a9d84c0b2c8cf1fd90ab409b9399d06920ab4b6efb647b5a3b9bef1045ee7e',
        file: {
          hash: {
            md5: '9b9bac158dacb9c2f5511e9c464a7de4',
            sha256:
              '07a9d84c0b2c8cf1fd90ab409b9399d06920ab4b6efb647b5a3b9bef1045ee7e',
            ssdeep:
              '6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKk:W5MT4WNaHy9P1FjbrjlKk',
            tlsh: '6B54CF217A53C826F5E800FCA6E9878914167F346F44A4C773D40F6AA8759E2EF2B317',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 280064,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:52.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"e48e3fa5e0f7b21c1ecf1efc81ff91e8","sha256_hash":"708c0193aec6354af6877f314d4b0e3864552bac77258bee9ee5bf886a116df5","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:05:51","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/708c0193aec6354af6877f314d4b0e3864552bac77258bee9ee5bf886a116df5/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGo:X5DpBw/KViMTB1MnEWk0115Jj","tlsh":"6644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'e48e3fa5e0f7b21c1ecf1efc81ff91e8',
        '708c0193aec6354af6877f314d4b0e3864552bac77258bee9ee5bf886a116df5',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGo:X5DpBw/KViMTB1MnEWk0115Jj',
        '68aea345b134d576ccdef7f06db86088',
        '6644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '708c0193aec6354af6877f314d4b0e3864552bac77258bee9ee5bf886a116df5',
        file: {
          hash: {
            md5: 'e48e3fa5e0f7b21c1ecf1efc81ff91e8',
            sha256:
              '708c0193aec6354af6877f314d4b0e3864552bac77258bee9ee5bf886a116df5',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGo:X5DpBw/KViMTB1MnEWk0115Jj',
            tlsh: '6644D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:51.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        signature: 'Heodo',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"8957f5347633ab4b10c2ae4fb92c8572","sha256_hash":"f70a3c016fe791eb30959961f0bcaa08ba7b738491b9ae61cb4a667cd1de8b37","file_type":"dll","file_size":"284672","signature":"Heodo","firstseen":"2021-01-14 06:05:50","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/f70a3c016fe791eb30959961f0bcaa08ba7b738491b9ae61cb4a667cd1de8b37/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJy:0h3eZgRQCcw+MN54dEq7kqRtoLZM","tlsh":"0754CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '8957f5347633ab4b10c2ae4fb92c8572',
        'f70a3c016fe791eb30959961f0bcaa08ba7b738491b9ae61cb4a667cd1de8b37',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJy:0h3eZgRQCcw+MN54dEq7kqRtoLZM',
        '68aea345b134d576ccdef7f06db86088',
        '0754CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'f70a3c016fe791eb30959961f0bcaa08ba7b738491b9ae61cb4a667cd1de8b37',
        file: {
          hash: {
            md5: '8957f5347633ab4b10c2ae4fb92c8572',
            sha256:
              'f70a3c016fe791eb30959961f0bcaa08ba7b738491b9ae61cb4a667cd1de8b37',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJy:0h3eZgRQCcw+MN54dEq7kqRtoLZM',
            tlsh: '0754CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:50.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"09cc76b7077b4d5704e46e864575ff03","sha256_hash":"94ca186561b13fa9b1bf15f7e66118debc686b40d2a62a5cf4b3c6ca6ee1c7a1","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:05:36","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/94ca186561b13fa9b1bf15f7e66118debc686b40d2a62a5cf4b3c6ca6ee1c7a1/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Js","tlsh":"BB44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '09cc76b7077b4d5704e46e864575ff03',
        '94ca186561b13fa9b1bf15f7e66118debc686b40d2a62a5cf4b3c6ca6ee1c7a1',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Js',
        '68aea345b134d576ccdef7f06db86088',
        'BB44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '94ca186561b13fa9b1bf15f7e66118debc686b40d2a62a5cf4b3c6ca6ee1c7a1',
        file: {
          hash: {
            md5: '09cc76b7077b4d5704e46e864575ff03',
            sha256:
              '94ca186561b13fa9b1bf15f7e66118debc686b40d2a62a5cf4b3c6ca6ee1c7a1',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG/:X5DpBw/KViMTB1MnEWk0115Js',
            tlsh: 'BB44D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:36.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"98a1cdf7de4232363f1d1e0f33dbfd99","sha256_hash":"909f890dbc5748845cf06d0fb0b73a5c0cb17761f37e9cd4810eea0d0eb8627f","file_type":"dll","file_size":"284672","signature":null,"firstseen":"2021-01-14 06:05:16","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/909f890dbc5748845cf06d0fb0b73a5c0cb17761f37e9cd4810eea0d0eb8627f/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJQ:0h3eZgRQCcw+MN54dEq7kqRtoLZ+","tlsh":"C554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '98a1cdf7de4232363f1d1e0f33dbfd99',
        '909f890dbc5748845cf06d0fb0b73a5c0cb17761f37e9cd4810eea0d0eb8627f',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJQ:0h3eZgRQCcw+MN54dEq7kqRtoLZ+',
        '68aea345b134d576ccdef7f06db86088',
        'C554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '909f890dbc5748845cf06d0fb0b73a5c0cb17761f37e9cd4810eea0d0eb8627f',
        file: {
          hash: {
            md5: '98a1cdf7de4232363f1d1e0f33dbfd99',
            sha256:
              '909f890dbc5748845cf06d0fb0b73a5c0cb17761f37e9cd4810eea0d0eb8627f',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJQ:0h3eZgRQCcw+MN54dEq7kqRtoLZ+',
            tlsh: 'C554CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:16.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {
        signature: 'Heodo',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"8a51830c1662513ba6bd44e2f7849547","sha256_hash":"d1fa76346bef5bc8adaa615e109894a7c30f0bef07ab6272409c4056ea8d52aa","file_type":"dll","file_size":"284672","signature":"Heodo","firstseen":"2021-01-14 06:05:15","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/d1fa76346bef5bc8adaa615e109894a7c30f0bef07ab6272409c4056ea8d52aa/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJh:0h3eZgRQCcw+MN54dEq7kqRtoLZ/","tlsh":"1654CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '8a51830c1662513ba6bd44e2f7849547',
        'd1fa76346bef5bc8adaa615e109894a7c30f0bef07ab6272409c4056ea8d52aa',
        '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJh:0h3eZgRQCcw+MN54dEq7kqRtoLZ/',
        '68aea345b134d576ccdef7f06db86088',
        '1654CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'd1fa76346bef5bc8adaa615e109894a7c30f0bef07ab6272409c4056ea8d52aa',
        file: {
          hash: {
            md5: '8a51830c1662513ba6bd44e2f7849547',
            sha256:
              'd1fa76346bef5bc8adaa615e109894a7c30f0bef07ab6272409c4056ea8d52aa',
            ssdeep:
              '6144:0hlBeZgR9LqvgFcwNAwhGV52n5Dv4JdEqvQykqRqYdBx8pRA7OZJh:0h3eZgRQCcw+MN54dEq7kqRtoLZ/',
            tlsh: '1654CF22E642C926F1E900FCB2A98B4451257E355F40F4D777C40FABA835AE2AF27717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 284672,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:15.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"ae21d742a8118d6b86674aa5370bd6a7","sha256_hash":"3b9698b6c18bcba15ee33378440dd3f42509730e6b1d2d5832c71a74b1920e51","file_type":"dll","file_size":"280064","signature":null,"firstseen":"2021-01-14 06:05:12","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/3b9698b6c18bcba15ee33378440dd3f42509730e6b1d2d5832c71a74b1920e51/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKS:W5MT4WNaHy9P1FjbrjlKS","tlsh":"5454CF217A53C826F5E800FCA6E9878925167F346F44A4C373D40F6AA8759E2DF2B317"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'ae21d742a8118d6b86674aa5370bd6a7',
        '3b9698b6c18bcba15ee33378440dd3f42509730e6b1d2d5832c71a74b1920e51',
        '6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKS:W5MT4WNaHy9P1FjbrjlKS',
        '68aea345b134d576ccdef7f06db86088',
        '5454CF217A53C826F5E800FCA6E9878925167F346F44A4C373D40F6AA8759E2DF2B317',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '3b9698b6c18bcba15ee33378440dd3f42509730e6b1d2d5832c71a74b1920e51',
        file: {
          hash: {
            md5: 'ae21d742a8118d6b86674aa5370bd6a7',
            sha256:
              '3b9698b6c18bcba15ee33378440dd3f42509730e6b1d2d5832c71a74b1920e51',
            ssdeep:
              '6144:WlLMUG2gFWLDFO9vNa11y3NPcJufFFTXNZrjJTKS:W5MT4WNaHy9P1FjbrjlKS',
            tlsh: '5454CF217A53C826F5E800FCA6E9878925167F346F44A4C373D40F6AA8759E2DF2B317',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 280064,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:05:12.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"78c9d88d24ed1d982a83216eed1590f6","sha256_hash":"d11edc90f0e879a175abc6e2ce5c94a263aa2a01cd3b6e8b9fdf93a51235ae99","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:04:38","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/d11edc90f0e879a175abc6e2ce5c94a263aa2a01cd3b6e8b9fdf93a51235ae99/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG8:X5DpBw/KViMTB1MnEWk0115Jr","tlsh":"6044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '78c9d88d24ed1d982a83216eed1590f6',
        'd11edc90f0e879a175abc6e2ce5c94a263aa2a01cd3b6e8b9fdf93a51235ae99',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG8:X5DpBw/KViMTB1MnEWk0115Jr',
        '68aea345b134d576ccdef7f06db86088',
        '6044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'd11edc90f0e879a175abc6e2ce5c94a263aa2a01cd3b6e8b9fdf93a51235ae99',
        file: {
          hash: {
            md5: '78c9d88d24ed1d982a83216eed1590f6',
            sha256:
              'd11edc90f0e879a175abc6e2ce5c94a263aa2a01cd3b6e8b9fdf93a51235ae99',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JG8:X5DpBw/KViMTB1MnEWk0115Jr',
            tlsh: '6044D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:04:38.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"236577d5d83e2a8d08623a7a7f724188","sha256_hash":"8cd28fed7ebdcd79ea2509dca84f0a727ca28d4eaaed5a92cd10b1279ff16afa","file_type":"dll","file_size":"241664","signature":null,"firstseen":"2021-01-14 06:04:26","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/8cd28fed7ebdcd79ea2509dca84f0a727ca28d4eaaed5a92cd10b1279ff16afa/","virustotal":null,"imphash":"ed2860c18f5483e3b5388bad75169dc1","ssdeep":"6144:X1G3WVIOY6Bdjehj+qudd96ou/6mv5wdC:X1GmSafShjYdd96z/6cwdC","tlsh":"8D34BE41B28B8B4BD163163C2976D1F8953CFC909761CE693B64B22F0F739D0892E7A5"}',
      type: 'indicator',
    },
    related: {
      hash: [
        '236577d5d83e2a8d08623a7a7f724188',
        '8cd28fed7ebdcd79ea2509dca84f0a727ca28d4eaaed5a92cd10b1279ff16afa',
        '6144:X1G3WVIOY6Bdjehj+qudd96ou/6mv5wdC:X1GmSafShjYdd96z/6cwdC',
        'ed2860c18f5483e3b5388bad75169dc1',
        '8D34BE41B28B8B4BD163163C2976D1F8953CFC909761CE693B64B22F0F739D0892E7A5',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '8cd28fed7ebdcd79ea2509dca84f0a727ca28d4eaaed5a92cd10b1279ff16afa',
        file: {
          hash: {
            md5: '236577d5d83e2a8d08623a7a7f724188',
            sha256:
              '8cd28fed7ebdcd79ea2509dca84f0a727ca28d4eaaed5a92cd10b1279ff16afa',
            ssdeep:
              '6144:X1G3WVIOY6Bdjehj+qudd96ou/6mv5wdC:X1GmSafShjYdd96z/6cwdC',
            tlsh: '8D34BE41B28B8B4BD163163C2976D1F8953CFC909761CE693B64B22F0F739D0892E7A5',
          },
          pe: {
            imphash: 'ed2860c18f5483e3b5388bad75169dc1',
          },
          size: 241664,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:04:26.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malware: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"md5_hash":"ff60107d82dcda7e6726d214528758e7","sha256_hash":"fb25d13188a5d0913bbcf5aeff6c7e3208ad92a7d10ab6bed2735f4d43310a27","file_type":"dll","file_size":"277504","signature":null,"firstseen":"2021-01-14 06:04:20","urlhaus_download":"https://urlhaus-api.abuse.ch/v1/download/fb25d13188a5d0913bbcf5aeff6c7e3208ad92a7d10ab6bed2735f4d43310a27/","virustotal":null,"imphash":"68aea345b134d576ccdef7f06db86088","ssdeep":"6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGz:X5DpBw/KViMTB1MnEWk0115JU","tlsh":"9244D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717"}',
      type: 'indicator',
    },
    related: {
      hash: [
        'ff60107d82dcda7e6726d214528758e7',
        'fb25d13188a5d0913bbcf5aeff6c7e3208ad92a7d10ab6bed2735f4d43310a27',
        '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGz:X5DpBw/KViMTB1MnEWk0115JU',
        '68aea345b134d576ccdef7f06db86088',
        '9244D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'fb25d13188a5d0913bbcf5aeff6c7e3208ad92a7d10ab6bed2735f4d43310a27',
        file: {
          hash: {
            md5: 'ff60107d82dcda7e6726d214528758e7',
            sha256:
              'fb25d13188a5d0913bbcf5aeff6c7e3208ad92a7d10ab6bed2735f4d43310a27',
            ssdeep:
              '6144:+60EDP6uCLfGw/GpxXinM1BCo1PlumGx2mx2tXd0t115JGz:X5DpBw/KViMTB1MnEWk0115JU',
            tlsh: '9244D022AD13DD37E1F400FCA6A58F8561626E381F00A89777D41F8A98356F1BB2B717',
          },
          pe: {
            imphash: '68aea345b134d576ccdef7f06db86088',
          },
          size: 277504,
          type: 'dll',
        },
        first_seen: '2021-01-14T06:04:20.000Z',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 15,
          uploads: 1,
        },
        tags: ['exe'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"5bce7d528c1363104a93fbb5a7fa9bdd991ce929cc09cc7fb29052a68d4fd24b","sha3_384_hash":"3b454eb6421d17d093f19292b64d30bf918cb91e9322d0e2d2512857997f574ea2ca5b005133c16f6c33c7cee9c1bd0e","sha1_hash":"a71fd0504821092e003f350080a6bcc5fa6a972e","md5_hash":"0af07660056a692b7cb82fa329221ddd","first_seen":"2021-04-06 20:34:58","last_seen":null,"file_name":"SALM0BRU.exe","file_size":399872,"file_type_mime":"application/x-dosexec","file_type":"exe","reporter":"James_inthe_box","origin_country":"US","anonymous":0,"signature":null,"imphash":"f34d5f2d4577ed6d9ceec516c1f5a744","tlsh":"F9848B24AF932F9BC6CCC1FE50C2D165C9A9F85DD2B1251A73B6CB89FE00544ED2C686","telfhash":null,"ssdeep":"3072:DsPPK3p+8r5igrL1Tq50cVBDmDJhE9yV4veedHrP6FXK7:D+PL8bronBDmDJ69JeedHriFG","tags":["exe"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"15","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'a71fd0504821092e003f350080a6bcc5fa6a972e',
        '3b454eb6421d17d093f19292b64d30bf918cb91e9322d0e2d2512857997f574ea2ca5b005133c16f6c33c7cee9c1bd0e',
        '5bce7d528c1363104a93fbb5a7fa9bdd991ce929cc09cc7fb29052a68d4fd24b',
        'F9848B24AF932F9BC6CCC1FE50C2D165C9A9F85DD2B1251A73B6CB89FE00544ED2C686',
        '3072:DsPPK3p+8r5igrL1Tq50cVBDmDJhE9yV4veedHrP6FXK7:D+PL8bronBDmDJ69JeedHriFG',
        '0af07660056a692b7cb82fa329221ddd',
        'f34d5f2d4577ed6d9ceec516c1f5a744',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '5bce7d528c1363104a93fbb5a7fa9bdd991ce929cc09cc7fb29052a68d4fd24b',
        file: {
          elf: {},
          extension: 'exe',
          hash: {
            md5: '0af07660056a692b7cb82fa329221ddd',
            sha1: 'a71fd0504821092e003f350080a6bcc5fa6a972e',
            sha256:
              '5bce7d528c1363104a93fbb5a7fa9bdd991ce929cc09cc7fb29052a68d4fd24b',
            sha384:
              '3b454eb6421d17d093f19292b64d30bf918cb91e9322d0e2d2512857997f574ea2ca5b005133c16f6c33c7cee9c1bd0e',
            ssdeep:
              '3072:DsPPK3p+8r5igrL1Tq50cVBDmDJhE9yV4veedHrP6FXK7:D+PL8bronBDmDJ69JeedHriFG',
            tlsh: 'F9848B24AF932F9BC6CCC1FE50C2D165C9A9F85DD2B1251A73B6CB89FE00544ED2C686',
          },
          mime_type: 'application/x-dosexec',
          name: 'SALM0BRU.exe',
          pe: {
            imphash: 'f34d5f2d4577ed6d9ceec516c1f5a744',
          },
          size: 399872,
        },
        first_seen: '2021-04-06T20:34:58.000Z',
        geo: {
          country_iso_code: 'US',
        },
        provider: 'James_inthe_box',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 11,
          uploads: 1,
        },
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"83d0429a2c5f1b611ebc30391eeeb75bebb51212ee1af51dbcf2624b48f9d27f","sha3_384_hash":"0a1536add280715320040d5ac5340d3b205d90045ff5c90993b8e909edb9b3e9338b3ffbb3febcaf82584d00d516e8c7","sha1_hash":"c454be4eb0892d61a4ad6bac16f97724e73cd795","md5_hash":"296aad7075596d21516b30bfbc17fcac","first_seen":"2021-04-06 20:32:25","last_seen":null,"file_name":"PO_NO.ENQUIRY-210604.zip","file_size":476768,"file_type_mime":"application/zip","file_type":"zip","reporter":"GovCERT_CH","origin_country":"US","anonymous":0,"signature":null,"imphash":null,"tlsh":"74A4233B9A6D5CA02B224AA69F37537D13A8406300944EAEFD375CA431583056B9F6FF","telfhash":null,"ssdeep":"12288:j++y4mulTPaYJSaHwvJblQpLGwYeHU9vPpNGd+Zr:j3HPaMtQxblje01pNHZr","tags":null,"code_sign":[],"intelligence":{"clamav":null,"downloads":"11","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'c454be4eb0892d61a4ad6bac16f97724e73cd795',
        '0a1536add280715320040d5ac5340d3b205d90045ff5c90993b8e909edb9b3e9338b3ffbb3febcaf82584d00d516e8c7',
        '83d0429a2c5f1b611ebc30391eeeb75bebb51212ee1af51dbcf2624b48f9d27f',
        '74A4233B9A6D5CA02B224AA69F37537D13A8406300944EAEFD375CA431583056B9F6FF',
        '12288:j++y4mulTPaYJSaHwvJblQpLGwYeHU9vPpNGd+Zr:j3HPaMtQxblje01pNHZr',
        '296aad7075596d21516b30bfbc17fcac',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '83d0429a2c5f1b611ebc30391eeeb75bebb51212ee1af51dbcf2624b48f9d27f',
        file: {
          elf: {},
          extension: 'zip',
          hash: {
            md5: '296aad7075596d21516b30bfbc17fcac',
            sha1: 'c454be4eb0892d61a4ad6bac16f97724e73cd795',
            sha256:
              '83d0429a2c5f1b611ebc30391eeeb75bebb51212ee1af51dbcf2624b48f9d27f',
            sha384:
              '0a1536add280715320040d5ac5340d3b205d90045ff5c90993b8e909edb9b3e9338b3ffbb3febcaf82584d00d516e8c7',
            ssdeep:
              '12288:j++y4mulTPaYJSaHwvJblQpLGwYeHU9vPpNGd+Zr:j3HPaMtQxblje01pNHZr',
            tlsh: '74A4233B9A6D5CA02B224AA69F37537D13A8406300944EAEFD375CA431583056B9F6FF',
          },
          mime_type: 'application/zip',
          name: 'PO_NO.ENQUIRY-210604.zip',
          pe: {},
          size: 476768,
        },
        first_seen: '2021-04-06T20:32:25.000Z',
        geo: {
          country_iso_code: 'US',
        },
        provider: 'GovCERT_CH',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 30,
          uploads: 1,
        },
        tags: ['Hancitor'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"f4910ea08d14eeb634084de47cf590d4dc5e554552f111da20d22ae71d7b425b","sha3_384_hash":"ee7586cb085fde3c14c9c1bea4635ccb30b1af2020f64e87a9983e61b05026ec9b35255670a3d9ecaab436c4ba302dcc","sha1_hash":"bf103996196df8255881127dee103c22fc12bef3","md5_hash":"a4838dd31c672122441bebcbf7e9d277","first_seen":"2021-04-06 20:12:29","last_seen":null,"file_name":"DropDll.dat","file_size":435926,"file_type_mime":"application/x-dosexec","file_type":"dll","reporter":"DmitriyMelikov","origin_country":"DE","anonymous":0,"signature":"Hancitor","imphash":"0b5a952a025c2783c3126cdb9bef2844","tlsh":"0C947D11BA96C473E572163008399F6A17BE7A900B704BDBE3CC097E4E755C24B36BA7","telfhash":null,"ssdeep":"12288:L2X/txpFDEVkUNglTovKfoLy+hqK/cEUMMlGOG:RzglgLm/9lGOG","tags":["Hancitor"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"30","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'bf103996196df8255881127dee103c22fc12bef3',
        'ee7586cb085fde3c14c9c1bea4635ccb30b1af2020f64e87a9983e61b05026ec9b35255670a3d9ecaab436c4ba302dcc',
        'f4910ea08d14eeb634084de47cf590d4dc5e554552f111da20d22ae71d7b425b',
        '0C947D11BA96C473E572163008399F6A17BE7A900B704BDBE3CC097E4E755C24B36BA7',
        '12288:L2X/txpFDEVkUNglTovKfoLy+hqK/cEUMMlGOG:RzglgLm/9lGOG',
        'a4838dd31c672122441bebcbf7e9d277',
        '0b5a952a025c2783c3126cdb9bef2844',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'f4910ea08d14eeb634084de47cf590d4dc5e554552f111da20d22ae71d7b425b',
        file: {
          elf: {},
          extension: 'dll',
          hash: {
            md5: 'a4838dd31c672122441bebcbf7e9d277',
            sha1: 'bf103996196df8255881127dee103c22fc12bef3',
            sha256:
              'f4910ea08d14eeb634084de47cf590d4dc5e554552f111da20d22ae71d7b425b',
            sha384:
              'ee7586cb085fde3c14c9c1bea4635ccb30b1af2020f64e87a9983e61b05026ec9b35255670a3d9ecaab436c4ba302dcc',
            ssdeep:
              '12288:L2X/txpFDEVkUNglTovKfoLy+hqK/cEUMMlGOG:RzglgLm/9lGOG',
            tlsh: '0C947D11BA96C473E572163008399F6A17BE7A900B704BDBE3CC097E4E755C24B36BA7',
          },
          mime_type: 'application/x-dosexec',
          name: 'DropDll.dat',
          pe: {
            imphash: '0b5a952a025c2783c3126cdb9bef2844',
          },
          size: 435926,
        },
        first_seen: '2021-04-06T20:12:29.000Z',
        geo: {
          country_iso_code: 'DE',
        },
        provider: 'DmitriyMelikov',
        type: 'file',
      },
      software: {
        alias: 'Hancitor',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 27,
          uploads: 1,
        },
        tags: ['backdoor', 'python'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"e45ffc61a85c2f5c0cbe9376ff215cad324bf14f925bf52ec0d2949f7d235a00","sha3_384_hash":"788f61cf45bbc8cad5775de18d0d5f42c4e028af0aaa34c570645efc96af8ebc3d7fe330aaf22ef34d35360bbd4a708c","sha1_hash":"a68ca1b41cb93fe2879bb3baeb8e19990758f099","md5_hash":"8d7c8b55ac49d241fb7f75a27a5ef8d5","first_seen":"2021-04-06 20:07:59","last_seen":null,"file_name":"vabsheche.py","file_size":11717,"file_type_mime":"text/x-script.python","file_type":"unknown","reporter":"ArkbirdDevil","origin_country":"FR","anonymous":0,"signature":null,"imphash":null,"tlsh":"AE3222515C6A881A03B3C66F7992B844FB588303C7116607F6FC86782F79568CAF1BBD","telfhash":null,"ssdeep":"192:z7X/yHo/yz/yBKiSOINLyhQMYd+LiTfq6LTf3ZoTta3Grj6rg2:z7CIKnNNLwufPfAPq7","tags":["backdoor","python"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"27","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'a68ca1b41cb93fe2879bb3baeb8e19990758f099',
        '788f61cf45bbc8cad5775de18d0d5f42c4e028af0aaa34c570645efc96af8ebc3d7fe330aaf22ef34d35360bbd4a708c',
        'e45ffc61a85c2f5c0cbe9376ff215cad324bf14f925bf52ec0d2949f7d235a00',
        'AE3222515C6A881A03B3C66F7992B844FB588303C7116607F6FC86782F79568CAF1BBD',
        '192:z7X/yHo/yz/yBKiSOINLyhQMYd+LiTfq6LTf3ZoTta3Grj6rg2:z7CIKnNNLwufPfAPq7',
        '8d7c8b55ac49d241fb7f75a27a5ef8d5',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'e45ffc61a85c2f5c0cbe9376ff215cad324bf14f925bf52ec0d2949f7d235a00',
        file: {
          elf: {},
          extension: 'unknown',
          hash: {
            md5: '8d7c8b55ac49d241fb7f75a27a5ef8d5',
            sha1: 'a68ca1b41cb93fe2879bb3baeb8e19990758f099',
            sha256:
              'e45ffc61a85c2f5c0cbe9376ff215cad324bf14f925bf52ec0d2949f7d235a00',
            sha384:
              '788f61cf45bbc8cad5775de18d0d5f42c4e028af0aaa34c570645efc96af8ebc3d7fe330aaf22ef34d35360bbd4a708c',
            ssdeep:
              '192:z7X/yHo/yz/yBKiSOINLyhQMYd+LiTfq6LTf3ZoTta3Grj6rg2:z7CIKnNNLwufPfAPq7',
            tlsh: 'AE3222515C6A881A03B3C66F7992B844FB588303C7116607F6FC86782F79568CAF1BBD',
          },
          mime_type: 'text/x-script.python',
          name: 'vabsheche.py',
          pe: {},
          size: 11717,
        },
        first_seen: '2021-04-06T20:07:59.000Z',
        geo: {
          country_iso_code: 'FR',
        },
        provider: 'ArkbirdDevil',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 21,
          uploads: 1,
        },
        tags: ['maldoc'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4","sha3_384_hash":"752e5d56a166227d06f8cbd40cd3f693f543f9c3f798c673c1430957bb7e149a12d9158138fa449479105f472e70f68f","sha1_hash":"e8378aede9f26f09b7d503d79a05d67612be15f6","md5_hash":"fe185f106730583156f39233f77f8019","first_seen":"2021-04-06 20:00:48","last_seen":null,"file_name":"42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4.bin","file_size":7929856,"file_type_mime":"application/msword","file_type":"docx","reporter":"ArkbirdDevil","origin_country":"FR","anonymous":0,"signature":null,"imphash":null,"tlsh":"13863341B085EE2EE2CA41BA0DA9C2BD43B63D131E054F677269B72D3EB76E0E7D4144","telfhash":null,"ssdeep":"196608:KQaeKLOiBEp+uc+iuYmbMdHmN1Rwyd2jecXeaH1pHE+2:oeIOTp+p+iNJC1ChjhXZ1pHz2","tags":["maldoc"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"21","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'e8378aede9f26f09b7d503d79a05d67612be15f6',
        '752e5d56a166227d06f8cbd40cd3f693f543f9c3f798c673c1430957bb7e149a12d9158138fa449479105f472e70f68f',
        '42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4',
        '13863341B085EE2EE2CA41BA0DA9C2BD43B63D131E054F677269B72D3EB76E0E7D4144',
        '196608:KQaeKLOiBEp+uc+iuYmbMdHmN1Rwyd2jecXeaH1pHE+2:oeIOTp+p+iNJC1ChjhXZ1pHz2',
        'fe185f106730583156f39233f77f8019',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4',
        file: {
          elf: {},
          extension: 'docx',
          hash: {
            md5: 'fe185f106730583156f39233f77f8019',
            sha1: 'e8378aede9f26f09b7d503d79a05d67612be15f6',
            sha256:
              '42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4',
            sha384:
              '752e5d56a166227d06f8cbd40cd3f693f543f9c3f798c673c1430957bb7e149a12d9158138fa449479105f472e70f68f',
            ssdeep:
              '196608:KQaeKLOiBEp+uc+iuYmbMdHmN1Rwyd2jecXeaH1pHE+2:oeIOTp+p+iNJC1ChjhXZ1pHz2',
            tlsh: '13863341B085EE2EE2CA41BA0DA9C2BD43B63D131E054F677269B72D3EB76E0E7D4144',
          },
          mime_type: 'application/msword',
          name: '42f5f5474431738f91f612d9765b3fc9b85a547274ea64aa034298ad97ad28f4.bin',
          pe: {},
          size: 7929856,
        },
        first_seen: '2021-04-06T20:00:48.000Z',
        geo: {
          country_iso_code: 'FR',
        },
        provider: 'ArkbirdDevil',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 30,
          uploads: 1,
        },
        tags: ['apt', 'tonto'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"2d705f0b76f24a18e08163db2f187140ee9f03e43697a9ea0d840c829692d43c","sha3_384_hash":"c82132559381b7b3b184b4ce8c7a58c301a46001621f346b637139f5987dee968ae2ef009a17b2388852b2db15a45b58","sha1_hash":"b2da45913353bfc66d189455f9ad80ef26968143","md5_hash":"70da6872b6b2da9ddc94d14b02302917","first_seen":"2021-04-06 19:58:50","last_seen":null,"file_name":"winlog.wll","file_size":131584,"file_type_mime":"application/x-dosexec","file_type":"dll","reporter":"ArkbirdDevil","origin_country":"FR","anonymous":0,"signature":null,"imphash":"6476b7c4dd55eafbdf922a7ba1e2d5f9","tlsh":"A2D38C067790C071DAAF013908799E624B7F7D70DDB49D8B77841A8E69342D0AF3AB27","telfhash":null,"ssdeep":"1536:2NVi7z0r0lJRn6I8+YDgr1fnWG5Ff0+adgBYlCtMiQMX1c0E4JsWjcdonPv870E1:YM7zh8+Cofnp5eRm6riQ6OZoPv870E","tags":["apt","tonto"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"30","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'b2da45913353bfc66d189455f9ad80ef26968143',
        'c82132559381b7b3b184b4ce8c7a58c301a46001621f346b637139f5987dee968ae2ef009a17b2388852b2db15a45b58',
        '2d705f0b76f24a18e08163db2f187140ee9f03e43697a9ea0d840c829692d43c',
        'A2D38C067790C071DAAF013908799E624B7F7D70DDB49D8B77841A8E69342D0AF3AB27',
        '1536:2NVi7z0r0lJRn6I8+YDgr1fnWG5Ff0+adgBYlCtMiQMX1c0E4JsWjcdonPv870E1:YM7zh8+Cofnp5eRm6riQ6OZoPv870E',
        '70da6872b6b2da9ddc94d14b02302917',
        '6476b7c4dd55eafbdf922a7ba1e2d5f9',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '2d705f0b76f24a18e08163db2f187140ee9f03e43697a9ea0d840c829692d43c',
        file: {
          elf: {},
          extension: 'dll',
          hash: {
            md5: '70da6872b6b2da9ddc94d14b02302917',
            sha1: 'b2da45913353bfc66d189455f9ad80ef26968143',
            sha256:
              '2d705f0b76f24a18e08163db2f187140ee9f03e43697a9ea0d840c829692d43c',
            sha384:
              'c82132559381b7b3b184b4ce8c7a58c301a46001621f346b637139f5987dee968ae2ef009a17b2388852b2db15a45b58',
            ssdeep:
              '1536:2NVi7z0r0lJRn6I8+YDgr1fnWG5Ff0+adgBYlCtMiQMX1c0E4JsWjcdonPv870E1:YM7zh8+Cofnp5eRm6riQ6OZoPv870E',
            tlsh: 'A2D38C067790C071DAAF013908799E624B7F7D70DDB49D8B77841A8E69342D0AF3AB27',
          },
          mime_type: 'application/x-dosexec',
          name: 'winlog.wll',
          pe: {
            imphash: '6476b7c4dd55eafbdf922a7ba1e2d5f9',
          },
          size: 131584,
        },
        first_seen: '2021-04-06T19:58:50.000Z',
        geo: {
          country_iso_code: 'FR',
        },
        provider: 'ArkbirdDevil',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 32,
          uploads: 1,
        },
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606","sha3_384_hash":"a3ec981ed158fe08cc2cd97303807cfbed147e59ccfd92fcaa9395c5718b4d9b892d6e9fa6337f5976dc1bd042562fe4","sha1_hash":"3d613d5678e43faeea1c636185a0b4c3ec80e742","md5_hash":"de80e1d7d9f5b1c64ec9f8d4f5063989","first_seen":"2021-04-06 19:58:44","last_seen":null,"file_name":"30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606.bin.sample","file_size":1088000,"file_type_mime":"application/msword","file_type":"docx","reporter":"DmitriyMelikov","origin_country":"DE","anonymous":0,"signature":null,"imphash":null,"tlsh":"8635D001BA82C573D5621A35083ADBAA177E7D604F704ADBB3C83B2E5D355C14B32BA7","telfhash":null,"ssdeep":"24576:WKEiZxl3A4yJJG2dPQQCthXzglgLm/9lGO:WKEGByvGOQQC/XElga/9lGO","tags":null,"code_sign":[],"intelligence":{"clamav":null,"downloads":"32","uploads":"1","mail":null}}',
      type: 'indicator',
    },
    related: {
      hash: [
        '3d613d5678e43faeea1c636185a0b4c3ec80e742',
        'a3ec981ed158fe08cc2cd97303807cfbed147e59ccfd92fcaa9395c5718b4d9b892d6e9fa6337f5976dc1bd042562fe4',
        '30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606',
        '8635D001BA82C573D5621A35083ADBAA177E7D604F704ADBB3C83B2E5D355C14B32BA7',
        '24576:WKEiZxl3A4yJJG2dPQQCthXzglgLm/9lGO:WKEGByvGOQQC/XElga/9lGO',
        'de80e1d7d9f5b1c64ec9f8d4f5063989',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606',
        file: {
          elf: {},
          extension: 'docx',
          hash: {
            md5: 'de80e1d7d9f5b1c64ec9f8d4f5063989',
            sha1: '3d613d5678e43faeea1c636185a0b4c3ec80e742',
            sha256:
              '30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606',
            sha384:
              'a3ec981ed158fe08cc2cd97303807cfbed147e59ccfd92fcaa9395c5718b4d9b892d6e9fa6337f5976dc1bd042562fe4',
            ssdeep:
              '24576:WKEiZxl3A4yJJG2dPQQCthXzglgLm/9lGO:WKEGByvGOQQC/XElga/9lGO',
            tlsh: '8635D001BA82C573D5621A35083ADBAA177E7D604F704ADBB3C83B2E5D355C14B32BA7',
          },
          mime_type: 'application/msword',
          name: '30787f32adc487311d764b19d4504fdeab08c0d385e2fa065bd8d5836c031606.bin.sample',
          pe: {},
          size: 1088000,
        },
        first_seen: '2021-04-06T19:58:44.000Z',
        geo: {
          country_iso_code: 'DE',
        },
        provider: 'DmitriyMelikov',
        type: 'file',
      },
      software: {},
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 38,
          mail: {
            Generic: 'low',
          },
          uploads: 1,
        },
        tags: ['exe', 'SnakeKeylogger'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"84f983067868de50e5b1553782c056c1f5b5118bb2084473ca4b6908f221cd3b","sha3_384_hash":"138dc28a74d15c1f9797ce732e99097c8c6db4549cb17cb7b20c1c6738a170328e45aea2d4c3b593912f14a97f521c1d","sha1_hash":"00b52e8ca1785d5086703ad8cff1d28fc3354934","md5_hash":"2759c73c986c6a757bf9d25621c5595a","first_seen":"2021-04-06 19:52:32","last_seen":null,"file_name":"Purchase Order.8000.scan.pdf...exe","file_size":752128,"file_type_mime":"application/x-dosexec","file_type":"exe","reporter":"James_inthe_box","origin_country":"FR","anonymous":0,"signature":"SnakeKeylogger","imphash":"f34d5f2d4577ed6d9ceec516c1f5a744","tlsh":"23F4AE212684C9C0D93E67B4D43584F003BABD16D631F69F6E887C693EB32D2D63B646","telfhash":null,"ssdeep":"12288:8t11ulRZRLZNh4YeX6f6XmwNShqE73YXy7moh:S11gZpZNmBX06WmAcy7m0","tags":["exe","SnakeKeylogger"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"38","uploads":"1","mail":{"Generic":"low"}}}',
      type: 'indicator',
    },
    related: {
      hash: [
        '00b52e8ca1785d5086703ad8cff1d28fc3354934',
        '138dc28a74d15c1f9797ce732e99097c8c6db4549cb17cb7b20c1c6738a170328e45aea2d4c3b593912f14a97f521c1d',
        '84f983067868de50e5b1553782c056c1f5b5118bb2084473ca4b6908f221cd3b',
        '23F4AE212684C9C0D93E67B4D43584F003BABD16D631F69F6E887C693EB32D2D63B646',
        '12288:8t11ulRZRLZNh4YeX6f6XmwNShqE73YXy7moh:S11gZpZNmBX06WmAcy7m0',
        '2759c73c986c6a757bf9d25621c5595a',
        'f34d5f2d4577ed6d9ceec516c1f5a744',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '84f983067868de50e5b1553782c056c1f5b5118bb2084473ca4b6908f221cd3b',
        file: {
          elf: {},
          extension: 'exe',
          hash: {
            md5: '2759c73c986c6a757bf9d25621c5595a',
            sha1: '00b52e8ca1785d5086703ad8cff1d28fc3354934',
            sha256:
              '84f983067868de50e5b1553782c056c1f5b5118bb2084473ca4b6908f221cd3b',
            sha384:
              '138dc28a74d15c1f9797ce732e99097c8c6db4549cb17cb7b20c1c6738a170328e45aea2d4c3b593912f14a97f521c1d',
            ssdeep:
              '12288:8t11ulRZRLZNh4YeX6f6XmwNShqE73YXy7moh:S11gZpZNmBX06WmAcy7m0',
            tlsh: '23F4AE212684C9C0D93E67B4D43584F003BABD16D631F69F6E887C693EB32D2D63B646',
          },
          mime_type: 'application/x-dosexec',
          name: 'Purchase Order.8000.scan.pdf...exe',
          pe: {
            imphash: 'f34d5f2d4577ed6d9ceec516c1f5a744',
          },
          size: 752128,
        },
        first_seen: '2021-04-06T19:52:32.000Z',
        geo: {
          country_iso_code: 'FR',
        },
        provider: 'James_inthe_box',
        type: 'file',
      },
      software: {
        alias: 'SnakeKeylogger',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [],
        intelligence: {
          downloads: 40,
          mail: {
            Generic: 'low',
          },
          uploads: 1,
        },
        tags: ['AgentTesla', 'exe'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"0661d87116f44cbd5b5c6bec7fb06c4e5cd5b6ecbc5455d959e65f1ee46c54c8","sha3_384_hash":"ed5d03454121d81adf65a01ba90af81b1a7cea052709c22bb9170508069d17242861f85e5546b2cc3efb07c10926368c","sha1_hash":"a34fd5e57d75d17bc2d84055ca4752e5ee2e92f5","md5_hash":"596b3dbf07a287dcf76860b5e54762c3","first_seen":"2021-04-06 19:47:13","last_seen":null,"file_name":"New Order PO#121012020_____PDF_______.exe","file_size":836096,"file_type_mime":"application/x-dosexec","file_type":"exe","reporter":"James_inthe_box","origin_country":"FR","anonymous":0,"signature":"AgentTesla","imphash":"f34d5f2d4577ed6d9ceec516c1f5a744","tlsh":"A505CF712694C9A4FABD53B80434403007F5FE42E232FA9A6FD17C993E72782DA3B655","telfhash":null,"ssdeep":"12288:qRedcNeqimzAEmN03VgdZfBOMx+RVBM7pdWje9ppB5nAZGNY2:ZaNeqikqN0udZfBFUYp55nFN","tags":["AgentTesla","exe"],"code_sign":[],"intelligence":{"clamav":null,"downloads":"40","uploads":"1","mail":{"Generic":"low"}}}',
      type: 'indicator',
    },
    related: {
      hash: [
        'a34fd5e57d75d17bc2d84055ca4752e5ee2e92f5',
        'ed5d03454121d81adf65a01ba90af81b1a7cea052709c22bb9170508069d17242861f85e5546b2cc3efb07c10926368c',
        '0661d87116f44cbd5b5c6bec7fb06c4e5cd5b6ecbc5455d959e65f1ee46c54c8',
        'A505CF712694C9A4FABD53B80434403007F5FE42E232FA9A6FD17C993E72782DA3B655',
        '12288:qRedcNeqimzAEmN03VgdZfBOMx+RVBM7pdWje9ppB5nAZGNY2:ZaNeqikqN0udZfBFUYp55nFN',
        '596b3dbf07a287dcf76860b5e54762c3',
        'f34d5f2d4577ed6d9ceec516c1f5a744',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '0661d87116f44cbd5b5c6bec7fb06c4e5cd5b6ecbc5455d959e65f1ee46c54c8',
        file: {
          elf: {},
          extension: 'exe',
          hash: {
            md5: '596b3dbf07a287dcf76860b5e54762c3',
            sha1: 'a34fd5e57d75d17bc2d84055ca4752e5ee2e92f5',
            sha256:
              '0661d87116f44cbd5b5c6bec7fb06c4e5cd5b6ecbc5455d959e65f1ee46c54c8',
            sha384:
              'ed5d03454121d81adf65a01ba90af81b1a7cea052709c22bb9170508069d17242861f85e5546b2cc3efb07c10926368c',
            ssdeep:
              '12288:qRedcNeqimzAEmN03VgdZfBOMx+RVBM7pdWje9ppB5nAZGNY2:ZaNeqikqN0udZfBFUYp55nFN',
            tlsh: 'A505CF712694C9A4FABD53B80434403007F5FE42E232FA9A6FD17C993E72782DA3B655',
          },
          mime_type: 'application/x-dosexec',
          name: 'New Order PO#121012020_____PDF_______.exe',
          pe: {
            imphash: 'f34d5f2d4577ed6d9ceec516c1f5a744',
          },
          size: 836096,
        },
        first_seen: '2021-04-06T19:47:13.000Z',
        geo: {
          country_iso_code: 'FR',
        },
        provider: 'James_inthe_box',
        type: 'file',
      },
      software: {
        alias: 'AgentTesla',
      },
    },
  },
  {
    '@timestamp': '2021-05-28T11:19:41.000Z',
    abusech: {
      malwarebazaar: {
        anonymous: 0,
        code_sign: [
          {
            algorithm: 'sha256WithRSAEncryption',
            cscb_listed: false,
            cscb_reason: '',
            issuer_cn: 'Sectigo RSA Code Signing CA',
            serial_number: 'e573d9c8b403c41bd59ffa0a8efd4168',
            subject_cn: '"VERONIKA 2" OOO',
            thumbprint:
              'a9ab2be0ea677c6c6ed67b23cfee0fa44bfb346a4bb720f10a3f02a78b8f5c82',
            thumbprint_algorithm: 'sha256',
            valid_from: '2019-07-15T00:00:00Z',
            valid_to: '2020-06-27T23:59:59Z',
          },
        ],
        dhash_icon: '79e4e4ccccc4c4c0',
        tags: ['Dridex', 'exe', 'signed'],
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"sha256_hash":"4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115","sha3_384_hash":null,"sha1_hash":"3a83bb68be29e1f18fc9d328d952fd228abfae2a","md5_hash":"e614a69d706913376ab2bb20a703dcf5","first_seen":"2022-08-30 22:36:54","last_seen":null,"file_name":"4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115","file_size":246816,"file_type_mime":"application/x-dosexec","file_type":"exe","reporter":"OSimao","anonymous":0,"signature":"Dridex","imphash":"53654c59ffb323a249342d35a6b65745","tlsh":"T17034B0A0F196C8DAF85765B54C5FE9201012AAAED4B1D51E20EB3B39E8F33531077A4F","telfhash":null,"gimphash":null,"ssdeep":"3072:KWiPOo14wwI606CzpJEPlp+K2b1WvAUQdk5m84D2KQdXtvkDqW0TrHbed2rT2pN8:KWdEj6rapJEPr11AXdQm84Dr0OOPSR4","dhash_icon":"79e4e4ccccc4c4c0","tags":["Dridex","exe","signed"],"code_sign":[{"subject_cn":"\\"VERONIKA 2\\" OOO","issuer_cn":"Sectigo RSA Code Signing CA","algorithm":"sha256WithRSAEncryption","valid_from":"2019-07-15T00:00:00Z","valid_to":"2020-06-27T23:59:59Z","serial_number":"e573d9c8b403c41bd59ffa0a8efd4168","thumbprint_algorithm":"SHA256","thumbprint":"a9ab2be0ea677c6c6ed67b23cfee0fa44bfb346a4bb720f10a3f02a78b8f5c82","cscb_listed":false,"cscb_reason":""}]}',
      type: 'indicator',
    },
    related: {
      hash: [
        '3a83bb68be29e1f18fc9d328d952fd228abfae2a',
        '4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115',
        'a9ab2be0ea677c6c6ed67b23cfee0fa44bfb346a4bb720f10a3f02a78b8f5c82',
        'T17034B0A0F196C8DAF85765B54C5FE9201012AAAED4B1D51E20EB3B39E8F33531077A4F',
        '3072:KWiPOo14wwI606CzpJEPlp+K2b1WvAUQdk5m84D2KQdXtvkDqW0TrHbed2rT2pN8:KWdEj6rapJEPr11AXdQm84Dr0OOPSR4',
        'e614a69d706913376ab2bb20a703dcf5',
        '53654c59ffb323a249342d35a6b65745',
      ],
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115',
        file: {
          elf: {},
          extension: 'exe',
          hash: {
            md5: 'e614a69d706913376ab2bb20a703dcf5',
            sha1: '3a83bb68be29e1f18fc9d328d952fd228abfae2a',
            sha256: [
              '4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115',
              'a9ab2be0ea677c6c6ed67b23cfee0fa44bfb346a4bb720f10a3f02a78b8f5c82',
            ],
            ssdeep:
              '3072:KWiPOo14wwI606CzpJEPlp+K2b1WvAUQdk5m84D2KQdXtvkDqW0TrHbed2rT2pN8:KWdEj6rapJEPr11AXdQm84Dr0OOPSR4',
            tlsh: 'T17034B0A0F196C8DAF85765B54C5FE9201012AAAED4B1D51E20EB3B39E8F33531077A4F',
          },
          mime_type: 'application/x-dosexec',
          name: '4fccd38f504290cf5c70e7336071a90a064303c7fdf5c17f7c38001768bce115',
          pe: {
            imphash: '53654c59ffb323a249342d35a6b65745',
          },
          size: 246816,
          x509: {
            issuer: {
              common_name: ['Sectigo RSA Code Signing CA'],
            },
            not_after: ['2020-06-27T23:59:59Z'],
            not_before: ['2019-07-15T00:00:00Z'],
            public_key_algorithm: ['sha256WithRSAEncryption'],
            serial_number: ['e573d9c8b403c41bd59ffa0a8efd4168'],
            subject: {
              common_name: ['"VERONIKA 2" OOO'],
            },
          },
        },
        first_seen: '2022-08-30T22:36:54.000Z',
        provider: 'OSimao',
        type: 'file',
      },
      software: {
        alias: 'Dridex',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.redline_stealer',
        tags: ['RedLineStealer'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841508',
      kind: 'enrichment',
      original:
        '{"id":"841508","ioc":"2a02:cf40:1::5:40669","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.redline_stealer","malware_printable":"RedLine Stealer","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.redline_stealer","confidence_level":100,"first_seen":"2022-08-05 11:40:15 UTC","last_seen":null,"reference":null,"reporter":"abuse_ch","tags":["RedLineStealer"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '2a02:cf40:1::5:40669',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:40:15.000Z',
        ip: '2a02:cf40:1::5',
        port: 40669,
        provider: 'abuse_ch',
        type: 'ipv6-addr',
      },
      software: {
        name: 'RedLine Stealer',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.redline_stealer',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 80,
        malware: 'apk.hydra',
        tags: ['apk', 'Hydra'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841507',
      kind: 'enrichment',
      original:
        '{"id":"841507","ioc":"http://malaikahlowry33.top","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"url","ioc_type_desc":"URL that is used for botnet Command\u0026control (C\u0026C)","malware":"apk.hydra","malware_printable":"Hydra","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/apk.hydra","confidence_level":80,"first_seen":"2022-08-05 11:36:10 UTC","last_seen":null,"reference":null,"reporter":"myonium1","tags":["apk","Hydra"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://malaikahlowry33.top',
        confidence: 'High',
        description:
          'URL that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:36:10.000Z',
        provider: 'myonium1',
        type: 'url',
        url: {
          domain: 'malaikahlowry33.top',
          original: 'http://malaikahlowry33.top',
          path: '',
          scheme: 'http',
        },
      },
      software: {
        name: 'Hydra',
        reference: 'https://malpedia.caad.fkie.fraunhofer.de/details/apk.hydra',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.redline_stealer',
        tags: ['RedLineStealer'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841506',
      kind: 'enrichment',
      original:
        '{"id":"841506","ioc":"81.2.69.142:80","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.redline_stealer","malware_printable":"RedLine Stealer","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.redline_stealer","confidence_level":100,"first_seen":"2022-08-05 11:25:24 UTC","last_seen":null,"reference":null,"reporter":"abuse_ch","tags":["RedLineStealer"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:25:24.000Z',
        ip: '81.2.69.142',
        port: 80,
        provider: 'abuse_ch',
        type: 'ipv4-addr',
      },
      software: {
        name: 'RedLine Stealer',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.redline_stealer',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 75,
        malware: 'win.asyncrat',
        tags: ['asyncrat'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841505',
      kind: 'enrichment',
      original:
        '{"id":"841505","ioc":"81.2.69.142:8808","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.asyncrat","malware_printable":"AsyncRAT","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat","confidence_level":75,"first_seen":"2022-08-05 11:10:13 UTC","last_seen":null,"reference":"https://bazaar.abuse.ch/sample/45e87ee0b025a7e4a783a6786564982e7735c8c50d0b3d84a3d5dd90ce735cfe/","reporter":"abuse_ch","tags":["asyncrat"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:10:13.000Z',
        ip: '81.2.69.142',
        port: 8808,
        provider: 'abuse_ch',
        reference:
          'https://bazaar.abuse.ch/sample/45e87ee0b025a7e4a783a6786564982e7735c8c50d0b3d84a3d5dd90ce735cfe/',
        type: 'ipv4-addr',
      },
      software: {
        name: 'AsyncRAT',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 75,
        malware: 'win.asyncrat',
        tags: ['asyncrat'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841504',
      kind: 'enrichment',
      original:
        '{"id":"841504","ioc":"81.2.69.142:6606","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.asyncrat","malware_printable":"AsyncRAT","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat","confidence_level":75,"first_seen":"2022-08-05 11:10:12 UTC","last_seen":null,"reference":"https://bazaar.abuse.ch/sample/45e87ee0b025a7e4a783a6786564982e7735c8c50d0b3d84a3d5dd90ce735cfe/","reporter":"abuse_ch","tags":["asyncrat"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:10:12.000Z',
        ip: '81.2.69.142',
        port: 6606,
        provider: 'abuse_ch',
        reference:
          'https://bazaar.abuse.ch/sample/45e87ee0b025a7e4a783a6786564982e7735c8c50d0b3d84a3d5dd90ce735cfe/',
        type: 'ipv4-addr',
      },
      software: {
        name: 'AsyncRAT',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.asyncrat',
        tags: ['asyncrat', 'RAT'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841503',
      kind: 'enrichment',
      original:
        '{"id":"841503","ioc":"81.2.69.142:7707","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.asyncrat","malware_printable":"AsyncRAT","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat","confidence_level":100,"first_seen":"2022-08-05 11:05:33 UTC","last_seen":null,"reference":null,"reporter":"abuse_ch","tags":["asyncrat","RAT"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T11:05:33.000Z',
        ip: '81.2.69.142',
        port: 7707,
        provider: 'abuse_ch',
        type: 'ipv4-addr',
      },
      software: {
        name: 'AsyncRAT',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 75,
        malware: 'elf.mirai',
        tags: ['Mirai'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841502',
      kind: 'enrichment',
      original:
        '{"id":"841502","ioc":"81.2.69.142:38241","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"elf.mirai","malware_printable":"Mirai","malware_alias":"Katana","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/elf.mirai","confidence_level":75,"first_seen":"2022-08-05 10:40:07 UTC","last_seen":null,"reference":"https://bazaar.abuse.ch/sample/2373eac488f89172263c8ea1d996d74d90803c54762cedf5808f05b9d6d341f1/","reporter":"abuse_ch","tags":["Mirai"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T10:40:07.000Z',
        ip: '81.2.69.142',
        port: 38241,
        provider: 'abuse_ch',
        reference:
          'https://bazaar.abuse.ch/sample/2373eac488f89172263c8ea1d996d74d90803c54762cedf5808f05b9d6d341f1/',
        type: 'ipv4-addr',
      },
      software: {
        alias: ['Katana'],
        name: 'Mirai',
        reference: 'https://malpedia.caad.fkie.fraunhofer.de/details/elf.mirai',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.njrat',
        tags: ['njrat'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841501',
      kind: 'enrichment',
      original:
        '{"id":"841501","ioc":"81.2.69.142:5552","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.njrat","malware_printable":"NjRAT","malware_alias":"Bladabindi","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.njrat","confidence_level":100,"first_seen":"2022-08-05 10:35:24 UTC","last_seen":null,"reference":null,"reporter":"abuse_ch","tags":["njrat"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T10:35:24.000Z',
        ip: '81.2.69.142',
        port: 5552,
        provider: 'abuse_ch',
        type: 'ipv4-addr',
      },
      software: {
        alias: ['Bladabindi'],
        name: 'NjRAT',
        reference: 'https://malpedia.caad.fkie.fraunhofer.de/details/win.njrat',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841500',
      kind: 'enrichment',
      original:
        '{"id":"841500","ioc":"81.2.69.142:80","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 10:28:53 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T10:28:53.000Z',
        ip: '81.2.69.142',
        port: 80,
        provider: 'drb_ra',
        type: 'ipv4-addr',
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2022-08-30T22:36:54.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841499',
      kind: 'enrichment',
      original:
        '{"id":"841499","ioc":"http://72.11.148.153/jquery-3.3.1.min.js","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"url","ioc_type_desc":"URL that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 10:28:52 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://72.11.148.153/jquery-3.3.1.min.js',
        confidence: 'High',
        description:
          'URL that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T10:28:52.000Z',
        provider: 'drb_ra',
        type: 'url',
        url: {
          domain: '72.11.148.153',
          extension: 'js',
          original: 'http://72.11.148.153/jquery-3.3.1.min.js',
          path: '/jquery-3.3.1.min.js',
          scheme: 'http',
        },
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2022-08-05T03:24:18.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841440',
      kind: 'enrichment',
      original:
        '{"id":"841440","ioc":"81.2.69.142:80","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 03:24:11 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T03:24:11.000Z',
        ip: '81.2.69.142',
        port: 80,
        provider: 'drb_ra',
        type: 'ipv4-addr',
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2022-08-05T03:24:11.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841439',
      kind: 'enrichment',
      original:
        '{"id":"841439","ioc":"http://43.138.129.56/cm","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"url","ioc_type_desc":"URL that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 03:24:10 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://43.138.129.56/cm',
        confidence: 'High',
        description:
          'URL that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T03:24:10.000Z',
        provider: 'drb_ra',
        type: 'url',
        url: {
          domain: '43.138.129.56',
          original: 'http://43.138.129.56/cm',
          path: '/cm',
          scheme: 'http',
        },
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2021-08-05T03:24:10.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike', 'STARK-INDUSTRIES-SOLUTIONS-AS'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841438',
      kind: 'enrichment',
      original:
        '{"id":"841438","ioc":"81.2.69.142:443","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"ip:port","ioc_type_desc":"ip:port combination that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 03:23:36 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike","STARK-INDUSTRIES-SOLUTIONS-AS"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '81.2.69.142',
        confidence: 'High',
        description:
          'ip:port combination that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T03:23:36.000Z',
        ip: '81.2.69.142',
        port: 443,
        provider: 'drb_ra',
        type: 'ipv4-addr',
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2021-08-05T03:23:36.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike', 'STARK-INDUSTRIES-SOLUTIONS-AS'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841437',
      kind: 'enrichment',
      original:
        '{"id":"841437","ioc":"https://194.87.216.182/push","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"url","ioc_type_desc":"URL that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 03:23:35 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike","STARK-INDUSTRIES-SOLUTIONS-AS"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'https://194.87.216.182/push',
        confidence: 'High',
        description:
          'URL that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T03:23:35.000Z',
        provider: 'drb_ra',
        type: 'url',
        url: {
          domain: '194.87.216.182',
          original: 'https://194.87.216.182/push',
          path: '/push',
          scheme: 'https',
        },
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2022-08-05T03:23:35.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.cobalt_strike',
        tags: ['CobaltStrike', 'STARK-INDUSTRIES-SOLUTIONS-AS'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841436',
      kind: 'enrichment',
      original:
        '{"id":"841436","ioc":"https://77.91.102.151/push","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"url","ioc_type_desc":"URL that is used for botnet Command\u0026control (C\u0026C)","malware":"win.cobalt_strike","malware_printable":"Cobalt Strike","malware_alias":"Agentemis,BEACON,CobaltStrike,cobeacon","malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike","confidence_level":100,"first_seen":"2022-08-05 03:23:33 UTC","last_seen":null,"reference":null,"reporter":"drb_ra","tags":["CobaltStrike","STARK-INDUSTRIES-SOLUTIONS-AS"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'https://77.91.102.151/push',
        confidence: 'High',
        description:
          'URL that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T03:23:33.000Z',
        provider: 'drb_ra',
        type: 'url',
        url: {
          domain: '77.91.102.151',
          original: 'https://77.91.102.151/push',
          path: '/push',
          scheme: 'https',
        },
      },
      software: {
        alias: ['Agentemis', 'BEACON', 'CobaltStrike', 'cobeacon'],
        name: 'Cobalt Strike',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike',
      },
    },
  },
  {
    '@timestamp': '2022-08-05T03:23:32.000Z',
    abusech: {
      threatfox: {
        confidence_level: 100,
        malware: 'win.asyncrat',
        tags: ['asyncrat'],
        threat_type: 'botnet_cc',
        threat_type_desc:
          'Indicator that identifies a botnet command\u0026control server (C\u0026C)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '841537',
      kind: 'enrichment',
      original:
        '{"id":"841537","ioc":"wizzy.hopto.org","threat_type":"botnet_cc","threat_type_desc":"Indicator that identifies a botnet command\u0026control server (C\u0026C)","ioc_type":"domain","ioc_type_desc":"Domain that is used for botnet Command\u0026control (C\u0026C)","malware":"win.asyncrat","malware_printable":"AsyncRAT","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat","confidence_level":100,"first_seen":"2022-08-05 19:43:08 UTC","last_seen":null,"reference":"https://tria.ge/220805-w57pxsgae2","reporter":"AndreGironda","tags":["asyncrat"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'wizzy.hopto.org',
        confidence: 'High',
        description:
          'Domain that is used for botnet Command\u0026control (C\u0026C)',
        first_seen: '2022-08-05T19:43:08.000Z',
        provider: 'AndreGironda',
        reference: 'https://tria.ge/220805-w57pxsgae2',
        type: 'domain-name',
        url: {
          domain: 'wizzy.hopto.org',
        },
      },
      software: {
        name: 'AsyncRAT',
        reference:
          'https://malpedia.caad.fkie.fraunhofer.de/details/win.asyncrat',
      },
    },
  },
  {
    '@timestamp': '2021-08-05T19:43:08.000Z',
    abusech: {
      threatfox: {
        confidence_level: 75,
        malware: 'win.vidar',
        tags: ['Vidar'],
        threat_type: 'payload',
        threat_type_desc:
          'Indicator that identifies a malware sample (payload)',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      id: '839586',
      kind: 'enrichment',
      original:
        '{"id":"839586","ioc":"872ff530d50579ae6bdc7cb4d658324b1d0e7a3e","threat_type":"payload","threat_type_desc":"Indicator that identifies a malware sample (payload)","ioc_type":"sha1_hash","ioc_type_desc":"SHA1 hash of a malware sample (payload)","malware":"win.vidar","malware_printable":"Vidar","malware_alias":null,"malware_malpedia":"https://malpedia.caad.fkie.fraunhofer.de/details/win.vidar","confidence_level":75,"first_seen":"2022-07-25 22:27:09 UTC","last_seen":null,"reference":"","reporter":"crep1x","tags":["Vidar"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '872ff530d50579ae6bdc7cb4d658324b1d0e7a3e',
        confidence: 'High',
        description: 'SHA1 hash of a malware sample (payload)',
        file: {
          hash: {
            sha1: '872ff530d50579ae6bdc7cb4d658324b1d0e7a3e',
          },
        },
        first_seen: '2022-07-25T22:27:09.000Z',
        provider: 'crep1x',
        reference: '',
        type: 'file',
      },
      software: {
        name: 'Vidar',
        reference: 'https://malpedia.caad.fkie.fraunhofer.de/details/win.vidar',
      },
    },
  },
  {
    '@timestamp': '2022-07-25T22:27:09.000Z',
    abusech: {
      url: {
        blacklists: {
          spamhaus_dbl: 'not listed',
          surbl: 'not listed',
        },
        id: '961548',
        larted: false,
        tags: ['elf', 'Mozi'],
        threat: 'malware_download',
        url_status: 'online',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"id":"961548","urlhaus_reference":"https://urlhaus.abuse.ch/url/961548/","url":"http://89.160.20.156:34613/Mozi.m","url_status":"online","host":"89.160.20.156","date_added":"2021-01-14 21:19:13 UTC","threat":"malware_download","blacklists":{"spamhaus_dbl":"not listed","surbl":"not listed"},"reporter":"lrz_urlhaus","larted":"false","tags":["elf","Mozi"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://89.160.20.156:34613/Mozi.m',
        first_seen: '2021-01-14T21:19:13.000Z',
        ip: '89.160.20.156',
        provider: 'lrz_urlhaus',
        reference: 'https://urlhaus.abuse.ch/url/961548/',
        type: 'url',
        url: {
          domain: '89.160.20.156',
          extension: 'm',
          full: 'http://89.160.20.156:34613/Mozi.m',
          original: 'http://89.160.20.156:34613/Mozi.m',
          path: '/Mozi.m',
          port: 34613,
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:13.000Z',
    abusech: {
      url: {
        blacklists: {
          spamhaus_dbl: 'not listed',
          surbl: 'not listed',
        },
        id: '961546',
        larted: false,
        tags: ['elf', 'Mozi'],
        threat: 'malware_download',
        url_status: 'online',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"id":"961546","urlhaus_reference":"https://urlhaus.abuse.ch/url/961546/","url":"http://89.160.20.156:44941/Mozi.m","url_status":"online","host":"89.160.20.156","date_added":"2021-01-14 21:19:05 UTC","threat":"malware_download","blacklists":{"spamhaus_dbl":"not listed","surbl":"not listed"},"reporter":"lrz_urlhaus","larted":"false","tags":["elf","Mozi"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://89.160.20.156:44941/Mozi.m',
        first_seen: '2021-01-14T21:19:05.000Z',
        ip: '89.160.20.156',
        provider: 'lrz_urlhaus',
        reference: 'https://urlhaus.abuse.ch/url/961546/',
        type: 'url',
        url: {
          domain: '89.160.20.156',
          extension: 'm',
          full: 'http://89.160.20.156:44941/Mozi.m',
          original: 'http://89.160.20.156:44941/Mozi.m',
          path: '/Mozi.m',
          port: 44941,
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:05.000Z',
    abusech: {
      url: {
        blacklists: {
          spamhaus_dbl: 'not listed',
          surbl: 'not listed',
        },
        id: '961547',
        larted: false,
        tags: ['elf', 'Mozi'],
        threat: 'malware_download',
        url_status: 'online',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"id":"961547","urlhaus_reference":"https://urlhaus.abuse.ch/url/961547/","url":"http://89.160.20.156:37173/Mozi.m","url_status":"online","host":"89.160.20.156","date_added":"2021-01-14 21:19:05 UTC","threat":"malware_download","blacklists":{"spamhaus_dbl":"not listed","surbl":"not listed"},"reporter":"lrz_urlhaus","larted":"false","tags":["elf","Mozi"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://89.160.20.156:37173/Mozi.m',
        first_seen: '2021-01-14T21:19:05.000Z',
        ip: '89.160.20.156',
        provider: 'lrz_urlhaus',
        reference: 'https://urlhaus.abuse.ch/url/961547/',
        type: 'url',
        url: {
          domain: '89.160.20.156',
          extension: 'm',
          full: 'http://89.160.20.156:37173/Mozi.m',
          original: 'http://89.160.20.156:37173/Mozi.m',
          path: '/Mozi.m',
          port: 37173,
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:05.000Z',
    abusech: {
      url: {
        blacklists: {
          spamhaus_dbl: 'not listed',
          surbl: 'not listed',
        },
        id: '961545',
        larted: false,
        tags: ['elf', 'Mozi'],
        threat: 'malware_download',
        url_status: 'online',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"id":"961545","urlhaus_reference":"https://urlhaus.abuse.ch/url/961545/","url":"http://89.160.20.156:47545/Mozi.m","url_status":"online","host":"89.160.20.156","date_added":"2021-01-14 21:19:04 UTC","threat":"malware_download","blacklists":{"spamhaus_dbl":"not listed","surbl":"not listed"},"reporter":"lrz_urlhaus","larted":"false","tags":["elf","Mozi"]}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'http://89.160.20.156:47545/Mozi.m',
        first_seen: '2021-01-14T21:19:04.000Z',
        ip: '89.160.20.156',
        provider: 'lrz_urlhaus',
        reference: 'https://urlhaus.abuse.ch/url/961545/',
        type: 'url',
        url: {
          domain: '89.160.20.156',
          extension: 'm',
          full: 'http://89.160.20.156:47545/Mozi.m',
          original: 'http://89.160.20.156:47545/Mozi.m',
          path: '/Mozi.m',
          port: 47545,
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'public',
        confidence: 20,
        detail2: 'imported by user 41',
        id: '2919443327',
        import_session_id: '2832',
        itype: 'mal_domain',
        resource_uri: '/api/v1/intelligence/P30754856864/',
        severity: 'medium',
        source_feed_id: '3716',
        state: 'active',
        trusted_circle_ids: ['14'],
        update_id: '1561660927',
        value_type: 'domain',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 5,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'tsvkkasbc.example.net',
        as: {
          organization: {
            name: 'OVH Hosting',
          },
        },
        confidence: 'Low',
        first_seen: '2020-10-08T12:21:50.000Z',
        geo: {
          country_iso_code: 'FR',
          location: {
            lat: 48.8582,
            lon: 2.3387,
          },
        },
        ip: '192.168.113.39',
        last_seen: '2020-10-08T12:24:42.000Z',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'Phony generated indicator',
        type: 'domain-name',
        url: {
          domain: 'tsvkkasbc.example.net',
        },
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'public',
        confidence: 71,
        detail2: 'imported by user 329',
        id: '1958206567',
        import_session_id: '3544',
        itype: 'mal_ip',
        resource_uri: '/api/v1/intelligence/P36282461072/',
        severity: 'very-high',
        source_feed_id: '3817',
        state: 'active',
        trusted_circle_ids: ['500', '12'],
        update_id: '2406643974',
        value_type: 'ip',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 9,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '192.168.2.111',
        as: {
          organization: {
            name: 'IP Khnykin Vitaliy Yakovlevich',
          },
        },
        confidence: 'High',
        first_seen: '2020-10-08T12:21:59.000Z',
        geo: {
          country_iso_code: 'RU',
          location: {
            lat: 55.7386,
            lon: 37.6068,
          },
        },
        ip: '192.168.2.111',
        last_seen: '2020-10-08T12:24:42.000Z',
        marking: {
          tlp: ['WHITE'],
        },
        provider: 'Phony generated indicator',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'private',
        confidence: -1,
        detail2: 'imported by user 114',
        id: '2858143413',
        import_session_id: '3128',
        itype: 'mal_ip',
        resource_uri: '/api/v1/intelligence/P40686000387/',
        severity: 'high',
        source_feed_id: '2092',
        state: 'active',
        trusted_circle_ids: ['418', '729', '426'],
        update_id: '2322332062',
        value_type: 'ip',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 7,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '192.168.113.98',
        as: {
          number: 22773,
          organization: {
            name: 'Cox Communications',
          },
        },
        confidence: 'None',
        first_seen: '2020-10-08T12:22:11.000Z',
        geo: {
          country_iso_code: 'US',
          location: {
            lat: 41.7041,
            lon: -72.679,
          },
        },
        ip: '192.168.113.98',
        last_seen: '2020-10-08T12:24:42.000Z',
        marking: {
          tlp: ['AMBER'],
        },
        provider: 'Phony generated indicator',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'private',
        confidence: -1,
        detail2: 'imported by user 550',
        id: '3771950940',
        import_session_id: '1131',
        itype: 'mal_md5',
        resource_uri: '/api/v1/intelligence/P27709763562/',
        severity: 'medium',
        source_feed_id: '3473',
        state: 'active',
        trusted_circle_ids: ['153', '723'],
        update_id: '3068217706',
        value_type: 'md5',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 5,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'f73b8ba028d31dff5650c724a422254f7a8b7121',
        confidence: 'None',
        file: {
          hash: {
            sha1: 'f73b8ba028d31dff5650c724a422254f7a8b7121',
          },
        },
        first_seen: '2020-10-08T12:22:16.000Z',
        last_seen: '2020-10-08T12:24:42.000Z',
        marking: {
          tlp: ['AMBER'],
        },
        provider: 'Phony generated indicator',
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'private',
        confidence: 50,
        detail2: 'imported by user 551',
        id: '3500803046',
        import_session_id: '1985',
        itype: 'mal_ip',
        resource_uri: '/api/v1/intelligence/P11213459617/',
        severity: 'high',
        source_feed_id: '1017',
        state: 'active',
        trusted_circle_ids: ['662', '450', '278'],
        update_id: '2794921943',
        value_type: 'ip',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 7,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '192.168.113.96',
        as: {
          number: 20001,
          organization: {
            name: 'Spectrum',
          },
        },
        confidence: 'Medium',
        first_seen: '2020-10-08T12:28:50.000Z',
        geo: {
          country_iso_code: 'US',
          location: {
            lat: 33.6404,
            lon: -117.9226,
          },
        },
        ip: '192.168.113.96',
        last_seen: '2020-10-09T18:49:37.000Z',
        marking: {
          tlp: ['AMBER'],
        },
        provider: 'Phony generated indicator',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'private',
        confidence: 35,
        detail2: 'imported by user 821',
        id: '1897328345',
        import_session_id: '1570',
        itype: 'mal_ip',
        resource_uri: '/api/v1/intelligence/P26185595856/',
        severity: 'very-high',
        source_feed_id: '1760',
        state: 'active',
        trusted_circle_ids: ['357', '795', '916'],
        update_id: '2248258356',
        value_type: 'ip',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 9,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '192.168.113.157',
        as: {
          number: 11351,
          organization: {
            name: 'Spectrum',
          },
        },
        confidence: 'Medium',
        first_seen: '2020-10-08T12:29:01.000Z',
        geo: {
          country_iso_code: 'US',
          location: {
            lat: 42.8444,
            lon: -78.8149,
          },
        },
        ip: '192.168.113.157',
        last_seen: '2020-10-09T18:49:37.000Z',
        marking: {
          tlp: ['AMBER'],
        },
        provider: 'Phony generated indicator',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-01-14T21:19:04.000Z',
    anomali: {
      threatstream: {
        classification: 'private',
        confidence: 80,
        detail2: 'imported by user 606',
        id: '2341489315',
        itype: 'c2_domain',
        maltype: 'malware:mi5n',
        resource_uri: '/api/v1/intelligence/P24845267130/',
        severity: 'very-high',
        source_feed_id: '2336',
        state: 'active',
        trusted_circle_ids: ['775', '702', '615'],
        update_id: '3700550791',
        value_type: 'domain',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      severity: 9,
      type: 'indicator',
    },
    tags: [
      'preserve_original_event',
      'gnh7',
      'Botnet-DRZ8-',
      'popularity=low',
      'type=2',
      'first_seen=2020-01-07T01:38:35',
      'Botnet-WSPDZDY',
      'mask=192.168.113.180',
      'popularity=low',
      'threat=gu3wn7',
    ],
    threat: {
      indicator: {
        name: '192.168.2.19',
        confidence: 'High',
        first_seen: '2020-10-09T18:14:43.000Z',
        ip: '192.168.2.19',
        last_seen: '2020-10-09T18:14:43.000Z',
        marking: {
          tlp: ['AMBER'],
        },
        provider: 'Phony generated indicator',
        type: 'domain-name',
        url: {
          domain: 'frg.example.com',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-07T09:22:41.485Z',
    cybersixgill: {
      actor: 'layna61524',
      feedname: 'darkweb_vt_links',
      mitre: {
        description: 'Mitre attack tactics and technique reference',
      },
      title: "[GET] LAYNA'S LAGNIAPPE - DECEMBER 6, 2021",
      virustotal: {
        pr: 'none',
        url: 'https://virustotal.com/#/file/2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c',
      },
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"confidence":80,"created":"2021-12-07T09:22:41.485Z","description":"Virustotal link that appeared on a dark web site, generally to show malware that is undetected","extensions":{"extension-definition--4582f9eb-bad5-46ac-bd26-1b4201d52537":{"extension_type":"toplevel-property-extension"}},"external_references":[{"positive_rate":"none","source_name":"VirusTotal","url":"https://virustotal.com/#/file/2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c"},{"description":"Mitre attack tactics and technique reference","mitre_attack_tactic":"Test capabilities","mitre_attack_tactic_id":"TA0025","mitre_attack_tactic_url":"https://attack.mitre.org/tactics/TA0025/","mitre_attack_technique":"Test signature detection for file upload/email filters","mitre_attack_technique_id":"T1361","mitre_attack_technique_url":"https://attack.mitre.org/techniques/T1361/","source_name":"mitre-attack"}],"id":"indicator--b34d3caa-e4e2-49bd-9b57-f585728320e8","indicator_types":["malicious-activity"],"lang":"en","modified":"2021-12-07T09:22:41.485Z","name":"31aef6bddfeeb3f519dfe3d5ebe9c2ae;e54ef45c82899dd2b20372cf47958cea94dd80a7;2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c","pattern":"[file:hashes.MD5 = \'31aef6bddfeeb3f519dfe3d5ebe9c2ae\' OR file:hashes.\'SHA-1\' = \'e54ef45c82899dd2b20372cf47958cea94dd80a7\' OR file:hashes.\'SHA-256\' = \'2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c\']","pattern_type":"stix","sixgill_actor":"layna61524","sixgill_confidence":80,"sixgill_feedid":"darkfeed_002","sixgill_feedname":"darkweb_vt_links","sixgill_post_virustotallink":"https://virustotal.com/#/file/2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c","sixgill_postid":"a452593da2f6314c2f2d6c98c6473608e11914e3","sixgill_posttitle":"[GET] LAYNA\'S LAGNIAPPE - DECEMBER 6, 2021","sixgill_severity":70,"sixgill_source":"forum_bestblackhat","spec_version":"2.1","type":"indicator","valid_from":"2021-12-07T00:03:00Z"}',
      severity: 70,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c',
        confidence: 'High',
        description:
          'Virustotal link that appeared on a dark web site, generally to show malware that is undetected',
        file: {
          hash: {
            md5: '31aef6bddfeeb3f519dfe3d5ebe9c2ae',
            sha1: 'e54ef45c82899dd2b20372cf47958cea94dd80a7',
            sha256:
              '2e7e43be1fc3cbefef8d686ce63ceb30456a4a67d555407fb6797e969972945c',
          },
        },
        first_seen: '2021-12-07T00:03:00.000Z',
        last_seen: '2021-12-07T09:22:41.485Z',
        provider: 'forum_bestblackhat',
        reference:
          'https://portal.cybersixgill.com/#/search?q=_id:a452593da2f6314c2f2d6c98c6473608e11914e3',
        type: 'file',
      },
      tactic: {
        id: 'TA0025',
        name: 'Test capabilities',
        reference: 'https://attack.mitre.org/tactics/TA0025/',
      },
    },
  },
  {
    '@timestamp': '2021-12-07T18:04:26.451Z',
    cybersixgill: {
      actor: 'CoinProject.info',
      feedname: 'malware_download_urls',
      mitre: {
        description: 'Mitre attack tactics and technique reference',
      },
      title: 'Банковский регулятор США напомнил о рисках внедрения криптовалют',
      virustotal: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"confidence":80,"created":"2021-12-07T18:04:26.451Z","description":"Malware available for download from file-sharing sites","extensions":{"extension-definition--4582f9eb-bad5-46ac-bd26-1b4201d52537":{"extension_type":"toplevel-property-extension"}},"external_references":[{"description":"Mitre attack tactics and technique reference","mitre_attack_tactic":"Build Capabilities","mitre_attack_tactic_id":"TA0024","mitre_attack_tactic_url":"https://attack.mitre.org/tactics/TA0024/","mitre_attack_technique":"Obtain/re-use payloads","mitre_attack_technique_id":"T1346","mitre_attack_technique_url":"https://attack.mitre.org/techniques/T1346/","source_name":"mitre-attack"}],"id":"indicator--ade54b36-752d-4107-a2ed-dd666fa1cb85","indicator_types":["malicious-activity"],"lang":"ru","modified":"2021-12-07T18:04:26.451Z","name":"https://ru.scribd.com/user/456422024/ForkLog#from_embed","pattern":"[url:value = \'https://ru.scribd.com/user/456422024/ForkLog#from_embed\']","pattern_type":"stix","sixgill_actor":"CoinProject.info","sixgill_confidence":80,"sixgill_feedid":"darkfeed_010","sixgill_feedname":"malware_download_urls","sixgill_postid":"3f8c56e4cf6407ee7608e0f605503cb1e3fcedb9","sixgill_posttitle":"Банковский регулятор США напомнил о рисках внедрения криптовалют","sixgill_severity":70,"sixgill_source":"forum_hyipinvest","spec_version":"2.1","type":"indicator","valid_from":"2021-12-07T14:52:00Z"}',
      severity: 70,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'https://ru.scribd.com/user/456422024/ForkLog#from_embed',
        confidence: 'High',
        description: 'Malware available for download from file-sharing sites',
        first_seen: '2021-12-07T14:52:00.000Z',
        last_seen: '2021-12-07T18:04:26.451Z',
        provider: 'forum_hyipinvest',
        reference:
          'https://portal.cybersixgill.com/#/search?q=_id:3f8c56e4cf6407ee7608e0f605503cb1e3fcedb9',
        type: 'url',
        url: {
          domain: 'ru.scribd.com',
          fragment: 'from_embed',
          original: 'https://ru.scribd.com/user/456422024/ForkLog#from_embed',
          path: '/user/456422024/ForkLog',
          scheme: 'https',
        },
      },
      tactic: {
        id: 'TA0024',
        name: 'Build Capabilities',
        reference: 'https://attack.mitre.org/tactics/TA0024/',
      },
    },
  },
  {
    '@timestamp': '2021-12-07T21:24:50.350Z',
    cybersixgill: {
      actor: 'Admin',
      feedname: 'dark_web_hashes',
      mitre: {
        description: 'Mitre attack tactics and technique reference',
      },
      title: '海康威视因自身漏洞被黑客利用而遭受攻击',
      virustotal: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"confidence":70,"created":"2021-12-07T21:24:50.350Z","description":"Hash attributed to malware that was discovered in the dark and deep web","extensions":{"extension-definition--4582f9eb-bad5-46ac-bd26-1b4201d52537":{"extension_type":"toplevel-property-extension"}},"external_references":[{"description":"Mitre attack tactics and technique reference","mitre_attack_tactic":"Build Capabilities","mitre_attack_tactic_id":"TA0024","mitre_attack_tactic_url":"https://attack.mitre.org/tactics/TA0024/","source_name":"mitre-attack"}],"id":"indicator--18f0351d-b61f-4961-ab41-0b10566ee602","indicator_types":["malicious-activity"],"lang":"zh","modified":"2021-12-07T21:24:50.350Z","name":"1dce6f3ba4a8d355df21a17584c514697ee0c37b51ab5657bc5b3a297b65955f","pattern":"[file:hashes.\'SHA-256\' = \'1dce6f3ba4a8d355df21a17584c514697ee0c37b51ab5657bc5b3a297b65955f\']","pattern_type":"stix","sixgill_actor":"Admin","sixgill_confidence":70,"sixgill_feedid":"darkfeed_012","sixgill_feedname":"dark_web_hashes","sixgill_post_virustotallink":"https://virustotal.com/#/file/1dce6f3ba4a8d355df21a17584c514697ee0c37b51ab5657bc5b3a297b65955f","sixgill_postid":"c550f74ba76c0b2c9c46b0577f551ba5ef855813","sixgill_posttitle":"海康威视因自身漏洞被黑客利用而遭受攻击","sixgill_severity":70,"sixgill_source":"blog_hackdig","spec_version":"2.1","type":"indicator","valid_from":"2021-12-07T21:23:33Z"}',
      severity: 70,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '1dce6f3ba4a8d355df21a17584c514697ee0c37b51ab5657bc5b3a297b65955f',
        confidence: 'High',
        description:
          'Hash attributed to malware that was discovered in the dark and deep web',
        file: {
          hash: {
            sha256:
              '1dce6f3ba4a8d355df21a17584c514697ee0c37b51ab5657bc5b3a297b65955f',
          },
        },
        first_seen: '2021-12-07T21:23:33.000Z',
        last_seen: '2021-12-07T21:24:50.350Z',
        provider: 'blog_hackdig',
        reference:
          'https://portal.cybersixgill.com/#/search?q=_id:c550f74ba76c0b2c9c46b0577f551ba5ef855813',
        type: 'file',
      },
      tactic: {
        id: 'TA0024',
        name: 'Build Capabilities',
        reference: 'https://attack.mitre.org/tactics/TA0024/',
      },
    },
  },
  {
    '@timestamp': '2021-12-07T22:48:59.141Z',
    cybersixgill: {
      actor: 'enginewo',
      feedname: 'compromised_sites',
      mitre: {
        description: 'Mitre attack tactics and technique reference',
      },
      title: 'Beranda       http://sdbpibandung.sch.id',
      virustotal: {},
    },
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"confidence":90,"created":"2021-12-07T22:48:59.141Z","description":"Shell access to this domain is being sold on dark web markets","extensions":{"extension-definition--4582f9eb-bad5-46ac-bd26-1b4201d52537":{"extension_type":"toplevel-property-extension"}},"external_references":[{"description":"Mitre attack tactics and technique reference","mitre_attack_tactic":"Establish \u0026 Maintain Infrastructure","mitre_attack_tactic_id":"TA0022","mitre_attack_tactic_url":"https://attack.mitre.org/tactics/TA0022/","mitre_attack_technique":"Compromise 3rd party infrastructure to support delivery","mitre_attack_technique_id":"T1334","mitre_attack_technique_url":"https://attack.mitre.org/techniques/T1334/","source_name":"mitre-attack"}],"id":"indicator--557a6021-b0c0-441a-8fba-e8a734f19ada","indicator_types":["compromised"],"lang":"en","modified":"2021-12-07T22:48:59.141Z","name":"sdbpibandung.sch.id","pattern":"[domain-name:value = \'sdbpibandung.sch.id\']","pattern_type":"stix","sixgill_actor":"enginewo","sixgill_confidence":90,"sixgill_feedid":"darkfeed_001","sixgill_feedname":"compromised_sites","sixgill_postid":"955f5379c2828ce483b74a671e498a5f69f9ea36","sixgill_posttitle":"Beranda       http://sdbpibandung.sch.id","sixgill_severity":70,"sixgill_source":"market_magbo","spec_version":"2.1","type":"indicator","valid_from":"2021-12-07T22:43:29Z"}',
      severity: 70,
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: 'sdbpibandung.sch.id',
        confidence: 'High',
        description:
          'Shell access to this domain is being sold on dark web markets',
        first_seen: '2021-12-07T22:43:29.000Z',
        last_seen: '2021-12-07T22:48:59.141Z',
        provider: 'market_magbo',
        reference:
          'https://portal.cybersixgill.com/#/search?q=_id:955f5379c2828ce483b74a671e498a5f69f9ea36',
        type: 'domain-name',
        url: {
          domain: 'sdbpibandung.sch.id',
        },
      },
      tactic: {
        id: 'TA0022',
        name: 'Establish \u0026 Maintain Infrastructure',
        reference: 'https://attack.mitre.org/tactics/TA0022/',
      },
    },
  },
  {
    '@timestamp': '2020-11-15T00:00:02.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"adversaries":[],"attributes":[{"attribute_id":3,"created_at":"2020-09-11 14:35:53","id":1877,"indicator_id":336,"name":"Description","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"Malicious Host"},{"attribute_id":4,"created_at":"2020-09-11 14:35:53","id":1878,"indicator_id":336,"name":"Country","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"MP"},{"attribute_id":5,"created_at":"2020-09-11 14:35:53","id":1879,"indicator_id":336,"name":"City","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"Saipan"},{"attribute_id":6,"created_at":"2020-09-11 14:35:53","id":1880,"indicator_id":336,"name":"AlienVault Revision","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"3"},{"attribute_id":7,"created_at":"2020-09-11 14:35:53","id":1881,"indicator_id":336,"name":"AlienVault Threat Level","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"3"},{"attribute_id":8,"created_at":"2020-09-11 14:35:53","id":1882,"indicator_id":336,"name":"AlienVault Reliability","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"4"}],"class":"network","created_at":"2020-09-11 14:35:51","expired_at":"2020-11-15 00:00:02","expires_calculated_at":"2020-10-15 14:40:03","hash":"1ece659dcec98b1e1141160b55655c96","id":336,"published_at":"2020-09-11 14:35:51","score":4,"sources":[{"created_at":"2020-09-11 14:35:53","creator_source_id":12,"id":336,"indicator_id":336,"indicator_status_id":2,"indicator_type_id":15,"name":"AlienVault OTX","published_at":"2020-09-11 14:35:53","reference_id":1,"source_expire_days":"30","source_id":12,"source_score":1,"source_type":"connectors","updated_at":"2020-10-15 14:36:00"}],"status":{"description":"No longer poses a serious threat.","id":2,"name":"Expired"},"status_id":2,"touched_at":"2021-06-07 19:47:27","type":{"class":"network","id":15,"name":"IP Address"},"type_id":15,"updated_at":"2020-11-15 00:00:02","value":"89.160.20.156"}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '89.160.20.156',
        confidence: 'Low',
        ip: '89.160.20.156',
        type: 'ipv4-addr',
      },
    },
    threatq: {
      attributes: {
        alienvault_reliability: ['4'],
        alienvault_revision: ['3'],
        alienvault_threat_level: ['3'],
        city: ['Saipan'],
        country: ['MP'],
        description: ['Malicious Host'],
      },
      created_at: '2020-09-11T14:35:51.000Z',
      expires_calculated_at: '2020-10-15T14:40:03.000Z',
      indicator_value: '89.160.20.156',
      published_at: '2020-09-11T14:35:51.000Z',
      status: 'Expired',
    },
  },
  {
    '@timestamp': '2020-11-15T00:00:02.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      kind: 'enrichment',
      original:
        '{"adversaries":[],"attributes":[{"attribute_id":7,"created_at":"2020-09-11 14:35:53","id":1883,"indicator_id":337,"name":"AlienVault Threat Level","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"2"},{"attribute_id":4,"created_at":"2020-09-11 14:35:53","id":1884,"indicator_id":337,"name":"Country","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"US"},{"attribute_id":3,"created_at":"2020-09-11 14:35:53","id":1885,"indicator_id":337,"name":"Description","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"Malicious Host"},{"attribute_id":6,"created_at":"2020-09-11 14:35:53","id":1886,"indicator_id":337,"name":"AlienVault Revision","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"3"},{"attribute_id":8,"created_at":"2020-09-11 14:35:53","id":1887,"indicator_id":337,"name":"AlienVault Reliability","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"4"},{"attribute_id":5,"created_at":"2020-09-11 14:35:53","id":1888,"indicator_id":337,"name":"City","touched_at":"2020-10-15 14:36:00","updated_at":"2020-10-15 14:36:00","value":"Sacramento"}],"class":"network","created_at":"2020-09-11 14:35:51","expired_at":"2020-11-15 00:00:02","expires_calculated_at":"2020-10-15 14:40:03","hash":"73c98d43519990c841a5d022546fedd4","id":337,"published_at":"2020-09-11 14:35:51","score":4,"sources":[{"created_at":"2020-09-11 14:35:53","creator_source_id":12,"id":337,"indicator_id":337,"indicator_status_id":2,"indicator_type_id":15,"name":"AlienVault OTX","published_at":"2020-09-11 14:35:53","reference_id":1,"source_expire_days":"30","source_id":12,"source_score":1,"source_type":"connectors","updated_at":"2020-10-15 14:36:00"}],"status":{"description":"No longer poses a serious threat.","id":2,"name":"Expired"},"status_id":2,"touched_at":"2021-06-07 19:47:27","type":{"class":"network","id":15,"name":"IP Address"},"type_id":15,"updated_at":"2020-11-15 00:00:02","value":"89.160.20.156"}',
      type: 'indicator',
    },
    tags: ['preserve_original_event'],
    threat: {
      indicator: {
        name: '89.160.20.156',
        confidence: 'Low',
        ip: '89.160.20.156',
        type: 'ipv4-addr',
      },
    },
    threatq: {
      attributes: {
        alienvault_reliability: ['4'],
        alienvault_revision: ['3'],
        alienvault_threat_level: ['2'],
        city: ['Sacramento'],
        country: ['US'],
        description: ['Malicious Host'],
      },
      created_at: '2020-09-11T14:35:51.000Z',
      expires_calculated_at: '2020-10-15T14:40:03.000Z',
      indicator_value: '89.160.20.156',
      published_at: '2020-09-11T14:35:51.000Z',
      status: 'Expired',
    },
  },
  {
    '@timestamp': '2020-11-15T00:00:02.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"xohrikvjhiu.eu","96","5/45","{""EvidenceDetails"": [{""Rule"": ""Historically Reported as a Defanged DNS Name"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""21 sightings on 4 sources: Proofpoint, PasteBin, The Daily Advance, @DGAFeedAlerts. Most recent tweet: New ramnit Dom: xohrikvjhiu[.]eu IP: 13[.]90[.]196[.]81 NS: https://t.co/nTqEOuAW2E https://t.co/QdrtFSplyz. Most recent link (Nov 16, 2019): https://twitter.com/DGAFeedAlerts/statuses/1195824847915491329"", ""Sources"": [""QQA438"", ""Jv_xrR"", ""SlNfa3"", ""KvPSaU""], ""Timestamp"": ""2019-11-16T22:03:55.000Z"", ""Name"": ""defanged"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historical Threat Researcher"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""18 sightings on 2 sources: Proofpoint, The Daily Advance. Most recent link (Nov 12, 2018): https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy#.W-nmxyGcuiY.twitter"", ""Sources"": [""QQA438"", ""KvPSaU""], ""Timestamp"": ""2018-11-12T20:48:08.675Z"", ""Name"": ""threatResearcher"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Referenced by Insikt Group"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: Insikt Group. 1 report: Proofpoint Researchers Observe sLoad and Ramnit in Campaigns Against The U.K. and Italy. Most recent link (Oct 23, 2018): https://app.recordedfuture.com/live/sc/4KSWum2M6Lx7"", ""Sources"": [""VKz42X""], ""Timestamp"": ""2018-10-23T00:00:00.000Z"", ""Name"": ""relatedNote"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Detected Malware Operation"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Mar 23, 2021."", ""Sources"": [""d3Awkm""], ""Timestamp"": ""2021-03-23T00:00:00.000Z"", ""Name"": ""malwareSiteDetected"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recent C\u0026C DNS Name"", ""CriticalityLabel"": ""Very Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist."", ""Sources"": [""report:QhR8Qs""], ""Timestamp"": ""2021-12-29T07:12:02.455Z"", ""Name"": ""recentCncSite"", ""MitigationString"": """", ""Criticality"": 4.0}]}"',
      risk_score: 96.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '21 sightings on 4 sources: Proofpoint, PasteBin, The Daily Advance, @DGAFeedAlerts. Most recent tweet: New ramnit Dom: xohrikvjhiu[.]eu IP: 13[.]90[.]196[.]81 NS: https://t.co/nTqEOuAW2E https://t.co/QdrtFSplyz. Most recent link (Nov 16, 2019): https://twitter.com/DGAFeedAlerts/statuses/1195824847915491329',
          MitigationString: '',
          Name: 'defanged',
          Rule: 'Historically Reported as a Defanged DNS Name',
          Sources: ['QQA438', 'Jv_xrR', 'SlNfa3', 'KvPSaU'],
          Timestamp: '2019-11-16T22:03:55.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '18 sightings on 2 sources: Proofpoint, The Daily Advance. Most recent link (Nov 12, 2018): https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy#.W-nmxyGcuiY.twitter',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Historical Threat Researcher',
          Sources: ['QQA438', 'KvPSaU'],
          Timestamp: '2018-11-12T20:48:08.675Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Insikt Group. 1 report: Proofpoint Researchers Observe sLoad and Ramnit in Campaigns Against The U.K. and Italy. Most recent link (Oct 23, 2018): https://app.recordedfuture.com/live/sc/4KSWum2M6Lx7',
          MitigationString: '',
          Name: 'relatedNote',
          Rule: 'Historically Referenced by Insikt Group',
          Sources: ['VKz42X'],
          Timestamp: '2018-10-23T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Mar 23, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Operation',
          Sources: ['d3Awkm'],
          Timestamp: '2021-03-23T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.',
          MitigationString: '',
          Name: 'recentCncSite',
          Rule: 'Recent C\u0026C DNS Name',
          Sources: ['report:QhR8Qs'],
          Timestamp: '2021-12-29T07:12:02.455Z',
        },
      ],
      risk_string: '5/45',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'xohrikvjhiu.eu',
        type: 'domain-name',
        url: {
          domain: 'xohrikvjhiu.eu',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:12:02.455Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"wgwuhauaqcrx.com","95","6/45","{""EvidenceDetails"": [{""Rule"": ""Historically Reported by DHS AIS"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-216d34d4-67bd-4add-ae6e-4ddec27dcb0e (Jul 25, 2019)."", ""Sources"": [""UZNze8""], ""Timestamp"": ""2019-07-25T00:46:19.000Z"", ""Name"": ""dhsAis"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historical Threat Researcher"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: MALWARE BREAKDOWN. Most recent link (May 17, 2017): https://malwarebreakdown.com/2017/05/17/seamless-malvertising-campaign-leads-to-rig-ek-at-185-154-53-33-and-drops-ramnit/"", ""Sources"": [""ST7rfx""], ""Timestamp"": ""2017-05-17T19:31:06.000Z"", ""Name"": ""threatResearcher"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Reported in Threat List"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Jul 19, 2021, and Jul 21, 2021."", ""Sources"": [""report:Tluf00""], ""Timestamp"": ""2021-12-29T07:21:52.311Z"", ""Name"": ""historicalThreatListMembership"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Detected Malware Operation"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jul 9, 2021."", ""Sources"": [""d3Awkm""], ""Timestamp"": ""2021-07-09T00:00:00.000Z"", ""Name"": ""malwareSiteDetected"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historical Malware Analysis DNS Name"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""2 sightings on 1 source: Malwr.com. Most recent link (Jul 6, 2017): https://malwr.com/analysis/ZmMxNWJlYWU1NTI4NDA1Nzg3YTc5MWViNTA0YTNhYmQ/"", ""Sources"": [""NKaUXl""], ""Timestamp"": ""2017-07-06T00:00:00.000Z"", ""Name"": ""malwareAnalysis"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recent C\u0026C DNS Name"", ""CriticalityLabel"": ""Very Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist."", ""Sources"": [""report:QhR8Qs""], ""Timestamp"": ""2021-12-29T07:21:52.303Z"", ""Name"": ""recentCncSite"", ""MitigationString"": """", ""Criticality"": 4.0}]}"',
      risk_score: 95.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-216d34d4-67bd-4add-ae6e-4ddec27dcb0e (Jul 25, 2019).',
          MitigationString: '',
          Name: 'dhsAis',
          Rule: 'Historically Reported by DHS AIS',
          Sources: ['UZNze8'],
          Timestamp: '2019-07-25T00:46:19.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: MALWARE BREAKDOWN. Most recent link (May 17, 2017): https://malwarebreakdown.com/2017/05/17/seamless-malvertising-campaign-leads-to-rig-ek-at-185-154-53-33-and-drops-ramnit/',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Historical Threat Researcher',
          Sources: ['ST7rfx'],
          Timestamp: '2017-05-17T19:31:06.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            'Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Jul 19, 2021, and Jul 21, 2021.',
          MitigationString: '',
          Name: 'historicalThreatListMembership',
          Rule: 'Historically Reported in Threat List',
          Sources: ['report:Tluf00'],
          Timestamp: '2021-12-29T07:21:52.311Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jul 9, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Operation',
          Sources: ['d3Awkm'],
          Timestamp: '2021-07-09T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '2 sightings on 1 source: Malwr.com. Most recent link (Jul 6, 2017): https://malwr.com/analysis/ZmMxNWJlYWU1NTI4NDA1Nzg3YTc5MWViNTA0YTNhYmQ/',
          MitigationString: '',
          Name: 'malwareAnalysis',
          Rule: 'Historical Malware Analysis DNS Name',
          Sources: ['NKaUXl'],
          Timestamp: '2017-07-06T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.',
          MitigationString: '',
          Name: 'recentCncSite',
          Rule: 'Recent C\u0026C DNS Name',
          Sources: ['report:QhR8Qs'],
          Timestamp: '2021-12-29T07:21:52.303Z',
        },
      ],
      risk_string: '6/45',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'wgwuhauaqcrx.com',
        type: 'domain-name',
        url: {
          domain: 'wgwuhauaqcrx.com',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:21:52.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"38e992eb852ab0c4ac03955fb0dc9bb38e64010fdf9c05331d2b02b6e05689c2","SHA-256","89","6/14","{""EvidenceDetails"": [{""Rule"": ""Threat Researcher"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""50 sightings on 10 sources including: Security Bloggers Network, TechTarget Search Security, Bleeping Computer, Guided Collection, Bleepingcomputer Forums. Most recent link (Dec 21, 2021): https://www.bleepingcomputer.com/forums/t/765398/gmer-scan-reveals-chinese-letter-characters/#entry5298561"", ""Sources"": [""NSAcUx"", ""KCdHcb"", ""J6UzbO"", ""Rlso4a"", ""hkE5DK"", ""cJMUDF"", ""TZRwk8"", ""QMTzEI"", ""LUhTGd"", ""J5NRun""], ""Timestamp"": ""2021-12-21T08:40:00.000Z"", ""Name"": ""threatResearcher"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Linked to Attack Vector"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""32 sightings on 27 sources including: Carder Forum (carder.uk), wordpress.com, AAPKS.com, malwareresearch, @phishingalert, @GelosSnake, @neonprimetime, @rpsanch. 7 related attack vectors including Crimeware, Phishing, Remote Code Execution, Malvertising, Click Fraud. Most recent tweet: Many People sending me this type of link and it\'s a phishing link @stufflistings @trolling_isart @yabhishekhd Thanks @virustotal for checking. Website where I Checked it https://t.co/q0pzRgZFuW If you clicked you should reset your phone. Am I RIGHT @trolling_isart @stufflistings https://t.co/yINsBtAJhr. Most recent link (Dec 25, 2021): https://twitter.com/galaxyshouvik/statuses/1474581610959818752"", ""Sources"": [""T1bwMv"", ""LC-zVm"", ""QFvaUy"", ""P_upBR"", ""T2OA5Q"", ""K20lXV"", ""TGgDPZ"", ""hkIDTa"", ""LqRZCN"", ""Vd51cf"", ""ha2FFj"", ""UmsU31"", ""K7wUX2"", ""P_ivKa"", ""Qj3TQr"", ""idn:wordpress.com"", ""J-mrOR"", ""QPbAan"", ""VeioBt"", ""WlbRkJ"", ""K7sErA"", ""TvfQzk"", ""TP1vbk"", ""SrKvJ0"", ""SqCj4s"", ""VXaDYo"", ""bk2VX4""], ""Timestamp"": ""2021-12-25T03:23:47.000Z"", ""Name"": ""linkedToVector"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Linked to Cyber Attack"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""6 sightings on 6 sources including: Messaging Platforms - Uncategorized, @_mr_touch. Most recent tweet: Active cred #phishing/malware distribution campaign on 185.186.245.101 with kits targeting @Office365 and @WeTransfer brands. Windows malware submitted to VT here: https://t.co/edCd4sOnAI domains: https://t.co/4GdqctLwkY cc: @malwrhunterteam @JayTHL @SteveD3 @thepacketrat https://t.co/e9d3R7fzIq. Most recent link (May 28, 2019): https://twitter.com/PhishingAi/statuses/1133376801831436289"", ""Sources"": [""XV7DoD"", ""Ym7dzt"", ""LKKAV1"", ""VeioBt"", ""Y7TWfI"", ""KGS-xC""], ""Timestamp"": ""2019-05-28T14:17:41.000Z"", ""Name"": ""linkedToCyberAttack"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Linked to Malware"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""119 sightings on 42 sources including: Malware-Traffic-Analysis.net - Blog Entries, Doc Player, GhostBin, Data Breach Today.eu | Updates, Codex  - Recent changes en. 43 related malware families including Dardesh, AZORult, Emotet, Ryuk Ransomware, GandCrab. Most recent tweet: @Enfenogo @ThetanArena @KardiaChain @wolffungame Se você jogar o .exe do instalador no site https://t.co/yxgkgU58Hr, vai encontrar um trojan minerador. Estou sem acreditar. Tô rodando o Malware Byte no meu PC pra tentar limpar a merda que eles fizeram. Most recent link (Nov 27, 2021): https://twitter.com/Ronan30451924/statuses/1464732674891960321"", ""Sources"": [""TvGJYk"", ""LErKlJ"", ""QWOrKl"", ""LKKAV1"", ""W4ygGi"", ""PATKM7"", ""T1bwMv"", ""TY6igj"", ""LjkJhE"", ""kuKt0c"", ""QAy9GA"", ""LbYmLr"", ""K20lXV"", ""QZe7TG"", ""idn:droppdf.com"", ""QAmbRP"", ""V_o1DL"", ""TbciDE"", ""XV7DoD"", ""P_j5Dw"", ""QNmgPm"", ""TGXqeD"", ""KGS-xC"", ""L3kVdM"", ""QMfGAr"", ""h6VVAH"", ""doLlw5"", ""UrsUKT"", ""JOU"", ""MIKjae"", ""P_oIyV"", ""QJ6TQK"", ""RfVd0T"", ""J6UzbO"", ""Ql9O5c"", ""USKpXp"", ""TP1vbk"", ""SrKvJ0"", ""Tq2nAb"", ""P_ov9o"", ""VXaDYo"", ""idn:index-of.es""], ""Timestamp"": ""2021-11-27T23:07:37.000Z"", ""Name"": ""linkedToMalware"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Reported by DHS AIS"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-12195723-7c56-4c63-b828-fc340dd4050a (Dec 20, 2018)."", ""Sources"": [""UZNze8""], ""Timestamp"": ""2018-12-20T21:13:36.000Z"", ""Name"": ""dhsAis"", ""MitigationString"": """", ""Criticality"": 3.0}, {""Rule"": ""Positive Malware Verdict"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""5 sightings on 3 sources: Malware-Traffic-Analysis.net - Blog Entries, ReversingLabs, PolySwarm. Most recent link (Dec 15, 2018): https://www.malware-traffic-analysis.net/2018/12/14/index.html"", ""Sources"": [""LErKlJ"", ""TbciDE"", ""doLlw5""], ""Timestamp"": ""2020-07-11T09:55:23.000Z"", ""Name"": ""positiveMalwareVerdict"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 89.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '50 sightings on 10 sources including: Security Bloggers Network, TechTarget Search Security, Bleeping Computer, Guided Collection, Bleepingcomputer Forums. Most recent link (Dec 21, 2021): https://www.bleepingcomputer.com/forums/t/765398/gmer-scan-reveals-chinese-letter-characters/#entry5298561',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Threat Researcher',
          Sources: [
            'NSAcUx',
            'KCdHcb',
            'J6UzbO',
            'Rlso4a',
            'hkE5DK',
            'cJMUDF',
            'TZRwk8',
            'QMTzEI',
            'LUhTGd',
            'J5NRun',
          ],
          Timestamp: '2021-12-21T08:40:00.000Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            "32 sightings on 27 sources including: Carder Forum (carder.uk), wordpress.com, AAPKS.com, malwareresearch, @phishingalert, @GelosSnake, @neonprimetime, @rpsanch. 7 related attack vectors including Crimeware, Phishing, Remote Code Execution, Malvertising, Click Fraud. Most recent tweet: Many People sending me this type of link and it's a phishing link @stufflistings @trolling_isart @yabhishekhd Thanks @virustotal for checking. Website where I Checked it https://t.co/q0pzRgZFuW If you clicked you should reset your phone. Am I RIGHT @trolling_isart @stufflistings https://t.co/yINsBtAJhr. Most recent link (Dec 25, 2021): https://twitter.com/galaxyshouvik/statuses/1474581610959818752",
          MitigationString: '',
          Name: 'linkedToVector',
          Rule: 'Linked to Attack Vector',
          Sources: [
            'T1bwMv',
            'LC-zVm',
            'QFvaUy',
            'P_upBR',
            'T2OA5Q',
            'K20lXV',
            'TGgDPZ',
            'hkIDTa',
            'LqRZCN',
            'Vd51cf',
            'ha2FFj',
            'UmsU31',
            'K7wUX2',
            'P_ivKa',
            'Qj3TQr',
            'idn:wordpress.com',
            'J-mrOR',
            'QPbAan',
            'VeioBt',
            'WlbRkJ',
            'K7sErA',
            'TvfQzk',
            'TP1vbk',
            'SrKvJ0',
            'SqCj4s',
            'VXaDYo',
            'bk2VX4',
          ],
          Timestamp: '2021-12-25T03:23:47.000Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '6 sightings on 6 sources including: Messaging Platforms - Uncategorized, @_mr_touch. Most recent tweet: Active cred #phishing/malware distribution campaign on 185.186.245.101 with kits targeting @Office365 and @WeTransfer brands. Windows malware submitted to VT here: https://t.co/edCd4sOnAI domains: https://t.co/4GdqctLwkY cc: @malwrhunterteam @JayTHL @SteveD3 @thepacketrat https://t.co/e9d3R7fzIq. Most recent link (May 28, 2019): https://twitter.com/PhishingAi/statuses/1133376801831436289',
          MitigationString: '',
          Name: 'linkedToCyberAttack',
          Rule: 'Linked to Cyber Attack',
          Sources: ['XV7DoD', 'Ym7dzt', 'LKKAV1', 'VeioBt', 'Y7TWfI', 'KGS-xC'],
          Timestamp: '2019-05-28T14:17:41.000Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '119 sightings on 42 sources including: Malware-Traffic-Analysis.net - Blog Entries, Doc Player, GhostBin, Data Breach Today.eu | Updates, Codex  - Recent changes en. 43 related malware families including Dardesh, AZORult, Emotet, Ryuk Ransomware, GandCrab. Most recent tweet: @Enfenogo @ThetanArena @KardiaChain @wolffungame Se você jogar o .exe do instalador no site https://t.co/yxgkgU58Hr, vai encontrar um trojan minerador. Estou sem acreditar. Tô rodando o Malware Byte no meu PC pra tentar limpar a merda que eles fizeram. Most recent link (Nov 27, 2021): https://twitter.com/Ronan30451924/statuses/1464732674891960321',
          MitigationString: '',
          Name: 'linkedToMalware',
          Rule: 'Linked to Malware',
          Sources: [
            'TvGJYk',
            'LErKlJ',
            'QWOrKl',
            'LKKAV1',
            'W4ygGi',
            'PATKM7',
            'T1bwMv',
            'TY6igj',
            'LjkJhE',
            'kuKt0c',
            'QAy9GA',
            'LbYmLr',
            'K20lXV',
            'QZe7TG',
            'idn:droppdf.com',
            'QAmbRP',
            'V_o1DL',
            'TbciDE',
            'XV7DoD',
            'P_j5Dw',
            'QNmgPm',
            'TGXqeD',
            'KGS-xC',
            'L3kVdM',
            'QMfGAr',
            'h6VVAH',
            'doLlw5',
            'UrsUKT',
            'JOU',
            'MIKjae',
            'P_oIyV',
            'QJ6TQK',
            'RfVd0T',
            'J6UzbO',
            'Ql9O5c',
            'USKpXp',
            'TP1vbk',
            'SrKvJ0',
            'Tq2nAb',
            'P_ov9o',
            'VXaDYo',
            'idn:index-of.es',
          ],
          Timestamp: '2021-11-27T23:07:37.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-12195723-7c56-4c63-b828-fc340dd4050a (Dec 20, 2018).',
          MitigationString: '',
          Name: 'dhsAis',
          Rule: 'Reported by DHS AIS',
          Sources: ['UZNze8'],
          Timestamp: '2018-12-20T21:13:36.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '5 sightings on 3 sources: Malware-Traffic-Analysis.net - Blog Entries, ReversingLabs, PolySwarm. Most recent link (Dec 15, 2018): https://www.malware-traffic-analysis.net/2018/12/14/index.html',
          MitigationString: '',
          Name: 'positiveMalwareVerdict',
          Rule: 'Positive Malware Verdict',
          Sources: ['LErKlJ', 'TbciDE', 'doLlw5'],
          Timestamp: '2020-07-11T09:55:23.000Z',
        },
      ],
      risk_string: '6/14',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: '38e992eb852ab0c4ac03955fb0dc9bb38e64010fdf9c05331d2b02b6e05689c2',
        file: {
          hash: {
            sha256:
              '38e992eb852ab0c4ac03955fb0dc9bb38e64010fdf9c05331d2b02b6e05689c2',
          },
        },
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-12-25T03:23:47.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"c15abaf51e78ca56c0376522d699c978217bf041a3bd3c71d09193efa5717c71","SHA-256","89","7/14","{""EvidenceDetails"": [{""Rule"": ""Threat Researcher"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""28 sightings on 8 sources including: Dancho Danchev\'s Blog, SecureWorks, Talos Intel, Unit 42 Palo Alto Networks, Cisco Japan Blog. Most recent link (Mar 12, 2021): https://www.secureworks.com/blog/supernova-web-shell-deployment-linked-to-spiral-threat-group?es_p=13420131"", ""Sources"": [""JfqIbv"", ""Z2mQh2"", ""PA-rR4"", ""jjf3_B"", ""clDYM8"", ""T5"", ""rN"", ""J5NRun""], ""Timestamp"": ""2021-03-12T20:30:37.672Z"", ""Name"": ""threatResearcher"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Linked to Attack Vector"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""69 sightings on 18 sources including: Stock market news Company News  MarketScreenercom, HackDig Posts, Sesin at, US CERT CISA Alerts, citizensudo.com. 6 related attack vectors including Powershell Attack, Supply Chain Attack, Target Destination Manipulation, Reconnaissance, C\u0026C Server. Most recent link (Apr 15, 2021): https://www.cisa.gov/uscert/ncas/alerts/aa20-352a"", ""Sources"": [""XBl0xf"", ""POs2u-"", ""Z3TZAQ"", ""hhY_oz"", ""idn:citizensudo.com"", ""VKz42X"", ""PA-rR4"", ""POs2tz"", ""idn:firsthackersnews.com"", ""KcjdRW"", ""dCotni"", ""idn:comodo.com"", ""gI8s5W"", ""hibUwt"", ""rN"", ""idn:reportcybercrime.com"", ""idn:eshielder.com"", ""idn:edsitrend.com""], ""Timestamp"": ""2021-04-15T00:00:00.000Z"", ""Name"": ""linkedToVector"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Linked to Vulnerability"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""11 sightings on 2 sources: GitHub, Insikt Group. 5 related cyber vulnerabilities: CWE-20, CWE-287, CVE-2020-10148, CVE-2020-1938, CWE-269. Most recent link (Dec 27, 2021): https://github.com/teamt5-it/official-website-v2/blob/master/_site/_next/data/64e2c6f134e73517d6ff737822e83cd75cf633c6/tw/posts/ithome-ghostcat-apache-tomcat-ajp-vulnerability.json"", ""Sources"": [""MIKjae"", ""VKz42X""], ""Timestamp"": ""2021-12-27T07:36:54.000Z"", ""Name"": ""linkedToVuln"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Linked to Malware"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""175 sightings on 31 sources including: 4-traders.com, SentinelLabs, Sesin at, Cisco Japan Blog, McAfee. 8 related malware families including WebShell, Ransomware, Backdoor, Backdoor Shell, SUNBURST. Most recent tweet: Malcode highlighted in \'App_Web_logoimagehandler.ashx.b6031896.dll\' (c15abaf51e78ca56c0376522d699c978217bf041a3bd3c71d09193efa5717c71) #SolarWinds #SUNBURST https://t.co/lyvnVHuTb2. Most recent link (Dec 16, 2020): https://twitter.com/_mynameisgeff/statuses/1339070792705830913"", ""Sources"": [""TuWseX"", ""KBTQ2e"", ""eP3CYX"", ""Z3TZAQ"", ""clDYM8"", ""rN"", ""VKz42X"", ""idn:elemendar.com"", ""idn:securitysummitperu.com"", ""PA-rR4"", ""idn:terabitweb.com"", ""eTNyK6"", ""gBQB48"", ""bMZlEg"", ""idn:edsitrend.com"", ""idn:infoblox.com"", ""UZNze8"", ""Z2mQh2"", ""XBl0xf"", ""dCpZqs"", ""jmpFm1"", ""T5"", ""doLlw5"", ""gBDK5G"", ""MIKjae"", ""idn:firsthackersnews.com"", ""jjf3_B"", ""Jv_xrR"", ""dCotni"", ""idn:comodo.com"", ""hibUwt""], ""Timestamp"": ""2020-12-16T04:52:10.000Z"", ""Name"": ""linkedToMalware"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Reported by DHS AIS"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""3 sightings on 1 source: DHS Automated Indicator Sharing. 3 reports including AA20-352A APT Compromise of Govt Agencies, Critical Infrastructure, and Private Sector Organizations, from CISA, Government Facilities Sector, CISA, Government Facilities Sector, NCCIC:STIX_Package-673aacd1-1852-4d44-bd93-0c44940a6358 (Feb 3, 2021)."", ""Sources"": [""UZNze8""], ""Timestamp"": ""2021-02-03T21:32:08.000Z"", ""Name"": ""dhsAis"", ""MitigationString"": """", ""Criticality"": 3.0}, {""Rule"": ""Positive Malware Verdict"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""6 sightings on 2 sources: Sophos Virus and Spyware Threats, PolySwarm. Most recent link (Dec 17, 2020): https://news.sophos.com/fr-fr/2020/12/15/cyberattaque-contre-solarwinds-comment-savoir-si-vous-etes-concerne/"", ""Sources"": [""K16tAG"", ""doLlw5""], ""Timestamp"": ""2020-12-20T15:18:53.000Z"", ""Name"": ""positiveMalwareVerdict"", ""MitigationString"": """", ""Criticality"": 3.0}, {""Rule"": ""Reported by Insikt Group"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""13 sightings on 1 source: Insikt Group. 4 reports including Researchers Linked Supernova Malware to Spiral Group. Most recent link (Mar 08, 2021): https://app.recordedfuture.com/live/sc/5DIp4RIUiJz6"", ""Sources"": [""VKz42X""], ""Timestamp"": ""2021-03-08T00:00:00.000Z"", ""Name"": ""analystNote"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 89.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            "28 sightings on 8 sources including: Dancho Danchev's Blog, SecureWorks, Talos Intel, Unit 42 Palo Alto Networks, Cisco Japan Blog. Most recent link (Mar 12, 2021): https://www.secureworks.com/blog/supernova-web-shell-deployment-linked-to-spiral-threat-group?es_p=13420131",
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Threat Researcher',
          Sources: [
            'JfqIbv',
            'Z2mQh2',
            'PA-rR4',
            'jjf3_B',
            'clDYM8',
            'T5',
            'rN',
            'J5NRun',
          ],
          Timestamp: '2021-03-12T20:30:37.672Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '69 sightings on 18 sources including: Stock market news Company News  MarketScreenercom, HackDig Posts, Sesin at, US CERT CISA Alerts, citizensudo.com. 6 related attack vectors including Powershell Attack, Supply Chain Attack, Target Destination Manipulation, Reconnaissance, C\u0026C Server. Most recent link (Apr 15, 2021): https://www.cisa.gov/uscert/ncas/alerts/aa20-352a',
          MitigationString: '',
          Name: 'linkedToVector',
          Rule: 'Linked to Attack Vector',
          Sources: [
            'XBl0xf',
            'POs2u-',
            'Z3TZAQ',
            'hhY_oz',
            'idn:citizensudo.com',
            'VKz42X',
            'PA-rR4',
            'POs2tz',
            'idn:firsthackersnews.com',
            'KcjdRW',
            'dCotni',
            'idn:comodo.com',
            'gI8s5W',
            'hibUwt',
            'rN',
            'idn:reportcybercrime.com',
            'idn:eshielder.com',
            'idn:edsitrend.com',
          ],
          Timestamp: '2021-04-15T00:00:00.000Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '11 sightings on 2 sources: GitHub, Insikt Group. 5 related cyber vulnerabilities: CWE-20, CWE-287, CVE-2020-10148, CVE-2020-1938, CWE-269. Most recent link (Dec 27, 2021): https://github.com/teamt5-it/official-website-v2/blob/master/_site/_next/data/64e2c6f134e73517d6ff737822e83cd75cf633c6/tw/posts/ithome-ghostcat-apache-tomcat-ajp-vulnerability.json',
          MitigationString: '',
          Name: 'linkedToVuln',
          Rule: 'Linked to Vulnerability',
          Sources: ['MIKjae', 'VKz42X'],
          Timestamp: '2021-12-27T07:36:54.000Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            "175 sightings on 31 sources including: 4-traders.com, SentinelLabs, Sesin at, Cisco Japan Blog, McAfee. 8 related malware families including WebShell, Ransomware, Backdoor, Backdoor Shell, SUNBURST. Most recent tweet: Malcode highlighted in 'App_Web_logoimagehandler.ashx.b6031896.dll' (c15abaf51e78ca56c0376522d699c978217bf041a3bd3c71d09193efa5717c71) #SolarWinds #SUNBURST https://t.co/lyvnVHuTb2. Most recent link (Dec 16, 2020): https://twitter.com/_mynameisgeff/statuses/1339070792705830913",
          MitigationString: '',
          Name: 'linkedToMalware',
          Rule: 'Linked to Malware',
          Sources: [
            'TuWseX',
            'KBTQ2e',
            'eP3CYX',
            'Z3TZAQ',
            'clDYM8',
            'rN',
            'VKz42X',
            'idn:elemendar.com',
            'idn:securitysummitperu.com',
            'PA-rR4',
            'idn:terabitweb.com',
            'eTNyK6',
            'gBQB48',
            'bMZlEg',
            'idn:edsitrend.com',
            'idn:infoblox.com',
            'UZNze8',
            'Z2mQh2',
            'XBl0xf',
            'dCpZqs',
            'jmpFm1',
            'T5',
            'doLlw5',
            'gBDK5G',
            'MIKjae',
            'idn:firsthackersnews.com',
            'jjf3_B',
            'Jv_xrR',
            'dCotni',
            'idn:comodo.com',
            'hibUwt',
          ],
          Timestamp: '2020-12-16T04:52:10.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '3 sightings on 1 source: DHS Automated Indicator Sharing. 3 reports including AA20-352A APT Compromise of Govt Agencies, Critical Infrastructure, and Private Sector Organizations, from CISA, Government Facilities Sector, CISA, Government Facilities Sector, NCCIC:STIX_Package-673aacd1-1852-4d44-bd93-0c44940a6358 (Feb 3, 2021).',
          MitigationString: '',
          Name: 'dhsAis',
          Rule: 'Reported by DHS AIS',
          Sources: ['UZNze8'],
          Timestamp: '2021-02-03T21:32:08.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '6 sightings on 2 sources: Sophos Virus and Spyware Threats, PolySwarm. Most recent link (Dec 17, 2020): https://news.sophos.com/fr-fr/2020/12/15/cyberattaque-contre-solarwinds-comment-savoir-si-vous-etes-concerne/',
          MitigationString: '',
          Name: 'positiveMalwareVerdict',
          Rule: 'Positive Malware Verdict',
          Sources: ['K16tAG', 'doLlw5'],
          Timestamp: '2020-12-20T15:18:53.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '13 sightings on 1 source: Insikt Group. 4 reports including Researchers Linked Supernova Malware to Spiral Group. Most recent link (Mar 08, 2021): https://app.recordedfuture.com/live/sc/5DIp4RIUiJz6',
          MitigationString: '',
          Name: 'analystNote',
          Rule: 'Reported by Insikt Group',
          Sources: ['VKz42X'],
          Timestamp: '2021-03-08T00:00:00.000Z',
        },
      ],
      risk_string: '7/14',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'c15abaf51e78ca56c0376522d699c978217bf041a3bd3c71d09193efa5717c71',
        file: {
          hash: {
            sha256:
              'c15abaf51e78ca56c0376522d699c978217bf041a3bd3c71d09193efa5717c71',
          },
        },
        type: 'file',
      },
    },
  },
  {
    '@timestamp': '2021-12-27T07:36:54.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '{"EvidenceDetails": "{\\"EvidenceDetails\\": [{\\"Rule\\": \\"Historically Reported as a Defanged DNS Name\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"21 sightings on 4 sources: Proofpoint, PasteBin, The Daily Advance, @DGAFeedAlerts. Most recent tweet: New ramnit Dom: xohrikvjhiu[.]eu IP: 13[.]90[.]196[.]81 NS: https://t.co/nTqEOuAW2E https://t.co/QdrtFSplyz. Most recent link (Nov 16, 2019): https://twitter.com/DGAFeedAlerts/statuses/1195824847915491329\\", \\"Sources\\": [\\"QQA438\\", \\"Jv_xrR\\", \\"SlNfa3\\", \\"KvPSaU\\"], \\"Timestamp\\": \\"2019-11-16T22:03:55.000Z\\", \\"Name\\": \\"defanged\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historical Threat Researcher\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"18 sightings on 2 sources: Proofpoint, The Daily Advance. Most recent link (Nov 12, 2018): https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy#.W-nmxyGcuiY.twitter\\", \\"Sources\\": [\\"QQA438\\", \\"KvPSaU\\"], \\"Timestamp\\": \\"2018-11-12T20:48:08.675Z\\", \\"Name\\": \\"threatResearcher\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Referenced by Insikt Group\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Insikt Group. 1 report: Proofpoint Researchers Observe sLoad and Ramnit in Campaigns Against The U.K. and Italy. Most recent link (Oct 23, 2018): https://app.recordedfuture.com/live/sc/4KSWum2M6Lx7\\", \\"Sources\\": [\\"VKz42X\\"], \\"Timestamp\\": \\"2018-10-23T00:00:00.000Z\\", \\"Name\\": \\"relatedNote\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Detected Malware Operation\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Mar 23, 2021.\\", \\"Sources\\": [\\"d3Awkm\\"], \\"Timestamp\\": \\"2021-03-23T00:00:00.000Z\\", \\"Name\\": \\"malwareSiteDetected\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Recent C\u0026C DNS Name\\", \\"CriticalityLabel\\": \\"Very Malicious\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.\\", \\"Sources\\": [\\"report:QhR8Qs\\"], \\"Timestamp\\": \\"2021-12-29T07:12:02.455Z\\", \\"Name\\": \\"recentCncSite\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 4.0}]}", "Name": "xohrikvjhiu.eu", "Risk": "96", "RiskString": "5/45"}',
      risk_score: 96.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '21 sightings on 4 sources: Proofpoint, PasteBin, The Daily Advance, @DGAFeedAlerts. Most recent tweet: New ramnit Dom: xohrikvjhiu[.]eu IP: 13[.]90[.]196[.]81 NS: https://t.co/nTqEOuAW2E https://t.co/QdrtFSplyz. Most recent link (Nov 16, 2019): https://twitter.com/DGAFeedAlerts/statuses/1195824847915491329',
          MitigationString: '',
          Name: 'defanged',
          Rule: 'Historically Reported as a Defanged DNS Name',
          Sources: ['QQA438', 'Jv_xrR', 'SlNfa3', 'KvPSaU'],
          Timestamp: '2019-11-16T22:03:55.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '18 sightings on 2 sources: Proofpoint, The Daily Advance. Most recent link (Nov 12, 2018): https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy#.W-nmxyGcuiY.twitter',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Historical Threat Researcher',
          Sources: ['QQA438', 'KvPSaU'],
          Timestamp: '2018-11-12T20:48:08.675Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Insikt Group. 1 report: Proofpoint Researchers Observe sLoad and Ramnit in Campaigns Against The U.K. and Italy. Most recent link (Oct 23, 2018): https://app.recordedfuture.com/live/sc/4KSWum2M6Lx7',
          MitigationString: '',
          Name: 'relatedNote',
          Rule: 'Historically Referenced by Insikt Group',
          Sources: ['VKz42X'],
          Timestamp: '2018-10-23T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Mar 23, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Operation',
          Sources: ['d3Awkm'],
          Timestamp: '2021-03-23T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.',
          MitigationString: '',
          Name: 'recentCncSite',
          Rule: 'Recent C\u0026C DNS Name',
          Sources: ['report:QhR8Qs'],
          Timestamp: '2021-12-29T07:12:02.455Z',
        },
      ],
      risk_string: '5/45',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'xohrikvjhiu.eu',
        type: 'domain-name',
        url: {
          domain: 'xohrikvjhiu.eu',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:12:02.455Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '{"EvidenceDetails": "{\\"EvidenceDetails\\": [{\\"Rule\\": \\"Historically Reported by DHS AIS\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-216d34d4-67bd-4add-ae6e-4ddec27dcb0e (Jul 25, 2019).\\", \\"Sources\\": [\\"UZNze8\\"], \\"Timestamp\\": \\"2019-07-25T00:46:19.000Z\\", \\"Name\\": \\"dhsAis\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historical Threat Researcher\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: MALWARE BREAKDOWN. Most recent link (May 17, 2017): https://malwarebreakdown.com/2017/05/17/seamless-malvertising-campaign-leads-to-rig-ek-at-185-154-53-33-and-drops-ramnit/\\", \\"Sources\\": [\\"ST7rfx\\"], \\"Timestamp\\": \\"2017-05-17T19:31:06.000Z\\", \\"Name\\": \\"threatResearcher\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Reported in Threat List\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Jul 19, 2021, and Jul 21, 2021.\\", \\"Sources\\": [\\"report:Tluf00\\"], \\"Timestamp\\": \\"2021-12-29T07:21:52.311Z\\", \\"Name\\": \\"historicalThreatListMembership\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Detected Malware Operation\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jul 9, 2021.\\", \\"Sources\\": [\\"d3Awkm\\"], \\"Timestamp\\": \\"2021-07-09T00:00:00.000Z\\", \\"Name\\": \\"malwareSiteDetected\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historical Malware Analysis DNS Name\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"2 sightings on 1 source: Malwr.com. Most recent link (Jul 6, 2017): https://malwr.com/analysis/ZmMxNWJlYWU1NTI4NDA1Nzg3YTc5MWViNTA0YTNhYmQ/\\", \\"Sources\\": [\\"NKaUXl\\"], \\"Timestamp\\": \\"2017-07-06T00:00:00.000Z\\", \\"Name\\": \\"malwareAnalysis\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Recent C\u0026C DNS Name\\", \\"CriticalityLabel\\": \\"Very Malicious\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.\\", \\"Sources\\": [\\"report:QhR8Qs\\"], \\"Timestamp\\": \\"2021-12-29T07:21:52.303Z\\", \\"Name\\": \\"recentCncSite\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 4.0}]}", "Name": "wgwuhauaqcrx.com", "Risk": "95", "RiskString": "6/45"}',
      risk_score: 95.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: DHS Automated Indicator Sharing. 1 report: STIX Package, from Anomali, Inc., Information Technology Sector, NCCIC:STIX_Package-216d34d4-67bd-4add-ae6e-4ddec27dcb0e (Jul 25, 2019).',
          MitigationString: '',
          Name: 'dhsAis',
          Rule: 'Historically Reported by DHS AIS',
          Sources: ['UZNze8'],
          Timestamp: '2019-07-25T00:46:19.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: MALWARE BREAKDOWN. Most recent link (May 17, 2017): https://malwarebreakdown.com/2017/05/17/seamless-malvertising-campaign-leads-to-rig-ek-at-185-154-53-33-and-drops-ramnit/',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Historical Threat Researcher',
          Sources: ['ST7rfx'],
          Timestamp: '2017-05-17T19:31:06.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            'Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Jul 19, 2021, and Jul 21, 2021.',
          MitigationString: '',
          Name: 'historicalThreatListMembership',
          Rule: 'Historically Reported in Threat List',
          Sources: ['report:Tluf00'],
          Timestamp: '2021-12-29T07:21:52.311Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jul 9, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Operation',
          Sources: ['d3Awkm'],
          Timestamp: '2021-07-09T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '2 sightings on 1 source: Malwr.com. Most recent link (Jul 6, 2017): https://malwr.com/analysis/ZmMxNWJlYWU1NTI4NDA1Nzg3YTc5MWViNTA0YTNhYmQ/',
          MitigationString: '',
          Name: 'malwareAnalysis',
          Rule: 'Historical Malware Analysis DNS Name',
          Sources: ['NKaUXl'],
          Timestamp: '2017-07-06T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.',
          MitigationString: '',
          Name: 'recentCncSite',
          Rule: 'Recent C\u0026C DNS Name',
          Sources: ['report:QhR8Qs'],
          Timestamp: '2021-12-29T07:21:52.303Z',
        },
      ],
      risk_string: '6/45',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'wgwuhauaqcrx.com',
        type: 'domain-name',
        url: {
          domain: 'wgwuhauaqcrx.com',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:21:52.000Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '{"EvidenceDetails": "{\\"EvidenceDetails\\": [{\\"Rule\\": \\"Historically Reported as a Defanged DNS Name\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: @DGAFeedAlerts. Most recent tweet: New ramnit Dom: wbmpvebw[.]com IP: 209[.]99[.]40[.]220 NS: https://t.co/bH4I7LoMNf https://t.co/KTCPYU87bT. Most recent link (Jan 4, 2020): https://twitter.com/DGAFeedAlerts/statuses/1213551578264821760\\", \\"Sources\\": [\\"SlNfa3\\"], \\"Timestamp\\": \\"2020-01-04T20:03:37.000Z\\", \\"Name\\": \\"defanged\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historical Threat Researcher\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Dynamoos Blog. Most recent link (Mar 8, 2017): http://blog.dynamoo.com/2013/05/something-evil-on-xxx-xx-xxxx.html\\", \\"Sources\\": [\\"KVQ2PB\\"], \\"Timestamp\\": \\"2017-03-08T01:18:17.569Z\\", \\"Name\\": \\"threatResearcher\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Reported in Threat List\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Feb 18, 2021, and Feb 24, 2021.\\", \\"Sources\\": [\\"report:Tluf00\\"], \\"Timestamp\\": \\"2021-12-29T07:16:05.008Z\\", \\"Name\\": \\"historicalThreatListMembership\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historically Detected Malware Operation\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jun 30, 2021.\\", \\"Sources\\": [\\"d3Awkm\\"], \\"Timestamp\\": \\"2021-06-30T00:00:00.000Z\\", \\"Name\\": \\"malwareSiteDetected\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Historical Malware Analysis DNS Name\\", \\"CriticalityLabel\\": \\"Unusual\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Malwr.com. Most recent link (May 8, 2017): https://malwr.com/analysis/NzhlZjJmMDA1MTMyNGM5NDg3YTQwMzI5YzAzMzY1NTg/\\", \\"Sources\\": [\\"NKaUXl\\"], \\"Timestamp\\": \\"2017-05-08T00:00:00.000Z\\", \\"Name\\": \\"malwareAnalysis\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 1.0}, {\\"Rule\\": \\"Recent C\u0026C DNS Name\\", \\"CriticalityLabel\\": \\"Very Malicious\\", \\"EvidenceString\\": \\"1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.\\", \\"Sources\\": [\\"report:QhR8Qs\\"], \\"Timestamp\\": \\"2021-12-29T07:16:05.007Z\\", \\"Name\\": \\"recentCncSite\\", \\"MitigationString\\": \\"\\", \\"Criticality\\": 4.0}]}", "Name": "wbmpvebw.com", "Risk": "95", "RiskString": "6/45"}',
      risk_score: 95.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: @DGAFeedAlerts. Most recent tweet: New ramnit Dom: wbmpvebw[.]com IP: 209[.]99[.]40[.]220 NS: https://t.co/bH4I7LoMNf https://t.co/KTCPYU87bT. Most recent link (Jan 4, 2020): https://twitter.com/DGAFeedAlerts/statuses/1213551578264821760',
          MitigationString: '',
          Name: 'defanged',
          Rule: 'Historically Reported as a Defanged DNS Name',
          Sources: ['SlNfa3'],
          Timestamp: '2020-01-04T20:03:37.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Dynamoos Blog. Most recent link (Mar 8, 2017): http://blog.dynamoo.com/2013/05/something-evil-on-xxx-xx-xxxx.html',
          MitigationString: '',
          Name: 'threatResearcher',
          Rule: 'Historical Threat Researcher',
          Sources: ['KVQ2PB'],
          Timestamp: '2017-03-08T01:18:17.569Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            'Previous sightings on 1 source: Recorded Future Analyst Community Trending Indicators. Observed between Feb 18, 2021, and Feb 24, 2021.',
          MitigationString: '',
          Name: 'historicalThreatListMembership',
          Rule: 'Historically Reported in Threat List',
          Sources: ['report:Tluf00'],
          Timestamp: '2021-12-29T07:16:05.008Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Jun 30, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Operation',
          Sources: ['d3Awkm'],
          Timestamp: '2021-06-30T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Malwr.com. Most recent link (May 8, 2017): https://malwr.com/analysis/NzhlZjJmMDA1MTMyNGM5NDg3YTQwMzI5YzAzMzY1NTg/',
          MitigationString: '',
          Name: 'malwareAnalysis',
          Rule: 'Historical Malware Analysis DNS Name',
          Sources: ['NKaUXl'],
          Timestamp: '2017-05-08T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Bambenek Consulting C\u0026C Blocklist.',
          MitigationString: '',
          Name: 'recentCncSite',
          Rule: 'Recent C\u0026C DNS Name',
          Sources: ['report:QhR8Qs'],
          Timestamp: '2021-12-29T07:16:05.007Z',
        },
      ],
      risk_string: '6/45',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'wbmpvebw.com',
        type: 'domain-name',
        url: {
          domain: 'wbmpvebw.com',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:16:05.007Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"1.128.3.4","99","4/64","{""EvidenceDetails"": [{""Rule"": ""Historically Linked to Intrusion Method"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""7 sightings on 1 source: PasteBin. 3 related intrusion methods: Trojan, Banking Trojan, QakBot. Most recent link (Nov 8, 2021): https://pastebin.com/G1Jvm5T0"", ""Sources"": [""Jv_xrR""], ""Timestamp"": ""2021-11-08T16:27:15.000Z"", ""Name"": ""linkedIntrusion"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Reported as a Defanged IP"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""2 sightings on 1 source: GitHub. Most recent link (Nov 16, 2021): https://github.com/pan-unit42/tweets/blob/master/2021-11-15-IOCs-for-Matanbuchus-Qakbot-CobaltStrike-and-spambot-activity.txt"", ""Sources"": [""MIKjae""], ""Timestamp"": ""2021-11-16T00:00:00.000Z"", ""Name"": ""defanged"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Current C\u0026C Server"", ""CriticalityLabel"": ""Very Malicious"", ""EvidenceString"": ""164 sightings on 4 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions, Abuse.ch: Feodo IP Blocklist, Polyswarm Sandbox Analysis - Malware C2 Extractions. Joe Security malware sandbox identified 103.143.8.71:443 as TA0011 (Command and Control) QakBot using configuration extraction on sample 8f97195fc90ce520e75db6785204da0adbda9be5464bb27cd4dcc5b23b547651"", ""Sources"": [""b5tNVA"", ""h_iZX8"", ""report:OtiCOp"", ""hyihHO""], ""Timestamp"": ""2021-12-29T02:11:16.658Z"", ""Name"": ""recentCncServer"", ""MitigationString"": """", ""Criticality"": 4.0}, {""Rule"": ""Actively Communicating C\u0026C Server"", ""CriticalityLabel"": ""Very Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Recorded Future Network Traffic Analysis. Identified as C\u0026C server for 1 malware family: Qakbot. Communication observed on TCP:443, TCP:6881, TCP:995. Exfiltration behavior observed. Last observed on Dec 27, 2021."", ""Sources"": [""report:aEft3k""], ""Timestamp"": ""2021-12-29T02:11:16.663Z"", ""Name"": ""recentActiveCnc"", ""MitigationString"": """", ""Criticality"": 4.0}]}"',
      risk_score: 99.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '7 sightings on 1 source: PasteBin. 3 related intrusion methods: Trojan, Banking Trojan, QakBot. Most recent link (Nov 8, 2021): https://pastebin.com/G1Jvm5T0',
          MitigationString: '',
          Name: 'linkedIntrusion',
          Rule: 'Historically Linked to Intrusion Method',
          Sources: ['Jv_xrR'],
          Timestamp: '2021-11-08T16:27:15.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '2 sightings on 1 source: GitHub. Most recent link (Nov 16, 2021): https://github.com/pan-unit42/tweets/blob/master/2021-11-15-IOCs-for-Matanbuchus-Qakbot-CobaltStrike-and-spambot-activity.txt',
          MitigationString: '',
          Name: 'defanged',
          Rule: 'Historically Reported as a Defanged IP',
          Sources: ['MIKjae'],
          Timestamp: '2021-11-16T00:00:00.000Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '164 sightings on 4 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions, Abuse.ch: Feodo IP Blocklist, Polyswarm Sandbox Analysis - Malware C2 Extractions. Joe Security malware sandbox identified 103.143.8.71:443 as TA0011 (Command and Control) QakBot using configuration extraction on sample 8f97195fc90ce520e75db6785204da0adbda9be5464bb27cd4dcc5b23b547651',
          MitigationString: '',
          Name: 'recentCncServer',
          Rule: 'Current C\u0026C Server',
          Sources: ['b5tNVA', 'h_iZX8', 'report:OtiCOp', 'hyihHO'],
          Timestamp: '2021-12-29T02:11:16.658Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '1 sighting on 1 source: Recorded Future Network Traffic Analysis. Identified as C\u0026C server for 1 malware family: Qakbot. Communication observed on TCP:443, TCP:6881, TCP:995. Exfiltration behavior observed. Last observed on Dec 27, 2021.',
          MitigationString: '',
          Name: 'recentActiveCnc',
          Rule: 'Actively Communicating C\u0026C Server',
          Sources: ['report:aEft3k'],
          Timestamp: '2021-12-29T02:11:16.663Z',
        },
      ],
      risk_string: '4/64',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: '1.128.3.4',
        ip: '1.128.3.4',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-12-29T02:11:16.658Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"2a02:cf40:add:4002:91f2:a9b2:e09a:6fc6","68","5/64","{""EvidenceDetails"": [{""Rule"": ""Historical Brute Force"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: AbuseIPDB Community Submissions. 2001:470:1:c84::17 was identified as Brute-Force by multiple unique community member submissions. Reported to Recorded Future on Nov 23, 2021."", ""Sources"": [""kAh9jV""], ""Timestamp"": ""2021-11-24T10:21:58.872Z"", ""Name"": ""bruteForce"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recent Spam Source"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""1 sighting on 1 source: AbuseIPDB Spam. 2001:470:1:c84::17 was identified as Web Spam by multiple unique community member submissions. Reported to Recorded Future on Dec 21, 2021."", ""Sources"": [""kAiRKZ""], ""Timestamp"": ""2021-12-23T10:18:14.025Z"", ""Name"": ""recentSpam"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Recent SSH/Dictionary Attacker"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""1 sighting on 1 source: DataPlane SSH Client Connection List."", ""Sources"": [""report:U8nmOf""], ""Timestamp"": ""2021-12-29T07:19:53.133Z"", ""Name"": ""recentSshDictAttacker"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Recent Multicategory Blocklist"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""1 sighting on 1 source: BlockList.de: Fail2ban Reporting Service."", ""Sources"": [""report:OhgwUx""], ""Timestamp"": ""2021-12-29T07:19:53.133Z"", ""Name"": ""recentMultiBlacklist"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Recent DDoS"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""1 sighting on 1 source: AbuseIPDB Community Submissions. 2001:470:1:c84::17 was identified as DDoS Attack by multiple unique community member submissions. Reported to Recorded Future on Dec 21, 2021."", ""Sources"": [""kAh9jV""], ""Timestamp"": ""2021-12-23T10:18:13.994Z"", ""Name"": ""recentDdos"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 68.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: AbuseIPDB Community Submissions. 2001:470:1:c84::17 was identified as Brute-Force by multiple unique community member submissions. Reported to Recorded Future on Nov 23, 2021.',
          MitigationString: '',
          Name: 'bruteForce',
          Rule: 'Historical Brute Force',
          Sources: ['kAh9jV'],
          Timestamp: '2021-11-24T10:21:58.872Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '1 sighting on 1 source: AbuseIPDB Spam. 2001:470:1:c84::17 was identified as Web Spam by multiple unique community member submissions. Reported to Recorded Future on Dec 21, 2021.',
          MitigationString: '',
          Name: 'recentSpam',
          Rule: 'Recent Spam Source',
          Sources: ['kAiRKZ'],
          Timestamp: '2021-12-23T10:18:14.025Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '1 sighting on 1 source: DataPlane SSH Client Connection List.',
          MitigationString: '',
          Name: 'recentSshDictAttacker',
          Rule: 'Recent SSH/Dictionary Attacker',
          Sources: ['report:U8nmOf'],
          Timestamp: '2021-12-29T07:19:53.133Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '1 sighting on 1 source: BlockList.de: Fail2ban Reporting Service.',
          MitigationString: '',
          Name: 'recentMultiBlacklist',
          Rule: 'Recent Multicategory Blocklist',
          Sources: ['report:OhgwUx'],
          Timestamp: '2021-12-29T07:19:53.133Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '1 sighting on 1 source: AbuseIPDB Community Submissions. 2001:470:1:c84::17 was identified as DDoS Attack by multiple unique community member submissions. Reported to Recorded Future on Dec 21, 2021.',
          MitigationString: '',
          Name: 'recentDdos',
          Rule: 'Recent DDoS',
          Sources: ['kAh9jV'],
          Timestamp: '2021-12-23T10:18:13.994Z',
        },
      ],
      risk_string: '5/64',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: '2a02:cf40:add:4002:91f2:a9b2:e09a:6fc6',
        ip: '2a02:cf40:add:4002:91f2:a9b2:e09a:6fc6',
        type: 'ipv6-addr',
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:19:53.133Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"175.16.199.1","99","6/64","{""EvidenceDetails"": [{""Rule"": ""Historically Linked to Intrusion Method"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: GitHub. 2 related intrusion methods: Nanocore, Remote Access Trojan. Most recent link (Jan 1, 2021): https://github.com/GlacierSheep/DomainBlockList/blob/master/trail/static_nanocore_(malware).domainset"", ""Sources"": [""MIKjae""], ""Timestamp"": ""2021-01-01T16:56:57.000Z"", ""Name"": ""linkedIntrusion"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historical Multicategory Blocklist"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""2 sightings on 2 sources: Bitdefender IP Reputation, hpHosts Latest Additions. Bitdefender detected suspicious traffic involving 185.19.85.136 associated with Bitdefender threat name Trojan.GenericKD.34300483 on Apr 30, 2021"", ""Sources"": [""iFMVSl"", ""Ol_aRZ""], ""Timestamp"": ""2021-04-30T04:50:06.000Z"", ""Name"": ""multiBlacklist"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Reported in Threat List"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""Previous sightings on 1 source: Recorded Future Fast Flux DNS IP List. Observed between Feb 13, 2021, and Feb 13, 2021."", ""Sources"": [""report:SW8xpk""], ""Timestamp"": ""2021-12-28T19:20:46.641Z"", ""Name"": ""historicalThreatListMembership"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recent C\u0026C Server"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""9 sightings on 2 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions. Command \u0026 Control host identified on Oct 29, 2021."", ""Sources"": [""b5tNVA"", ""h_iZX8""], ""Timestamp"": ""2021-10-29T08:07:54.495Z"", ""Name"": ""intermediateCncServer"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Recently Active C\u0026C Server"", ""CriticalityLabel"": ""Suspicious"", ""EvidenceString"": ""1 sighting on 1 source: Recorded Future Network Traffic Analysis. Identified as C\u0026C server for 1 malware family: Asyncrat. Communication observed on TCP:6060. Last observed on Dec 21, 2021."", ""Sources"": [""report:aEft3k""], ""Timestamp"": ""2021-12-28T19:20:46.639Z"", ""Name"": ""intermediateActiveCnc"", ""MitigationString"": """", ""Criticality"": 2.0}, {""Rule"": ""Current C\u0026C Server"", ""CriticalityLabel"": ""Very Malicious"", ""EvidenceString"": ""12 sightings on 2 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions. Command \u0026 Control host identified on Dec 24, 2021."", ""Sources"": [""b5tNVA"", ""h_iZX8""], ""Timestamp"": ""2021-12-24T08:07:09.925Z"", ""Name"": ""recentCncServer"", ""MitigationString"": """", ""Criticality"": 4.0}]}"',
      risk_score: 99.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: GitHub. 2 related intrusion methods: Nanocore, Remote Access Trojan. Most recent link (Jan 1, 2021): https://github.com/GlacierSheep/DomainBlockList/blob/master/trail/static_nanocore_(malware).domainset',
          MitigationString: '',
          Name: 'linkedIntrusion',
          Rule: 'Historically Linked to Intrusion Method',
          Sources: ['MIKjae'],
          Timestamp: '2021-01-01T16:56:57.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '2 sightings on 2 sources: Bitdefender IP Reputation, hpHosts Latest Additions. Bitdefender detected suspicious traffic involving 185.19.85.136 associated with Bitdefender threat name Trojan.GenericKD.34300483 on Apr 30, 2021',
          MitigationString: '',
          Name: 'multiBlacklist',
          Rule: 'Historical Multicategory Blocklist',
          Sources: ['iFMVSl', 'Ol_aRZ'],
          Timestamp: '2021-04-30T04:50:06.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            'Previous sightings on 1 source: Recorded Future Fast Flux DNS IP List. Observed between Feb 13, 2021, and Feb 13, 2021.',
          MitigationString: '',
          Name: 'historicalThreatListMembership',
          Rule: 'Historically Reported in Threat List',
          Sources: ['report:SW8xpk'],
          Timestamp: '2021-12-28T19:20:46.641Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '9 sightings on 2 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions. Command \u0026 Control host identified on Oct 29, 2021.',
          MitigationString: '',
          Name: 'intermediateCncServer',
          Rule: 'Recent C\u0026C Server',
          Sources: ['b5tNVA', 'h_iZX8'],
          Timestamp: '2021-10-29T08:07:54.495Z',
        },
        {
          Criticality: 2.0,
          CriticalityLabel: 'Suspicious',
          EvidenceString:
            '1 sighting on 1 source: Recorded Future Network Traffic Analysis. Identified as C\u0026C server for 1 malware family: Asyncrat. Communication observed on TCP:6060. Last observed on Dec 21, 2021.',
          MitigationString: '',
          Name: 'intermediateActiveCnc',
          Rule: 'Recently Active C\u0026C Server',
          Sources: ['report:aEft3k'],
          Timestamp: '2021-12-28T19:20:46.639Z',
        },
        {
          Criticality: 4.0,
          CriticalityLabel: 'Very Malicious',
          EvidenceString:
            '12 sightings on 2 sources: Recorded Future Command \u0026 Control List, Joe Security Sandbox Analysis - Malware C2 Extractions. Command \u0026 Control host identified on Dec 24, 2021.',
          MitigationString: '',
          Name: 'recentCncServer',
          Rule: 'Current C\u0026C Server',
          Sources: ['b5tNVA', 'h_iZX8'],
          Timestamp: '2021-12-24T08:07:09.925Z',
        },
      ],
      risk_string: '6/64',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: '175.16.199.1',
        ip: '175.16.199.1',
        type: 'ipv4-addr',
      },
    },
  },
  {
    '@timestamp': '2021-12-28T19:20:46.641Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"http://144.34.179.162/a","87","2/24","{""EvidenceDetails"": [{""Rule"": ""Historically Reported as a Defanged URL"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""66 sightings on 22 sources including: Ars Technica, fook.news, urdupresss.com, HackDig Posts, apple.news. Most recent link (Jul 20, 2021): https://techsecuritenews.com/solarwinds-pirates-utilisent-nouvelle-faille-zero-day-attaques/"", ""Sources"": [""Ctq"", ""idn:fook.news"", ""idn:urdupresss.com"", ""POs2u-"", ""idn:apple.news"", ""idn:cryptoinfoos.com.ng"", ""g9rk5F"", ""idn:thewindowsupdate.com"", ""idn:nationalcybersecuritynews.today"", ""gBDK5G"", ""idn:microsoft.com"", ""idn:techsecuritenews.com"", ""idn:mblogs.info"", ""J6UzbO"", ""idn:viralamo.com"", ""idn:sellorbuyhomefast.com"", ""idn:crazyboy.tech"", ""idn:times24h.com"", ""idn:buzzfeeg.com"", ""idn:dsmenders.com"", ""WroSbs"", ""idn:vzonetvgh.com""], ""Timestamp"": ""2021-07-20T00:00:00.000Z"", ""Name"": ""defangedURL"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recently Reported by Insikt Group"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Insikt Group. 1 report: SolarWinds Fixes Critical Vulnerability in Serv-U Managed File Transfer and Secure FTP Products. Most recent link (Jul 10, 2021): https://app.recordedfuture.com/live/sc/1GnDrn8zigTd"", ""Sources"": [""VKz42X""], ""Timestamp"": ""2021-07-10T00:00:00.000Z"", ""Name"": ""recentAnalystNote"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 87.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '66 sightings on 22 sources including: Ars Technica, fook.news, urdupresss.com, HackDig Posts, apple.news. Most recent link (Jul 20, 2021): https://techsecuritenews.com/solarwinds-pirates-utilisent-nouvelle-faille-zero-day-attaques/',
          MitigationString: '',
          Name: 'defangedURL',
          Rule: 'Historically Reported as a Defanged URL',
          Sources: [
            'Ctq',
            'idn:fook.news',
            'idn:urdupresss.com',
            'POs2u-',
            'idn:apple.news',
            'idn:cryptoinfoos.com.ng',
            'g9rk5F',
            'idn:thewindowsupdate.com',
            'idn:nationalcybersecuritynews.today',
            'gBDK5G',
            'idn:microsoft.com',
            'idn:techsecuritenews.com',
            'idn:mblogs.info',
            'J6UzbO',
            'idn:viralamo.com',
            'idn:sellorbuyhomefast.com',
            'idn:crazyboy.tech',
            'idn:times24h.com',
            'idn:buzzfeeg.com',
            'idn:dsmenders.com',
            'WroSbs',
            'idn:vzonetvgh.com',
          ],
          Timestamp: '2021-07-20T00:00:00.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '1 sighting on 1 source: Insikt Group. 1 report: SolarWinds Fixes Critical Vulnerability in Serv-U Managed File Transfer and Secure FTP Products. Most recent link (Jul 10, 2021): https://app.recordedfuture.com/live/sc/1GnDrn8zigTd',
          MitigationString: '',
          Name: 'recentAnalystNote',
          Rule: 'Recently Reported by Insikt Group',
          Sources: ['VKz42X'],
          Timestamp: '2021-07-10T00:00:00.000Z',
        },
      ],
      risk_string: '2/24',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'http://144.34.179.162/a',
        type: 'url',
        url: {
          domain: '144.34.179.162',
          original: 'http://144.34.179.162/a',
          path: '/a',
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-28T19:20:46.641Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"http://adminsys.serveftp.com/nensa/fabio/ex/478632215/zer7855/nuns566623","85","4/24","{""EvidenceDetails"": [{""Rule"": ""Historically Reported as a Defanged URL"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""41 sightings on 19 sources including: Stock market news Company News  MarketScreenercom, GlobeNewswire | Software, Yahoo!, globenewswirecom, otcdynamics.com. Most recent link (Oct 3, 2021): https://telecomkh.info/?p=4004"", ""Sources"": [""XBl0xf"", ""c2unu0"", ""DVW"", ""NPgRlV"", ""idn:otcdynamics.com"", ""idn:norteenlinea.com"", ""N4OmGX"", ""idn:snewsonline.com"", ""idn:nationalcybersecuritynews.today"", ""dCod5e"", ""hZ14Az"", ""idn:securityopenlab.it"", ""idn:clevertechmx.blogspot.com"", ""cJzvLR"", ""eNeV39"", ""dCotni"", ""dCo6X1"", ""jB6Hnn"", ""idn:telecomkh.info""], ""Timestamp"": ""2021-10-03T12:53:49.605Z"", ""Name"": ""defangedURL"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Detected Phishing Techniques"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Nov 14, 2021."", ""Sources"": [""d3Awkm""], ""Timestamp"": ""2021-11-14T00:00:00.000Z"", ""Name"": ""phishingSiteDetected"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Historically Detected Malware Distribution"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Nov 14, 2021."", ""Sources"": [""d3Awkm""], ""Timestamp"": ""2021-11-14T00:00:00.000Z"", ""Name"": ""malwareSiteDetected"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recently Active URL on Weaponized Domain"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Recorded Future Domain Analysis URLs. Service provider: No-IP. Behavior observed: Malware Distribution, Phishing Techniques. Last observed on Dec 20, 2021."", ""Sources"": [""report:aRJ1CU""], ""Timestamp"": ""2021-12-29T07:08:29.105Z"", ""Name"": ""recentWeaponizedURL"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 85.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '41 sightings on 19 sources including: Stock market news Company News  MarketScreenercom, GlobeNewswire | Software, Yahoo!, globenewswirecom, otcdynamics.com. Most recent link (Oct 3, 2021): https://telecomkh.info/?p=4004',
          MitigationString: '',
          Name: 'defangedURL',
          Rule: 'Historically Reported as a Defanged URL',
          Sources: [
            'XBl0xf',
            'c2unu0',
            'DVW',
            'NPgRlV',
            'idn:otcdynamics.com',
            'idn:norteenlinea.com',
            'N4OmGX',
            'idn:snewsonline.com',
            'idn:nationalcybersecuritynews.today',
            'dCod5e',
            'hZ14Az',
            'idn:securityopenlab.it',
            'idn:clevertechmx.blogspot.com',
            'cJzvLR',
            'eNeV39',
            'dCotni',
            'dCo6X1',
            'jB6Hnn',
            'idn:telecomkh.info',
          ],
          Timestamp: '2021-10-03T12:53:49.605Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Nov 14, 2021.',
          MitigationString: '',
          Name: 'phishingSiteDetected',
          Rule: 'Historically Detected Phishing Techniques',
          Sources: ['d3Awkm'],
          Timestamp: '2021-11-14T00:00:00.000Z',
        },
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '1 sighting on 1 source: Bitdefender. Detected malicious behavior from an endpoint agent via global telemetry. Last observed on Nov 14, 2021.',
          MitigationString: '',
          Name: 'malwareSiteDetected',
          Rule: 'Historically Detected Malware Distribution',
          Sources: ['d3Awkm'],
          Timestamp: '2021-11-14T00:00:00.000Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '1 sighting on 1 source: Recorded Future Domain Analysis URLs. Service provider: No-IP. Behavior observed: Malware Distribution, Phishing Techniques. Last observed on Dec 20, 2021.',
          MitigationString: '',
          Name: 'recentWeaponizedURL',
          Rule: 'Recently Active URL on Weaponized Domain',
          Sources: ['report:aRJ1CU'],
          Timestamp: '2021-12-29T07:08:29.105Z',
        },
      ],
      risk_string: '4/24',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'http://adminsys.serveftp.com/nensa/fabio/ex/478632215/zer7855/nuns566623',
        type: 'url',
        url: {
          domain: 'adminsys.serveftp.com',
          original:
            'http://adminsys.serveftp.com/nensa/fabio/ex/478632215/zer7855/nuns566623',
          path: '/nensa/fabio/ex/478632215/zer7855/nuns566623',
          scheme: 'http',
        },
      },
    },
  },
  {
    '@timestamp': '2021-12-29T07:08:29.105Z',
    ecs: {
      version: '8.4.0',
    },
    event: {
      category: 'threat',
      dataset: 'ti_recordedfuture.threat',
      kind: 'enrichment',
      original:
        '"http://3.145.115.94/zambo/groenhuyzen.exe","79","2/24","{""EvidenceDetails"": [{""Rule"": ""Historically Reported as a Defanged URL"", ""CriticalityLabel"": ""Unusual"", ""EvidenceString"": ""17 sightings on 14 sources including: Security Affairs, sensorstechforum.com, Heimdal Security Blog, securitynewspaper, BBS Kafan Card Forum. Most recent link (Dec 22, 2021): https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F183750%2F1640120040Log4j_-_Explorao_por_grupos_APT.pdf"", ""Sources"": [""JNe6Hu"", ""TQnwKJ"", ""OfMf0W"", ""TefIEN"", ""VyuDZP"", ""Z7kln5"", ""bd-Dtt"", ""kKLjNc"", ""Y7TWfI"", ""idn:redpacketsecurity.com"", ""idn:eccouncil.org"", ""idn:comparaland.com"", ""idn:d335luupugsy2.cloudfront.net"", ""KVRURg""], ""Timestamp"": ""2021-12-22T16:01:42.134Z"", ""Name"": ""defangedURL"", ""MitigationString"": """", ""Criticality"": 1.0}, {""Rule"": ""Recently Reported by Insikt Group"", ""CriticalityLabel"": ""Malicious"", ""EvidenceString"": ""1 sighting on 1 source: Insikt Group. 1 report: Khonsari Ransomware and Orcus RAT Exploit Log4Shell (CVE-2021-44228), Samples Uploaded on MalwareBazaar. Most recent link (Dec 17, 2021): https://app.recordedfuture.com/live/sc/4SWiMAS816Gj"", ""Sources"": [""VKz42X""], ""Timestamp"": ""2021-12-17T00:00:00.000Z"", ""Name"": ""recentAnalystNote"", ""MitigationString"": """", ""Criticality"": 3.0}]}"',
      risk_score: 79.0,
      type: 'indicator',
    },
    recordedfuture: {
      evidence_details: [
        {
          Criticality: 1.0,
          CriticalityLabel: 'Unusual',
          EvidenceString:
            '17 sightings on 14 sources including: Security Affairs, sensorstechforum.com, Heimdal Security Blog, securitynewspaper, BBS Kafan Card Forum. Most recent link (Dec 22, 2021): https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F183750%2F1640120040Log4j_-_Explorao_por_grupos_APT.pdf',
          MitigationString: '',
          Name: 'defangedURL',
          Rule: 'Historically Reported as a Defanged URL',
          Sources: [
            'JNe6Hu',
            'TQnwKJ',
            'OfMf0W',
            'TefIEN',
            'VyuDZP',
            'Z7kln5',
            'bd-Dtt',
            'kKLjNc',
            'Y7TWfI',
            'idn:redpacketsecurity.com',
            'idn:eccouncil.org',
            'idn:comparaland.com',
            'idn:d335luupugsy2.cloudfront.net',
            'KVRURg',
          ],
          Timestamp: '2021-12-22T16:01:42.134Z',
        },
        {
          Criticality: 3.0,
          CriticalityLabel: 'Malicious',
          EvidenceString:
            '1 sighting on 1 source: Insikt Group. 1 report: Khonsari Ransomware and Orcus RAT Exploit Log4Shell (CVE-2021-44228), Samples Uploaded on MalwareBazaar. Most recent link (Dec 17, 2021): https://app.recordedfuture.com/live/sc/4SWiMAS816Gj',
          MitigationString: '',
          Name: 'recentAnalystNote',
          Rule: 'Recently Reported by Insikt Group',
          Sources: ['VKz42X'],
          Timestamp: '2021-12-17T00:00:00.000Z',
        },
      ],
      risk_string: '2/24',
    },
    tags: ['preserve_original_event'],
    threat: {
      feed: {
        name: 'Recorded Future',
      },
      indicator: {
        name: 'http://3.145.115.94/zambo/groenhuyzen.exe',
        type: 'url',
        url: {
          domain: '3.145.115.94',
          extension: 'exe',
          original: 'http://3.145.115.94/zambo/groenhuyzen.exe',
          path: '/zambo/groenhuyzen.exe',
          scheme: 'http',
        },
      },
    },
  },
];
