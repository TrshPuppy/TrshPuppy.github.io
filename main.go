package main

import (
//	"net/http"
	"fmt"
)

func main(){
	fmt.Println("Main has started...")
	Server := struct {
		address string
		port string
	}{
		address: "127.0.0.1",
		port: "8080",
	}

	fmt.Printf("The server is running at %s:%s\n", Server.address, Server.port)
	//fs := http.FileServer(http.Dir("assets/"))
	//http.Handle("/static/", http.StripPrefix("/static/", fs))

	//http.ListenAndServe()
}