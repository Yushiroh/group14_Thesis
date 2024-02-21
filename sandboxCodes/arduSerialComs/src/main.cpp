#include <Arduino.h>

const int longSig = 2;
const int shortSig = 3;

String msg;

void setup() {

  Serial.begin(9600);
  pinMode(longSig, OUTPUT);
  pinMode(shortSig, OUTPUT);

}

void loop(){ 

  // digitalWrite(longSig, HIGH);
  // digitalWrite(shortSig, HIGH);
  // digitalWrite(longSig, LOW);
  // digitalWrite(shortSig, LOW);

  while(Serial.available()){
    delay(50);
    char testing = Serial.read();
    msg += testing;
  }

  if(msg.length() > 0){
    
    Serial.println(msg);

    if(msg.indexOf("GAGO") == 0){
      digitalWrite(longSig,HIGH);
      delay(3000);
      Serial.println("TAMA");
    }else if(msg.indexOf("POTA") == 0){
      digitalWrite(shortSig,HIGH);
      delay(3000);
      Serial.println("MALI");
    }

    msg = "";
  }else{
    digitalWrite(longSig,LOW);
    digitalWrite(shortSig,LOW);
  }

  
}
