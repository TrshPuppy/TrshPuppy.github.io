package main

import (
	"net/http"
	"fmt"
	"html/template"
	"os"
	"bufio"
)

// HTML content funcs:
func get_about_content() string {
	// Make about content? Giant string?
	about_content := "<h1> About Tiddies </h1>"

	// return
	return about_content
}

// // Create template from parsed index.html:
// var tpl = template.Must(template.ParseFiles("index.html"))

func indexHandler(respWriter http.ResponseWriter, req *http.Request){
	// Create template from parsed index.html:
	var tpl = template.Must(template.ParseFiles("index.html"))

	// respWriter.Write([]byte("<h1>Hello World!</h1>"))
	tpl.Execute(respWriter, nil)
}

func aboutHandler(respWriter http.ResponseWriter, req *http.Request){
	// get the new content for index.html:
	about_html := get_about_content()
	fmt.Printf("About: " + about_html)

	// modify index.html
	// modify_index := modify_index_html() // this should return an HTML file/ change the index.html file in root dir
	index_file, err := os.Open("index.html")
	if err != nil {
		fmt.Printf("ERROR: line 40 :)")
		return
	}
	// ** file.WriteAt <-- writes starting at a specific length of bytes into file (need length offset)
	// ** find byte offset:   file.Read()?  bufio.newScanner() <-- line by line
	offset_line := "  <body>" // <-- probably should be something like "includes '<body" instead
	scanner := bufio.NewScanner(index_file)
	line_count := 1

	// loop through file line by line:
	for scanner.Scan(){
		current_line_txt := scanner.Text()
		fmt.Printf(current_line_txt)
		if current_line_txt == offset_line{
			fmt.Printf("wow biotch, u did it, the line is %s", line_count)
			return
		}
		line_count++
	
	}



	// // Create new template
	// var about_tpl = template.Must(template.ParseFiles("index.html"))

	// // Execute new template:
	// about_tpl.Execute(respWriter, nil)
}


func main(){
	fmt.Println("Main has started...")
	// Create server struct:
	Server := struct {
		address string
		port string
	}{
		address: "127.0.0.1",
		port: "8080",
	}

	// Create the server/ multiplexer
	HTTPMux := http.NewServeMux()

	// File handling:
	// ** Handle assets:
	fs := http.FileServer(http.Dir("assets"))
	HTTPMux.Handle("/assets/", http.StripPrefix("/assets/", fs))

	// ** Tell the server which function to call to handle request to the root/index path
	HTTPMux.HandleFunc("/", indexHandler)
	HTTPMux.HandleFunc("/about", aboutHandler)

	
	// Have server listen at address:port
	http.ListenAndServe(Server.address + ":" + Server.port, HTTPMux)
	
	fmt.Printf("The server is running at %s:%s\n", Server.address, Server.port)
}

// Resource Links:
// ** https://www.digitalocean.com/community/tutorials/how-to-make-an-http-server-in-go#multiplexing-request-handlers
// ** https://pkg.go.dev/net/http#ListenAndServe