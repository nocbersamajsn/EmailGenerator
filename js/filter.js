function ttd() {

    const pengirim = document.getElementById('pengirim').value;
    const tandaTangan = document.getElementById('signature');
    tandaTangan.innerHTML = '';
    tandaTangan.innerHTML = pengirim;
}

function headerEmail() {

    const provider = document.getElementById('level1').value;
    const headerEmail = document.getElementById('provider');

    headerEmail.innerHTML = '';
    // headerEmail.innerHTML = provider;

    if ( provider == 'Indosat' ) {
        headerEmail.innerHTML = 'Helpdesk ' + provider;
    } else if ( provider == 'H3I') {
        headerEmail.innerHTML = 'Helpdesk ' + provider;
    }else if ( provider == 'Icon Plus') {
        headerEmail.innerHTML = 'Customer Service ICON';
    } else {
        headerEmail.innerHTML = 'Customer Service ' + provider;
    }
}

function metroIssue() {

    const issue = document.getElementById('issueMetro').value;
    const keluhan = document.getElementById('keluhan');

    keluhan.innerHTML = '';
    keluhan.innerHTML = issue;
}

function cid() {

    const circuitId = document.getElementById('level4').value;
    const cid = document.getElementById('cid');

    cid.innerHTML = '';
    cid.innerHTML = circuitId;
}

function site() {

    const siteDiv = document.getElementById('level5').value;
    const site = document.getElementById('site');

    site.innerHTML = '';
    site.innerHTML = siteDiv;
}

function capacity() {

    const capacity = document.getElementById('level6').value;
    const kapasitas = document.getElementById('kapasitas');

    kapasitas.innerHTML = '';
    kapasitas.innerHTML = capacity;
}

// email tujuan
function isiEmailTujuan() {

    const emailTujuan = document.getElementById('level1').value;
    const targetEmailProvider = document.getElementById('copyText');

    const targetCcProvider = document.getElementById('copyText2');
    const targetSubjectEmail = document.getElementById('copyText3');
    
    // get Nama daerah dan issue metro
    const daerah = document.getElementById('level2').value;
    const namaDaerah = document.getElementById('level5').value;
    const issueMetro = document.getElementById('issueMetro').value;
    const cidMetro = document.getElementById('level4').value;

    // email koordinator & pic
    const emailKoordinator = document.getElementById('level7').value;
    const emailPic = document.getElementById('level8').value;


    if (emailTujuan == "Icon Plus") {


        targetEmailProvider.value = "cs@iconpln.co.id";
        targetCcProvider.value = "angelin.filanda@iconpln.co.id, noc@jsn.net.id, ramadhan.yondra@iconpln.co.id" + ", " + emailKoordinator + ", " + emailPic;
        targetSubjectEmail.value = "JSN Site ( " + daerah + " )" + " - " + issueMetro ;

    }else if (emailTujuan == "Indosat") {
        targetEmailProvider.value = "corporate.helpdesk@indosatooredoo.com";
        targetCcProvider.value = "nico.enjelit@indosatooredoo.com, noc@jsn.net.id" + ", " + emailKoordinator + ", " + emailPic;
        targetSubjectEmail.value = issueMetro + " || JARINGANKU SARANA NUSANTARA || " + cidMetro;

    }else if (emailTujuan == "Fiberstar") {
        targetEmailProvider.value = "customercare@fiberstar.co.id";
        targetCcProvider.value = "hari.pujiharto@fiberstar.co.id, noc@jsn.net.id" + ", " + emailKoordinator + ", " + emailPic;
        targetSubjectEmail.value = issueMetro + " || JARINGANKU SARANA NUSANTARA || " + cidMetro;

    }else if (emailTujuan == "XL Axiata") {
        targetEmailProvider.value = "cs-busol@xl.co.id";
        targetCcProvider.value = "asria@xl.co.id, noc@jsn.net.id" + ", " + emailKoordinator + ", " + emailPic;
        targetSubjectEmail.value = issueMetro + " || JARINGANKU SARANA NUSANTARA || " + cidMetro;

    }else if (emailTujuan == "H3I") {
        targetEmailProvider.value = "3corporatecare@three.co.id";
        targetCcProvider.value = "reno.huntoro@three.co.id, noc@jsn.net.id" + ", " + emailKoordinator + ", " + emailPic;
        targetSubjectEmail.value = issueMetro + " || JARINGANKU SARANA NUSANTARA || " + cidMetro;

    }else if (emailTujuan == "Moratel") {
        targetEmailProvider.value = "cs@moratelindo.co.id" + ", " + emailKoordinator + ", " + emailPic;
        targetCcProvider.value = "hermawati@moratelindo.co.id, noc@jsn.net.id";
        targetSubjectEmail.value = "JSN Site ( " + daerah + " )" + " - " + issueMetro ;

    }else {
        targetEmailProvider.value = "";
        targetCcProvider.value = "";
        alert("Belum ada record email untuk provider yang anda pilih!\rLanjutkan?")
    }
}

// set email koordinator & pic

