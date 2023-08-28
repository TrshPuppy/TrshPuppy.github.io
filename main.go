package main

import (
	"net/http"
	"fmt"
)

func indexHandler(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("<h1>Hello World!</h1>"))
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
	HTTPMux.HandleFunc("/", indexHandler)
	
	// http.HandleFunc("/", indexHandler)
	http.ListenAndServe(Server.address + ":" + Server.port, HTTPMux)
	
	fmt.Printf("The server is running at %s:%s\n", Server.address, Server.port)

	// fs := http.FileServer(http.Dir("assets/"))
	// http.Handle("/static/", http.StripPrefix("/static/", fs))

	// http.ListenAndServe()
}

// Resource Links:
// ** https://www.digitalocean.com/community/tutorials/how-to-make-an-http-server-in-go#multiplexing-request-handlers
// ** https://pkg.go.dev/net/http#ListenAndServe