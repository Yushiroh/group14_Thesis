import serial
import time

arduSerial = serial.Serial('/dev/ttyUSB0')
# arduSerial.baudrate = 9600
# arduSerial.bytesize = 8
# arduSerial.parity = 'N'
# arduSerial.stopbits = 1
arduSerial.close()
arduSerial.open()

arduSerial.write(b'GAGO')

arduSerial.close()