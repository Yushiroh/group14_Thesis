#include <Arduino.h>

const int longSig = 2;
const int shortSig = 3;

void setup() {

  Serial.begin(9600);
  pinMode(longSig, OUTPUT);
  pinMode(shortSig, OUTPUT);

}

void loop() {

  digitalWrite(longSig, HIGH);
  digitalWrite(shortSig, HIGH);
  delay(1000);
  digitalWrite(longSig, LOW);
  digitalWrite(shortSig, LOW);
  delay(1000);
  
  

}
