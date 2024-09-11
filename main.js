const { select  } = require('@inquirer/prompts')
const start = async () => {
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Sair",
                    value:"sair"
                },
                {
                    name:"Listar metas",
                    value:"listar"
                }
            ]
        })
        switch(opcao){
            case "cadastrar":
                console.log("Vamos nos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Saindo")
                return
        }
    }
}
start()