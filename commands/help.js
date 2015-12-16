var help = function(bot, sender, args, data, client)
{
	var cmds = [];

	for(var key in bot.commands)
	{
		cmds.push(key);
	}
	cmds = cmds.sort();
	bot.sendClient("Commands: !" + cmds.join(", !"), client);
}

module.exports = { h: help, help: help };
