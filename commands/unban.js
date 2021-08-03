var text = [
    'you don\'t have the permission required to ban a member',
    'User not found :(',
    'hi we are sorry for whaterer one of our members did we would  like to invite you\n',
    'Hi we have unbaned the account we are waiting for them to click the link',
    "User has DMs closed or has no mutual servers with the bot :("
]

async function invitelink(guildId, channelId) {
    try {
        const guild = await client.guilds.fetch(guildId);
        const channel = await guild.channels.cache.get(channelId);
        const invite = await channel.createInvite({
            maxUses: 1
        });
        return `https://discord.gg/${invite.code}`;
    } catch (e) {
        return e;
    }
};

module.exports = {
    name: 'unban',
    description: 'unban a user',
    aliases: ['ub'],
    usage: '',
    guildOnly: true,
    args: false,
    execute: async(message, args) => {
        const { reply, member, channel, guild } = message;
        const { send } = channel
        const { unban } = guild.members;
        let gId = guild.id,
            cId = channel.id

        if (!member.hasPermission("BAN_MEMBERS")) return reply(text[0]);

        try {
            global.user = await client.users.fetch(args[0])
        } catch (error) {
            send(`ERROR: ${error}`);
        }
        if (!user) return send(text[1]);

        try {
            await unban(user.id);
            await user.send(text[2] + invitelink(gId, cId))
            send(text[3])
        } catch (error) {
            send(text[4]);
        }
    }
};