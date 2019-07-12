package main

import (
	"io/ioutil"
	"os")

func main() {
	Args := os.Args[1:]
	if len(Args) == 2 {
		content,_ := ioutil.ReadFile(Args[0])
		ioutil.WriteFile(Args[1],CapsFirst(content),0777)
	}
}

func CapsFirst(bytesArr []byte) []byte{
	capsCurr := true
	for i:=0; i<len(bytesArr);i++{
		if capsCurr{
			capsCurr = false
			if bytesArr[i] >= 97 && bytesArr[i] <= 122{
				bytesArr[i] -= 32
			}
		}
		if bytesArr[i] == ' ' || bytesArr[i] == '\n'{
			capsCurr = true
		}
	}
	return bytesArr
}
