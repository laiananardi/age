function verify (){
    var data = new Date()
    var year = data.getFullYear()
    var gyear = document.getElementById('txtano')
    var ans = document.querySelector('div#ans')

    if ( gyear.value.length == 0 || Number(gyear.value) > year){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var gsex = document.getElementsByName('radsex')
        var age = year - Number(gyear.value)
        var sex = ''
        var img = document.createElement('img')
        
        if( gsex[0].checked){
            sex = 'Homem'
            if (age >= 0 && age < 12){
                //criança 
                img.setAttribute('src', 'img/crianca-m.svg')
            } else if(age < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-m.svg')
            } else if (age < 60){
                //adulto
                img.setAttribute('src', 'img/adulto-m.svg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.svg')
            }
        }else if (gsex[1].checked){
            sex = 'Mulher'
            if (age >= 0 && age < 12){
                //criança 
                img.setAttribute('src', 'img/crianca-f.svg')
            } else if(age < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-f.svg')
            } else if (age < 60){
                //adulto
                img.setAttribute('src', 'img/adulto-f.svg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-f.svg')
            }
        }

        ans.style.textAlign = 'center'
        ans.innerHTML = `${sex} com ${age} anos.`
        ans.appendChild(img)
        img.style.height = '150px'
        img.style.margin = 'auto'
        
       
    }
}