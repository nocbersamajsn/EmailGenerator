class DropDown {

    constructor(data) {
        this.data = data;
        this.targets = [];
    }

    dataFilter(fillterSbgArray) {
        return this.data.filter(r => fillterSbgArray.every((item, i) => item === r[i]));
    }

    cariNilaiUnik(dataSbgArray, index) {
        const pilihanUnik = new Set();
        dataSbgArray.forEach(r => pilihanUnik.add(r[index]));
        return [...pilihanUnik];
    }

    populateDropDown(el, listSbgArray) {
        el.innerHTML = '';
        listSbgArray.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;
            el.appendChild(option);
    });
    }

    createPopulateDropDownFunction(el, elmBerdasarkan) {
        return () => {
            const elmBerdasarkanNilai = elmBerdasarkan.length === 0 ? null : elmBerdasarkan.map(depEl => depEl.value);
            const dataDipakai =elmBerdasarkan.length === 0 ? this.data : this.dataFilter(elmBerdasarkanNilai);
            const listDipakai = this.cariNilaiUnik(dataDipakai, elmBerdasarkan.length);
            this.populateDropDown(el, listDipakai);
        }
    }

    add(options) {
        // {target: 'level1', tergantungPada: []}
        const el = document.getElementById(options.target);
        const elmBerdasarkan = options.tergantungPada.length === 0 ? [] : options.tergantungPada.map(id => document.getElementById(id));
        const eventFunction = this.createPopulateDropDownFunction(el, elmBerdasarkan);
        const objectTarget = { el: el, elmBerdasarkan: elmBerdasarkan, func: eventFunction};
        objectTarget.elmBerdasarkan.forEach(depEl => depEl.addEventListener('change', eventFunction));
        this.targets.push(objectTarget);
        return this;

    }



    initialize() {
        this.targets.forEach(t => t.func());
        return this;
    }

    tambahDropdown(arrayBerdasarId) {
        arrayBerdasarId.forEach((item, i) => {
            const option = {target: item, tergantungPada: arrayBerdasarId.slice(0, i) };
            this.add(option);
        });
        this.initialize();
        return this; //mengembalikan nilai konsol
    }
}


var dataEmail = [
    ['Pilih Provider..','Pilih Daerah..','Pilih Lokasi..','Circuit ID..','Site..','Capacity..'],
    
    // Icon Plus
    ['Icon Plus','Seluma','Kominfo Seluma','01000087777 (IP VPN)','Kominfo Seluma, Talang Saling, Kabupaten Seluma, Bengkulu (100Mbps)(01000087777)','100 Mbps'],
    ['Icon Plus','Pati','Jontro','01000106666 (Metro-E)','CV. HAANSIRO, RT.4 RW.1 Desa Jontro, Kecamatan Wedarijaksa, Kabupaten Pati, Jawa Tengah (1 Gbps) (01000106666)','1 Gbps','haansiro@gmail.com',''],
    ['Icon Plus','Demak','Dempet','01000112405 (Metro-E)','Jl. Gajah-Dempet, RT.07/RW.04, Dempet, Kecamatan Dempet, Kabupaten Demak, Jawa Tengah 59573 (1 Gbps) (01000112405)','1 Gbps','kholilur@jsn.net.id, larco.kun@gmail.com',''],
    ['Icon Plus','Bengkalis','Mandau','01000085551 (Metro-E)','JL. Siak Gg Kuantan Duri-Riau, Kecamatan Mandau, Kabupaten Bengkalis, Riau, Indonesia (10 Mbps) (01000085551)','10 Mbps','wardiyono@rifansi.co.id',''],
    ['Icon Plus','Langkat','Tanjung Pura','01000098443 (Metro-E)','DUSUN 1 PENDIDIKAN DESA SERAPUH ASLI, Kecamatan Tanjung Pura, Kabupaten Langkat, Sumatera Utara, Indonesia, 20853 (1Gbps) (01000098443)','1 Gbps','hendr499@gmail.com',''],
    ['Icon Plus','Rembang','Pulo','01000134873 (Metro-E)','BENTUMAN BISTRO FOOD & DRINKS, Jl. KS Tubun, Ruko Pondok Permata No. 4 Sugihan, Desa Pulu, Rembang, Kabupaten Rembang, Jawa Tengah, Indonesia (1 Gbps) (01000134873)','1 Gbps','ardibeni28@gmail.com',''],
    ['Icon Plus','Rembang','Kragan','01000135650 (Metro-E)','Ds. Kebloran RT003/RW002, Kec. Kragan, Kabupaten Rembang, Jawa Tengah, lndonesia (1 Gbps) (01000135650)','1 Gbps','ardibeni28@gmail.com',''],
    ['Icon Plus','Tulungagung','Blitar','01000150372 (Metro-E)','Jl Raya Kunir,Krajan, Kunir, Wonodadi, Kabupaten Blitar, Jawa Timur, Indonesia  (1 Gbps) (01000142920 )','1 Gbps','badrayana@jsn.net.id','lintangelok123@gmail.com'],
    ['Icon Plus','Tulungagung','Kacangan','01000103972 (Metro-E)','RT 01 RW03/Dsn. Bendorubuh, Ds. Kacangan, Kec. Ngunut, Kab. Tulungagung, Jawa Timur 66292 (1 Gbps) (01000103972)','1 Gbps','badrayana@jsn.net.id',''],
    ['Icon Plus','Tulungagung','Trenggalek','01000124683 (Metro-E)','Jalan Gandusari - Kampak, RT.21/RW.6 ,Duren,Wonorejo, Gandusari, Kabupaten Trenggalek, Jawa Timur, 66372 (1 Gbps) (01000124683)','1 Gbps','badrayana@jsn.net.id',''],
    ['Icon Plus','Tulungagung','Sumbergempol','01000142915 (Metro-E)','Jln. Desa RT.01/RW.01 Somoteleng, Podorejo, Kec. Sumbergempol, Kabupaten Tulungagung, Jawa Timur, Indonesia (1 Gbps) (01000142915)','1 Gbps','badrayana@jsn.net.id','andromaxv320@gmail.com'],
    ['Icon Plus','Tulungagung','Tamban Pakel','01000143386 (IP VPN)','Lintas Barat Bungkur, Bungkur, Tamban Pakel, Kab.Tulungagung, Jawa Timur 66273, Indonesia (100Mbps) (01000143386)','100 Mbps','badrayana@jsn.net.id',''],
    ['Icon Plus','Malang','Bantur','01000152771 (Metro-E)','Dusun Bantur Timur RT33/RW 07, Desa Bantur Kec Bantur,- ,Kabupaten Malang ,Jawa Timur ,Indonesia (1 Gbps) (01000152771)','1 Gbps','malang@jsn.net.id',''],
    ['Icon Plus','Malang','Pagak','01000124790 (Metro-E)','Dusun Judeg, RT.10/RW.03, Desa Tlogorejo, Kecamatan Pagak, Kabupaten Malang, Jawa Timur (2 Gbps) (01000124790)','1 Gbps','malang@jsn.net.id',''],
    ['Icon Plus','Malang','Krajan','01000143363 (IP VPN)','Krajan, Dengkol, Kec.Singosari, Malang Kab. Malang, Jawa Tmur 65153, Indonesia (50Mbps) (01000143363)','50 Mbps','malang@jsn.net.id',''],
['Icon Plus','Malang','Bantur','01000143366 (IP VPN)','Balewarti. rejosari, Bantur, Malang, Kab.Malang, Jawa Timur 65179, Indonesia (50Mbps) (01000143366)','50 Mbps','malang@jsn.net.id',''],
['Icon Plus','Malang','Turen','01000143381 (IP VPN)','Sidorejo RT 32 RW 12 Pagelaran, Sumbersoko, Kemulan, Kec.Turen, Malang, Kab.Malang, Jawa Timur 65174, Indonesia (50Mbps) (01000143381)','50 Mbps','malang@jsn.net.id',''],
    ['Icon Plus','Ponorogo','Kauman','01000142923 (Metro-E)','Jl. Sidotopo 9A Kauman, Ponorogo, Jawa Timur, Yagan, Carat, Kabupaten Ponorogo, Jawa Timur, Indonesia (1 Gbps) (01000142923)','1 Gbps','jsnponorogo@gmail.com',''],
    ['Icon Plus','Ponorogo','Kedung Banteng','01000150372 (Metro-E)','Dukuh.kalipucang, RT 01/RW 02, Desa. kedungbanteng, Kec. Sukorejo, Kab. Ponorogo, Jawatimur, Indonesia (1 Gbps) (01000150372)','1 Gbps','jsnponorogo@gmail.com','didikprima15@gmail.com'],

    // Indosat Oreedoo
    ['Indosat','Aceh','BIRUEN','DETH_MTX09482393_JKS_8535','BIRUEN','500 Mbps','waxherman@jsn.net.id',''],
    ['Indosat','Aceh','BIRUEN','DETH J-S-N BRN-ETR 210317','BIRUEN','1 Gbps','waxherman@jsn.net.id',''],
    ['Indosat','Kutai Timur','SANGATTA','DETH J-S-N SAA-ETR 220072','SANGATTA','500 Mbps','neozack24@gmail.com',''],
    ['Indosat','Kutai Timur','PINRANG','DETH J-S-N PIN-ETR 210247','PINRANG','1 Gbps','neozack24@gmail.com','admin@lontaranetwork.id'],
    ['Indosat','Kutai Timur','POLEWALI','DETH J-S-N PLW-ETR 210466','POLEWALI','1 Gbps','neozack24@gmail.com',''],
    ['Indosat','Sulawesi Utara','MANADO','DETH J-S-N MND-ETR 210676','MANADO','300 Mbps','a.anaogi@gmail.com',''],

    // Fiberstar
    ['Fiberstar','Pati','Jontro','CRT2104003077','PATI','13 Gbps','haansiro@gmail.com',''],
    ['Fiberstar','Demak','Pop Kudus','CRT2104009744','DEMAK','8 Gbps','kholilur@jsn.net.id, larco.kun@gmail.com',''],
    ['Fiberstar','Ngawi','Ngawi','CRT2009005413','NGAWI','2 Gbps','uudsapto@gmail.com',''],
    ['Fiberstar','Kediri','Kediri','CRT2010001796','KEDIRI','2 Gbps','kangmuzan@gmail.com',''],
    ['Fiberstar','Malang','Sumberpucung','CRT2104003075','MALANG','3 Gbps','malang@jsn.net.id, rizqi.kuswanto@fiberstar.co.id',''],
    ['Fiberstar','Bali','Gianyar','CRT2104009127','BALI','1 Gbps','w.sujana@jsn.net.id',''],
    ['Fiberstar','Ungaran','Salatiga','CRT2108009824','UNGARAN','500 Mbps','cs.deltamitra@gmail.com',''],
    ['Fiberstar','Rembang','Rembang','CRT2109008642','REMBANG','2 Gbps','ardibeni28@gmail.com',''],

    //Xl Axiata
    ['XL Axiata','Demak','Bintoro','004C6714L2','DEMAK','1 Gbps','kholilur@jsn.net.id, larco.kun@gmail.com',''],
    ['XL Axiata','Demak','Purwodadi','004C6714L13,004C6714L14,004C6714L15','PURWODADI','3 Gbps','kholilur@jsn.net.id, larco.kun@gmail.com','atmospheresoft1@gmail.com'],
    ['XL Axiata','Pati','Jonto','004C6714L3','PATI','3 Gbps','haansiro@gmail.com',''],
    ['XL Axiata','Lumajang','Pasirian','020C6714L1','LUMAJANG','2 Gbps','rizmu@jsn.net.id',''],
    ['XL Axiata','Lombok','Mataram','020C6714L2','MATARAM','500 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Pohgading','020C6714L3','POHGADING','500 Mbps','iqbal@jsn.net.id','amrullahamri2@gmail.com'],
    ['XL Axiata','Lombok','Praya','020C6714L4','PRAYA','500 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Kayangan','020C6714L5','KAYANGAN','500 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Aikmel','020C6714L7','AIKMEL','500 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Pancor','004C6714L1','PANCOR','2 Gbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Narmada','004C6714L9','NARMADA','100 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Kedome','020C6714L8','KEDOME','100 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Kopang','*****','KOPANG','*****','iqbal@jsn.net.id',''],
    ['XL Axiata','Lombok','Sambalia','004C6714L18','SAMBALIA','200 Mbps','iqbal@jsn.net.id',''],
    ['XL Axiata','Blora','Cepu','004C6714L4','BLORA','1 Gbps','muhsan@jsn.net.id ',''],
    ['XL Axiata','Blora','Ngawen','004C6714L10','BLORA','1 Gbps','muhsan@jsn.net.id ',''],
    ['XL Axiata','Rembang','Lasem','004C6714L6','REMBANG','2 Gbps','ardibeni28@gmail.com',''],
    ['XL Axiata','Rembang','Sarang','004C6714L17','REMBANG','1 Gbps','ardibeni28@gmail.com',''],
    ['XL Axiata','Kutai Timur','Sangatta','020C6714L6','SANGATTA','1 Gbps','neozack24@gmail.com',''],
    ['XL Axiata','Lamongan','Lamongan','004C6714L7','LAMONGAN','1 Gbps','aries.effendy@gmail.com',''],
    ['XL Axiata','Semarang','Semarang','020C6714L9','SEMARANG','500 Mbps','ragil@jsn.net.id',''],
    ['XL Axiata','Probolinggo','Probolinggo','004C6714L8','PROBOLINGGO','1 Gbps','hasenda14071986@gmail.com',''],
    ['XL Axiata','Bengkalis','Bengkalis','020C6714L10','BENGKALIS','1 Gbps','usman.malik@jsn.net.id',''],
    ['XL Axiata','Tuban','Tuban','004C6714L11','TUBAN','1 Gbps','rizal.abdi@gmail.com',''],
    ['XL Axiata','Kendal','Kendal','004C6714L16','KENDAL','1 Gbps','adrian280774@gmail.com',''],

    // Hutcison Tri (H3I)
    ['H3I','Tulungagung','Blitar','LCA_JSN_JKT_BLT_001','BLITAR','1 Gbps','badrayana@jsn.net.id','lintangelok123@gmail.com'],

    // Moratel
    ['Moratel','Jakarta','Jakarta','3449041300059224','JAKARTA','2 Gbps','ibnu.rachmadi@jsn.net.id',''],

    // Fibernet
    ['Fibernet','Jakarta','Depok','IS154020','JAKARTA','300 Mbps','ibnu.rachmadi@jsn.net.id',''],
    ['Fibernet','Jakarta','Johar Baru','IS14A42','JAKARTA','1 Gbps','ibnu.rachmadi@jsn.net.id',''],

];



// Berhasil Perfect
// var dd = new DropDown(dataEmail)
// .add({target: 'level1', tergantungPada: []})
// .add({target: 'level2', tergantungPada: ['level1']})
// .add({target: 'level3', tergantungPada: ['level1','level2']})
// .initialize();

var dd = new DropDown(dataEmail).tambahDropdown(['level1','level2','level3','level4','level5','level6','level7','level8']);






var emailEkskalasi = [
    ['Pilih Provider..','Pilih Ekskalasi..','Email Ekskalasi'],
    
    ['Icon Plus','Normal','angelin.filanda@iconpln.co.id, noc@jsn.net.id, ramadhan.yondra@iconpln.co.id,'],

    ['Fiberstar','Normal','hari.pujiharto@fiberstar.co.id, noc@jsn.net.id,'],

    ['H3I','Normal','reno.huntoro@three.co.id, noc@jsn.net.id,'],

    ['Moratel','Normal','hermawati@moratelindo.co.id, noc@jsn.net.id,'],

    ['Fibernet','Normal',''],

    ['Indosat','Level 1 ( Normal )','nico.enjelit@indosatooredoo.com, noc@jsn.net.id,'],
    ['Indosat','Level 2 ( 2 Jam )','nico.enjelit@indosatooredoo.com, noc@jsn.net.id, mod.ioch@indosatooredoo.com,'],
    ['Indosat','Level 3 ( 3 Jam )','nico.enjelit@indosatooredoo.com, noc@jsn.net.id, mod.ioch@indosatooredoo.com, achmad.cholill@indosatooredoo.com,'],
    ['Indosat','Level 4 ( 4 Jam )','nico.enjelit@indosatooredoo.com, noc@jsn.net.id, mod.ioch@indosatooredoo.com, achmad.cholill@indosatooredoo.com, suhendra@indosatooredoo.com,'],
    ['Indosat','Level 5 ( 5 Jam )','nico.enjelit@indosatooredoo.com, noc@jsn.net.id, mod.ioch@indosatooredoo.com, achmad.cholill@indosatooredoo.com, suhendra@indosatooredoo.com, yuliadi.syarief@indosatooredoo.com,'],

    ['XL Axiata','Level 1 ( Normal )','asria@xl.co.id, radena@xl.co.id,'],
    ['XL Axiata','Level 2 ( 4 Jam )','asria@xl.co.id, radena@xl.co.id, donnye@xl.co.id, dbhakti2@xl.co.id,'],
    ['XL Axiata','Level 3 ( 8 Jam )','asria@xl.co.id, radena@xl.co.id, donnye@xl.co.id, dbhakti2@xl.co.id, madiah@xl.co.id,'],
    ['XL Axiata','Level 4 ( 24 Jam )','asria@xl.co.id, radena@xl.co.id, donnye@xl.co.id, dbhakti2@xl.co.id, madiah@xl.co.id, sigit@xl.co.id,'],
    
];


var dd2 = new DropDown(emailEkskalasi);
dd2.add({target: 't1', tergantungPada: ['level1']});
dd2.add({target: 't2', tergantungPada: ['level1','t1']});
dd2.add({target: 't3', tergantungPada: ['level1','t1','t2']});
// dd2.add({target: 't4', tergantungPada: ['t1','t2','t3']});
// dd2.add({target: 't5', tergantungPada: ['t1','t2','t3','t4']});
dd2.initialize();


// var dd2 = new DropDown(emailMitra).tambahDropdown(['t1','t2']);
