import time
import asyncio

async def test():
  print('okay')
  await asyncio.sleep(2)
  print('this')

async def test1():
    print('lol')
    await asyncio.sleep(4)
    print('lasdfa')

loop = asyncio.get_event_loop()
loop.run_in_executor(None,test())
print('woah')