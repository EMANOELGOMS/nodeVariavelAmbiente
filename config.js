import env from 'env-var'
const config = {
    //tem que ser obrigatorio inteiro
    token: env.get('TOKEN').required().asInt(),
    guildId: env.get('ID_GUILD').required().asString(),
    googleUrl: env.get('GOOGLE_URL').required().asUrlString(),
    roles: env.get('ROLES').required().asArray(),
    jsonConfig: env.get('JSON_CONFIG').required().asJson(),

    // foi definido para vir dev como padão, mas ao criar a essa variavel no arquivo .env e atribuir outro valoar para ela, ele irá predominar
    nodeEnv: env.get('NODE_ENV').default('dev').asString(),

}

export default config