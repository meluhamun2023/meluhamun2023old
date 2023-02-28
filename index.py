import discord
import os

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.content.startswith('!check'):
        username = message.content.split(' ')[1]
        guild = client.get_guild(805748895463243818) # Replace with your server ID
        members = await guild.fetch_members().flatten()
        found = False
        for member in members:
            if member.name == username:
                found = True
                break
        if found:
            await message.channel.send(f'{username} has joined the server!')
        else:
            await message.channel.send(f'{username} has not joined the server yet.')
        
client.run(os.environ['ODg5MDk1OTA3NjIxMTA1NzA0.GoxV5_.Wde9tHeRNMuOiuNNZWf0Zwguub8otQ9ivXgg_8']) # Replace with your bot token