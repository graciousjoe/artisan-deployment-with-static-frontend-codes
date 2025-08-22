variable "bucket_name" {
    default = "static-frontend"
    description = "name of S3 bucket for frontend"
    type = string
}

variable "environment" {
    description = "project environment"
    default = "dev"
    type = string
}

variable "project_prefix" {
    description = "Prefix for bucket naming"
    type        = string
    default = "artisan-linkup"
  
}

# variable "frontend_build_path" {
#     description = "path to the frontend build output"
#     default = "../.next/static"
# }
