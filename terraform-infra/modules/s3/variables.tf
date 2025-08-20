variable "bucket_name" {
    default = "artisan_linkup_frontend"
    description = "name of S3 bucket for frontend"
    type = string
}

variable "environment" {
    description = "project environment"
    default = "Production"
    type = string
}

variable "project_prefix" {
    description = "Prefix for bucket naming"
    type        = string
}

variable "versioning_status" {
    description = "Bucket versioning status"
    default = "Disabled"

}

variable "frontend_build_path" {
    description = "path to the frontend build output"
    default = "ARTISAN-LINKUP/.next/static"
}
