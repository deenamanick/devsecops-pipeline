output "motor_x_url" {
  value = "http://${var.vm_ip}:${local.effective_external_port}"
}

output "container_name" {
  value = local.effective_container_name
}

output "image_used" {
  value = var.image
}
