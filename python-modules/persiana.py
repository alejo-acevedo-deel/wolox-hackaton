import redis
from progress.bar import Bar
import time

redis_host = 'localhost'
redis_port = 6379
redis_password = ''

action_key = 'persiana'

def connect_redis():
  try:
    r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
    print('Connected to Redis server')
  except Exception as e:
    print('Failed to connect to the Redis server')
  return r


if __name__ == '__main__':
    redis_conn = connect_redis()
    while True:
      try:
        time.sleep(2)
        action_status = redis_conn.get(action_key)
        if action_status == 'PERSIANA_ON':
          bar = Bar('Opening persiana', max=20)
          for i in range(20):
            time.sleep(0.4)
            bar.next()
          bar.finish()
          redis_conn.set(action_key, '')
        elif action_status == 'PERSIANA_OFF':
          bar = Bar('Closing persiana', max=20)
          for i in range(20):
            time.sleep(0.4)
            bar.next()
          bar.finish()
          redis_conn.set(action_key, '')
      except KeyboardInterrupt:
        print('\n\nKeyboard exception received. Exiting.')
        exit()