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
    Serial.println(msg);
  }

  if(msg.length() > 0){
    

    if(msg == "GAGO"){
      digitalWrite(longSig,HIGH);
      Serial.println("TAMA");
    }else{
      digitalWrite(longSig,LOW);
      Serial.println("MALI");
    }

    msg = "";
  }

  
}
