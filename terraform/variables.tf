variable "vm_ip" {
  type        = string
  description = "VM or host IP address"
  default     = "127.0.0.1"
}

variable "app_port" {
  type        = number
  description = "App port inside the container (Nginx listens on 80)"
  default     = 80
}

# Docker image to pull and run
variable "image" {
  type        = string
  description = "Fully qualified Docker image (e.g., deenamanick/motor-x:latest)"
  default     = "deenamanick/motor-x:latest"
}

variable "container_name" {
  type        = string
  description = "Docker container name (must be unique on the host)"
  default     = null
}

variable "external_port" {
  type        = number
  description = "Host port to map to container's port 80"
  default     = null
}
