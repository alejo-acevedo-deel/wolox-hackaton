import redis
from progress.bar import Bar
import time
# importing libraries
import cv2
import numpy as np

redis_host = 'raspberrypi.local'
redis_port = 6379
redis_password = ''

action_key = 'persiana'

isOpen = False


def reproducir(url):
    # Create a VideoCapture object and read from input file
    cap = cv2.VideoCapture(url)
    cv2.namedWindow('Frame', cv2.WINDOW_NORMAL)
    cv2.startWindowThread()
    # Check if camera opened successfully
    if (cap.isOpened() == False):
        print("Error opening video  file")

    # Read until video is completed
    while(cap.isOpened()):

        # Capture frame-by-frame
        ret, frame = cap.read()
        if ret == True:

            # Display the resulting frame
            cv2.imshow('Frame', frame)
            cv2.resizeWindow('Frame', 600, 600)
            # Press Q on keyboard to  exit
            if cv2.waitKey(25) & 0xFF == ord('q'):
                break

        # Break the loop
        else:
            break

    # When everything done, release
    # the video capture object
    cap.release()
    cv2.waitKey(1)
    # Closes all the frames
    cv2.destroyAllWindows()
    cv2.waitKey(1)
    cv2.waitKey(1)
    cv2.waitKey(1)
    cv2.waitKey(1)


def connect_redis():
    try:
        r = redis.StrictRedis(host=redis_host, port=redis_port,
                              password=redis_password, decode_responses=True)
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
            if action_status == 'PERSIANA_ON' and not isOpen:
                isOpen = True
                reproducir('openGif.mp4')
                redis_conn.set(action_key, '')
            elif action_status == 'PERSIANA_OFF' and isOpen:
                isOpen = False
                reproducir('closeGif.mp4')
                redis_conn.set(action_key, '')
        except KeyboardInterrupt:
            print('\n\nKeyboard exception received. Exiting.')
            exit()
