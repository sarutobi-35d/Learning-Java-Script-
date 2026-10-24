
/**
 * Permet de savoir si un utilisateur a le droit de conduire selon le pays ou il se trouve et selon son age.
 * @param {number} age 
 * @param {string} country 
 * @returns {boolean}
 */

const canDrive = (age, country) =>{

    if(age >= 18 && country == "FR" || age >= 16 && country == "USA"){
        return true;
    }else{
        return false
    }

}

console.log(canDrive(15, "USA"));