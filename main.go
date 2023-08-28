package main

import (
	"net/http"
	"fmt"
	"html/template"
)

// // Create template from parsed index.html:
// var tpl = template.Must(template.ParseFiles("index.html"))

func indexHandler(respWriter http.ResponseWriter, req *http.Request){
	// Create template from parsed index.html:
	var tpl = template.Must(template.ParseFiles("index.html"))

	// respWriter.Write([]byte("<h1>Hello World!</h1>"))
	tpl.Execute(respWriter, nil)
}

func main(){
	fmt.Println("Main has started...")
	Server := struct {
		address string
		port string
	}{
		address: "127.0.0.1",
		port: "8080",
	}

	// Create the server/ multiplexer
	HTTPMux := http.NewServeMux()

	// // Tell the server which function to call to handle request to the root path
	fs := http.FileServer(http.Dir("assets"))
	HTTPMux.Handle("/assets/", http.StripPrefix("/assets/", fs))
	HTTPMux.HandleFunc("/", indexHandler)
	
	// Have server listen at address:port
	http.ListenAndServe(Server.address + ":" + Server.port, HTTPMux)
	
	fmt.Printf("The server is running at %s:%s\n", Server.address, Server.port)
	
}

// Resource Links:
// ** https://www.digitalocean.com/community/tutorials/how-to-make-an-http-server-in-go#multiplexing-request-handlers
// ** https://pkg.go.dev/net/http#ListenAndServe