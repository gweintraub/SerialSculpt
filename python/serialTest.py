import serial
import pyautogui
from numpy import interp


screenWidth, screenHeight = pyautogui.size()
ser = serial.Serial('/dev/tty.usbmodem1421', 9600)
while True:
	data = ser.readline()
	datas = data.split(",")
	for val in datas:
		interp(val,[200,4000],[0,1440])
		print(val)
