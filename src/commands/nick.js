module.exports = {
    name: 'nick',
    description: 'nickname change',
    aliases: ['n'],
    usage: '',
    guildOnly: true,
    args: true,
    execute: async(message, args) => {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Please specify a member!");

        try {
            member.setNickname(args[0]);
        } catch (err) {
            console.log(err);
            message.reply(
                "I do not have permission to set " + member.toString() + " nickname!"
            );
        }
    },
};