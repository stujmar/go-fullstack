package main

import (
	"fmt"
	// "strconv"
	"net/http"

	"github.com/gin-gonic/gin"
)

var messages []string

func GetMessages(c *gin.Context) {
	version := c.Param("version")
	fmt.Println("Version", version)
	c.JSON(http.StatusOK, gin.H{"messages": messages})
}

func main() {
	messages = append(messages, "Hello CORS!")
	r := gin.Default()
	r.GET("/api/:version/messages", GetMessages)
	r.Run(":8000")
}