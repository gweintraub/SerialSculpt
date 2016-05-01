import pyautogui

while True:
	currentMouseX, currentMouseY = pyautogui.position()
	print(str(currentMouseX) + "," + str(currentMouseY))