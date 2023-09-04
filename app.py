import torch
import torch
from matplotlib import pyplot as plt
import numpy as np
import cv2
import uuid
import os
import time
model=torch.hub.load('ultralytics/yolov5','yolov5s')
img='https://ultralytics.com/images/zidane.jpg'
results=model(img)
results.print()
plt.imshow(np.squeeze(results.render()))
plt.show()
results.render()
cap=cv2.VideoCapture(0)
while cap.isOpened():
  ret,frame=cap.read()
  results=model(frame)
  cv2.imshow('YOLO',np.squeeze(results.render()))
  if cv2.waitKey(10)&0xFF==ord('q'):
    break
cap.release()
cv2.destroyAllWindows()

IMAGES_PATH = os.path.join('data','images')
labels=['fire','smoke','Electronics','plastics','Bottle','Table','piano']
number_imgs = 49
cap = cv2.VideoCapture(0)

model=torch.hub.load('ultralytics/yolov5','yolov5s')
img='https://ultralytics.com/images/zidane.jpg'
results=model(img)
results.print()

plt.imshow(np.squeeze(results.render()))
plt.show()
results.render()

cap=cv2.VideoCapture(0)

while cap.isOpened():
  ret,frame=cap.read()
  results=model(frame)
  cv2.imshow('YOLO',np.squeeze(results.render()))
  if cv2.waitKey(10)&0xFF==ord('q'):
    break
cap.release()
cv2.destroyAllWindows()
IMAGES_PATH = os.path.join('data','images')
labels=['fire','smoke','Electronics','plastics','Bottle','Table','piano']
number_imgs = 49
cap = cv2.VideoCapture(0)
for label in labels:
  print('collectiong images for {}'.format(labels))
  time.sleep(5)
  for img_num in range(number_imgs):
    print('collecting images for {}, image number {}'.format(label,img_num))
    ret,frame=cap.read()
    imgname=os.path.join(IMAGES_PATH,label+'.'+str(uuid.uuid1()))
    cv2.imwrite(imgname, frame)
    cv2.imshow('Image Collection',frame)
    time.sleep(2)
  print(os.path.join(IMAGES_PATH+'/'+labels[0]+'.'+str(uuid.uuid1())+'.jpg'))
for label in labels:
  print('collecting images for {}'.format(label))
  for img_num in range(number_imgs):
    print('collecting images for {},image number {}'.format(label,img_num))
    imgname=os.path.join(IMAGES_PATH,label+'.'+str(uuid.uuid1())+'.jpg')
    print(imgname)
    
    