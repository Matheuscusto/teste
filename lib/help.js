const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
     return `*γ ππΌβπ π»πΌ βπππΈβπ»ππ γ*


*β* - *π¨π½π°πΊπΆ!* _πͺπππ πππππ πππππππ ππΜπ ππππππππ πππππππππ πππ π ππππππππ ππππ π πΜ πππππππΜπππ πππππππ πππ πππππ._

*γ ππΌβπ π½ππΎπβπββπΈπ γ*
			   
*${prefix}sticker*
_FaΓ§o suas imagens virarem sticker rapidinho!_

*${prefix}gif*
_Com isso vocΓͺ pode fazer stickers com gifs tambΓ©m!_

*${prefix}StickerNoBG*
_Isso Γ© pra fazer stickers sem aquela parte do fundo(apenas imagens)._

*${prefix}img <marque um sticker>*
_Se quiser pegar a foto de um sticker, posso converte-la para vocΓͺ._

*${prefix}Giphy <Link do site giphy>*
_FaΓ§a stickers por link usando o site giphy._

*${prefix}img <marque um sticker>*
_Se quiser pegar a foto de um sticker, posso converte-la para vocΓͺ._

*${prefix}ttp <frase>*
_Transforme frases em stickers._

*γ ππΌβπ πππΈπΎπΌβπ γ*

*${prefix}dog*
_VocΓͺ adora cachorrinhos? Pois eu amo!_

*${prefix}Fox*
_Raposinhas bonitas!_

*${prefix}image <nome>*
_EstΓ‘ sem internet fora do WhatsApp? Posso ajudar mandando fotos do pinterest._

*${prefix}gato*
_Gatos mano, simplesmente gatos._

*${prefix}wallhaven <tema>*
_Obtenha Wallpapers_

*${prefix}wasted <foto>*
_Cria uma imagem de wasted igual ao GTA V._

*${prefix}Neon <Frase1|Frase2|Frase3>*
_Uma logo de neon estilo hackerman._

*${prefix}Fogareu <Nick>*
_Crie logos do fogo gratuito._

*${prefix}Thunder <frase>*
_Uma logo do cΓ©u com trovΓ΅es._

*${prefix}Wolf <Frase1|Frase2>*
_Logo de Lobos._

*${prefix}Light <Frase>*
_Uma logo de neon em luz._

*${prefix}pornhub <texto 1 | texto 2>*
_Crie sua propria logo do PornHub._

*${prefix}3D <texto>*
_Crie textos em 3D._

*${prefix}Logo <nome>*
_Crie logos em preto e rosa._

*${prefix}gaming <nome>*
_Crie logos de jogador._

*${prefix}Lizard*
_Fotinhas de lagarto (bicho feio da porra)._

*${prefix}Macaco*
_Pegue umas fotos de macacos aqui._

*${prefix}simg <Use numa foto>*
_Posso pesquisar imagens na internet usando esse comando._

*${prefix}upimg <Use numa foto>*
_Se usar esse comando, irei fazer upload de suas imagens com duraΓ§Γ£o de 1 dia._

*${prefix}quack*
_Ui ui, vai uns patos ~gansos~ ou sei la...?_

*${prefix}reverter <foto>*
_Reverta uma foto._

*γ ππΌβπ πΈβπππΌπ γ*
			  
*${prefix}anime [nome]*
_Com isso vocΓͺ pesquisa um anime._

*${prefix}loli*
_Lolis sΓ£o pra dar amor e carinho..._

*${prefix}waifu*
_Com isso eu mando foto de waifus lindas._

*${prefix}neko*
_Bom...uma neko as vezes cai bem nΓ©?_

*${prefix}randomAnime*
_Envie isso e eu enviarei de volta fotos aleatorias de anime._

*${prefix}Husb*
_Essa e a mesma coisa da waifu, mas em versΓ£o homem._

*${prefix}pokemon*
_Quer ver fotos de pokemons?_

*${prefix}hug*
_Γ aqui que eu boto fotos fofinhas que tem um abraΓ§o entre personagens de anime._

*${prefix}baka*
_"Bakaaa!"_

*${prefix}cocegas*
_Hmmm, cocegas em anime eu acho..._

*${prefix}feed*
_Eventos que tem haver com comida em animes._

*${prefix}poke*
_Tome uns petelecos!_

*${prefix}cafune*
_Todos amamos cafune..._

*${prefix}Kisu*
_Umas fotinhas de beijo..._

*${prefix}Tapa*
_Fotos de tapinhas!_

*${prefix}Truth*
_Algumas verdades sobre o universo dos animes._

*${prefix}Icon*
_Icones para por no perfil._

*${prefix}Face*
_Icon do rosto de garotas de anime._

*${prefix}Yaoi*
_Yaoi sem hentai._

*${prefix}Look*
_Olhos na tela eheheh_

*${prefix}Holo*
_Fotinhas da personagem Holo._

*γ ππΌβπ πβππΌβπΈππππ γ*
			  
*${prefix}akinator*
_Jogue Akinator no WhatsApp, instruΓ§Γ΅es apΓ³s comando._

*${prefix}Level*
_Veja seu ranking e nΓ­vel._

*${prefix}Players*
_Veja o TOP 10 do Ranking._

*${prefix}cassino*
_Jogue no cassino para ganhar XP!_

*${prefix}nivel*
_Obtenha informaΓ§Γ΅es do seu XP e Ranking em forma de texto._

*${prefix}wallhaven <tema>*
_Obtenha Wallpapers, uma alternativa ao comando 21._

*${prefix}letra <nome da mΓΊsica>*
_Busque letras de mΓΊsica._

*${prefix}reedit <nome>*
_Obtenha publicaΓ§Γ΅es de algum subreedit._

*${prefix}Video <nome>*
_Procure videos do YouTube._

*${prefix}Encode <frase>*
_Converta frases e nΓΊmeros para Binario._

*${prefix}Decode <nome>*
_Traduza Binario._

*${prefix}Covid <PaΓ­s em InglΓͺs>*
_Obtenha o total de casos do Covid-19._

*${prefix}Paises*
_Obtenha a lista de paΓ­ses para o comando acima._

*${prefix}email <email> | <Assunto> | <Texto>*
_Mande um email anΓ΄nimo para alguΓ©m._

*${prefix}encurtar <link>*
_Encurte links sem aqueles montes de propagandas._

*${prefix}detector*
_Detecta gostosas no grupo._

*${prefix}gamemode <tipo>*
_Comando de minecraft sΓ³ de zoas._

*${prefix}rolette*
_Jogue roleta russa._

*${prefix}Chance <Do que>*
_Calcule as chances._

*${prefix}data*
_Data do sistema._

*${prefix}trecho*
_Frases de pessoas._

*${prefix}oculto*
_???_

*${prefix}moddroid <nome>*
_Busque aplicativos de android na moddroid._

*${prefix}happymod <nome>*
_Busque apps na happymod._

*${prefix}stalkig <username>*
_Stalkeie instagram._

*${prefix}stalktw <username>*
_stalkeie twitter._

*${prefix}maps <local>*
_Mostra o mapa de um local._

*${prefix}clima <cidade>*
_Saiba sobre o clima atual da sua cidade._

*${prefix}nasa -data <ano/mΓͺs/dia>*
_Obtenha informaΓ§Γ΅es da nasa._

*${prefix}ptt <marque um audio>*
_FaΓ§a a bot gravar audios do grupo/pessoas como se fosse dela._

*${prefix}get <marque um arquivo>*
_PeΓ§a pra bot reenviar um arquivo._

*${prefix}conv -h*
_Converta temperatura ou distΓ’ncia._

*${prefix}fatos*
_Conta fatos de animais_

*${prefix}gado <@pessoa>*
_Veja o quanto ela Γ© gada._

*${prefix}qr <Texto>*
_Cria QR Codes com textos._

*${prefix}curiosidade*
_Adquira curiosidades._

*${prefix}brainly <pergunta>*
_Pesquise no brainly._

*${prefix}ship <@pessoa @pessoa>*
_Quer saber o quanto seus amigos combinam?_

*${prefix}make <frase>*
_Caso vocΓͺ queira escrever no meu diario ~Death Note~ use isso._

*${prefix}Random <assunto>*
_Se usar isso, vou escolher alguΓ©m aleatorio do grupo._

*${prefix}kiss @marque_uma_Pessoa*
_Vou fazer vocΓͺ e sua pessoa querida se beijarem!_

*${prefix}abraΓ§ar @marque_uma_Pessoa*
_Vou fazer vocΓͺ e sua pessoa querida se abraΓ§arem!_

*${prefix}slap @marque_alguΓ©m*
_Vou fazer vocΓͺ dar um tapa no seu inimigo/amigo._
`
}

exports.down = down()
function down() {
    return `
*γ ππΌβπ π»ππβπππΈπ» γ*
	
*ππͺπΌπΈ πͺπ΅π°πΎπΆ π¬πΈπΆπͺπ·π­πΈ π·πͺΜπΈ π―πΎπ·π¬π²πΈπ·π? πΌπ²π°π·π²π―π²π¬πͺ πΊπΎπ? πΈ πΌπ?π»πΏπ²π­πΈπ» π¬πͺπ²πΎ π? π?Μ π·π?π¬π?πΌπΌπͺΜπ»π²πΈ π?πΌπΉπ?π»πͺπ».*

*${prefix}Play <nome>*
_Baixe musicas pelo nome._

*${prefix}tw <link twitter>*
_Baixe videos do twitter._

*${prefix}Mp3 <link do YouTube>*
_Baixe audios por link._

*${prefix}Mp4 <link do YouTube>*
_Baixe videos por link._

*${prefix}fb <link facebook>*
_Baixe videos do facebook._

*${prefix}ig <link instagram>*
_Baixe videos do instagram._`
}

exports.adult = adult()
function adult() {
    return `

*γ βπππΈβπ»ππ βππ½π γ*

*${prefix}RandomNeko*
_Temos hentai de nekos por aqui e.e_

*${prefix}iHentai*
_Mas se nΓ΅ gostar, temos aleatorios tambΓ©m!_

*${prefix}nh (codigo)*
_Seja feliz vendo NHentai comigo e.e_

*${prefix}trap*
_Se vocΓͺ gosta de traps, isso Γ© pra vocΓͺ e.e_

*${prefix}blowjob*
_Fotinhas de blowjob em anime._

*${prefix}iecchi*
_Umas fotos de ecchi que tenho aqui..._

*${prefix}feet*
_Hentai para os amantes de pezinho._

*${prefix}Lick*
_"Lambidinha..."_

*${prefix}Femdom*
_Meio que um yuri...hentai..._

*${prefix}futanari*
_Vai uma futanari?_

*${prefix}boobs*
_Olha a tetinhaaa..._

*${prefix}masturb*
_Hmmm, garotas solo..._

*${prefix}Anal*
_Hentai "padrΓ£o" de anal claro._

*${prefix}nsfwicon*
_Foto de perfil +18 por aqui..._

*${prefix}randomLoli*
_Hentai do tipo Lolicon._

*${prefix}Hard*
_Hentai de diciplinaΓ§Γ£o, por exemplo, hentai de tapas na bunda._

*${prefix}Pezinho*
_Fotos de pezinho._

*${prefix}Porn*
_Pornografia real._

*${prefix}Lesbian*
_Lesbicas reais se pegando._

*${prefix}Pgay*
_Pornografia gay para quem curte._

*${prefix}Tits*
_Fotos de peitos reais._

*${prefix}bsdm*
_Fotos BDSM._

*${prefix}Milf*
_Milfs reais._

*${prefix}Pussy*
_Belas maΓ§as cortadas pela metade..._

*${prefix}Ass*
_Bundas..._`
}

exports.owner = owner()
function owner() {
    return `
*γ βπππΈβπ»ππ π»πβπ γ*

*1 - ${prefix}Clearall*
_Com isso todas as mensagens sΓ£o limpas mas certifique-se de desativar o Welcome e o Anti-Fakes antes._

*2 - ${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN (se for muitos)._

*3 - ${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*4 - ${prefix}Tela*
_PeΓ§a-me um print da tela._

*5 - ${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*6 - ${prefix}mutepv <nΓΊmero sem + ou ->*
_Mande a Michi ignorar pessoas no PV._

*7 - ${prefix}encerrar*
_Faz com que eu me desligue._

*8 - ${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._

*9 - ${prefix}kickall*
_Remova todos os membros._

*10 - ${prefix}cmd <comando>*
_Rode terminal/programaΓ§Γ£o pelo WhatsApp._

*11 - ${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*12 - ${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._

*13 - ${prefix}give <@Pessoa> <Quantidade>*
_Adquira ou dΓͺ XP para as pessoas e si mesmo._`
}

exports.admins = admins()
function admins() {
    return `
*γ βπππΈβπ»ππ πΈπ»ππβπππβπΈπ»πβ γ*

_Comandos que apenas os ademiros podem usar!_

*${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do grupo (pode ser mais de 1)._

*${prefix}promover @user ou <Marque uma mensagem>*
_FaΓ§a os bebados do grupo virarem administradores._

*${prefix}leave*
_Se quiser eu saio do grupozinho._

*${prefix}rebaixar @user ou <Marque uma mensagem>*
_Isso Γ© pra vocΓͺ demitir administradores do grupozinho._

*${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou nΓ£o~_

*${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*${prefix}onlyadms [on|off]*
_Com isso eu fecho o grupo apenas para os administradores, e vice versa._

*${prefix}setimage*
_DΓͺ ao seu grupo uma cara nova!_

*${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*${prefix}Bomb <nΓΊmero sem espaco, + e - >*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*${prefix}fake <on/off>*
_Bane nΓΊmeros de fora do seu paΓ­s._

*${prefix}bklist <on/off nΓΊmero>*
_Adicione ou remova pessoas da blacklist._

*${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._

*${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*${prefix}rank <On/Off>*
_Ativa o sistema de "RPG"._

*${prefix}softban @pessoa ou <Marque uma mensagem>*
_Bane o usuΓ‘rio e o adiciona novamente em 30 minutos._`

}

exports.readme = readme()
function readme() {
    return `
βΎ Menu de ajuda β½

Caso nΓ£o entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguΓ©m com certeza te ajudarΓ‘! XD

Quando eu tiver tempo colocarei tutoriais aqui e.e

Obrigado pelo uso!

Programador oficial desse BOT: wa.me/5522999586820`
}

exports.donate = donate()
function donate() {
    return `
_Precisa doar nΓ£o mano, mas se quiser me doar seguidores no ig, segue ai https://www.instagram.com/caioolli/_

β€οΈ`
}

exports.lang = lang()
function lang() {
    return `
βΎ Linguas do comando de Voz β½
       βΎ Use sem ' ' β½
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'InglΓͺs da Australia'

'br' =  'PortuguΓͺs do Brasil'

'ca' =  'CatalΓ£ (Catalonia)'

'cn' =  'ChinΓͺs (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'GalΓͺs'

'da' =  'DinamarquΓͺs'

'de' =  'Germanico/AlemΓ£o'

'el' =  'Grega'

'en' =  'InglΓͺs'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'FinlandΓͺs'

'fr' =  'FrancΓͺs'

'hi' =  'Hindi'

'hr' =  'CroΓ‘cio'

'ht' =  'Haitiano'

'hu' =  'HΓΊngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandΓͺs'

'it' =  'Italiano'

'jp' =  'JaponΓͺs'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'LetonΓͺs'

'mk' =  'MacedΓ³nio'

'nl' =  'HolandΓͺs'

'no' =  'NorueguΓͺs'

'pl' =  'PolonΓͺs'

'pt' =  'PortuguΓͺs de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'AlbanΓͺs'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'SuaΓ­li'

'ta' =  'Tamil'

'th' =  'ThailandΓͺs'

'tr' =  'Turco'

'tw' =  'ChinΓͺs (Mandarin/Taiwan)'

'uk' =  'InglΓͺs do Reino Unido)'

'us' =  'InglΓͺs dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'ChinΓͺs (Cantonesa)'

'zh' =  'ChinΓͺs'`
}

exports.convh = convh()
function convh() {
	return `_Para usar vocΓͺ deve digitar_ *${prefix}conv [-sigla] [NΓΊmero para conversΓ£o]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para QuilΓ΄metros._

*-m* _= Converte QuilΓ΄metros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}
exports.paises = paises()
function paises() {
	return `_Nomes aceitos no comando_ *${prefix}covid*\n\nAfghanistan\n\nAlbania\n\nAlgeria\n\nAndorra\n\nAngola\n\nAnguilla\n\nAntigua and Barbuda\n\nArgentina\n\nArmenia\n\nAruba\n\nAustralia\n\nAustria\n\nAzerbaijan\n\nBahamas\n\nBahrain\n\nBangladesh\n\nBarbados\n\nBelarus\n\nBelgium\n\nBelize\n\nBenin\n\nBermuda\n\nBhutan\n\nBolivia\n\nBosnia and Herzegovina\n\nBotswana\n\nBrazil\n\nBritish Virgin Islands\n\nBrunei\n\nBulgaria\n\nBurkina Faso\n\nBurundi\n\nCAR\n\nCabo Verde\n\nCambodia\n\nCameroon\n\nCanada\n\nCaribbean Netherlands\n\nCayman Islands\n\nChad\n\nChannel Islands\n\nChile\n\nChina\n\nColombia\n\nComoros\n\nCongo\n\nCosta Rica\n\nCroatia\n\nCuba\n\nCuraΓ§ao\n\nCyprus\n\nCzechia\n\nDRC\n\nDenmark\n\nDiamond Princess\n\nDjibouti\n\nDominica\n\nDominican Republic\n\nEcuador\n\nEgypt\n\nEl Salvador\n\nEquatorial Guinea\n\nEritrea\n\nEstonia\n\nEswatini\n\nEthiopia\n\nFaeroe Islands\n\nFalkland Islands\n\nFiji\n\nFinland\n\nFrance\n\nFrench Guiana\n\nFrench Polynesia\n\nGabon\n\nGambia\n\nGeorgia\n\nGermany\n\nGhana\n\nGibraltar\n\nGreece\n\nGreenland\n\nGrenada\n\nGuadeloupe\n\nGuatemala\n\nGuinea-Bissau\n\nGuinea\n\nGuyana\n\nHaiti\n\nHonduras\n\nHong Kong\n\nHungary\n\nIceland\n\nIndia\n\nIndonesia\n\nIran\n\nIraq\n\nIreland\n\nIsle of Man\n\nIsrael\n\nItaly\n\nIvory Coast\n\nJamaica\n\nJapan\n\nJordan\n\nKazakhstan\n\nKenya\n\nKuwait\n\nKyrgyzstan\n\nLaos\n\nLatvia\n\nLebanon\n\nLesotho\n\nLiberia\n\nLibya\n\nLiechtenstein\n\nLithuania\n\nLuxembourg\n\nMS Zaandam\n\nMacao\n\nMadagascar\n\nMalawi\n\nMalaysia\n\nMaldives\n\nMali\n\nMalta\n\nMarshall Islands\n\nMartinique\n\nMauritania\n\nMauritius\n\nMayotte\n\nMexico\n\nMicronesia\n\nMoldova\n\nMonaco\n\nMongolia\n\nMontenegro\n\nMontserrat\n\nMorocco\n\nMozambique\n\nMyanmar\n\nNamibia\n\nNepal\n\nNetherlands\n\nNew Caledonia\n\nNew Zealand\n\nNicaragua\n\nNiger\n\nNigeria\n\nNorth Macedonia\n\nNorway\n\nOman\n\nPakistan\n\nPalestine\n\nPanama\n\nPapua New Guinea\n\nParaguay\n\nPeru\n\nPhilippines\n\nPoland\n\nPortugal\n\nQatar\n\nRomania\n\nRussia\n\nRwanda\n\nRΓ©union\n\nS. Korea\n\nSaint Kitts and Nevis\n\nSaint Lucia\n\nSaint Martin\n\nSaint Pierre Miquelon\n\nSamoa\n\nSan Marino\n\nSao Tome and Principe\n\nSaudi Arabia\n\nSenegal\n\nSerbia\n\nSeychelles\n\nSierra Leone\n\nSingapore\n\nSint Maarten\n\nSlovakia\n\nSlovenia\n\nSolomon Islands\n\nSomalia\n\nSouth Africa\n\nSouth Sudan\n\nSpain\n\nSri Lanka\n\nSt. Barth\n\nSt. Vincent Grenadines\n\nSudan\n\nSuriname\n\nSweden\n\nSwitzerland\n\nSyria\n\nTaiwan\n\nTajikistan\n\nTanzania\n\nThailand\n\nTimor-Leste\n\nTogo\n\nTrinidad and Tobago\n\nTunisia\n\nTurkey\n\nTurks and Caicos\n\nUAE\n\nUK\n\nUSA\n\nUganda\n\nUkraine\n\nUruguay\n\nUzbekistan\n\nVanuatu\n\nVatican City\n\nVenezuela\n\nVietnam\n\nWallis and Futuna\n\nWestern Sahara\n\nWorld\n\nYemen\n\nZambia\n\nZimbabwe`
}