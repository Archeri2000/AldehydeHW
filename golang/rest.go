package main

import(
	"bytes"
	"fmt";
	"log"
	"net/http"
)

type stringFunc func(string) string

func main() {
	// LAmbda needed here
	http.HandleFunc("/", httpPOSTFunctionWrap(
		func(s string) string{
			return string(CapsFirst([]byte(s)))
		}))
	log.Fatal(http.ListenAndServe(":3001", nil))
}

func httpPOSTFunctionWrap(formatter stringFunc) func(http.ResponseWriter, *http.Request){
	return func(writer http.ResponseWriter, request *http.Request){
		switch request.Method {
		case "POST":
			buffer := new(bytes.Buffer)
			buffer.ReadFrom(request.Body)
			fmt.Fprint(writer, formatter(buffer.String()))
		default:
			fmt.Fprint(writer, "Only POST Requests allowed!")
		}

	}
}