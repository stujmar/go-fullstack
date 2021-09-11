package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

var messages []string

// func GetMessages(c *gin.Context) {
// 	version := c.Param("version")
// 	fmt.Println("Version", version)
// 	c.JSON(http.StatusOK, gin.H{"messages": messages})
// }

func GetMessages(c *gin.Context) {
	version := c.Param("version")
	fmt.Println("Version", version)
	if version == "v2" {
		c.Header("Access-Control-Allow-Origin", "http://localhost:8080")
	}
	c.JSON(http.StatusOK, gin.H{"messages": messages})
}

func PutMessage(c *gin.Context) {
	version := c.Param("version")
	id, _ := strconv.Atoi(c.Param("id"))
	text := c.PostForm("puttext")
	messages[id] = text
	if version == "v2" {
	    c.Header("Access-Control-Allow-Origin", "http://localhost:8080")
	}
	c.JSON(http.StatusOK, gin.H{"messages": messages})
}

func main() {
	messages = append(messages, "Hello CORS!")
	r := gin.Default()
	r.GET("/api/:version/messages", GetMessages)
	r.PUT("/api/:version/messages/:id", PutMessage)
	r.Run(":8000")
}