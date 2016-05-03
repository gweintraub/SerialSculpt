import serial
import pyautogui
from numpy import interp

pyautogui.MINIMUM_DURATION = 0

screenWidth, screenHeight = pyautogui.size()

curX = screenWidth/2
curY = screenHeight/2

lastX = screenWidth/2
lastY = screenHeight/2

ser = serial.Serial('/dev/tty.usbmodem1421', 9600)
print(pyautogui.MINIMUM_DURATION)
print(pyautogui.PAUSE)
pyautogui.PAUSE = 0
print(pyautogui.PAUSE)
mouseDown = False
x = 0
y = 0
hold = "false"
# lastX = 0
# lastY = 0

while True:
	data = ser.readline().replace('\n', '')
	if data == "false":

		mouseDown = False
		print "False"
		pyautogui.mouseUp()
	else:
		x, y = map(int, data.split(","))
		if pyautogui.onScreen(x,y):
			if mouseDown == False:
				mouseDown = True
				print "True"
				pyautogui.mouseDown()
				pyautogui.moveTo(x,y)
				print(str(x) + "," + str(y))
			else:
				pyautogui.moveTo(x,y)
				print(str(x) + "," + str(y))

	# curX += lastX - x
	# curY += lastY - y

	# if x != lastX and y != lastY and pyautogui.onScreen(x, y):
	# if curX and curY and pyautogui.onScreen(curX, curY):
	# 	pyautogui.moveTo(curX,curY, duration=.00001)
		

	# if x != lastX and y != lastY and pyautogui.onScreen(x, y):
	# 	# pyautogui.mouseDown()
	# 	pyautogui.moveTo(x,y)
	# 	print(str(x) + "," + str(y))
	# 	# pyautogui.mouseUp()




	lastX = x
	lastY = y





# >>> import pyautogui
# >>> screenWidth, screenHeight = pyautogui.size()
# >>> pyautogui.moveTo(screenWidth / 2, screenHeight / 2)