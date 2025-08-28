function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.endereco = endereco

    
    this.getNome = function() { return this.nome }
    this.setNome = function(nome) { this.nome = nome }

    this.getTelefoneCelular = function() { return this.telefoneCelular }
    this.setTelefoneCelular = function(telefoneCelular) { this.telefoneCelular = telefoneCelular }
    
    this.getEndereco = function() { return this.endereco }
    this.setEndereco = function(endereco) { this.endereco = endereco }

    this.getNomeMaiusculo = function() { return this.nome.toUpperCase() }
    this.getNomeMinusculo = function() { return this.nome.toLowerCase() }

    this.descricao = function(){
        return '------------\n' + 'Informação do cliente: \n'+ this.getNome() + '\n' + '--------------\n '
        +'Telefone: \n DDD:'+ this.getTelefoneCelular().getDdd() + '\n Numero '+ this.getTelefoneCelular().getNumero()
        + '\n--------------\nEndereço: \n' + 'Rua:' + this.getEndereco().getRua() +'\n'
        +'Numero: ' +this.getEndereco().getNumero()+'\n' 
        + 'Cidade: ' + this.getEndereco().getCidade()+'\n' + 'Estado: '+ this.getEndereco().getEstado()
    }
}

function TelefoneCelular(ddd, numero){
    this.ddd = ddd
    this.numero = numero
    
    this.getDdd = function() { return this.ddd }
    this.setDdd = function(ddd) {this.ddd = ddd }

    this.getNumero = function() {return this.numero }
    this.setNumero = function(numero) { this.numero = numero }

}

function Endereco(rua, numero, cidade, estado){
    this.rua = rua
    this.numero = numero 
    this.cidade = cidade
    this.estado = estado

  
    this.getRua = function() {return this.rua }
    this.setRua = function(rua) {this.rua = rua }

    this.getNumero = function() {return this.numero }
    this.setNumero = function(numero) { this.numero = numero }

    this.getCidade = function() { return this.cidade }
    this.setCidade = function(cidade) { this.cidade = cidade }

    this.getEstado = function() {return this.estado }
    this.setEstado = function(estado) {this.estado = estado }


    this.getRuaMaiusculo = function() {return this.rua.toUpperCase() }
    this.getRuaMinusculo = function() {return this.rua.toLowerCase() }

    this.getCidadeMaiusculo = function() { return this.cidade.toUpperCase() }
    this.getCidadeMinusculo = function() { return this.cidade.toLowerCase() }

    this.getEstadoMaiusculo = function() { return this.estado.toUpperCase() }
    this.getEstadoMinusculo = function() { return this.estado.toLowerCase() }
}

let telefone = new TelefoneCelular('11', '999999999')
let endereco = new Endereco('Av. Paulista',  '987', 'São Paulo','SP')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)

let telefone2 = new TelefoneCelular('11', '222222222')
let endereco2 = new Endereco('Rua Doze', '187', 'São Paulo','SP')
let cliente2 = new Cliente('Alberto da silva', telefone2, 'alberto@app.com', endereco2)

let telefone3 = new TelefoneCelular('11', '111111134')
let endereco3 = new Endereco('Rua vinte', '5663', 'São José dos Campos','SP')
let cliente3 = new Cliente('Bernardo Alves', telefone3, 'bernardo@app.com', endereco3)

console.log(cliente.descricao())
console .log (cliente2.descricao())
console .log (cliente3.descricao())

let clientes =  [cliente, cliente2,cliente3]


clientes.sort((a,b) => a.nome.localeCompare(b.nome))

console.log('------------------- \nNomes ordenados: ')
for (let index = 0; index < clientes.length; index++) {
    c = clientes[index]
    console.log(c.getNomeMaiusculo())
}