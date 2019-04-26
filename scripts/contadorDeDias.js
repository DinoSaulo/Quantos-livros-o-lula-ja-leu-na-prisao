function cont(dia1, dia2, mes1, mes2, ano1, ano2) {

    let contDiasMeses = 0,
        ContDisAno = 0,
        contDias = 0;
    let meses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // contador de anos bissextos
    for (let i = ano1 + 1; i <= ano2 - 1; i++) {
        if (0 == i % 400 || (0 == i % 4 && 0 != i % 100))
            ContDisAno += 366;
        else
            ContDisAno += 365;
    }
    // contador meses para o fim do ano
    for (let i = mes1 + 1; i <= 12; i++) {
        contDiasMeses += meses[i];
        if (i == 2 && (0 == ano1 % 400 || (0 == ano1 % 4 && 0 != ano1 % 100))) {
            contDiasMeses++;
        }
    }
    // contador de dias para o fim do mes
    contDias = meses[mes1] - dia1;

    // contador meses para o fim do ano
    for (let i = 1; i <= mes2 - 1; i++) {
        contDiasMeses += meses[i];
        if (i == 2 && (0 == ano2 % 400 || (0 == ano2 % 4 && 0 != ano2 % 100))) {
            contDiasMeses++;
        }
    }

    let dias = ContDisAno + contDiasMeses + contDias + dia2;
    if (ano1 == ano2) {
        dias -= 366;
        if (mes1 == 2 || mes1 == mes2 || !(0 == ano2 % 400 || (0 == ano2 % 4 && 0 != ano2 % 100))) {
            dias += 1;
        }
    }
    return dias;
}

function calcula(){
    let dataCont = 0;

    let dia1 = 07;
    let mes1 = 04;
    let ano1 = 2018;
    
    let dataDeHoje = new Date();
    
    let dia2 = dataDeHoje.getDate();
    let mes2 = dataDeHoje.getMonth() + 1;
    let ano2 = dataDeHoje.getFullYear();
    
    if ((ano1 > ano2) || (ano1 == ano2 && mes1 > mes2) || (ano1 == ano2 && mes1 == mes2 && dia1 > dia2)) {
        dataCont = cont(dia2, dia1, mes2, mes1, ano2, ano1);
    } else {
        dataCont = cont(dia1, dia2, mes1, mes2, ano1, ano2);
    }
    return dataCont;
}

exports.getDataDis = function (){
    let val = calcula();
    return val;
}