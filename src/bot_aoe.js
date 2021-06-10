const Discord = require('discord.js');
const client = new Discord.Client();
const funciones = require('../src/funciones.js')
const config = require('../configuraciones/config.json');
const {
    datos_aoe_ur,
    datos_aoe_dm,
    datos_aoe_tm,
    datos_aoe_rm,
    datos_aoe_tr,
    help
} = require('./funciones');

let datos = []


client.login(config.token)

client.on('message', async message => {
    if (!message.guild) return;

    if (message.content.includes(config.unranked) === true) {
        let nombreplayer = await message.content.replace(config.unranked, "").trim()
        datos_aoe_ur(nombreplayer, message)
    }

    if (message.content.includes(config.deathmatch) === true) {
        let nombreplayer = await message.content.replace(config.deathmatch, "").trim()
        datos_aoe_dm(nombreplayer, message)
    }

    if (message.content.includes(config.teamdeathmatch) === true) {
        let nombreplayer = await message.content.replace(config.teamdeathmatch, "").trim()
        datos_aoe_tm(nombreplayer, message)
    }

    if (message.content.includes(config.randommap) === true) {
        let nombreplayer = await message.content.replace(config.randommap, "").trim()
        datos_aoe_rm(nombreplayer, message)
    }

    if (message.content.includes(config.teamrandommap) === true) {
        let nombreplayer = await message.content.replace(config.teamrandommap, "").trim()
        datos_aoe_tr(nombreplayer, message)
    }

    if (message.content.includes(config.help) === true) {
        console.log(config.help, message)
    }
})

/*
"prefix": "!help",
"unranked": "!ur",
"deathmatch": "!dm",
"teamdeathmatch": "!td",
"randommap": "!rm",
"teamrandommap": "tg"*/