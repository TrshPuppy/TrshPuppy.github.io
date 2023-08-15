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
		address: "0.0.0.0",
		port: "8080",
	}

	HTTPMux := http.NewServeMux()
	HTTPMux.HandleFunc("/", indexHandler)
	
	http.ListenAndServe(":" + Server.port, HTTPMux)
	
	fmt.Printf("The server is running at %s:%s\n", Server.address, Server.port)

	//fs := http.FileServer(http.Dir("assets/"))
	//http.Handle("/static/", http.StripPrefix("/static/", fs))

	//http.ListenAndServe()
}