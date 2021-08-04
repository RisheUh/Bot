var messagee = [
    'you don\'t have the permission required to ban a member',
    "You do not have permissions to ban"
]
module.exports = {
    name: 'ban',
    description: 'ban a user',
    aliases: ['b'],
    usage: '',
    guildOnly: true,
    args: true,
    execute(message, args) {
        const { reply, member, members } = message;
        const { mentions } = members

        if (!member.hasPermission("BAN_MEMBERS")) return reply(messagee[0])
        if (!mentions.first()) return reply(messagee[1] + mentions.first());

        try {
            mentions.first().ban();
        } catch {
            reply("I do not have permissions to ban" + mentions.first());
        }

    },
};