const Discord = require('discord.js')
const cc = ["826352791882563635", "790262314884137000"]
module.exports = {
    config: {
        name: "nodes",
        description: "View the nodes"
        
    },
    run: async (bot, message, args) => {
      const e = new Discord.MessageEmbed()
      .setTitle("Nodes Stats")
      .setDescription(`
      Node 1: 8GB Memory !! 200GB Disk !! Online`)
      .setColor("RANDOM")
      message.channel.send(e)
    }
}