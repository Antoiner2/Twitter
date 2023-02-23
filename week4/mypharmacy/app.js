const data = require('./data');
const request = require('supertest')

// Get drug description by name - Codeine
function getDrugDescriptionByName(drugName) {
    const indexName = data.find(element => element.name === drugName);
    // return indexName.description;
    //console.log(data.find(el => el.name === drugName))
    }
getDrugDescriptionByName('Metformin');

//  Get drug type by name - Salbutamol
function getDrugTypeByName(drugName) {
    const indexName = data.find(element => element.name === drugName);
    //return drugType = indexName.type;
    console.log(data.find(el => el.name === drugName))
    }
   // getDrugTypeByName('Salbutamol')

    // get drug type by group
    function getDrugNamesByGroup(drugGroup) {
        let drugs = [];
        const indexName = data.filter(e => e.groups[0] === drugGroup || e.groups[1] === drugGroup)
    for (let i = 0; i < indexName.length; i++) {
            drugs.push(indexName[i].name)
            drugs.sort()
        }
    
        return drugs
    }
    //getDrugNamesByGroup('Investigational');

    module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };

