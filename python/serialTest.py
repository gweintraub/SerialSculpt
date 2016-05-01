import serial
import pyautogui
from numpy import interp

lastX = None
lastY = None

screenWidth, screenHeight = pyautogui.size()
ser = serial.Serial('/dev/tty.usbmodem1421', 9600)
while True:
	data = ser.readline()
	data
	datas = data.split(",")
	x = int(datas[0])
	y = int(datas[1])

	if x != lastX and y != lastY and pyautogui.onScreen(x, y):
		pyautogui.moveTo(x,y);
		print(str(x) + "," + str(y))




	lastX = x
	lastY = y





# >>> import pyautogui
# >>> screenWidth, screenHeight = pyautogui.size()
# >>> pyautogui.moveTo(screenWidth / 2, screenHeight / 2)