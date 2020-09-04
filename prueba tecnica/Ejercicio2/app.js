function verificar(pesoBulto, handler) {
    var valorBulto = 0;
    if (pesoBulto <= 500) {
        if (pesoBulto > 25 && pesoBulto <= 300) {
            valorBulto = 1500 * pesoBulto;
        } else if (pesoBulto > 300 && pesoBulto <= 500) {
            valorBulto = 2500 * pesoBulto;
        }
        let bulto = {
            peso: pesoBulto,
            valor: valorBulto
        }
        handler(null, bulto);
    } else {
        handler('Uno de los bultos excede el limite: ' + pesoBulto, null);
    }
}


function calculate() {
    try {
        var packagesValues = [];
        var data = [];
        var package1 = document.getElementById('package1');
        var package2 = document.getElementById('package2');
        var package3 = document.getElementById('package3');
        var package4 = document.getElementById('package4');
        var package5 = document.getElementById('package5');
        var package6 = document.getElementById('package6');
        packagesValues.push(package1.value, package2.value, package3.value, package4.value, package5.value, package6.value);
        var bultoPesado = packagesValues[0];
        for (let i = 0; i < packagesValues.length; i++) {
            verificar(parseInt(packagesValues[i]), (error, response) => {
                if (response) {
                    if (response.peso > bultoPesado) {
                        bultoPesado = response.peso;
                    }
                    data.push(response);
                } else if (error) {
                    throw error;
                } else {
                    let error = 'Cannot resolve function';
                    throw error;
                }
            })
        }
        var pesoTotal = 0;
        var precioTotal = 0;
        for (let i = 0; i < data.length; i++) {
            pesoTotal += data[i].peso;
            precioTotal += data[i].valor;
        }
        let pesoPromedio = pesoTotal / 6;
         
        console.log({ pesoBultoPesado: bultoPesado });
        console.log(data);
        console.log({ precioTotal });
        console.log({ pesoPromedio });
    } catch (error) {
        console.log({ error });
    }
}