
let categorie = "chooseCat"
function choixCat(value) {
        categorie = value
        console.log(categorie)
}
let departement = "chooseDept"
            function choixDept(value2) {
            departement = value2
            console.log(departement)
            }
let ville = "chooseVille"
            function choixVille(value3) {
            ville = value3
            console.log(ville)
            }
const url = 'https://www.data.gouv.fr/fr/datasets/r/7b4bc207-4e66-49d2-b1a5-26653e369b66';
        const select = document.getElementById('mySelect')
        fetch(url)
            .then(
                async (response) => {
                    await response.json().then(
                        (datas) => {
                            for (let i = 0; i < datas.length; i++) {
                                const option = document.createElement('option')
                                option.text = datas[i].dep_name
                                option.value = datas[i].num_dep
                                select.appendChild(option)
                            }
                        }
                    )
                }
            )
mySelect.onclick = () => {
let url3 = `https://plateforme.adresse.data.gouv.fr/api-fantoir/departements/${departement}/communes`
        const select = document.getElementById('selectVille')
        fetch(url3)
            .then(
                async (response) => {
                    await response.json().then(
                        (datasVille) => {
                            for (let k = 0; k < datasVille.length; k++) {
                                console.log(datasVille[k].nomCommune)
                                const option2 = document.createElement('option')
                                option2.text = datasVille[k].nomCommune
                                select.appendChild(option2)
                            }
                        }
                    )
                }
            )}
btn.onclick = () => {
    let url2 = `https://opendata.agencebio.org/api/gouv/operateurs/?activite=${categorie}&departements=${departement}`;
    fetch(url2)
    .then((response) => {response.json()
        .then((datas) => {
            console.log(datas)
            const items = datas.items
            //mettre dans une constant la div result
            const result = document.getElementById('resultName')
            //pour chaque element du tablea datas.items
            for (let j = 0; j < items.length; j++){
                // pour cette element je recupere la raison social
                console.log(items[j].raisonSociale)
                //je place la raison social dans un element html
                    const resultat = document.createElement('li')
                    resultat.textContent = items[j].raisonSociale;
                // je precise que cet element html est l'enfant de la div result
                    result.appendChild(resultat)
            
        }}
        )
        })
    }