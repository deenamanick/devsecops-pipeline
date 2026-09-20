# ──────────────────────────────────────────────────────────
# Terraform configuration for motor-x Docker deployment
# Modeled on: vagrant-ansible-terraform-docker/Iac-deployment
# ──────────────────────────────────────────────────────────

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "= 3.6.2"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

resource "random_string" "name_suffix" {
  length  = 6
  upper   = false
  special = false
}

resource "random_integer" "host_port" {
  min = 3000
  max = 3999
}

locals {
  effective_container_name = coalesce(var.container_name, "motor-x-${random_string.name_suffix.result}")
  effective_external_port  = coalesce(var.external_port, random_integer.host_port.result)
}

# Pull the prebuilt image from Docker Hub
resource "docker_image" "motor_x" {
  name         = var.image
  keep_locally = false
}

# Run the motor-x container
resource "docker_container" "motor_x" {
  name     = local.effective_container_name
  image    = docker_image.motor_x.image_id
  must_run = true
  restart  = "always"

  ports {
    internal = 80
    external = local.effective_external_port
  }

  lifecycle {
    replace_triggered_by  = [docker_image.motor_x]
    create_before_destroy = false
  }
}
