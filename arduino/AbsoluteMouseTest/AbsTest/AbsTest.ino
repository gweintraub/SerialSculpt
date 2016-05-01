#include <Adafruit_STMPE610.h>

#include <Wire.h>

#include <SPI.h>

#include <HID-Project.h>
//#include <HID-Settings.h>

// Option #1 - uses I2C, connect to hardware I2C port only!
// SCL to I2C clock (#A5 on Uno) and SDA to I2C data (#A4 on Uno)
// tie MODE to GND and POWER CYCLE (there is no reset pin)
Adafruit_STMPE610 touch = Adafruit_STMPE610();

void setup() {
  Serial.begin(9600);
  Serial.flush();
  if(!touch.begin()){
    Serial.println("STMPE not found!");
    while(1);
  }
  AbsoluteMouse.begin();
}

void loop() {
  int _x;
  int _y;
  uint16_t x, y;
  uint8_t z;
  if(touch.touched()){
    AbsoluteMouse.click();
    while(!touch.bufferEmpty()){
      touch.readData(&x, &y, &z);
      _x = map(x, 200, 4000, 0, 2880);
      _y = map(y, 200, 4000, 0, 1800);
      AbsoluteMouse.move(_x,_y);
      Serial.print(x); Serial.print(",");
      Serial.print(y);
      
      Serial.println("");
      Serial.print(_x);
      Serial.println("");
    }
    touch.writeRegister8(STMPE_INT_STA, 0xFF); // reset all ints
  }
  delay(100);
}
