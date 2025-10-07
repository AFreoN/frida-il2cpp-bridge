@echo off
set DEVICE_IP=192.168.0.10

adb kill-server

:: Restart ADB in TCP mode
adb tcpip 4444
timeout /t 2

:: Connect to Android over WiFi
adb connect %DEVICE_IP%:4444
timeout /t 2

:: Forward Frida ports
echo Setting up port forwarding...
adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043

echo Checking if frida-server is installed on device...

:: 1. Check if frida-server exists
adb shell su -c "[ -f /data/local/tmp/frida-server ] && echo exists" > temp.txt

:: Read result from temp.txt
set /p FILE_EXISTS= < temp.txt
del temp.txt

if NOT "%FILE_EXISTS%"=="exists" (
    echo frida-server not found. Pushing to device...
    adb push frida-server /data/local/tmp/
    adb shell su -c "chmod 755 /data/local/tmp/frida-server"
) else (
    echo frida-server already exists.
)


:: 3. Start frida-server in the background
echo Starting frida-server...
adb shell su -c "/data/local/tmp/frida-server > /dev/null 2>&1 &"

echo Done!
