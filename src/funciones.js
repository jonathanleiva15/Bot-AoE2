//Importando librerias
const fetch = require('node-fetch');
const SteamAPI = require('steamapi');
const Discord = require('discord.js');
const {
    message,
} = require('discord.js');

//importando configuraciones    
const config = require('../configuraciones/config.json');
//llamando SteamAPi
const steam = new SteamAPI(config.tokensteam);

async function datos_aoe_ur(nombreplayer, msg) {
    let url_aoe_unrankeds = `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=0&start=1&count=1&search=${nombreplayer}`
    var datos_unrankeds = fetch(url_aoe_unrankeds).then(res => res.json())
    datos_unrankeds.then((datos_unrankeds) => {
        steam.getUserSummary(datos_unrankeds.leaderboard[0].steam_id).then(summary => {
            mensage(summary.nickname, summary.url, summary.avatar.medium, datos_unrankeds.leaderboard[0].rating, "unranked", msg)
        })
    })
}

async function datos_aoe_rm(nombreplayer, msg) {
    let url_aoe_randommap = `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=1&search=${nombreplayer}`
    var datos_randommap = fetch(url_aoe_randommap).then(res => res.json())
    datos_randommap.then((datos_randommap) => {
        steam.getUserSummary(datos_randommap.leaderboard[0].steam_id).then(summary => {
            mensage(summary.nickname, summary.url, summary.avatar.medium, datos_randommap.leaderboard[0].rating, "Random Map", msg)
        })
    })
}

async function datos_aoe_dm(nombreplayer, msg) {
    let url_aoe_deatmatch = `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=1&start=1&count=1&search=${nombreplayer}`
    var datos_deatmatch = fetch(url_aoe_deatmatch).then(res => res.json())
    datos_deatmatch.then((datos_deatmatch) => {
        steam.getUserSummary(datos_deatmatch.leaderboard[0].steam_id).then(summary => {
            mensage(summary.nickname, summary.url, summary.avatar.medium, datos_deatmatch.leaderboard[0].rating, "Deatmatch", msg)
        })
    })
}

const getBtc = async (crypto) => {
    const resCrypto = await fetch(`https:criptoya.com/api/ripio/${crypto}`);
    const postCrypto = await resCrypto.json();
    postCrypto.then((posrtCrypto) => {
        return posrtCrypto.totalAsk
    })
}






async function datos_aoe_tm(nombreplayer, msg) {
    let url_aoe_teamdeatmatch = `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=2&start=1&count=1&search=${nombreplayer}`
    var datos_teamdeatmatch = fetch(url_aoe_teamdeatmatch).then(res => res.json())
    datos_teamdeatmatch.then((datos_teamdeatmatch) => {
        steam.getUserSummary(datos_deatmatch.leaderboard[0].steam_id).then(summary => {
            mensage(summary.nickname, summary.url, summary.avatar.medium, datos_teamdeatmatch.leaderboard[0].rating, "Team Deatmatch", msg)
        })
    })
}



async function datos_aoe_tr(nombreplayer, msg) {
    let url_aoe_teamrandommap = `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=4&start=1&count=1&search=${nombreplayer}`
    var datos_teamrandommap = fetch(url_aoe_teamrandommap).then(res => res.json())
    datos_teamrandommap.then((datos_teamrandommap) => {
        steam.getUserSummary(datos_teamrandommap.leaderboard[0].steam_id).then(summary => {
            mensage(summary.nickname, summary.url, summary.avatar.medium, datos_teamrandommap.leaderboard[0].rating, "Team Random Map", msg)
        })
    })
}


//Funcio de armado del emmbedmensagge
async function mensage(nick, url, imagen, ranking, tipodematch, msg) {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${nick }`)
        .setURL(url)
        .setThumbnail(imagen)
        .setTitle(`Ranking en ${tipodematch}`, inline = true)
        .addField(title = "Tu ranking es", value = `#${ranking}`, )
        .setFooter("Hecho con amor para fernando")

    msg.channel.send(embed)
}


const help = () => {}

/*
const datos = new discord.messageEmbed()
    .setAuthor('AOE discord bot')
    .setTitle(nickname)
    .setUrl(profileURL)
    .setColor(0x00AE86)
    .setDescription(``)
    .setFooter("Bot creado por jonito")
    .setThumbnail(avatarmediano)
    .setTimestamp()
    .addField(` #${rating}`)
*/

module.exports = {
    datos_aoe_ur,
    datos_aoe_dm,
    datos_aoe_tm,
    datos_aoe_rm,
    datos_aoe_tr,
    help
}