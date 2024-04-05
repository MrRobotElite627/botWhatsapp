const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const otro = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const devWeb_bloc = addKeyword(['blog']).addAnswer([
    '📄✍️ *OK*, perfecto, persta mucha atencion',
    '',
    'Para tener un blog necesitarías lo siguiente:',
    '1. *Servidor y Hosting:*',
    'El costo promedio mensual de un servidor y hosting puede variar dependiendo del proveedor y los recursos que necesites. Un estimado básico puede estar alrededor de 50 a 100 soles mensuales.',
    '',
    '2. *Desarrollo del Blog:*',
    'Por el desarrollo del blog, el costo sería de *300 soles.* Este monto cubre el trabajo de desarrollo y la implementación del blog.',
    '',
    '3. *Costos adicionales:*',
    'Se debe considerar el costo del dominio, que suele ser alrededor de 50 a 100 soles al año, dependiendo de la extensión y la disponibilidad.',
    '',
    '*Hablemos ahora por Zoom y hagamos realidad tu proyecto.* Por favor, proporciona la *fecha*📅 y *hora*⏰ que te convenga, y lo coordinaremos.',
    '*¡Espero poder hablar contigo pronto!* 📅⏰'
])

const devWeb_ecommer = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])
const devWeb_corporativa = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])
const devWeb_rest = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])
const devWeb_edu = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const DevWeb = addKeyword(['1', 'web']).addAnswer(
    [
        '🌐 *Paginas web*, Excelente,',
        '*¿Qué tipo de página web necesitas?*',
        'Por favor, elige una opción:',
        '',

        '👉 *blog:* Blog',
        '👉 *ecommerce:* Tienda en línea',
        '👉 *corporativa:* Página corporativa',
        '👉 *restaurante:* Página web para restaurante',
        '👉 *educacion:* Página web para institución educativa',
        '👉 *otro* Otra opción'
    ],
    null,
    null,
    [devWeb_bloc, devWeb_ecommer, devWeb_corporativa, devWeb_rest, devWeb_edu, otro]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [otro]
)

const DevApps = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [otro]
)

const DevSisWeb = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [otro]
)
const DevBots = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [otro]
)
const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer(
        '🙌 Hola bienvenido a este *Chatbot*',
        {
            media: 'https://www.shutterstock.com/image-vector/3d-artificial-intelligence-digital-brain-600nw-2288372371.jpg',
        })
    .addAnswer(
        [
            'Por el momento estoy ocupado pero te puedo atender dentro de poco.',
            '',
            '*¿En qué puedo ayudarte?*',
            'Mis servicios incluyen:',
            '',
            '*1.* _Desarrollo de páginas web_',
            '*2.* _Desarrollo de aplicaciones_',
            '*3.* _Desarrollo de sistemas web_',
            '*4.* _Creación de bots para *WhatsApp* y *Telegram*_',
            '',
            'Si deseas más información sobre alguno de estos servicios, no dudes en preguntar.'

        ],
        null,
        null,
        [DevWeb, DevApps, flowTuto, DevSisWeb, DevBots],
        

    )

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    

    QRPortalWeb()
}

main()
