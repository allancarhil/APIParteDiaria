const { Model, DataTypes } = require('sequelize');

class Uc06 extends Model {
    static init(sequelize) {
        super.init({
            motorista: DataTypes.STRING,
            data: DataTypes.STRING,
            horaInicial: DataTypes.STRING,
            horaFinal: DataTypes.STRING,
            horimetroInicial: DataTypes.STRING,
            horimetroFinal: DataTypes.STRING,
            paradaInicial1: DataTypes.STRING,
            paradaFinal1: DataTypes.STRING,
            descricao1: DataTypes.STRING,
            paradaInicial2: DataTypes.STRING,
            paradaFinal2: DataTypes.STRING,
            descricao2: DataTypes.STRING,
            paradaInicial3: DataTypes.STRING,
            paradaFinal3: DataTypes.STRING,
            descricao3: DataTypes.STRING,
            paradaInicial4: DataTypes.STRING,
            paradaFinal4: DataTypes.STRING,
            descricao4: DataTypes.STRING,
            paradaInicial5: DataTypes.STRING,
            paradaFinal5: DataTypes.STRING,
            descricao5: DataTypes.STRING,
            paradaInicial6: DataTypes.STRING,
            paradaFinal6: DataTypes.STRING,
            descricao6: DataTypes.STRING,
            paradaInicial7: DataTypes.STRING,
            paradaFinal7: DataTypes.STRING,
            descricao7: DataTypes.STRING,
            paradaInicial8: DataTypes.STRING,
            paradaFinal8: DataTypes.STRING,
            descricao8: DataTypes.STRING,
            paradaInicial9: DataTypes.STRING,
            paradaFinal9: DataTypes.STRING,
            descricao9: DataTypes.STRING,
            paradaInicial10: DataTypes.STRING,
            paradaFinal10: DataTypes.STRING,
            descricao10: DataTypes.STRING,
            b0Vol: DataTypes.STRING,
            b0NumViagens: DataTypes.STRING,
            b0Mot: DataTypes.STRING,
            b1Vol: DataTypes.STRING,
            b1NumViagens: DataTypes.STRING,
            b1Mot: DataTypes.STRING,
            b2Vol: DataTypes.STRING,
            b2NumViagens: DataTypes.STRING,
            b2Mot: DataTypes.STRING,
            b4Vol: DataTypes.STRING,
            b4NumViagens: DataTypes.STRING,
            b4Mot: DataTypes.STRING,
            aimVol: DataTypes.STRING,
            aimNumViagens: DataTypes.STRING,
            aimMot: DataTypes.STRING,
            aifVol: DataTypes.STRING,
            aifNumViagens: DataTypes.STRING,
            aifMot: DataTypes.STRING,
            bicaVol: DataTypes.STRING,
            bicaNumViagens: DataTypes.STRING,
            bicaMot: DataTypes.STRING,
            amprToco: DataTypes.STRING,
            amprTruck: DataTypes.STRING,
            amprCarreta: DataTypes.STRING,
            amprAxor: DataTypes.STRING,
            amprObs: DataTypes.STRING,
            amumToco: DataTypes.STRING,
            amumTruck: DataTypes.STRING,
            amumCarreta: DataTypes.STRING,
            amumAxor: DataTypes.STRING,
            amumObs: DataTypes.STRING,
            afToco: DataTypes.STRING,
            afTruck: DataTypes.STRING,
            afCarreta: DataTypes.STRING,
            afAxor: DataTypes.STRING,
            afObs: DataTypes.STRING,
            pedToco: DataTypes.STRING,
            pedTruck: DataTypes.STRING,
            pedCarreta: DataTypes.STRING,
            pedAxor: DataTypes.STRING,
            pedObs: DataTypes.STRING,
            bicaPrToco: DataTypes.STRING,
            bicaPrTruck: DataTypes.STRING,
            bicaPrCarreta: DataTypes.STRING,
            bicaPrAxor: DataTypes.STRING,
            bicaPrObs: DataTypes.STRING,
            bica790Toco: DataTypes.STRING,
            bica790Truck: DataTypes.STRING,
            bica790Carreta: DataTypes.STRING,
            bica790Axor: DataTypes.STRING,
            bica790Obs: DataTypes.STRING,
            bicaUmToco: DataTypes.STRING,
            bicaUmTruck: DataTypes.STRING,
            bicaUmCarreta: DataTypes.STRING,
            bicaUmAxor: DataTypes.STRING,
            bicaUmObs: DataTypes.STRING,
            br1PrToco: DataTypes.STRING,
            br1PrTruck: DataTypes.STRING,
            br1PrCarreta: DataTypes.STRING,
            br1PrAxor: DataTypes.STRING,
            br1PrObs: DataTypes.STRING,
            br119Toco: DataTypes.STRING,
            br119Truck: DataTypes.STRING,
            br119Carreta: DataTypes.STRING,
            br119Axor: DataTypes.STRING,
            br119Obs: DataTypes.STRING,
            br0PrToco: DataTypes.STRING,
            br0PrTruck: DataTypes.STRING,
            br0PrCarreta: DataTypes.STRING,
            br0PrAxor: DataTypes.STRING,
            br0PrObs: DataTypes.STRING,
            br0UmToco: DataTypes.STRING,
            br0UmTruck: DataTypes.STRING,
            br0UmCarreta: DataTypes.STRING,
            br0UmAxor: DataTypes.STRING,
            br0UmObs: DataTypes.STRING,
            somaToco: DataTypes.STRING,
            somaTruck: DataTypes.STRING,
            somaCarreta: DataTypes.STRING,
            somaAxor: DataTypes.STRING,
            lanternagem: DataTypes.STRING,
            pneus: DataTypes.STRING,
            h2o: DataTypes.STRING,
            oleo: DataTypes.STRING,
            direcao: DataTypes.STRING,
            freios: DataTypes.STRING,
            parteEletrica: DataTypes.STRING,
            observacoes: DataTypes.STRING,



        }, {
            sequelize
        })
    }
}

module.exports = Uc06;