function csuszka() {
    let ertek = document.getElementById("Atviteliseb").value;
    document.getElementById("ertek").innerHTML = ertek;



}
function vegleges() {
    let mennyiseg = document.getElementById("adatmeny").value;
    let sebesseg = document.getElementById("Atviteliseb").value;
    
    if(document.getElementById("tipus").value == "MB") {
        mennyiseg= mennyiseg*1000;

    }
    if(document.getElementById("tipus").value == "GB") {
        mennyiseg= mennyiseg*1000*1000;
        
    if(document.getElementById("atviteli-seb").value == "GBps") {
        sebesseg= sebesseg*1000*1000;
    
    }
    }
    if(document.getElementById("tipus").value == "TB") {
        mennyiseg= mennyiseg*1000*1000*1000;

    }
    if(document.getElementById("atviteli-seb").value == "MBps") {
        sebesseg= sebesseg*1000;

    }
    let osztas = mennyisegpsebesseg;
    let ora = Math.floor(osztas / 3600);
    let perc = Math.floor(osztas % 3600 / 60);
    let masodperc = Math.floor(osztas % 3600 % 60);
    document.getElementById("vegleges").innerHTML = ora + " óra " + perc + " perc " + masodperc + " másodperc ";
}