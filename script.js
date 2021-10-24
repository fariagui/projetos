function contar(){
    var ini = document.getElementById('n1')
    var fim = document.getElementById ('n2') 
    var pas = document.getElementById('n3')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        window.alert ('falta dados')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        for(var c = i; c <= f; c += p)
            res.innerHTML += `${c}`
        }
    }








